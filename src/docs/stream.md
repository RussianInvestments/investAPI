# Stream-соединения

В T-Invest API реализовано несколько Stream-соединений:

- [Stream исполнения поручений пользователя](/investAPI/head-orders/#stream) — для получения всех совершённых сделок.

- [Bidirectional-stream получения биржевой информации](/investAPI/head-marketdata/#bidirectional-stream) — биржевая информация о стаканах, свечах и другие данные.

- [Server-side-stream](/investAPI/marketdata/#marketdatastreamservice) — соединение для трансляции биржевой информации клиентам, которые не поддерживают bidirectional-стримы.


## Ping

Во всех Stream-соединениях реализована проверка активности стрима. При использовании сервисов T-Invest API рекомендуем добавлять проверки на получение пинга.

### Значения Ping-responce сообщений для стримов

| Stream-соединение                                                                                        | Ping интервал (ms)              |
|:---------------------------------------------------------------------------------------------------------|:--------------------------------|
| [Stream исполнения поручений пользователя](/investAPI/head-orders/#stream)                               | 120000                          |
| [Bidirectional-stream получения биржевой информации](/investAPI/head-marketdata/#bidirectional-stream)   | 120000                          |
| [Server-side-stream](/investAPI/marketdata/#marketdatastreamservice)                                     | 120000                          |


## WebSocket

Для получения стриминговых сообщений через WebSocket реализован отдельный [сервис](/investAPI/ws/) — у него своя лимитная политика.