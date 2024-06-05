





## OrdersStreamService


###Методы сервиса


#### TradesStream
Stream сделок пользователя

- Тело запроса — [TradesStreamRequest](#tradesstreamrequest)

- Тело ответа — [TradesStreamResponse](#tradesstreamresponse)


#### OrderStateStream
Stream поручений пользователя. Перед работой прочитайте [статью](https://russianinvestments.github.io/investAPI/orders_state_stream/).

- Тело запроса — [OrderStateStreamRequest](#orderstatestreamrequest)

- Тело ответа — [OrderStateStreamResponse](#orderstatestreamresponse)

 <!-- range .Methods -->


## OrdersService
Сервис предназначен для работы с торговыми поручениями:</br> **1**.
выставление;</br> **2**. отмена;</br> **3**. получение статуса;</br> **4**.
расчёт полной стоимости;</br> **5**. получение списка заявок.

###Методы сервиса


#### PostOrder
Метод выставления заявки.

- Тело запроса — [PostOrderRequest](#postorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### CancelOrder
Метод отмены биржевой заявки.

- Тело запроса — [CancelOrderRequest](#cancelorderrequest)

- Тело ответа — [CancelOrderResponse](#cancelorderresponse)


#### GetOrderState
Метод получения статуса торгового поручения.

- Тело запроса — [GetOrderStateRequest](#getorderstaterequest)

- Тело ответа — [OrderState](#orderstate)


#### GetOrders
Метод получения списка активных заявок по счёту.

- Тело запроса — [GetOrdersRequest](#getordersrequest)

- Тело ответа — [GetOrdersResponse](#getordersresponse)


#### ReplaceOrder
Метод изменения выставленной заявки.

- Тело запроса — [ReplaceOrderRequest](#replaceorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### GetMaxLots
расчет количества доступных для покупки/продажи лотов

- Тело запроса — [GetMaxLotsRequest](#getmaxlotsrequest)

- Тело ответа — [GetMaxLotsResponse](#getmaxlotsresponse)


#### GetOrderPrice
Метод получения предварительной стоимости для лимитной заявки

- Тело запроса — [GetOrderPriceRequest](#getorderpricerequest)

- Тело ответа — [GetOrderPriceResponse](#getorderpriceresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов


 
#### TradesStreamRequest
Запрос установки соединения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [string](#string) | Идентификаторы счетов. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### TradesStreamResponse
Информация о торговых поручениях.


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_trades |  [OrderTrades](#ordertrades) | Информация об исполнении торгового поручения. |
| ping |  [Ping](#ping) | Проверка активности стрима. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### OrderTrades
Информация об исполнении торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_id |  [string](#string) | Идентификатор торгового поручения. |
| created_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время создания сообщения в часовом поясе UTC. |
| direction |  [OrderDirection](#orderdirection) | Направление сделки. |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| trades | Массив объектов [OrderTrade](#ordertrade) | Массив сделок. |
| account_id |  [string](#string) | Идентификатор счёта. |
| instrument_uid |  [string](#string) | UID идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### OrderTrade
Информация о сделке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| date_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время совершения сделки в часовом поясе UTC. |
| price |  [Quotation](#quotation) | Цена за 1 инструмент, по которой совершена сделка. |
| quantity |  [int64](#int64) | Количество штук в сделке. |
| trade_id |  [string](#string) | Идентификатор сделки. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### PostOrderRequest
Запрос выставления торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| quantity |  [int64](#int64) | Количество лотов. |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Игнорируется для рыночных поручений. |
| direction |  [OrderDirection](#orderdirection) | Направление операции. |
| account_id |  [string](#string) | Номер счёта. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| order_id |  [string](#string) | Идентификатор запроса выставления поручения для целей идемпотентности в формате UID. Максимальная длина 36 символов. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значения Figi или Instrument_uid. |
| time_in_force |  [TimeInForceType](#timeinforcetype) | Алгоритм исполнения поручения, применяется только к лимитной заявке. |
| price_type |  [PriceType](#pricetype) | Тип цены. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### PostOrderResponse
Информация о выставлении поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_id |  [string](#string) | Биржевой идентификатор заявки. |
| execution_report_status |  [OrderExecutionReportStatus](#orderexecutionreportstatus) | Текущий статус заявки. |
| lots_requested |  [int64](#int64) | Запрошено лотов. |
| lots_executed |  [int64](#int64) | Исполнено лотов. |
| initial_order_price |  [MoneyValue](#moneyvalue) | Начальная цена заявки. Произведение количества запрошенных лотов на цену. |
| executed_order_price |  [MoneyValue](#moneyvalue) | Исполненная средняя цена одного инструмента в заявке. |
| total_order_amount |  [MoneyValue](#moneyvalue) | Итоговая стоимость заявки, включающая все комиссии. |
| initial_commission |  [MoneyValue](#moneyvalue) | Начальная комиссия. Комиссия рассчитанная при выставлении заявки. |
| executed_commission |  [MoneyValue](#moneyvalue) | Фактическая комиссия по итогам исполнения заявки. |
| aci_value |  [MoneyValue](#moneyvalue) | Значение НКД (накопленного купонного дохода) на дату. Подробнее: [НКД при выставлении торговых поручений](https://russianinvestments.github.io/investAPI/head-orders#coupon) |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| direction |  [OrderDirection](#orderdirection) | Направление сделки. |
| initial_security_price |  [MoneyValue](#moneyvalue) | Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| message |  [string](#string) | Дополнительные данные об исполнении заявки. |
| initial_order_price_pt |  [Quotation](#quotation) | Начальная цена заявки в пунктах (для фьючерсов). |
| instrument_uid |  [string](#string) | UID идентификатор инструмента. |
| order_request_id |  [string](#string) | Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов. |
| response_metadata |  [ResponseMetadata](#responsemetadata) | Метадата |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### CancelOrderRequest
Запрос отмены торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
| order_id |  [string](#string) | Идентификатор заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### CancelOrderResponse
Результат отмены торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время отмены заявки в часовом поясе UTC. |
| response_metadata |  [ResponseMetadata](#responsemetadata) | Метадата |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetOrderStateRequest
Запрос получения статуса торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
| order_id |  [string](#string) | Идентификатор заявки. |
| price_type |  [PriceType](#pricetype) | Тип цены. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetOrdersRequest
Запрос получения списка активных торговых поручений.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetOrdersResponse
Список активных торговых поручений.


| Field | Type | Description |
| ----- | ---- | ----------- |
| orders | Массив объектов [OrderState](#orderstate) | Массив активных заявок. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### OrderState
Информация о торговом поручении.


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_id |  [string](#string) | Биржевой идентификатор заявки. |
| execution_report_status |  [OrderExecutionReportStatus](#orderexecutionreportstatus) | Текущий статус заявки. |
| lots_requested |  [int64](#int64) | Запрошено лотов. |
| lots_executed |  [int64](#int64) | Исполнено лотов. |
| initial_order_price |  [MoneyValue](#moneyvalue) | Начальная цена заявки. Произведение количества запрошенных лотов на цену. |
| executed_order_price |  [MoneyValue](#moneyvalue) | Исполненная цена заявки. Произведение средней цены покупки на количество лотов. |
| total_order_amount |  [MoneyValue](#moneyvalue) | Итоговая стоимость заявки, включающая все комиссии. |
| average_position_price |  [MoneyValue](#moneyvalue) | Средняя цена позиции по сделке. |
| initial_commission |  [MoneyValue](#moneyvalue) | Начальная комиссия. Комиссия, рассчитанная на момент подачи заявки. |
| executed_commission |  [MoneyValue](#moneyvalue) | Фактическая комиссия по итогам исполнения заявки. |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| direction |  [OrderDirection](#orderdirection) | Направление заявки. |
| initial_security_price |  [MoneyValue](#moneyvalue) | Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| stages | Массив объектов [OrderStage](#orderstage) | Стадии выполнения заявки. |
| service_commission |  [MoneyValue](#moneyvalue) | Сервисная комиссия. |
| currency |  [string](#string) | Валюта заявки. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| order_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время выставления заявки в часовом поясе UTC. |
| instrument_uid |  [string](#string) | UID идентификатор инструмента. |
| order_request_id |  [string](#string) | Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### OrderStage
Сделки в рамках торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| price |  [MoneyValue](#moneyvalue) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| quantity |  [int64](#int64) | Количество лотов. |
| trade_id |  [string](#string) | Идентификатор сделки. |
| execution_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время исполнения сделки |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### ReplaceOrderRequest
Запрос изменения выставленной заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счета. |
| order_id |  [string](#string) | Идентификатор заявки на бирже. |
| idempotency_key |  [string](#string) | Новый идентификатор запроса выставления поручения для целей идемпотентности. Максимальная длина 36 символов. Перезатирает старый ключ. |
| quantity |  [int64](#int64) | Количество лотов. |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. |
| price_type |  [PriceType](#pricetype) | Тип цены. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetMaxLotsRequest
Запрос на расчет количества доступных для покупки/продажи лотов. Если не указывать цену инструмента, то расчет произведется по текущум ценам в стакане: по лучшему предложению для покупки и по лучшему спросу для продажи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счета |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значения Figi или instrument_uid |
| price |  [Quotation](#quotation) | Цена инструмента |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetMaxLotsResponse
Результат количество доступных для покупки/продажи лотов


| Field | Type | Description |
| ----- | ---- | ----------- |
| currency |  [string](#string) | Валюта инструмента |
| buy_limits |  [GetMaxLotsResponse.BuyLimitsView](#getmaxlotsresponsebuylimitsview) | Лимиты для покупок на собственные деньги |
| buy_margin_limits |  [GetMaxLotsResponse.BuyLimitsView](#getmaxlotsresponsebuylimitsview) | Лимиты для покупок с учетом маржинального кредитования |
| sell_limits |  [GetMaxLotsResponse.SellLimitsView](#getmaxlotsresponseselllimitsview) | Лимиты для продаж по собственной позиции |
| sell_margin_limits |  [GetMaxLotsResponse.SellLimitsView](#getmaxlotsresponseselllimitsview) | Лимиты для продаж с учетом маржинального кредитования |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetMaxLotsResponse.BuyLimitsView



| Field | Type | Description |
| ----- | ---- | ----------- |
| buy_money_amount |  [Quotation](#quotation) | Количество доступной валюты для покупки |
| buy_max_lots |  [int64](#int64) | Максимальное доступное количество лотов для покупки |
| buy_max_market_lots |  [int64](#int64) | Максимальное доступное количество лотов для покупки для заявки по рыночной цене на текущий момент |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetMaxLotsResponse.SellLimitsView



| Field | Type | Description |
| ----- | ---- | ----------- |
| sell_max_lots |  [int64](#int64) | Максимальное доступное количество лотов для продажи |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetOrderPriceRequest
Запрос получения предварительной стоимости заявки


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счета |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значения Figi или instrument_uid |
| price |  [Quotation](#quotation) | Цена инструмента |
| direction |  [OrderDirection](#orderdirection) | Направление заявки |
| quantity |  [int64](#int64) | Количество лотов |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetOrderPriceResponse
Предварительная стоимость заявки


| Field | Type | Description |
| ----- | ---- | ----------- |
| total_order_amount |  [MoneyValue](#moneyvalue) | Итоговая стоимость заявки |
| initial_order_amount |  [MoneyValue](#moneyvalue) | Стоимость заявки без комиссий, НКД, ГО (для фьючерсов — стоимость контрактов) |
| lots_requested |  [int64](#int64) | Запрошено лотов |
| executed_commission |  [MoneyValue](#moneyvalue) | Общая комиссия |
| executed_commission_rub |  [MoneyValue](#moneyvalue) | Общая комиссия в рублях |
| service_commission |  [MoneyValue](#moneyvalue) | Сервисная комиссия |
| deal_commission |  [MoneyValue](#moneyvalue) | Комиссия за проведение сделки |
| extra_bond |  [GetOrderPriceResponse.ExtraBond](#getorderpriceresponseextrabond) | Дополнительная информация по облигациям |
| extra_future |  [GetOrderPriceResponse.ExtraFuture](#getorderpriceresponseextrafuture) | Дополнительная информация по фьючерсам |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetOrderPriceResponse.ExtraBond



| Field | Type | Description |
| ----- | ---- | ----------- |
| aci_value |  [MoneyValue](#moneyvalue) | Значение НКД (накопленного купонного дохода) на дату |
| nominal_conversion_rate |  [Quotation](#quotation) | Курс конвертации для замещающих облигаций |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### GetOrderPriceResponse.ExtraFuture



| Field | Type | Description |
| ----- | ---- | ----------- |
| initial_margin |  [MoneyValue](#moneyvalue) | Гарантийное обеспечение для фьючерса |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### OrderStateStreamRequest
Запрос установки стрим-соединения торговых поручений


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [string](#string) | Идентификаторы счетов. |
| ping_delay_millis |  [int32](#int32) | Задержка пинг сообщений milliseconds 1000-120000, default 120000 |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### OrderStateStreamResponse
Информация по заявкам


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_state |  [OrderStateStreamResponse.OrderState](#orderstatestreamresponseorderstate) | Информация об исполнении торгового поручения. |
| ping |  [Ping](#ping) | Проверка активности стрима. |
| subscription |  [OrderStateStreamResponse.SubscriptionResponse](#orderstatestreamresponsesubscriptionresponse) | Ответ на запрос на подписку. |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### OrderStateStreamResponse.SubscriptionResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](https://russianinvestments.github.io/investAPI/grpc#tracking-id). |
| status |  [ResultSubscriptionStatus](#resultsubscriptionstatus) | Статус подписки. |
| stream_id |  [string](#string) | Идентификатор открытого соединения |
| accounts | Массив объектов [string](#string) | Идентификаторы счетов. |
| error |  [ErrorDetail](#errordetail) |  |
 <!-- end Fields -->
 <!-- end HasFields -->

 
#### OrderStateStreamResponse.OrderState
Заявка


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_id |  [string](#string) | Биржевой идентификатор заявки |
| order_request_id |  [string](#string) | Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов. |
| client_code |  [string](#string) | Код клиента на бирже |
| created_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата создания заявки |
| execution_report_status |  [OrderExecutionReportStatus](#orderexecutionreportstatus) | Статус заявки |
| status_info |  [OrderStateStreamResponse.StatusCauseInfo](#orderstatestreamresponsestatuscauseinfo) | Дополнительная информация по статусу |
| ticker |  [string](#string) | Тикер инструмента |
| class_code |  [string](#string) | Класс-код (секция торгов) |
| lot_size |  [int32](#int32) | Лотность инструмента заявки |
| direction |  [OrderDirection](#orderdirection) | Направление заявки |
| time_in_force |  [TimeInForceType](#timeinforcetype) | Алгоритм исполнения поручения |
| order_type |  [OrderType](#ordertype) | Тип заявки |
| account_id |  [string](#string) | Номер счета |
| initial_order_price |  [MoneyValue](#moneyvalue) | Начальная цена заявки |
| order_price |  [MoneyValue](#moneyvalue) | Цена выставления заявки |
| amount |  [MoneyValue](#moneyvalue) | Предрассчитанная стоимость полной заявки |
| executed_order_price |  [MoneyValue](#moneyvalue) | Исполненная средняя цена одного инструмента в заявке |
| currency |  [string](#string) | Валюта исполнения |
| lots_requested |  [int64](#int64) | Запрошено лотов |
| lots_executed |  [int64](#int64) | Исполнено лотов |
| lots_left |  [int64](#int64) | Число неисполненных лотов по заявке |
| lots_cancelled |  [int64](#int64) | Отмененные лоты |
| marker |  [OrderStateStreamResponse.MarkerType](#orderstatestreamresponsemarkertype) | Спецсимвол |
| trades | Массив объектов [OrderTrade](#ordertrade) | Список сделок |
| completion_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время исполнения заявки |
| exchange |  [string](#string) | Код биржи |
| instrument_uid |  [string](#string) | UID идентификатор инструмента |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### OrderDirection
Направление операции.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_DIRECTION_UNSPECIFIED | 0 | Значение не указано |
| ORDER_DIRECTION_BUY | 1 | Покупка |
| ORDER_DIRECTION_SELL | 2 | Продажа |




#### OrderType
Тип заявки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_TYPE_UNSPECIFIED | 0 | Значение не указано |
| ORDER_TYPE_LIMIT | 1 | Лимитная |
| ORDER_TYPE_MARKET | 2 | Рыночная |
| ORDER_TYPE_BESTPRICE | 3 | Лучшая цена |




#### OrderExecutionReportStatus
Текущий статус заявки (поручения)

| Name | Number | Description |
| ---- | ------ | ----------- |
| EXECUTION_REPORT_STATUS_UNSPECIFIED | 0 | none |
| EXECUTION_REPORT_STATUS_FILL | 1 | Исполнена |
| EXECUTION_REPORT_STATUS_REJECTED | 2 | Отклонена |
| EXECUTION_REPORT_STATUS_CANCELLED | 3 | Отменена пользователем |
| EXECUTION_REPORT_STATUS_NEW | 4 | Новая |
| EXECUTION_REPORT_STATUS_PARTIALLYFILL | 5 | Частично исполнена |




#### TimeInForceType
Алгоритм исполнения заявки

| Name | Number | Description |
| ---- | ------ | ----------- |
| TIME_IN_FORCE_UNSPECIFIED | 0 | Значение не определено см. TIME_IN_FORCE_DAY |
| TIME_IN_FORCE_DAY | 1 | Заявка действует до конца торгового дня. Значение по умолчанию |
| TIME_IN_FORCE_FILL_AND_KILL | 2 | Если в момент выставления возможно исполнение заявки(в т.ч. частичное), заявка будет исполнена или отменена сразу после выставления |
| TIME_IN_FORCE_FILL_OR_KILL | 3 | Если в момент выставления возможно полное исполнение заявки, заявка будет исполнена или отменена сразу после выставления, недоступно для срочного рынка и торговли по выходным |




#### OrderStateStreamResponse.MarkerType
Маркер

| Name | Number | Description |
| ---- | ------ | ----------- |
| MARKER_UNKNOWN | 0 | не определено |
| MARKER_BROKER | 1 | сделки брокера |
| MARKER_CHAT | 2 | исполнение поручение, полученного от клиента через каналы связи |
| MARKER_PAPER | 3 | исполнение поручение, полученного от клиента в бумажной форме |
| MARKER_MARGIN | 4 | принудительное закрытие позиций |
| MARKER_TKBNM | 5 | сделки по управлению ликвидностью |
| MARKER_SHORT | 6 | сделки РЕПО по привлечению у клиентов бумаг |
| MARKER_SPECMM | 7 | перенос временно непокрытых позиций |
| MARKER_PO | 8 | none |




#### OrderStateStreamResponse.StatusCauseInfo
Дополнительная информация по статусу заявки

| Name | Number | Description |
| ---- | ------ | ----------- |
| CAUSE_UNSPECIFIED | 0 | Не определено |
| CAUSE_CANCELLED_BY_CLIENT | 15 | Отменено клиентом |
| CAUSE_CANCELLED_BY_EXCHANGE | 1 | Отменено биржей |
| CAUSE_CANCELLED_NOT_ENOUGH_POSITION | 2 | Заявка не выставлена из-за нехватки средств |
| CAUSE_CANCELLED_BY_CLIENT_BLOCK | 3 | Отменено из-за блокировки клиента |
| CAUSE_REJECTED_BY_BROKER | 4 | Отклонено брокером |
| CAUSE_REJECTED_BY_EXCHANGE | 5 | Отклонено биржей |
| CAUSE_CANCELLED_BY_BROKER | 6 | Отменено брокером |


 <!-- range .Enums -->
 <!-- range HasServices -->
 <!-- range .Files -->

#### PriceType

| Name | Number | Description |
| ---- | ------ | ----------- |
| PRICE_TYPE_UNSPECIFIED | 0 | Значение не определено |
| PRICE_TYPE_POINT | 1 | Цена в пунктах (только для фьючерсов и облигаций) |
| PRICE_TYPE_CURRENCY | 2 | Цена в валюте расчётов по инструменту |

#### ResponseMetadata
Метадата

| Field | Type | Description |
| ----- | ---- | ----------- |
| [tracking_id](https://russianinvestments.github.io/investAPI/grpc/#tracking-id) |  [string](#string) | Идентификатор трекинга |
| server_time |  [google.protobuf.Timestamp](#google.protobuf.Timestamp) | Серверное время |

#### ResultSubscriptionStatus
Результат подписки

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBSCRIPTION_STATUS_UNSPECIFIED | 0 | Статус подписки не определен. |
| SUBSCRIPTION_STATUS_OK | 1 | Подписка успешно установлена. |
| SUBSCRIPTION_STATUS_ERROR | 13 | Ошибка подписки |

#### ErrorDetail
Описание ошибки

| Field | Type | Description |
| ----- | ---- | ----------- |
| code |  [string](#string) | Код ошибки. |
| message |  [string](#string) | Описание ошибки. |

### Про тип цены

В T-Invest API ответ в методах для фьючерсов и облигаций может возвращаться как в валюте расчетов, так и в пунктах цены.
Стоимость пункта может меняться в зависимости от курсовой разницы.
Про конвертацию пунктов в валюту можно почитать [тут](https://russianinvestments.github.io/investAPI/points/)

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


####Числа с плавающей точкой(запятой)

В программировании часто используют типы данных с плавающей точкой, например float или double. Такие типы данных - компромисc между скоростью, диапазоном значений и точностью. 
Число с плавающей точкой имеет фиксированную относительную точность и изменяющуюся абсолютную. Поэтому мы используем тыпы данных MoneyValue и  Quotation.

Для всех заявок и котировок на бирже устанавливается [шаг цены](https://russianinvestments.github.io/investAPI/faq_marketdata/#2.1). В случае использовании чисел с плавающей точкой необходимо проверять, что переданное в запросе значение соответствует шагу цены инструмента.

#####Пример

Шаг цены для инструмента = `0.1`. Хотим выставить заявку по цене `256.8`, что соответствует шагу цены. Если представить число `256.8` в формате типа данных float, то значение будет [`256.79998779296875`](https://baseconvert.com/ieee-754-floating-point).

При выставлении заявки по этой цене на стороне брокера будет выполнено округление таким образом, чтобы не ухудшить поручение клиента:

-`256.7` в случае покупки

-`256.8` в случае продажи
