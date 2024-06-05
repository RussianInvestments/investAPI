# Доступные протоколы взаимодействия

T-Invest API поддерживает возможность использования различных протоколов.

[Как начать работать с gRPC](/investAPI/grpc/)

| Протокол | Детали| Endpoint |
|----------|----------|----------|
| gRPC   | API реализован на быстром, удобном и функциональном протоколе [gRPC](https://grpc.io/docs/). | <ul><li><code>invest-public-api.tinkoff.ru:443</code> — продовый сервис;</li><li><code>sandbox-invest-public-api.tinkoffru:443</code> — песочница.</li></ul> |
| gRPC-web   | Для поддержки web-клиентов, например, браузерных JS скриптов, внедрена поддержка [gRPC-web](https://grpc.io/docs/platforms/web/basics/).  | <ul><li><code>invest-public-api.tinkoff.ru:443</code> — продовый сервис;</li><li><code>sandbox-invest-public-api.tinkoffru:443</code> — песочница.</li></ul> |
| REST API   | Для клиентов, привыкших работать с REST API, реализован прокси [Swagger](https://russianinvestments.github.io/investAPI/swagger-ui/). <br><br>[Инструкция по работе со Swagger](/investAPI/swagger/)| <ul><li><code>https://invest-public-api.tinkoff.ru/rest/</code> — продовый сервис;</li><li><code>https://sandbox-invest-public-api.tinkoff.ru/rest/</code> — песочница.</li></ul>
| WebSocket   |Внедрена поддержка WebSocket-протокола.  | `wss://invest-public-api.tinkoff.ru/ws/` |
