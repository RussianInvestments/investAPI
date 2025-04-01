





## SignalService
Сервис для получения технических сигналов и мнений аналитиков по инструментам.

###Методы сервиса


#### GetStrategies
GetStrategies — стратегии

- Тело запроса — [GetStrategiesRequest](#getstrategiesrequest)

- Тело ответа — [GetStrategiesResponse](#getstrategiesresponse)


#### GetSignals
GetSignals — сигналы

- Тело запроса — [GetSignalsRequest](#getsignalsrequest)

- Тело ответа — [GetSignalsResponse](#getsignalsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### GetStrategiesRequest
Запрос стратегий.


| Field | Type | Description |
| ----- | ---- | ----------- |
| strategy_id |  [string](#string) | Идентификатор стратегии. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetStrategiesResponse
Стратегии


| Field | Type | Description |
| ----- | ---- | ----------- |
| strategies | Массив объектов [Strategy](#strategy) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Strategy
Стратегия


| Field | Type | Description |
| ----- | ---- | ----------- |
| strategy_id |  [string](#string) | Идентификатор стратегии. |
| strategy_name |  [string](#string) | Название стратегии. |
| strategy_description |  [string](#string) | Описание стратегии. |
| strategy_url |  [string](#string) | Ссылка на страницу с описанием стратегии. |
| strategy_type |  [StrategyType](#strategytype) | Тип стратегии. |
| active_signals |  [int32](#int32) | Количество активных сигналов. |
| total_signals |  [int32](#int32) | Общее количество сигналов. |
| time_in_position |  [int64](#int64) | Среднее время нахождения сигнала в позиции. |
| average_signal_yield |  [Quotation](#quotation) | Средняя доходность сигнала в стратегии. |
| average_signal_yield_year |  [Quotation](#quotation) | Средняя доходность сигналов в стратегии за последний год. |
| yield |  [Quotation](#quotation) | Доходность стратегии. |
| yield_year |  [Quotation](#quotation) | Доходность стратегии за последний год. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetSignalsRequest
Запрос сигналов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| signal_id |  [string](#string) | Идентификатор сигнала. |
| strategy_id |  [string](#string) | Идентификатор стратегии. |
| strategy_type |  [StrategyType](#strategytype) | Тип стратегии. |
| instrument_uid |  [string](#string) | Идентификатор бумаги. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата начала запрашиваемого интервала по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата конца запрашиваемого интервала по UTC. |
| direction |  [SignalDirection](#signaldirection) | Направление сигнала. |
| active |  [SignalState](#signalstate) | Состояние сигнала. |
| paging |  [Page](#page) | Настройки пагинации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetSignalsResponse
Сигналы.


| Field | Type | Description |
| ----- | ---- | ----------- |
| signals | Массив объектов [Signal](#signal) | Массив сигналов. |
| paging |  [PageResponse](#pageresponse) | Данные по пагинации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Signal
Сигнал.


| Field | Type | Description |
| ----- | ---- | ----------- |
| signal_id |  [string](#string) | Идентификатор сигнала. |
| strategy_id |  [string](#string) | Идентификатор стратегии. |
| strategy_name |  [string](#string) | Название стратегии. |
| instrument_uid |  [string](#string) | Идентификатор бумаги. |
| create_dt |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время создания сигнала по UTC. |
| direction |  [SignalDirection](#signaldirection) | Направление сигнала. |
| initial_price |  [Quotation](#quotation) | Цена бумаги на момент формирования сигнала. |
| info |  [string](#string) | Дополнительная информация о сигнале. |
| name |  [string](#string) | Название сигнала. |
| target_price |  [Quotation](#quotation) | Целевая цена. |
| end_dt |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время дедлайна сигнала по UTC. |
| probability |  [int32](#int32) | Вероятность сигнала. |
| stoploss |  [Quotation](#quotation) | Порог закрытия сигнала по стоплосс. |
| close_price |  [Quotation](#quotation) | Цена закрытия сигнала. |
| close_dt |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время закрытия сигнала по UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### StrategyType
Тип стратегии.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STRATEGY_TYPE_UNSPECIFIED | 0 | Не определен. |
| STRATEGY_TYPE_TECHNICAL | 1 | Техническая стратегия. |
| STRATEGY_TYPE_FUNDAMENTAL | 2 | Фундаментальная стратегия. |




#### SignalDirection
Направление сигнала.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIGNAL_DIRECTION_UNSPECIFIED | 0 | Не определен. |
| SIGNAL_DIRECTION_BUY | 1 | Покупка. |
| SIGNAL_DIRECTION_SELL | 2 | Продажа. |




#### SignalState
Статус сигнала.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIGNAL_STATE_UNSPECIFIED | 0 | Не определен. |
| SIGNAL_STATE_ACTIVE | 1 | Активный сигнал. |
| SIGNAL_STATE_CLOSED | 2 | Закрытый сигнал. |
| SIGNAL_STATE_ALL | 3 | Все состояния. |


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

