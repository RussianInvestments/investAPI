# Stream-соединения

В TINKOFF INVEST API реализовано несколько Stream-соединений:

- [Stream исполнения поручений пользователя](/investAPI/head-orders/#stream) — для получения всех совершенных сделок

- [Bidirectional-stream получения биржевой информации](/investAPI/head-marketdata/#bidirectional-stream) — биржевая информация о стаканах, свечах и другие данные

- [Server-side-stream](/investAPI/marketdata/#marketdatastreamservice) — соединение для трансляции биржевой информации клиентам, которые не поддерживают bidirection стримы



##Ping

Во всех Stream-соединениях реализована проверка активности стрима. Рекомендуем при использовании сервисов TINKOFF INVEST API добавлять проверки на получение пинга.

### Значения Ping-responce сообщений для стримов

| Stream-соединение                                                                                        | Ping интервал (ms)              |
|:---------------------------------------------------------------------------------------------------------|:--------------------------------|
| [Stream исполнения поручений пользователя](/investAPI/head-orders/#stream)                               | 120000                          |
| [Bidirectional-stream получения биржевой информации](/investAPI/head-marketdata/#bidirectional-stream)   | 120000                          |
| [Server-side-stream](/investAPI/marketdata/#marketdatastreamservice)                                     | 120000                          |



##Websocket ratelimits
Для получения стриминговых ссобщений через websocket реализован отдельный [сервис](/investAPI/ws/). 

###Для сервиса определена отдельная лимитная политика

