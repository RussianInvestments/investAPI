## Протокол взаимодействия

Вся работа с T-Invest API ведётся по протоколу gRPC. 

[Документация gRPC](https://grpc.io/docs/)

Одна из ключевых особенностей протокола — [bidirectional streaming](https://grpc.io/docs/what-is-grpc/core-concepts/). Это особый режим работы, при котором открывается одно стрим-соединение, в которое оба участника взаимодействия могут отправлять сообщения. Это позволяет более гибко и оперативно реализовать работу. 

Например, bidirectional streaming [сервиса котировок](/investAPI/head-marketdata/) 
в одном и том же соединении принимает сообщения об изменении статуса подписки и предоставляет различные 
виды биржевой информации — стаканы, свечи, поток обезличенных сделок и другие.

## Авторизация

Для успешной работы с T-Invest API нужно передавать токен доступа в `metadata`
каждого запроса.

Формат заголовка — `Authorization: Bearer [токен доступа]`.

Пример запроса:
`Authorization: Bearer t.QtEo8ahkNFX4RTpbqp0u4z4GDZq27HzUp6AotJASBx7_DVqmqZMHfM2Cy7JmUjS80boI9eVg`

<a name="tracking"></a>

## Адреса сервиса

- Продовый контур — `invest-public-api.tinkoff.ru:443`.
- Песочница — `sandbox-invest-public-api.tinkoff.ru:443`.

[Подробнее про различия контуров](/investAPI/url_difference/)

## trackingId запросов

Заголовок `x-tracking-id` добавляется во все ответы unary-методов T-Invest API. 

Это уникальный UUID запроса, который нужен технической поддержке для разбора 
инцидентов. При обращении в службу технической поддержки обязательно указывайте `x-tracking-id` запроса — 
это ускорит решение вашего вопроса. 

> В рамках stream-соединений для сообщений управления статусом подписки `x-tracking-id` передаётся в
виде выходного параметра.

## Полный текст ошибки

Если при вызове метода T-Invest API происходит ошибка, в ответе возвращается параметр `message`.
В нём можно посмотреть полный текст описания ошибки. 

В [Kreya](/investAPI/grpc/#kreya) текст ошибки можно посмотреть на вкладке **Header** в поле **message**.

## AppName запросов

В запросы к T-Invest API можно добавлять служебный заголовок **x-app-name** — он 
нужен для сбора статистики по используемым инструментам. 

Если вы разработчик SDK, рекомендуем использовать AppName формата `<Ник в GitHub>.<Название репозитория>` — например, `user.tinkoffSDK`.

## Рекомендации по тестированию методов

Для тестирования работы T-Invest API можно использовать любой доступный gRPC-клиент.

Ниже приведены краткие инструкции по настройке двух наиболее популярных клиентов — Kreya и BloomRPC, а также ссылка на гайд по настройке встроенного gRPC-клиента IntelliJ от энтузиаста.

### Kreya

Бесплатный gRPC-клиент с широким набором функционала и возможностей.

[Скачать клиент](https://kreya.app/)

<ol>
<li><p>После установки и запуска приложения в меню выберите <strong>Project</strong> → <strong>Importers</strong>.</p>
<p><img src="/investAPI/img/Kreya-1.png" width="650"></p>
</li>
<li><p>Нажмите <strong>New importer</strong>. Укажите название источника данных и его тип — <strong>gRPC proto files</strong>.</p>
<p><img src="/investAPI/img/Kreya-2.png" width="650"></p>
</li>
<li><p>Нажмите <strong>Add proto directory</strong> и укажите папку со скачанными proto-контрактами сервиса T-Invest API. Также можно нажать <strong>Add proto files</strong> и выбрать все proto-файлы из папки вручную.</p>
<p><img src="/investAPI/img/Kreya-3.png" width="650"></p>
<p><a href="https://github.com/RussianInvestments/investAPI/tree/main/src/docs/contracts">Скачать актуальную версию контрактов T-Invest API</a></p>
<p><strong>Важно</strong></p>
<p>T-Invest API использует <code>google.api.field_behavior</code>-нотацию к полям контрактов. Скачайте <a href="https://github.com/googleapis/googleapis/blob/master/google/api/field_behavior.proto">field_behavior.proto</a> и сохраните его в папке <code>&lt;contracts_dir&gt;\google\api</code>, где <code>&lt;contracts_dir&gt;</code> — папка с контрактами T-Invest API.</p>
</li>
<li><p>Сохраните изменения и нажмите <strong>Back</strong>.</p>
</li>
<li><p>Слева нажмите на папку <strong>Tinkoff</strong>. Укажите endpoint сервиса — <code>https://invest-public-api.tinkoff.ru:443</code>.</p>
<p>Остальные настройки заполните как на скриншоте. Обратите внимание на блок <strong>Metadata</strong>:
в нём нужно указать заголовок <code>Authorization</code>, в значении которого передаётся строка <code>Bearer &lt;токен доступа&gt;</code>.</p>
<p><img src="/investAPI/img/Kreya-4.png" width="650"></p>
<p><a href="/investAPI/token/">Как получить токен доступа</a></p>
</li>
</ol>

После этого можно выполнять запросы к сервису.

<img src="/investAPI/img/Kreya-5.png" width="650">

<p>В Kreya можно посмотреть служебные заголовки ответа сервера:</p>
<ul>
<li><p><strong>x-ratelimit-limit</strong> — текущий лимит пользователя по данному методу;</p>
</li>
<li><p><strong>x-ratelimit-remaining</strong> — количество оставшихся запросов данного типа в минуту;</p>
</li>
<li><p><strong>x-ratelimit-reset</strong> — время в секундах до обнуления счётчика запросов. </p>
</li>
</ul>
<p><img src="/investAPI/img/Kreya-6.png" width="650"></p>


#### Обновление proto-контрактов

Чтобы получить доступ к новому функионалу, который появился после обновления версии, нужно актуализировать proto-контракты. 

Для этого заново скачайте [контракты](https://github.com/RussianInvestments/investAPI/tree/main/src/docs/contracts), 
замените скачанные файлы в папке проекта и нажмите **Run all importers** в левом верхнем углу приложения. 
Убедитесь, что все proto-контракты имеют актуальную версию.

>Не храните бекапы и копии контрактов в одной папке с актуальными.

<img src="/investAPI/img/Kreya-update_contracts.png" width="650">


>Если вы получили ошибку `The referenced gRPC method is not imported.`, убедитесь, что вы очистили проект в Kreya от прошлых загруженных контрактов. 
Всегда проверяйте путь до папки с загружаемыми контрактами, полное наличие всех proto-файлов и их соответствие актуальной версии [T-Invest API](https://github.com/RussianInvestments/investAPI/tree/main/src/docs/contracts). 
Изменение proto-файлов повлечет за собой ошибку их прочтения у gRPS-клиентов.

### BloomRPC

Клиент с простым интерфейсом — чтобы начать работу, нужно указать домен сервиса и импортировать
все proto-файлы. 

[Скачать клиент](https://github.com/uw-labs/bloomrpc/releases)

<ol>
<li><p>Импортируйте скачанные proto-контракты сервиса. </p>
<p><a href="https://github.com/RussianInvestments/investAPI/tree/main/src/docs/contracts">Скачать актуальную версию контрактов T-Invest API</a></p>
<p><img src="/investAPI/img/Bloom-1.png" width="650"></p>
</li>
<li><p>Укажите адрес сервера — <code>invest-public-api.tinkoff.ru:443</code> — и заполните поле <strong>metadata</strong>: подставьте своё значение <a href="/investAPI/token/">токена доступа</a>.</p>
<p><code>{
   &quot;Authorization&quot;: &quot;Bearer t.QtEo8ahkNFX4RTpbqp0u4z4GDZq27HzUp6AotJASBx7_DVqmqZMHfM2Cy7JmUjS80boI9eVg&quot;
}</code></p>
<p><img src="/investAPI/img/Bloom-2.png" width="650"></p>
</li>
<p>При выполнении запросов обязательно указывайте тип TLS-подключения.</p>
<p><img src="/investAPI/img/Bloom-3.png" width="650"></p>
</ol>

После этого можно выполнять запросы к сервису.

<img src="/investAPI/img/Bloom-4.png" width="650">

>В BloomRPC нельзя увидеть заголовки ответов сервера, поэтому мы рекомендуем использовать Kreya.

### Встроенный gRPS-клиент IntelliJ

[Инструкция — использование встроенного gRPC-клиента IntelliJ](https://github.com/tinkoff/investAPI/issues/4)