





## StopOrdersService
Сервис для работы со стоп-заявками: выставление, отмена, получение списка стоп-заявок.

###Методы сервиса


#### PostStopOrder
PostStopOrder — выставить стоп-заявку

- Тело запроса — [PostStopOrderRequest](#poststoporderrequest)

- Тело ответа — [PostStopOrderResponse](#poststoporderresponse)


#### GetStopOrders
GetStopOrders — получить список активных стоп-заявок по счету

- Тело запроса — [GetStopOrdersRequest](#getstopordersrequest)

- Тело ответа — [GetStopOrdersResponse](#getstopordersresponse)


#### CancelStopOrder
CancelStopOrder — отменить стоп-заявку

- Тело запроса — [CancelStopOrderRequest](#cancelstoporderrequest)

- Тело ответа — [CancelStopOrderResponse](#cancelstoporderresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### PostStopOrderRequest
Запрос выставления стоп-заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`. |
| quantity |  [int64](#int64) | Количество лотов. |
| price |  [Quotation](#quotation) | Цена за 1 инструмент биржевой заявки, которая будет выставлена при срабатывании по достижению `stop_price`. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. |
| stop_price |  [Quotation](#quotation) | Стоп-цена заявки за 1 инструмент. При достижении стоп-цены происходит активация стоп-заявки, в результате чего выставляется биржевая заявка. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. |
| direction |  [StopOrderDirection](#stoporderdirection) | Направление операции. |
| account_id |  [string](#string) | Номер счета. |
| expiration_type |  [StopOrderExpirationType](#stoporderexpirationtype) | Тип экспирации заявки. |
| stop_order_type |  [StopOrderType](#stopordertype) | Тип заявки. |
| expire_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время окончания действия стоп-заявки по UTC. Для `ExpirationType = GoodTillDate` заполнение обязательно, для `GoodTillCancel` игнорируется. |
| instrument_id |  [string](#string) | Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. |
| exchange_order_type |  [ExchangeOrderType](#exchangeordertype) | Тип дочерней биржевой заявки. |
| take_profit_type |  [TakeProfitType](#takeprofittype) | Подтип стоп-заявки — `TakeProfit`. |
| trailing_data |  [PostStopOrderRequest.TrailingData](#poststoporderrequesttrailingdata) | Массив с параметрами трейлинг-стопа. |
| price_type |  [PriceType](#pricetype) | Тип цены. |
| order_id |  [string](#string) | Идентификатор запроса выставления поручения для целей идемпотентности в формате `UID`. Максимальная длина — 36 символов. |
| confirm_margin_trade |  [bool](#bool) | Согласие на выставление заявки, которая может привести к непокрытой позиции, по умолчанию false. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PostStopOrderRequest.TrailingData



| Field | Type | Description |
| ----- | ---- | ----------- |
| indent |  [Quotation](#quotation) | Отступ. |
| indent_type |  [TrailingValueType](#trailingvaluetype) | Тип величины отступа. |
| spread |  [Quotation](#quotation) | Размер защитного спреда. |
| spread_type |  [TrailingValueType](#trailingvaluetype) | Тип величины защитного спреда. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PostStopOrderResponse
Результат выставления стоп-заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| stop_order_id |  [string](#string) | Уникальный идентификатор стоп-заявки. |
| order_request_id |  [string](#string) | Идентификатор ключа идемпотентности, переданный клиентом, в формате `UID`. Максимальная длина 36 — символов. |
| response_metadata |  [ResponseMetadata](#responsemetadata) | Метадата. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetStopOrdersRequest
Запрос получения списка активных стоп-заявок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета клиента. |
| status |  [StopOrderStatusOption](#stoporderstatusoption) | Статус заявок. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Левая граница. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Правая граница. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetStopOrdersResponse
Список активных стоп-заявок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| stop_orders | Массив объектов [StopOrder](#stoporder) | Массив стоп-заявок по счету. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CancelStopOrderRequest
Запрос отмены выставленной стоп-заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета клиента. |
| stop_order_id |  [string](#string) | Уникальный идентификатор стоп-заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CancelStopOrderResponse
Результат отмены выставленной стоп-заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время отмены заявки по UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### StopOrder
Информация о стоп-заявке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| stop_order_id |  [string](#string) | Уникальный идентификатор стоп-заявки. |
| lots_requested |  [int64](#int64) | Запрошено лотов. |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| direction |  [StopOrderDirection](#stoporderdirection) | Направление операции. |
| currency |  [string](#string) | Валюта стоп-заявки. |
| order_type |  [StopOrderType](#stopordertype) | Тип стоп-заявки. |
| create_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время выставления заявки по UTC. |
| activation_date_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время конвертации стоп-заявки в биржевую по UTC. |
| expiration_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время снятия заявки по UTC. |
| price |  [MoneyValue](#moneyvalue) | Цена заявки за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. |
| stop_price |  [MoneyValue](#moneyvalue) | Цена активации стоп-заявки за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. |
| instrument_uid |  [string](#string) | `instrument_uid`-идентификатор инструмента. |
| take_profit_type |  [TakeProfitType](#takeprofittype) | Подтип стоп-заявки — `TakeProfit`. |
| trailing_data |  [StopOrder.TrailingData](#stopordertrailingdata) | Параметры трейлинг-стопа. |
| status |  [StopOrderStatusOption](#stoporderstatusoption) | Статус заявки. |
| exchange_order_type |  [ExchangeOrderType](#exchangeordertype) | Тип дочерней биржевой заявки для тейкпрофита. |
| exchange_order_id |  [string](#string) | Идентификатор биржевой заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### StopOrder.TrailingData



| Field | Type | Description |
| ----- | ---- | ----------- |
| indent |  [Quotation](#quotation) | Отступ. |
| indent_type |  [TrailingValueType](#trailingvaluetype) | Тип величины отступа. |
| spread |  [Quotation](#quotation) | Размер защитного спреда. |
| spread_type |  [TrailingValueType](#trailingvaluetype) | Тип величины защитного спреда. |
| status |  [TrailingStopStatus](#trailingstopstatus) | Статус трейлинг-стопа. |
| price |  [Quotation](#quotation) | Цена исполнения. |
| extr |  [Quotation](#quotation) | Локальный экстремум. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### StopOrderDirection
Направление сделки стоп-заявки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_DIRECTION_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_DIRECTION_BUY | 1 | Покупка. |
| STOP_ORDER_DIRECTION_SELL | 2 | Продажа. |




#### StopOrderExpirationType
Тип экспирации стоп-заявке.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL | 1 | Действительно до отмены. |
| STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE | 2 | Действительно до даты снятия. |




#### StopOrderType
Тип стоп-заявки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_TYPE_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_TYPE_TAKE_PROFIT | 1 | `Take-profit`-заявка. |
| STOP_ORDER_TYPE_STOP_LOSS | 2 | `Stop-loss`-заявка. |
| STOP_ORDER_TYPE_STOP_LIMIT | 3 | `Stop-limit`-заявка. |




#### StopOrderStatusOption
Статус стоп-заяки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_STATUS_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_STATUS_ALL | 1 | Все заявки. |
| STOP_ORDER_STATUS_ACTIVE | 2 | Активные заявки. |
| STOP_ORDER_STATUS_EXECUTED | 3 | Исполненные заявки. |
| STOP_ORDER_STATUS_CANCELED | 4 | Отмененные заявки. |
| STOP_ORDER_STATUS_EXPIRED | 5 | Истекшие заявки. |




#### ExchangeOrderType
Тип выставляемой заявки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| EXCHANGE_ORDER_TYPE_UNSPECIFIED | 0 | Значение не указано. |
| EXCHANGE_ORDER_TYPE_MARKET | 1 | Заявка по рыночной цене. |
| EXCHANGE_ORDER_TYPE_LIMIT | 2 | Лимитная заявка. |




#### TakeProfitType
Тип TakeProfit-заявки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TAKE_PROFIT_TYPE_UNSPECIFIED | 0 | Значение не указано. |
| TAKE_PROFIT_TYPE_REGULAR | 1 | Обычная заявка, значение по умолчанию. |
| TAKE_PROFIT_TYPE_TRAILING | 2 | Трейлинг-стоп. |




#### TrailingValueType
Тип параметров значений трейлинг-стопа.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TRAILING_VALUE_UNSPECIFIED | 0 | Значение не указано. |
| TRAILING_VALUE_ABSOLUTE | 1 | Абсолютное значение в единицах цены. |
| TRAILING_VALUE_RELATIVE | 2 | Относительное значение в процентах. |




#### TrailingStopStatus
Статус трейлинг-стопа.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TRAILING_STOP_UNSPECIFIED | 0 | Значение не указано. |
| TRAILING_STOP_ACTIVE | 1 | Активный. |
| TRAILING_STOP_ACTIVATED | 2 | Активированный. |


 <!-- range .Enums -->
 <!-- range HasServices -->
 <!-- range .Files -->

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

