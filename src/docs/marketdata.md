





## MarketDataService
Сервис для получения биржевой информации:<br/> 1. Свечи.<br/> 2. Стаканы.<br/> 3. Торговые статусы.<br/> 4. Лента сделок.

###Методы сервиса


#### GetCandles
GetCandles — исторические свечи по инструменту

- Тело запроса — [GetCandlesRequest](#getcandlesrequest)

- Тело ответа — [GetCandlesResponse](#getcandlesresponse)


#### GetLastPrices
GetLastPrices — цены последних сделок по инструментам

- Тело запроса — [GetLastPricesRequest](#getlastpricesrequest)

- Тело ответа — [GetLastPricesResponse](#getlastpricesresponse)


#### GetOrderBook
GetOrderBook — стакан по инструменту

- Тело запроса — [GetOrderBookRequest](#getorderbookrequest)

- Тело ответа — [GetOrderBookResponse](#getorderbookresponse)


#### GetTradingStatus
GetTradingStatus — статус торгов по инструменту

- Тело запроса — [GetTradingStatusRequest](#gettradingstatusrequest)

- Тело ответа — [GetTradingStatusResponse](#gettradingstatusresponse)


#### GetTradingStatuses
GetTradingStatuses — статус торгов по инструментам

- Тело запроса — [GetTradingStatusesRequest](#gettradingstatusesrequest)

- Тело ответа — [GetTradingStatusesResponse](#gettradingstatusesresponse)


#### GetLastTrades
GetLastTrades — обезличенные сделки
Обезличенные сделки по инструменту. Метод гарантирует получение информации за последний час.

- Тело запроса — [GetLastTradesRequest](#getlasttradesrequest)

- Тело ответа — [GetLastTradesResponse](#getlasttradesresponse)


#### GetClosePrices
GetClosePrices — цены закрытия торговой сессии по инструментам

- Тело запроса — [GetClosePricesRequest](#getclosepricesrequest)

- Тело ответа — [GetClosePricesResponse](#getclosepricesresponse)


#### GetTechAnalysis
GetTechAnalysis — технические индикаторы по инструменту

- Тело запроса — [GetTechAnalysisRequest](#gettechanalysisrequest)

- Тело ответа — [GetTechAnalysisResponse](#gettechanalysisresponse)

 <!-- range .Methods -->


## MarketDataStreamService


###Методы сервиса


#### MarketDataStream
MarketDataStream — bidirectional стрим предоставления биржевой информации

- Тело запроса — [MarketDataRequest](#marketdatarequest)

- Тело ответа — [MarketDataResponse](#marketdataresponse)


#### MarketDataServerSideStream
MarketDataServerSideStream — server-side стрим предоставления биржевой информации

- Тело запроса — [MarketDataServerSideStreamRequest](#marketdataserversidestreamrequest)

- Тело ответа — [MarketDataResponse](#marketdataresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### MarketDataRequest
Запрос подписки или отписки на определенные биржевые данные.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscribe_candles_request |  [SubscribeCandlesRequest](#subscribecandlesrequest) | Запрос подписки на свечи. |
| subscribe_order_book_request |  [SubscribeOrderBookRequest](#subscribeorderbookrequest) | Запрос подписки на стаканы. |
| subscribe_trades_request |  [SubscribeTradesRequest](#subscribetradesrequest) | Запрос подписки на ленту обезличенных сделок. |
| subscribe_info_request |  [SubscribeInfoRequest](#subscribeinforequest) | Запрос подписки на торговые статусы инструментов. |
| subscribe_last_price_request |  [SubscribeLastPriceRequest](#subscribelastpricerequest) | Запрос подписки на цены последних сделок. |
| get_my_subscriptions |  [GetMySubscriptions](#getmysubscriptions) | Запрос своих подписок. |
| ping |  [PingRequest](#pingrequest) | Запрос проверки активности соединения. |
| ping_settings |  [PingDelaySettings](#pingdelaysettings) | Запрос настройки пинга. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### MarketDataServerSideStreamRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| subscribe_candles_request |  [SubscribeCandlesRequest](#subscribecandlesrequest) | Запрос подписки на свечи. |
| subscribe_order_book_request |  [SubscribeOrderBookRequest](#subscribeorderbookrequest) | Запрос подписки на стаканы. |
| subscribe_trades_request |  [SubscribeTradesRequest](#subscribetradesrequest) | Запрос подписки на ленту обезличенных сделок. |
| subscribe_info_request |  [SubscribeInfoRequest](#subscribeinforequest) | Запрос подписки на торговые статусы инструментов. |
| subscribe_last_price_request |  [SubscribeLastPriceRequest](#subscribelastpricerequest) | Запрос подписки на цены последних сделок. |
| ping_settings |  [PingDelaySettings](#pingdelaysettings) | Запрос настройки пинга. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### MarketDataResponse
Пакет биржевой информации по подписке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscribe_candles_response |  [SubscribeCandlesResponse](#subscribecandlesresponse) | Результат подписки на свечи. |
| subscribe_order_book_response |  [SubscribeOrderBookResponse](#subscribeorderbookresponse) | Результат подписки на стаканы. |
| subscribe_trades_response |  [SubscribeTradesResponse](#subscribetradesresponse) | Результат подписки на поток обезличенных сделок. |
| subscribe_info_response |  [SubscribeInfoResponse](#subscribeinforesponse) | Результат подписки на торговые статусы инструментов. |
| candle |  [Candle](#candle) | Свеча. |
| trade |  [Trade](#trade) | Сделки. |
| orderbook |  [OrderBook](#orderbook) | Стакан. |
| trading_status |  [TradingStatus](#tradingstatus) | Торговый статус. |
| ping |  [Ping](#ping) | Проверка активности стрима. |
| subscribe_last_price_response |  [SubscribeLastPriceResponse](#subscribelastpriceresponse) | Результат подписки на цены последние сделок по инструментам. |
| last_price |  [LastPrice](#lastprice) | Цена последней сделки. |
| open_interest |  [OpenInterest](#openinterest) | Открытый интерес. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeCandlesRequest
subscribeCandles | Изменения статуса подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [CandleInstrument](#candleinstrument) | Массив инструментов для подписки на свечи. |
| waiting_close |  [bool](#bool) | Флаг ожидания закрытия временного интервала для отправки свечи. |
| candle_source_type |  [GetCandlesRequest.CandleSource](#getcandlesrequestcandlesource) | Источник свечей. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CandleInstrument
Запрос изменения статус подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`. |
| interval |  [SubscriptionInterval](#subscriptioninterval) | Интервал свечей. Двухчасовые и четырехчасовые свечи в стриме отсчитываются с 0:00 по UTC. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeCandlesResponse
Результат изменения статус подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса. [Подробнее](./grpc#tracking-id). |
| candles_subscriptions | Массив объектов [CandleSubscription](#candlesubscription) | Массив статусов подписки на свечи. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CandleSubscription
Статус подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| interval |  [SubscriptionInterval](#subscriptioninterval) | Интервал свечей. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
| instrument_uid |  [string](#string) | UID инструмента. |
| waiting_close |  [bool](#bool) | Флаг ожидания закрытия временного интервала для отправки свечи. |
| stream_id |  [string](#string) | Идентификатор открытого соединения. |
| subscription_id |  [string](#string) | Идентификатор подписки в формате `UUID`. |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Действие подписки. |
| candle_source_type |  [GetCandlesRequest.CandleSource](#getcandlesrequestcandlesource) | Источник свечей. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeOrderBookRequest
Запрос на изменение статуса подписки на стаканы.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [OrderBookInstrument](#orderbookinstrument) | Массив инструментов для подписки на стаканы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderBookInstrument
Запрос подписки на стаканы.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`. |
| depth |  [int32](#int32) | Глубина стакана. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
| order_book_type |  [OrderBookType](#orderbooktype) | Тип стакана. Значение по умолчанию — `ORDERBOOK_TYPE_ALL`, стакан биржевой и дилера. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeOrderBookResponse
Результат изменения статуса подписки на стаканы.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса. [Подробнее](./grpc#tracking-id). |
| order_book_subscriptions | Массив объектов [OrderBookSubscription](#orderbooksubscription) | Массив статусов подписки на стаканы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderBookSubscription
Статус подписки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| depth |  [int32](#int32) | Глубина стакана. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
| instrument_uid |  [string](#string) | UID инструмента. |
| stream_id |  [string](#string) | Идентификатор открытого соединения. |
| subscription_id |  [string](#string) | Идентификатор подписки в формате `UUID`. |
| order_book_type |  [OrderBookType](#orderbooktype) | Тип стакана. |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Действие подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeTradesRequest
Изменение статуса подписки на поток обезличенных сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [TradeInstrument](#tradeinstrument) | Массив инструментов для подписки на поток обезличенных сделок. |
| trade_source |  [TradeSourceType](#tradesourcetype) | Тип источника сделок. Значение по умолчанию — `TRADE_SOURCE_ALL`, все сделки. |
| with_open_interest |  [bool](#bool) | Флаг открытого интереса. **true** - в стриме дополнительно передается информация об открытом интересе для фьючерсов |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradeInstrument
Запрос подписки на поток обезличенных сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте instrument_id`. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeTradesResponse
Результат изменения статуса подписки на поток обезличенных сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса. [Подробнее](./grpc#tracking-id). |
| trade_subscriptions | Массив объектов [TradeSubscription](#tradesubscription) | Массив статусов подписки на поток сделок. |
| trade_source |  [TradeSourceType](#tradesourcetype) | Тип источника сделок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradeSubscription
Статус подписки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
| instrument_uid |  [string](#string) | UID инструмента. |
| stream_id |  [string](#string) | Идентификатор открытого соединения. |
| subscription_id |  [string](#string) | Идентификатор подписки в формате UUID. |
| with_open_interest |  [bool](#bool) | Флаг открытого интереса. **true** - в стриме дополнительно передается информация об открытом интересе для фьючерсов |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Действие подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeInfoRequest
Изменение статуса подписки на торговый статус инструмента.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [InfoInstrument](#infoinstrument) | Массив инструментов для подписки на торговый статус. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InfoInstrument
Запрос подписки на торговый статус.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте instrument_id`. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeInfoResponse
Результат изменения статуса подписки на торговый статус.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса. [Подробнее](./grpc#tracking-id). |
| info_subscriptions | Массив объектов [InfoSubscription](#infosubscription) | Массив статусов подписки на торговый статус. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InfoSubscription
Статус подписки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
| instrument_uid |  [string](#string) | UID инструмента. |
| stream_id |  [string](#string) | Идентификатор открытого соединения. |
| subscription_id |  [string](#string) | Идентификатор подписки в формате UUID. |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Действие подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeLastPriceRequest
Изменение статуса подписки на цену последней сделки по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [LastPriceInstrument](#lastpriceinstrument) | Массив инструментов для подписки на цену последней сделки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPriceInstrument
Запрос подписки на последнюю цену.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте instrument_id`. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeLastPriceResponse
Результат изменения статуса подписки на цену последней сделки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса. [Подробнее](./grpc#tracking-id). |
| last_price_subscriptions | Массив объектов [LastPriceSubscription](#lastpricesubscription) | Массив статусов подписки на цену последней сделки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPriceSubscription
Статус подписки на цену последней сделки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
| instrument_uid |  [string](#string) | UID инструмента. |
| stream_id |  [string](#string) | Идентификатор открытого соединения. |
| subscription_id |  [string](#string) | Идентификатор подписки в формате `UUID`. |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Действие подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Candle
Пакет свечей в рамках стрима.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| interval |  [SubscriptionInterval](#subscriptioninterval) | Интервал свечи. |
| open |  [Quotation](#quotation) | Цена открытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| high |  [Quotation](#quotation) | Максимальная цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| low |  [Quotation](#quotation) | Минимальная цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| close |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| volume |  [int64](#int64) | Объем сделок в лотах. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала интервала свечи по UTC. |
| last_trade_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время последней сделки, вошедшей в свечу по UTC. |
| instrument_uid |  [string](#string) | UID инструмента. |
| candle_source_type |  [CandleSource](#candlesource) | Источник свечей. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderBook
Пакет стаканов в рамках стрима.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| depth |  [int32](#int32) | Глубина стакана. |
| is_consistent |  [bool](#bool) | Флаг консистентности стакана. **false** — не все заявки попали в стакан из-за сетевых задержек или нарушения порядка доставки. |
| bids | Массив объектов [Order](#order) | Массив предложений. |
| asks | Массив объектов [Order](#order) | Массив спроса. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время формирования стакана в часовом поясе UTC по времени биржи. |
| limit_up |  [Quotation](#quotation) | Верхний лимит цены за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| limit_down |  [Quotation](#quotation) | Нижний лимит цены за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| instrument_uid |  [string](#string) | UID инструмента. |
| order_book_type |  [OrderBookType](#orderbooktype) | Тип стакана. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Order
Массив предложений/спроса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| quantity |  [int64](#int64) | Количество в лотах. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Trade
Информация о сделке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| direction |  [TradeDirection](#tradedirection) | Направление сделки. |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| quantity |  [int64](#int64) | Количество лотов. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время сделки в часовом поясе UTC по времени биржи. |
| instrument_uid |  [string](#string) | UID инструмента. |
| trade_source |  [TradeSourceType](#tradesourcetype) | Тип источника сделки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingStatus
Пакет изменения торгового статуса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Статус торговли инструментом. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время изменения торгового статуса по UTC. |
| limit_order_available_flag |  [bool](#bool) | Признак доступности выставления лимитной заявки по инструменту. |
| market_order_available_flag |  [bool](#bool) | Признак доступности выставления рыночной заявки по инструменту. |
| instrument_uid |  [string](#string) | UID инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetCandlesRequest
Запрос исторических свечей.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода по UTC. |
| interval |  [CandleInterval](#candleinterval) | Интервал запрошенных свечей. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
| candle_source_type |  [GetCandlesRequest.CandleSource](#getcandlesrequestcandlesource) | Тип источника свечи. |
| limit |  [int32](#int32) | Максимальное количество свечей в ответе. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetCandlesResponse
Список свечей.


| Field | Type | Description |
| ----- | ---- | ----------- |
| candles | Массив объектов [HistoricCandle](#historiccandle) | Массив свечей. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### HistoricCandle
Информация о свече.


| Field | Type | Description |
| ----- | ---- | ----------- |
| open |  [Quotation](#quotation) | Цена открытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| high |  [Quotation](#quotation) | Максимальная цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| low |  [Quotation](#quotation) | Минимальная цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| close |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| volume |  [int64](#int64) | Объем торгов в лотах. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время свечи в часовом поясе UTC. |
| is_complete |  [bool](#bool) | Признак завершенности свечи. **false** — свеча за текущие интервал еще сформирована не полностью. |
| candle_source |  [CandleSource](#candlesource) | Тип источника свечи |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastPricesRequest
Запрос получения цен последних сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi | Массив объектов [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`. |
| instrument_id | Массив объектов [string](#string) | Массив идентификаторов инструмента. Принимает значения `figi` или `instrument_uid`. |
| last_price_type |  [LastPriceType](#lastpricetype) | Тип запрашиваемой последней цены. |
| instrument_status |  [InstrumentStatus](#instrumentstatus) | Статус запрашиваемых инструментов. [Возможные значения](#instrumentstatus). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastPricesResponse
Список цен последних сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| last_prices | Массив объектов [LastPrice](#lastprice) | Массив цен последних сделок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPrice
Информация о цене последней сделки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI инструмента. |
| price |  [Quotation](#quotation) | Цена последней сделки за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время получения последней цены в часовом поясе UTC по времени биржи. |
| instrument_uid |  [string](#string) | UID инструмента. |
| last_price_type |  [LastPriceType](#lastpricetype) | Тип последней цены. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OpenInterest



| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_uid |  [string](#string) | UID инструмента. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время получения открытого интереса в часовом поясе UTC по времени биржи. |
| open_interest |  [int64](#int64) | Открытый интерес. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrderBookRequest
Запрос стакана.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`. |
| depth |  [int32](#int32) | Глубина стакана. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrderBookResponse
Информация о стакане.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| depth |  [int32](#int32) | Глубина стакана. |
| bids | Массив объектов [Order](#order) | Множество пар значений на покупку. |
| asks | Массив объектов [Order](#order) | Множество пар значений на продажу. |
| last_price |  [Quotation](#quotation) | Цена последней сделки за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| close_price |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| limit_up |  [Quotation](#quotation) | Верхний лимит цены за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| limit_down |  [Quotation](#quotation) | Нижний лимит цены за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. [Подробнее про перевод цен в валюту](./faq_marketdata/#_15). |
| last_price_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время получения цены последней сделки. |
| close_price_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время получения цены закрытия. |
| orderbook_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время формирования стакана на бирже. |
| instrument_uid |  [string](#string) | UID инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusRequest
Запрос получения торгового статуса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusesRequest
Запрос получения торгового статуса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id | Массив объектов [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusesResponse
Информация о торговом статусе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| trading_statuses | Массив объектов [GetTradingStatusResponse](#gettradingstatusresponse) | Массив информации о торговых статусах. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusResponse
Информация о торговом статусе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Статус торговли инструментом. |
| limit_order_available_flag |  [bool](#bool) | Признак доступности выставления лимитной заявки по инструменту. |
| market_order_available_flag |  [bool](#bool) | Признак доступности выставления рыночной заявки по инструменту. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
| instrument_uid |  [string](#string) | UID инструмента. |
| bestprice_order_available_flag |  [bool](#bool) | Признак доступности завяки по лучшей цене. |
| only_best_price |  [bool](#bool) | Признак доступности только заявки по лучшей цене. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastTradesRequest
Запрос обезличенных сделок за последний час.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода по UTC. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
| trade_source |  [TradeSourceType](#tradesourcetype) | Тип источника сделок. Значение по умолчанию — `TRADE_SOURCE_ALL`, все сделки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastTradesResponse
Обезличенных сделок за последний час.


| Field | Type | Description |
| ----- | ---- | ----------- |
| trades | Массив объектов [Trade](#trade) | Массив сделок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetMySubscriptions
Запрос активных подписок. Возвращает по одному сообщению на каждый тип активных подписок — `SubscribeLastPriceResponse`, `SubscribeInfoResponse`, `SubscribeTradesResponse`, `SubscribeOrderBookResponse`, `SubscribeCandlesResponse`.

 <!-- end HasFields -->


#### GetClosePricesRequest
Запрос цен закрытия торговой сессии по инструментам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [InstrumentClosePriceRequest](#instrumentclosepricerequest) | Массив по инструментам. |
| instrument_status |  [InstrumentStatus](#instrumentstatus) | Статус запрашиваемых инструментов. [Возможные значения](#instrumentstatus). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentClosePriceRequest
Запрос цен закрытия торговой сессии по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetClosePricesResponse
Цены закрытия торговой сессии по инструментам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| close_prices | Массив объектов [InstrumentClosePriceResponse](#instrumentclosepriceresponse) | Массив по инструментам. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentClosePriceResponse
Цена закрытия торговой сессии по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI инструмента. |
| instrument_uid |  [string](#string) | UID инструмента. |
| price |  [Quotation](#quotation) | Цена закрытия торговой сессии. |
| evening_session_price |  [Quotation](#quotation) | Цена последней сделки с вечерней сессии. Цена публикуется биржей по торговым дням и в нерабочие дни не обновляется. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата совершения торгов. |
| evening_session_price_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата цены закрытия вечерней сессии. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTechAnalysisRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| indicator_type |  [GetTechAnalysisRequest.IndicatorType](#gettechanalysisrequestindicatortype) | Тип технического индикатора. |
| instrument_uid |  [string](#string) | UID инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода по UTC. |
| interval |  [GetTechAnalysisRequest.IndicatorInterval](#gettechanalysisrequestindicatorinterval) | Интервал, за который рассчитывается индикатор. |
| type_of_price |  [GetTechAnalysisRequest.TypeOfPrice](#gettechanalysisrequesttypeofprice) | Тип цены, который используется при расчете индикатора. |
| length |  [int32](#int32) | Торговый период, за который рассчитывается индикатор. |
| deviation |  [GetTechAnalysisRequest.Deviation](#gettechanalysisrequestdeviation) | Параметры отклонения. |
| smoothing |  [GetTechAnalysisRequest.Smoothing](#gettechanalysisrequestsmoothing) | Параметры сглаживания. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTechAnalysisRequest.Smoothing



| Field | Type | Description |
| ----- | ---- | ----------- |
| fast_length |  [int32](#int32) | Короткий период сглаживания для первой экспоненциальной скользящей средней (EMA). |
| slow_length |  [int32](#int32) | Длинный период сглаживания для второй экспоненциальной скользящей средней (EMA). |
| signal_smoothing |  [int32](#int32) | Период сглаживания для третьей экспоненциальной скользящей средней (EMA) |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTechAnalysisRequest.Deviation



| Field | Type | Description |
| ----- | ---- | ----------- |
| deviation_multiplier |  [Quotation](#quotation) | Количество стандартных отклонений, на которые отступают верхняя и нижняя границы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTechAnalysisResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| technical_indicators | Массив объектов [GetTechAnalysisResponse.TechAnalysisItem](#gettechanalysisresponsetechanalysisitem) | Массив значений результатов технического анализа. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTechAnalysisResponse.TechAnalysisItem



| Field | Type | Description |
| ----- | ---- | ----------- |
| timestamp |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Временная метка по UTC, для которой были рассчитаны значения индикатора. |
| middle_band |  [Quotation](#quotation) | Значение простого скользящего среднего (средней линии). |
| upper_band |  [Quotation](#quotation) | Значение верхней линии Боллинджера. |
| lower_band |  [Quotation](#quotation) | Значение нижней линии Боллинджера. |
| signal |  [Quotation](#quotation) | Значение сигнальной линии. |
| macd |  [Quotation](#quotation) | Значение линии MACD. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### SubscriptionAction
Тип операции со списком подписок.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBSCRIPTION_ACTION_UNSPECIFIED | 0 | Статус подписки не определен. |
| SUBSCRIPTION_ACTION_SUBSCRIBE | 1 | Подписаться. |
| SUBSCRIPTION_ACTION_UNSUBSCRIBE | 2 | Отписаться. |




#### SubscriptionInterval
Интервал свечи.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBSCRIPTION_INTERVAL_UNSPECIFIED | 0 | Интервал свечи не определен. |
| SUBSCRIPTION_INTERVAL_ONE_MINUTE | 1 | Минутные свечи. |
| SUBSCRIPTION_INTERVAL_FIVE_MINUTES | 2 | Пятиминутные свечи. |
| SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES | 3 | Пятнадцатиминутные свечи. |
| SUBSCRIPTION_INTERVAL_ONE_HOUR | 4 | Часовые свечи. |
| SUBSCRIPTION_INTERVAL_ONE_DAY | 5 | Дневные свечи. |
| SUBSCRIPTION_INTERVAL_2_MIN | 6 | Двухминутные свечи. |
| SUBSCRIPTION_INTERVAL_3_MIN | 7 | Трехминутные свечи. |
| SUBSCRIPTION_INTERVAL_10_MIN | 8 | Десятиминутные свечи. |
| SUBSCRIPTION_INTERVAL_30_MIN | 9 | Тридцатиминутные свечи. |
| SUBSCRIPTION_INTERVAL_2_HOUR | 10 | Двухчасовые свечи. |
| SUBSCRIPTION_INTERVAL_4_HOUR | 11 | Четырехчасовые свечи. |
| SUBSCRIPTION_INTERVAL_WEEK | 12 | Недельные свечи. |
| SUBSCRIPTION_INTERVAL_MONTH | 13 | Месячные свечи. |




#### SubscriptionStatus
Результат подписки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBSCRIPTION_STATUS_UNSPECIFIED | 0 | Статус подписки не определен. |
| SUBSCRIPTION_STATUS_SUCCESS | 1 | Успешно. |
| SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND | 2 | Инструмент не найден. |
| SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID | 3 | Некорректный статус подписки. [Список возможных значений](./marketdata#subscriptionaction). |
| SUBSCRIPTION_STATUS_DEPTH_IS_INVALID | 4 | Некорректная глубина стакана. Доступные значения — 1, 10, 20, 30, 40, 50. |
| SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID | 5 | Некорректный интервал свечей. [Список возможных значений](./marketdata#subscriptioninterval). |
| SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED | 6 | Превышен лимит на общее количество подписок в рамках стрима. [Лимитная политика](./limits/). |
| SUBSCRIPTION_STATUS_INTERNAL_ERROR | 7 | Внутренняя ошибка сервиса. |
| SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS | 8 | Превышен лимит на количество запросов на подписки в течение установленного отрезка времени. |
| SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND | 9 | Активная подписка не найдена. Ошибка может возникнуть только при отписке от несуществующей подписки. |
| SUBSCRIPTION_STATUS_SOURCE_IS_INVALID | 10 | Указан некорректный источник. |




#### TradeSourceType
Типы источников сделок.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TRADE_SOURCE_UNSPECIFIED | 0 | Тип источника сделки не определён. |
| TRADE_SOURCE_EXCHANGE | 1 | Биржевые сделки. |
| TRADE_SOURCE_DEALER | 2 | Сделки дилера. |
| TRADE_SOURCE_ALL | 3 | Все сделки. |




#### TradeDirection
Направление сделки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TRADE_DIRECTION_UNSPECIFIED | 0 | Направление сделки не определено. |
| TRADE_DIRECTION_BUY | 1 | Покупка. |
| TRADE_DIRECTION_SELL | 2 | Продажа. |




#### CandleInterval
Интервал свечей. Максимальное значение интервала приведено ориентировочно, может отличаться в большую сторону в зависимости от параметров запроса.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CANDLE_INTERVAL_UNSPECIFIED | 0 | Интервал не определен. |
| CANDLE_INTERVAL_1_MIN | 1 | От 1 минуты до 1 дня. Максимальное значение `limit` — 2400. |
| CANDLE_INTERVAL_5_MIN | 2 | От 5 минут до недели. Максимальное значение `limit` — 2400. |
| CANDLE_INTERVAL_15_MIN | 3 | От 15 минут до 3 недель. Максимальное значение `limit` — 2400. |
| CANDLE_INTERVAL_HOUR | 4 | От 1 часа до 3 месяцев. Максимальное значение `limit` — 2400. |
| CANDLE_INTERVAL_DAY | 5 | От 1 дня до 6 лет. Максимальное значение `limit` — 2400. |
| CANDLE_INTERVAL_2_MIN | 6 | От 2 минут до 1 дня. Максимальное значение `limit` — 1200. |
| CANDLE_INTERVAL_3_MIN | 7 | От 3 минут до 1 дня. Максимальное значение `limit` — 750. |
| CANDLE_INTERVAL_10_MIN | 8 | От 10 минут до недели. Максимальное значение `limit` — 1200. |
| CANDLE_INTERVAL_30_MIN | 9 | От 30 минут до 3 недель. Максимальное значение `limit` — 1200. |
| CANDLE_INTERVAL_2_HOUR | 10 | От 2 часов до 3 месяцев. Максимальное значение `limit` — 2400. |
| CANDLE_INTERVAL_4_HOUR | 11 | От 4 часов до 3 месяцев. Максимальное значение `limit` — 700. |
| CANDLE_INTERVAL_WEEK | 12 | От 1 недели до 5 лет. Максимальное значение `limit` — 300. |
| CANDLE_INTERVAL_MONTH | 13 | От 1 месяца до 10 лет. Максимальное значение `limit` — 120. |
| CANDLE_INTERVAL_5_SEC | 14 | От 5 секунд до 200 минут. Максимальное значение `limit` — 2500. |
| CANDLE_INTERVAL_10_SEC | 15 | От 10 секунд до 200 минут. Максимальное значение `limit` — 1250. |
| CANDLE_INTERVAL_30_SEC | 16 | От 30 секунд до 20 часов. Максимальное значение `limit` — 2500. |




#### CandleSource


| Name | Number | Description |
| ---- | ------ | ----------- |
| CANDLE_SOURCE_UNSPECIFIED | 0 | Источник свечей не определен. |
| CANDLE_SOURCE_EXCHANGE | 1 | Биржевые свечи. |
| CANDLE_SOURCE_DEALER_WEEKEND | 2 | Свечи дилера в результате торговли по выходным. |




#### OrderBookType


| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDERBOOK_TYPE_UNSPECIFIED | 0 | Не определен. |
| ORDERBOOK_TYPE_EXCHANGE | 1 | Биржевой стакан. |
| ORDERBOOK_TYPE_DEALER | 2 | Стакан дилера. |
| ORDERBOOK_TYPE_ALL | 3 | Стакан биржевой и дилера. |




#### LastPriceType
Тип последней цены

| Name | Number | Description |
| ---- | ------ | ----------- |
| LAST_PRICE_UNSPECIFIED | 0 | Не определен. |
| LAST_PRICE_EXCHANGE | 1 | Цена биржи. |
| LAST_PRICE_DEALER | 2 | Цена дилера |




#### GetCandlesRequest.CandleSource


| Name | Number | Description |
| ---- | ------ | ----------- |
| CANDLE_SOURCE_UNSPECIFIED | 0 | Все свечи. |
| CANDLE_SOURCE_EXCHANGE | 1 | Биржевые свечи. |
| CANDLE_SOURCE_INCLUDE_WEEKEND | 3 | Все свечи с учетом торговли по выходным. |




#### GetTechAnalysisRequest.IndicatorInterval
Интервал свечи.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INDICATOR_INTERVAL_UNSPECIFIED | 0 | Интервал не определен. |
| INDICATOR_INTERVAL_ONE_MINUTE | 1 | 1 минута. |
| INDICATOR_INTERVAL_FIVE_MINUTES | 2 | 5 минут. |
| INDICATOR_INTERVAL_FIFTEEN_MINUTES | 3 | 15 минут. |
| INDICATOR_INTERVAL_ONE_HOUR | 4 | 1 час. |
| INDICATOR_INTERVAL_ONE_DAY | 5 | 1 день. |
| INDICATOR_INTERVAL_2_MIN | 6 | 2 минуты. |
| INDICATOR_INTERVAL_3_MIN | 7 | 3 минуты. |
| INDICATOR_INTERVAL_10_MIN | 8 | 10 минут. |
| INDICATOR_INTERVAL_30_MIN | 9 | 30 минут. |
| INDICATOR_INTERVAL_2_HOUR | 10 | 2 часа. |
| INDICATOR_INTERVAL_4_HOUR | 11 | 4 часа. |
| INDICATOR_INTERVAL_WEEK | 12 | Неделя. |
| INDICATOR_INTERVAL_MONTH | 13 | Месяц. |




#### GetTechAnalysisRequest.TypeOfPrice


| Name | Number | Description |
| ---- | ------ | ----------- |
| TYPE_OF_PRICE_UNSPECIFIED | 0 | Не указано. |
| TYPE_OF_PRICE_CLOSE | 1 | Цена закрытия. |
| TYPE_OF_PRICE_OPEN | 2 | Цена открытия. |
| TYPE_OF_PRICE_HIGH | 3 | Максимальное значение за выбранный интервал. |
| TYPE_OF_PRICE_LOW | 4 | Минимальное значение за выбранный интервал. |
| TYPE_OF_PRICE_AVG | 5 | Среднее значение по показателям [ (close + open + high + low) / 4 ]. |




#### GetTechAnalysisRequest.IndicatorType


| Name | Number | Description |
| ---- | ------ | ----------- |
| INDICATOR_TYPE_UNSPECIFIED | 0 | Не определен. |
| INDICATOR_TYPE_BB | 1 | Bollinger Bands — линия Боллинжера. |
| INDICATOR_TYPE_EMA | 2 | Exponential Moving Average — EMA, экспоненциальная скользящая средняя. |
| INDICATOR_TYPE_RSI | 3 | Relative Strength Index — индекс относительной силы. |
| INDICATOR_TYPE_MACD | 4 | Moving Average Convergence/Divergence — схождение/расхождение скользящих средних. |
| INDICATOR_TYPE_SMA | 5 | Simple Moving Average — простое скользящее среднее. |


 <!-- range .Enums -->
 <!-- range HasServices -->
 <!-- range .Files -->

#### SecurityTradingStatus

| Name | Number | Description |
| ---- | ------ | ----------- |
| SECURITY_TRADING_STATUS_UNSPECIFIED | 0 | Торговый статус не определён |
| SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING | 1 | Недоступен для торгов |
| SECURITY_TRADING_STATUS_OPENING_PERIOD | 2 | Период открытия торгов |
| SECURITY_TRADING_STATUS_CLOSING_PERIOD | 3 | Период закрытия торгов |
| SECURITY_TRADING_STATUS_BREAK_IN_TRADING | 4 | Перерыв в торговле |
| SECURITY_TRADING_STATUS_NORMAL_TRADING | 5 | Нормальная торговля |
| SECURITY_TRADING_STATUS_CLOSING_AUCTION | 6 | Аукцион закрытия |
| SECURITY_TRADING_STATUS_DARK_POOL_AUCTION | 7 | Аукцион крупных пакетов |
| SECURITY_TRADING_STATUS_DISCRETE_AUCTION | 8 | Дискретный аукцион |
| SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD | 9 | Аукцион открытия |
| SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE | 10 | Период торгов по цене аукциона закрытия |
| SECURITY_TRADING_STATUS_SESSION_ASSIGNED | 11 | Сессия назначена |
| SECURITY_TRADING_STATUS_SESSION_CLOSE | 12 | Сессия закрыта |
| SECURITY_TRADING_STATUS_SESSION_OPEN | 13 | Сессия открыта |
| SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING | 14 |Доступна торговля в режиме внутренней ликвидности брокера |
| SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING | 15 |Перерыв торговли в режиме внутренней ликвидности брокера |
| SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING | 16 |Недоступна торговля в режиме внутренней ликвидности брокера |


#### InstrumentStatus
| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_TYPE_UNSPECIFIED | 0 | Значение не определено |
| INSTRUMENT_STATUS_BASE | 1 | Базовый список инструментов (по умолчанию). Инструменты, доступные для торговли через T-Invest API. Cейчас списки бумаг, которые доступны из API и других интерфейсах совпадают — кроме внебиржевых бумаг. Но в будущем возможны ситуации, когда списки инструментов будут отличаться. |
| INSTRUMENT_STATUS_ALL | 2 | Список всех инструментов |


### Нестандартные типы данных

#### MoneyValue
Денежная сумма в определенной валюте

| Field | Type | Description |
| ----- | ---- | ----------- |
| currency |  [string](#string) | Строковый ISO-код валюты |
| units |  [int64](#int64) | Целая часть суммы, может быть отрицательным числом |
| nano |  [int32](#int32) | Дробная часть суммы, может быть отрицательным числом |


#### Quotation
Котировка - денежная сумма без указания валюты

| Field | Type | Description |
| ----- | ---- | ----------- |
| units |  [int64](#int64) | Целая часть суммы, может быть отрицательным числом |
| nano |  [int32](#int32) | Дробная часть суммы, может быть отрицательным числом |

