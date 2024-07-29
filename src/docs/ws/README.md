# WebSocket proxy for gRPC streaming

Сервис для получения сообщений gRPC streaming Т-Инвестиции через JSON WebSocket.

Адрес для подключения — `wss://invest-public-api.tinkoff.ru/ws/`.

* **token** — токен доступа к счёту Т-Инвестиции. Его можно передать в заголовке `Authorization: Bearer *token` или в заголовке `Web-Socket-Protocol: json, *token`.
* В запросе на подключение нужно указать протокол JSON в заголовке — `Web-Socket-Protocol: json`.

Чтобы получать сообщения c названиями полей, идентичными названиям полей из proto-контрактов, используйте `WebSocket-Protocol` протокол в заголовке — `json-proto` вместо `json`.

Отправка JSON-сообщений поддерживается как в camelCase, так и в snake_case.

## Сервис поручений

### Стрим заявок

[OrderStateStreamRequest](/investAPI/ws/websock-docs/output/index.html#schema-v1OrderStateStreamRequest)

[OrderStateStreamResponse](/investAPI/ws/websock-docs/output/index.html#schema-v1OrderStateStreamResponse)

Пример запроса:

```json
{
  "accounts": [
    "*accountId"
  ]
}
```
Пример ответа:

```json
{
  "orderState": {
    "orderId": "49478317886",
    "orderRequestId": "ec5e2892-58ca-4851-bc47-c2acf1368fde",
    "clientCode": "770083706834",
    "createdAt": "2024-07-15T07:07:17.321267Z",
    "executionReportStatus": "EXECUTION_REPORT_STATUS_NEW",
    "ticker": "POLY",
    "classCode": "TQBR",
    "lotSize": 1,
    "direction": "ORDER_DIRECTION_BUY",
    "timeInForce": "TIME_IN_FORCE_DAY",
    "orderType": "ORDER_TYPE_LIMIT",
    "accountId": "2223337448",
    "initialOrderPrice": {
      "currency": "RUB",
      "units": "195",
      "nano": 200000000
    },
    "orderPrice": {
      "currency": "RUB",
      "units": "195",
      "nano": 200000000
    },
    "amount": {
      "currency": "RUB",
      "units": "195",
      "nano": 200000000
    },
    "executedOrderPrice": {
      "currency": "RUB",
      "units": "195",
      "nano": 200000000
    },
    "currency": "RUB",
    "lotsRequested": "1",
    "lotsExecuted": "1",
    "lotsLeft": "0",
    "lotsCancelled": "0",
    "marker": "MARKER_UNKNOWN",
    "trades": [
      {
        "dateTime": "2024-07-15T07:07:17.321267Z",
        "price": {
          "units": "195",
          "nano": 200000000
        },
        "quantity": "1",
        "tradeId": "7653265991"
      }
    ],
    "exchange": "MOEX",
    "instrumentUid": "127361c2-32ec-448c-b3ec-602166f537ea"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.OrdersStreamService/OrderStateStream)


### Лента сделок (DEPRICATED)

Вместо Ленты сделок рекомендуем использовать Стрим заявок, который обеспечивает лучшее быстродействие, отличается большей стабильностью и содержит расширенную информацию по заявкам и сделкам.

[TradesStreamRequest](/investAPI/ws/websock-docs/output/index.html#schema-v1TradesStreamRequest)

[TradesStreamResponse](/investAPI/ws/websock-docs/output/index.html#schema-v1TradesStreamResponse)

Пример запроса:

```json
{
  "accounts": [
    "*accountId"
  ]
}
```
Пример ответа:

```json
{
  "orderState": {
    "orderId": "36042910361",
    "createdAt": "2023-05-16T13:27:14.682140664Z",
    "direction": "ORDER_DIRECTION_SELL",
    "figi": "BBG00RPRPX12",
    "trades": [
      {
        "dateTime": "2023-05-16T13:27:13.423246Z",
        "price": {
          "units": "1",
          "nano": 235000000
        },
        "quantity": "1",
        "tradeId": "7653265991"
      }
    ],
    "accountId": "*accountId",
    "instrumentUid": "ade12bc5-07d9-44fe-b27a-1543e05bacfd"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream)

## Сервис операций

### Лента событий по позициям

[PositionsStreamRequest](/investAPI/ws/websock-docs/output/index.html#schema-v1PositionsStreamRequest)

[PositionsStreamResponse](/investAPI/ws/websock-docs/output/index.html#schema-v1PositionsStreamResponse)

Пример запроса:

```json
{
  "accounts": [
    "*accountId"
  ]
}
```

Пример ответа — подписка успешна:

```json
{
  "subscriptions": {
    "accounts": [
      {
        "accountId": "*accountId",
        "subscriptionStatus": "POSITIONS_SUBSCRIPTION_STATUS_SUCCESS"
      }
    ]
  }
}
```

Пример события — изменение позиции в портфеле:

```json
{
  "position": {
    "accountId": "*accountId",
    "money": [
      {
        "availableValue": {
          "currency": "rub",
          "units": "3148",
          "nano": 130000000
        },
        "blockedValue": {
          "currency": "rub",
          "units": "0",
          "nano": 20000000
        }
      }
    ],
    "securities": [
      {
        "figi": "BBG00RPRPX12",
        "blocked": "0",
        "balance": "9",
        "positionUid": "eee36ccf-5f28-4419-9c29-c6465f39581a",
        "instrumentUid": "ade12bc5-07d9-44fe-b27a-1543e05bacfd",
        "exchangeBlocked": false,
        "instrumentType": "etf"
      }
    ],
    "futures": [],
    "options": [],
    "date": "2023-05-16T13:29:13.411710Z"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PositionsStream)

### Лента событий по портфелям

[PortfolioStreamRequest](/investAPI/ws/websock-docs/output/index.html#schema-v1PortfolioStreamRequest)

[PortfolioStreamResponse](/investAPI/ws/websock-docs/output/index.html#schema-v1PortfolioStreamResponse)

Пример запроса:

```json
{
  "accounts": [
    "*accountId"
  ]
}
```

Пример ответа — подписка успешна:

```json
{
  "subscriptions": {
    "accounts": [
      {
        "accountId": "*accountId",
        "subscriptionStatus": "PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS"
      }
    ]
  }
}
```

Пример события — изменения по портфелю:

```json
{
  "portfolio": {
    "totalAmountShares": {
      "currency": "rub",
      "units": "2787",
      "nano": 700000000
    },
    "totalAmountBonds": {
      "currency": "rub",
      "units": "0",
      "nano": 0
    },
    "totalAmountEtf": {
      "currency": "rub",
      "units": "11",
      "nano": 115000000
    },
    "totalAmountCurrencies": {
      "currency": "rub",
      "units": "3194",
      "nano": 843600000
    },
    "expectedYield": {
      "units": "9158",
      "nano": 160000000
    },
    "positions": [
      {
        "figi": "BBG004S68473",
        "instrumentType": "share",
        "quantity": {
          "units": "400",
          "nano": 0
        },
        "averagePositionPrice": {
          "currency": "rub",
          "units": "3",
          "nano": 942567000
        },
        "expectedYield": {
          "units": "6",
          "nano": 352000000
        },
        "averagePositionPricePt": {
          "units": "3",
          "nano": 942567000
        },
        "currentPrice": {
          "currency": "rub",
          "units": "4",
          "nano": 193000000
        },
        "averagePositionPriceFifo": {
          "currency": "rub",
          "units": "3",
          "nano": 956275000
        },
        "quantityLots": {
          "units": "4",
          "nano": 0
        },
        "blocked": false,
        "positionUid": "427f9bcc-2cab-4561-bf94-942d4261fbb7",
        "instrumentUid": "2dfbc1fd-b92a-436e-b011-928c79e805f2"
      }
    ],
    "accountId": "*accountId",
    "virtualPositions": []
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PortfolioStream)

## Сервис рыночных данных

[MarketDataRequest](/investAPI/ws/websock-docs/output/index.html#message-v1MarketDataRequest)

[MarketDataResponse](/investAPI/ws/websock-docs/output/index.html#message-v1MarketDataResponse)

### Лента торговых статусов инструментов

Пример запроса:

```json
{
  "subscribeInfoRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример ответа — подписка успешна:

```json
{
  "subscribeInfoResponse": {
    "trackingId": "ca4af996193cf5d9b3b933fa0ad61910",
    "infoSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a",
        "streamId": "e99563dc-b8cd-4930-9a0a-7c31988c0007",
        "subscriptionId": "dc550001-b138-4197-9792-84f304c706c2"
      }
    ]
  }
}
```

Пример сообщения — торговый статус по инструменту:

```json
{
  "tradingStatus": {
    "figi": "BBG004730RP0",
    "tradingStatus": "SECURITY_TRADING_STATUS_NORMAL_TRADING",
    "time": "2023-05-16T07:00:00.750460Z",
    "limitOrderAvailableFlag": true,
    "marketOrderAvailableFlag": true,
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)


### Лента цен последних сделок

Пример запроса:

```json
{
  "subscribeLastPriceRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример ответа — подписка успешна:

```json
{
  "subscribeLastPriceResponse": {
    "trackingId": "9db9ee41448a36bf3526c8bd8d1a6c83",
    "lastPriceSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a",
        "streamId": "b620cf01-0080-4e14-8937-1cdcb92201a0",
        "subscriptionId": "d2969818-2c02-40f2-9d87-668a9b41e9c4"
      }
    ]
  }
}
```

Пример сообщения — последние цены по инструменту:

```json
{
  "lastPrice": {
    "figi": "BBG004730RP0",
    "price": {
      "units": "178",
      "nano": 790000000
    },
    "time": "2023-05-16T08:49:31.085056Z",
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)


### Лента обезличенных сделок

Пример запроса:

```json
{
  "subscribeTradesRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример ответа — подписка успешна:

```json
{
  "subscribeTradesResponse": {
    "trackingId": "d39351591fce577df57b2e9bea6dde1b",
    "tradeSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a",
        "streamId": "ffb815b3-6344-4c82-9ad6-6072f7bee1db",
        "subscriptionId": "b34b5c06-0b4c-49e5-9f78-2aa7bc3df3a3"
      }
    ]
  }
}
```

Пример сообщения — обезличиные сделки по инструменту:

```json
{
  "trade": {
    "figi": "BBG004730RP0",
    "direction": "TRADE_DIRECTION_SELL",
    "price": {
      "units": "178",
      "nano": 860000000
    },
    "quantity": "200",
    "time": "2023-05-16T08:50:22.807741Z",
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)


### Лента событий по стаканам

Пример запроса:

```json
{
  "subscribeOrderBookRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "depth":  10,
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```
Пример ответа — подписка успешна:

```json
{
  "subscribeOrderBookResponse": {
    "trackingId": "0193243a978d7363f55813841f6da08e",
    "orderBookSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "depth": 10,
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a",
        "streamId": "02df047c-a6b5-4e02-8459-d754978f869a",
        "subscriptionId": "48e7432d-4c9f-4457-9b71-286a19d9ba30",
        "orderBookType": "ORDERBOOK_TYPE_EXCHANGE"
      }
    ]
  }
}
```

Пример сообщения стака по инструменту:

```json
{
  "orderbook": {
    "figi": "BBG004730RP0",
    "depth": 10,
    "isConsistent": true,
    "bids": [
      {
        "price": {
          "units": "178",
          "nano": 970000000
        },
        "quantity": "20"
      }...
      # ...other 9 items collapsed
    ],
    "asks": [
      {
        "price": {
          "units": "178",
          "nano": 980000000
        },
        "quantity": "3"
      }...
      # ...other 9 items collapsed
    ],
    "time": "2023-05-16T08:54:00.549662Z",
    "limitUp": {
      "units": "191",
      "nano": 440000000
    },
    "limitDown": {
      "units": "156",
      "nano": 240000000
    },
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a",
    "orderBookType": "ORDERBOOK_TYPE_EXCHANGE"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)


### Лента события по свечам

Пример запроса:

```json
{
  "subscribeCandlesRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "interval": "SUBSCRIPTION_INTERVAL_ONE_MINUTE",
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ],
    "waitingClose": false
  }
}
```

Пример ответа — подписка успешна:

```json
{
  "subscribeCandlesResponse": {
    "trackingId": "066f2eeff1a0b76f5a6c05b3b41f23df",
    "candlesSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "interval": "SUBSCRIPTION_INTERVAL_ONE_MINUTE",
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a",
        "waitingClose": false,
        "streamId": "8d9a6312-8965-4734-a571-e9f1b599427d",
        "subscriptionId": "72d91c60-a094-482b-89af-a604ae87d234"
      }
    ]
  }
}
```

Пример события — свеча по инструменту:

```json
{
  "candle": {
    "figi": "BBG004730RP0",
    "interval": "SUBSCRIPTION_INTERVAL_ONE_MINUTE",
    "open": {
      "units": "179",
      "nano": 50000000
    },
    "high": {
      "units": "179",
      "nano": 70000000
    },
    "low": {
      "units": "178",
      "nano": 950000000
    },
    "close": {
      "units": "178",
      "nano": 950000000
    },
    "volume": "4279",
    "time": "2023-05-16T08:44:00Z",
    "lastTradeTs": "2023-05-16T08:44:27.432487Z",
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)

## Пинг сообщения

Пример:

```json
{
  "ping": {
    "time": "2024-04-11T08:49:14.974035911Z",
    "streamId": ""
  }
}
```