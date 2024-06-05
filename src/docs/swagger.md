
C помощью Swagger вы можете тестировать методы T-Invest API. 

[Swagger T-Invest API](https://russianinvestments.github.io/investAPI/swagger-ui/)

## Swagger

[**Swagger**](https://swagger.io/) — это фреймворк для спецификации RESTful API. Один из его инструментов, Swagger UI, позволяет не только интерактивно просматривать спецификацию, но и отправлять запросы.

## Swagger UI

**[Swagger UI](https://swagger.io/tools/swagger-ui/)** — один из самых популярных инструментов для создания интерактивной документации. Swagger UI создаёт интерактивную консоль API для экспериментов с запросами в реальном времени. 

## Использование

### Авторизация

Перед отправкой запросов вам нужно авторизоваться:

1. Нажмите **Authorize**.

    <img src="/investAPI/img/Auth_swagger1.png" width="650">

2. Введите данные в окне **Available authorizations** и нажмите **Authorize**. В нашем примере нужно ввести токен токен доступа. Пример токена — `Bearer t.QtEo8ahkNFX4RTpbqp0u4z4GDZq27HzUp6AotJASBx7_DVqmqZMHfM2Cy7JmUjS80boI9eVg`.

    [Как получить токен доступа](/investAPI/token/)

    <img src="/investAPI/img/Auth_swagger.png" width="650">

### Отправка запроса

Чтобы создать запрос:

1. Разверните конечную точку и нажмите **Try it out**.

    <img src="/investAPI/img/Swagger_try.png" width="650">

    Значение примера в поле **Request body** станет редактируемым.

2. В редактируемом поле измените значения параметров и нажмите **Execute**.

    <img src="/investAPI/img/Swagger_try2.png" width="650">

Пользовательский интерфейс Swagger отправляет запрос и показывает отправленный curl. В разделе **Responses** можно посмотреть тело и заголовки ответа.   

Если сервер обработал запрос корректно, вернётся 200 ответ. Он показывает, как должна выглядеть структура ответа.

<img src="/investAPI/img/response_swagger.png" width="650">

<img src="/investAPI/img/response_swagger2.png" width="650">


>Для спецификации RESTful API характерны отдельные [коды ошибок](/investAPI/http_errors/).