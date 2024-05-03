### Официальный SDK

* [invest-api-java-sdk](https://github.com/RussianInvestments/invest-api-java-sdk).
- [Примеры подключения и получения данных](https://github.com/RussianInvestments/invest-api-java-sdk/blob/main/example/src/main/java/ru/tinkoff/piapi/example/Example.java).

### Основные классы для работы

<ul>
<li><p><strong>ManagedChannel</strong> — абстракция канала до сервера. Используйте один и тот же канал во всём приложении.</p>
<p> При создании канала рекомендуем использовать метод <code>io.grpc.ManagedChannelBuilder#useTransportSecurity</code>, так как сервер API поддерживает только защищённое соединение.</p>
<p> Для автоматической проверки работоспособности канала при иницииализации используйте метод <code>io.grpc.ManagedChannelBuilder#keepAliveTime</code>. Допустимое время <code>keepAlive</code> — не меньше 10 секунд.</p>
</li>
<li><p><strong>Stub</strong> — сгенерированные классы клиентов для сервисов API. Есть три варианта клиентов:</p>
<ul>
<li>Не блокирующий — <code>ServiceNameStub</code>, например <code>InstrumentsServiceStub</code>. Все методы такого клиента принимают два параметра: запрос и обработчик результата вызова <code>io.grpc.stub.StreamObserver</code>. Методы обработчика будут вызваны после получения результата. Не рекомендуется выполнять блокирующие операции (I/O, любые операции с ожиданием завершения) в методах обработчика.</li>
<li>Блокирующий — <code>ServiceNameBlockingStub</code>, например <code>InstrumentsServiceBlockingStub</code>. Все методы такого клиента принимают один параметр — запрос — и возвращают результат либо выбрасывают исключение. Вызов метода блокирует поток исполнения до получения результата или исключения.</li>
<li>Асинхронный — <code>ServiceNameFutureStub</code>, например <code>InstrumentsServiceFutureStub</code>. Все методы такого клиента принимают один параметр — запрос — и возвращают объект типа <code>com.google.common.util.concurrent.ListenableFuture</code>.</li>
</ul>
</li>
</ul>

### Таймаут запроса

В gRPC вместо таймаута используется `deadline` — время в будущем, до наступления которого будет ожидаться выполнение вызова. 

Если результат не получен и deadline наступил, возникнет ошибка с кодом `DEADLINE_EXCEEDED`. При этом может быть ситуация, когда на сервере API операция была обработана успешно. Для критичных действий используйте ключ идемпотентности.

Рекомендуем устанавливать `deadline` через метод `io.grpc.stub.AbstractStub#withDeadlineAfter`.

>**Обратите внимание**<br>
>Период времени начинает отсчитываться сразу после отправки запроса через метод.

### Метаданные

Метаданные — аналог заголовков в HTTP.

#### Передача метаданных запроса

Чтобы использовать API, нужно передавать метаданные с ключом `Authorization` и значением `bearer {token}`. [Подробнее](https://russianinvestments.github.io/investAPI/token/).

Перехватчик можно добавить в канал через метод `io.grpc.ManagedChannelBuilder#intercept(io.grpc.ClientInterceptor...)`. Пример авторизационного перехватичка:

```java
public class AuthInterceptor implements ClientInterceptor {

    private static final String AUTH_HEADER_NAME = "Authorization";
    private static final Metadata.Key<String> AUTH_HEADER = Metadata.Key.of(AUTH_HEADER_NAME, Metadata.ASCII_STRING_MARSHALLER);

    private final String authHeaderValue;

    public AuthInterceptor(String token) {
        this.authHeaderValue = "Bearer " + token;
    }

    @Override
    public <ReqT, RespT> ClientCall<ReqT, RespT> interceptCall(MethodDescriptor<ReqT, RespT> methodDescriptor, CallOptions callOptions, Channel channel) {
        var call = channel.newCall(methodDescriptor, callOptions);
        return new ForwardingClientCall.SimpleForwardingClientCall<>(call) {
            @Override
            public void start(Listener<RespT> responseListener, Metadata headers) {
                headers.put(AUTH_HEADER, authHeaderValue);
                super.start(responseListener, headers);
            }
        };
    }
}
```

#### Получение метаданных ответа

В метаданных ответа для Unary-методов передаются [идентификатор отслеживания](https://russianinvestments.github.io/investAPI/grpc/#tracking-id) и описание ошибки.

Для получения метаданных ответа можно использовать перехватчик `io.grpc.stub.MetadataUtils#newCaptureMetadataInterceptor`, например:
```java
var headersCapture = new AtomicReference<Metadata>();
var trailersCapture = new AtomicReference<Metadata>();
instruments.withInterceptors(MetadataUtils.newCaptureMetadataInterceptor(headersCapture, trailersCapture)).getInstrumentBy(...);
```

После исполнения метода метаданные ответа вернутся в переменной `headersCapture`.

При работе с методами клиентов конвертируйте исключения в статус через `io.grpc.Status#fromThrowable`. В поле `description` статуса вернётся [код ошибки](https://russianinvestments.github.io/investAPI/errors/).