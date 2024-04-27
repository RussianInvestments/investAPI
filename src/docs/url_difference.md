## Песочница и прод

Адреса для вызова методов: 

- На продовом контуре — `invest-public-api.tinkoff.ru:443`.

- В песочнице — `sandbox-invest-public-api.tinkoff.ru:443`.

В песочнице вы можете выполнять практически те же запросы, что и на продовом контуре. Это сделано для поддержания единообразия кода и лёгкости перехода из песочницы на прод.

[Подробнее про различия контуров](/investAPI/head-sandbox/)

Исключения в работе методов и сервисов:

| Сервисы                                                                               | Продовый контур | Песочница |
|---------------------------------------------------------------------------------------|-----------------|-----------|
| [Сервис инструментов](/investAPI/head-instruments/)                                   |       Да        |    Да     |
| [Сервис аккаунтов](/investAPI/head-users/)                                            |       Да        |    Да     |
| [getMarginAttributes](/investAPI/users#getmarginattributes)                  |       Да        |    Да     |
| [Сервис операций](/investAPI/head-operations/)                                        |       Да        |    Да     |
| [getBrokerReport](/investAPI/operations/#getbrokerreport)                   |       Да        |  Нет  |
| [PortfolioStream](/investAPI/operations/#portfoliostream)                    |       Да        |    Да     |
| [PositionsStream](/investAPI/operations/#positionsstream)                   |       Да        |    Да     |
| [getDividendsForeignIssuer](/investAPI/operations#getdividendsforeignissuer) |       Да        |  Нет  |
| [getWithdrawLimits](/investAPI/operations#getwithdrawlimits)                 |       Да        |    Да     |
| [Сервис котировок](/investAPI/head-marketdata/)                                       |       Да        |    Да     |
| [Сервис стоп-заявок](/investAPI/head-stoporders/)                                     |       Да        |  Нет  |
| [Песочницы](/investAPI/head-sandbox/)                                                 |       Да        |    Да     |
| [Сервис торговых поручений](/investAPI/head-orders/)                                  |       Да        |    Да     |
| [TradeStream](/investAPI/orders/#tradesstream)                           |       Да        |    Да     |
