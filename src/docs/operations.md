





## OperationsService
С помощью методов сервиса можно получить:<br/><br/> **1**. Список операций по счету.<br/> **2**.
Портфель по счету.<br/> **3**. Позиции ценных бумаг на счете.<br/> **4**.
Доступный остаток для вывода средств.<br/> **5**. Различные отчеты.

###Методы сервиса


#### GetOperations
GetOperations — список операций по счету
При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).

- Тело запроса — [OperationsRequest](#operationsrequest)

- Тело ответа — [OperationsResponse](#operationsresponse)


#### GetPortfolio
GetPortfolio — портфель по счету

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


#### GetPositions
GetPositions — список позиций по счету

- Тело запроса — [PositionsRequest](#positionsrequest)

- Тело ответа — [PositionsResponse](#positionsresponse)


#### GetWithdrawLimits
GetWithdrawLimits — доступный остаток для вывода средств

- Тело запроса — [WithdrawLimitsRequest](#withdrawlimitsrequest)

- Тело ответа — [WithdrawLimitsResponse](#withdrawlimitsresponse)


#### GetBrokerReport
GetBrokerReport — брокерский отчет.

- Тело запроса — [BrokerReportRequest](#brokerreportrequest)

- Тело ответа — [BrokerReportResponse](#brokerreportresponse)


#### GetDividendsForeignIssuer
GetDividendsForeignIssuer — отчет «Справка о доходах за пределами РФ»

- Тело запроса — [GetDividendsForeignIssuerRequest](#getdividendsforeignissuerrequest)

- Тело ответа — [GetDividendsForeignIssuerResponse](#getdividendsforeignissuerresponse)


#### GetOperationsByCursor
GetOperationsByCursor — список операций по счету с пагинацией
При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).

- Тело запроса — [GetOperationsByCursorRequest](#getoperationsbycursorrequest)

- Тело ответа — [GetOperationsByCursorResponse](#getoperationsbycursorresponse)

 <!-- range .Methods -->


## OperationsStreamService


###Методы сервиса


#### PortfolioStream
PortfolioStream — стрим обновлений портфеля

- Тело запроса — [PortfolioStreamRequest](#portfoliostreamrequest)

- Тело ответа — [PortfolioStreamResponse](#portfoliostreamresponse)


#### PositionsStream
PositionsStream — стрим обновлений информации по изменению позиций портфеля

- Тело запроса — [PositionsStreamRequest](#positionsstreamrequest)

- Тело ответа — [PositionsStreamResponse](#positionsstreamresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### OperationsRequest
Запрос получения списка операций по счету.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета клиента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода по UTC. |
| state |  [OperationState](#operationstate) | Статус запрашиваемых операций. |
| figi |  [string](#string) | FIGI-идентификатор инструмента для фильтрации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OperationsResponse
Список операций.


| Field | Type | Description |
| ----- | ---- | ----------- |
| operations | Массив объектов [Operation](#operation) | Массив операций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Operation
Данные по операции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | Идентификатор операции. |
| parent_operation_id |  [string](#string) | Идентификатор родительской операции. |
| currency |  [string](#string) | Валюта операции. |
| payment |  [MoneyValue](#moneyvalue) | Сумма операции. |
| price |  [MoneyValue](#moneyvalue) | Цена операции за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. |
| state |  [OperationState](#operationstate) | Статус операции. |
| quantity |  [int64](#int64) | Количество единиц инструмента. |
| quantity_rest |  [int64](#int64) | Неисполненный остаток по сделке. |
| figi |  [string](#string) | FIGI-идентификатор инструмента, связанного с операцией. |
| instrument_type |  [string](#string) | Тип инструмента. Возможные значения: <br/><br/>`bond` — облигация; <br/>`share` — акция; <br/>`currency` — валюта; <br/>`etf` — фонд; <br/>`futures` — фьючерс. |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время операции в формате часовом поясе UTC. |
| type |  [string](#string) | Текстовое описание типа операции. |
| operation_type |  [OperationType](#operationtype) | Тип операции. |
| trades | Массив объектов [OperationTrade](#operationtrade) | Массив сделок. |
| asset_uid |  [string](#string) | Идентификатор актива |
| position_uid |  [string](#string) | Уникальный идентификатор позиции. |
| instrument_uid |  [string](#string) | Уникальный идентификатор инструмента. |
| child_operations | Массив объектов [ChildOperationItem](#childoperationitem) | Массив дочерних операций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OperationTrade
Сделка по операции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| trade_id |  [string](#string) | Идентификатор сделки. |
| date_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время сделки по UTC. |
| quantity |  [int64](#int64) | Количество инструментов. |
| price |  [MoneyValue](#moneyvalue) | Цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioRequest
Запрос получения текущего портфеля по счету.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета пользователя. |
| currency |  [PortfolioRequest.CurrencyRequest](#portfoliorequestcurrencyrequest) | Валюта, в которой нужно рассчитать портфель. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioResponse
Текущий портфель по счету.


| Field | Type | Description |
| ----- | ---- | ----------- |
| total_amount_shares |  [MoneyValue](#moneyvalue) | Общая стоимость акций в портфеле. |
| total_amount_bonds |  [MoneyValue](#moneyvalue) | Общая стоимость облигаций в портфеле. |
| total_amount_etf |  [MoneyValue](#moneyvalue) | Общая стоимость фондов в портфеле. |
| total_amount_currencies |  [MoneyValue](#moneyvalue) | Общая стоимость валют в портфеле. |
| total_amount_futures |  [MoneyValue](#moneyvalue) | Общая стоимость фьючерсов в портфеле. |
| expected_yield |  [Quotation](#quotation) | Текущая относительная доходность портфеля в %. |
| positions | Массив объектов [PortfolioPosition](#portfolioposition) | Список позиций портфеля. |
| account_id |  [string](#string) | Идентификатор счета пользователя. |
| total_amount_options |  [MoneyValue](#moneyvalue) | Общая стоимость опционов в портфеле. |
| total_amount_sp |  [MoneyValue](#moneyvalue) | Общая стоимость структурных нот в портфеле. |
| total_amount_portfolio |  [MoneyValue](#moneyvalue) | Общая стоимость портфеля. |
| virtual_positions | Массив объектов [VirtualPortfolioPosition](#virtualportfolioposition) | Массив виртуальных позиций портфеля. |
| daily_yield |  [MoneyValue](#moneyvalue) | Рассчитанная доходность портфеля за день в рублях. |
| daily_yield_relative |  [Quotation](#quotation) | Относительная доходность в день в %. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsRequest
Запрос позиций портфеля по счету.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета пользователя. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsResponse
Список позиций по счету.


| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля. |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля. |
| securities | Массив объектов [PositionsSecurities](#positionssecurities) | Список ценно-бумажных позиций портфеля. |
| limits_loading_in_progress |  [bool](#bool) | Признак идущей выгрузки лимитов в данный момент. |
| futures | Массив объектов [PositionsFutures](#positionsfutures) | Список фьючерсов портфеля. |
| options | Массив объектов [PositionsOptions](#positionsoptions) | Список опционов портфеля. |
| account_id |  [string](#string) | Идентификатор счёта пользователя. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### WithdrawLimitsRequest
Запрос доступного остатка для вывода.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета пользователя. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### WithdrawLimitsResponse
Доступный остаток для вывода.


| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля. |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля. |
| blocked_guarantee | Массив объектов [MoneyValue](#moneyvalue) | Заблокировано под гарантийное обеспечение фьючерсов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioPosition
Позиции портфеля.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| quantity |  [Quotation](#quotation) | Количество инструмента в портфеле в штуках. |
| average_position_price |  [MoneyValue](#moneyvalue) | Средневзвешенная цена позиции. Для пересчета возможна задержка до одной секунды. |
| expected_yield |  [Quotation](#quotation) | Текущая рассчитанная доходность позиции. |
| current_nkd |  [MoneyValue](#moneyvalue) | Текущий НКД. |
| average_position_price_pt |  [Quotation](#quotation) | Deprecated Средняя цена позиции в пунктах (для фьючерсов). Для пересчета возможна задержка до одной секунды. |
| current_price |  [MoneyValue](#moneyvalue) | Текущая цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. |
| average_position_price_fifo |  [MoneyValue](#moneyvalue) | Средняя цена позиции по методу FIFO. Для пересчета возможна задержка до одной секунды. |
| quantity_lots |  [Quotation](#quotation) | Deprecated Количество лотов в портфеле. |
| blocked |  [bool](#bool) | Заблокировано на бирже. |
| blocked_lots |  [Quotation](#quotation) | Количество бумаг, заблокированных выставленными заявками. |
| position_uid |  [string](#string) | Уникальный идентификатор позиции. |
| instrument_uid |  [string](#string) | Уникальный идентификатор инструмента. |
| var_margin |  [MoneyValue](#moneyvalue) | Вариационная маржа. |
| expected_yield_fifo |  [Quotation](#quotation) | Текущая рассчитанная доходность позиции. |
| daily_yield |  [MoneyValue](#moneyvalue) | Рассчитанная доходность портфеля за день. |
| ticker |  [string](#string) | Тикер инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### VirtualPortfolioPosition



| Field | Type | Description |
| ----- | ---- | ----------- |
| position_uid |  [string](#string) | Уникальный идентификатор позиции. |
| instrument_uid |  [string](#string) | Уникальный идентификатор инструмента. |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| quantity |  [Quotation](#quotation) | Количество инструмента в портфеле в штуках. |
| average_position_price |  [MoneyValue](#moneyvalue) | Средневзвешенная цена позиции. Для пересчета возможна задержка до одной секунды. |
| expected_yield |  [Quotation](#quotation) | Текущая рассчитанная доходность позиции. |
| expected_yield_fifo |  [Quotation](#quotation) | Текущая рассчитанная доходность позиции. |
| expire_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата, до которой нужно продать виртуальные бумаги. После этой даты виртуальная позиция «сгораетт». |
| current_price |  [MoneyValue](#moneyvalue) | Текущая цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. |
| average_position_price_fifo |  [MoneyValue](#moneyvalue) | Средняя цена позиции по методу FIFO. Для пересчета возможна задержка до одной секунды. |
| daily_yield |  [MoneyValue](#moneyvalue) | Рассчитанная доходность портфеля за день. |
| ticker |  [string](#string) | Тикер инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsSecurities
Баланс позиции ценной бумаги.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор бумаги. |
| blocked |  [int64](#int64) | Количество бумаг, заблокированных выставленными заявками. |
| balance |  [int64](#int64) | Текущий незаблокированный баланс. |
| position_uid |  [string](#string) | Уникальный идентификатор позиции. |
| instrument_uid |  [string](#string) | Уникальный идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| exchange_blocked |  [bool](#bool) | Заблокировано на бирже. |
| instrument_type |  [string](#string) | Тип инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsFutures
Баланс фьючерса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор фьючерса. |
| blocked |  [int64](#int64) | Количество бумаг, заблокированных выставленными заявками. |
| balance |  [int64](#int64) | Текущий незаблокированный баланс. |
| position_uid |  [string](#string) | Уникальный идентификатор позиции. |
| instrument_uid |  [string](#string) | Уникальный идентификатор  инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsOptions
Баланс опциона.


| Field | Type | Description |
| ----- | ---- | ----------- |
| position_uid |  [string](#string) | Уникальный идентификатор позиции опциона. |
| instrument_uid |  [string](#string) | Уникальный идентификатор  инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| blocked |  [int64](#int64) | Количество бумаг, заблокированных выставленными заявками. |
| balance |  [int64](#int64) | Текущий незаблокированный баланс. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BrokerReportRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| generate_broker_report_request |  [GenerateBrokerReportRequest](#generatebrokerreportrequest) |  |
| get_broker_report_request |  [GetBrokerReportRequest](#getbrokerreportrequest) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BrokerReportResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| generate_broker_report_response |  [GenerateBrokerReportResponse](#generatebrokerreportresponse) |  |
| get_broker_report_response |  [GetBrokerReportResponse](#getbrokerreportresponse) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GenerateBrokerReportRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета клиента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода по UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GenerateBrokerReportResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| task_id |  [string](#string) | Идентификатор задачи формирования брокерского отчета. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrokerReportRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| task_id |  [string](#string) | Идентификатор задачи формирования брокерского отчета. |
| page |  [int32](#int32) | Номер страницы отчета, начинается с 1. Значение по умолчанию — 0. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrokerReportResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| broker_report | Массив объектов [BrokerReport](#brokerreport) |  |
| itemsCount |  [int32](#int32) | Количество записей в отчете. |
| pagesCount |  [int32](#int32) | Количество страниц с данными отчета, начинается с 0. |
| page |  [int32](#int32) | Текущая страница, начинается с 0. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BrokerReport



| Field | Type | Description |
| ----- | ---- | ----------- |
| trade_id |  [string](#string) | Номер сделки. |
| order_id |  [string](#string) | Номер поручения. |
| figi |  [string](#string) | FIGI-идентификаторинструмента. |
| execute_sign |  [string](#string) | Признак исполнения. |
| trade_datetime |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время заключения по UTC. |
| exchange |  [string](#string) | Торговая площадка. |
| class_code |  [string](#string) | Режим торгов. |
| direction |  [string](#string) | Вид сделки. |
| name |  [string](#string) | Сокращенное наименование актива. |
| ticker |  [string](#string) | Код актива. |
| price |  [MoneyValue](#moneyvalue) | Цена за единицу. |
| quantity |  [int64](#int64) | Количество. |
| order_amount |  [MoneyValue](#moneyvalue) | Сумма без НКД. |
| aci_value |  [Quotation](#quotation) | НКД. |
| total_order_amount |  [MoneyValue](#moneyvalue) | Сумма сделки. |
| broker_commission |  [MoneyValue](#moneyvalue) | Комиссия брокера. |
| exchange_commission |  [MoneyValue](#moneyvalue) | Комиссия биржи. |
| exchange_clearing_commission |  [MoneyValue](#moneyvalue) | Комиссия клирингового центра. |
| repo_rate |  [Quotation](#quotation) | Ставка РЕПО, %. |
| party |  [string](#string) | Контрагент или брокерарокер. |
| clear_value_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата расчетов по UTC. |
| sec_value_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата поставки по UTC. |
| broker_status |  [string](#string) | Статус брокера. |
| separate_agreement_type |  [string](#string) | Тип договора. |
| separate_agreement_number |  [string](#string) | Номер договора. |
| separate_agreement_date |  [string](#string) | Дата договора. |
| delivery_type |  [string](#string) | Тип расчета по сделке. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsForeignIssuerRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| generate_div_foreign_issuer_report |  [GenerateDividendsForeignIssuerReportRequest](#generatedividendsforeignissuerreportrequest) | Объект запроса формирования отчета. |
| get_div_foreign_issuer_report |  [GetDividendsForeignIssuerReportRequest](#getdividendsforeignissuerreportrequest) | Объект запроса сформированного отчета. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsForeignIssuerResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| generate_div_foreign_issuer_report_response |  [GenerateDividendsForeignIssuerReportResponse](#generatedividendsforeignissuerreportresponse) | Объект результата задачи запуска формирования отчета. |
| div_foreign_issuer_report |  [GetDividendsForeignIssuerReportResponse](#getdividendsforeignissuerreportresponse) | Отчет «Справка о доходах за пределами РФ». |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GenerateDividendsForeignIssuerReportRequest
Объект запроса формирования отчета «Справка о доходах за пределами РФ».


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета клиента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода по UTC. Как правило, можно сформировать отчет по дату на несколько дней меньше текущей. Начало и окончание периода должны быть в рамках одного календарного года. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsForeignIssuerReportRequest
Объект запроса сформированного отчета «Справка о доходах за пределами РФ».


| Field | Type | Description |
| ----- | ---- | ----------- |
| task_id |  [string](#string) | Идентификатор задачи формирования отчета. |
| page |  [int32](#int32) | Номер страницы отчета (начинается с 0), значение по умолчанию: 0. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GenerateDividendsForeignIssuerReportResponse
Объект результата задачи запуска формирования отчета «Справка о доходах за пределами РФ».


| Field | Type | Description |
| ----- | ---- | ----------- |
| task_id |  [string](#string) | Идентификатор задачи формирования отчета. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsForeignIssuerReportResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| dividends_foreign_issuer_report | Массив объектов [DividendsForeignIssuerReport](#dividendsforeignissuerreport) |  |
| itemsCount |  [int32](#int32) | Количество записей в отчете. |
| pagesCount |  [int32](#int32) | Количество страниц с данными отчета, начинается с 0. |
| page |  [int32](#int32) | Текущая страница, начинается с 0. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### DividendsForeignIssuerReport
Отчет «Справка о доходах за пределами РФ».


| Field | Type | Description |
| ----- | ---- | ----------- |
| record_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фиксации реестра. |
| payment_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выплаты. |
| security_name |  [string](#string) | Наименование ценной бумаги. |
| isin |  [string](#string) | ISIN-идентификатор ценной бумаги. |
| issuer_country |  [string](#string) | Страна эмитента. Для депозитарных расписок указывается страна эмитента базового актива. |
| quantity |  [int64](#int64) | Количество ценных бумаг. |
| dividend |  [Quotation](#quotation) | Выплаты на одну бумагу |
| external_commission |  [Quotation](#quotation) | Комиссия внешних платежных агентов. |
| dividend_gross |  [Quotation](#quotation) | Сумма до удержания налога. |
| tax |  [Quotation](#quotation) | Сумма налога, удержанного агентом. |
| dividend_amount |  [Quotation](#quotation) | Итоговая сумма выплаты. |
| currency |  [string](#string) | Валюта. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioStreamRequest
Запрос установки stream-соединения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [string](#string) | Массив идентификаторов счетов пользователя. |
| ping_settings |  [PingDelaySettings](#pingdelaysettings) | Запрос настройки пинга. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioStreamResponse
Информация по позициям и доходностям портфелей.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscriptions |  [PortfolioSubscriptionResult](#portfoliosubscriptionresult) | Объект результата подписки. |
| portfolio |  [PortfolioResponse](#portfolioresponse) | Объект стриминга портфеля. |
| ping |  [Ping](#ping) | Проверка активности стрима. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioSubscriptionResult
Объект результата подписки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [AccountSubscriptionStatus](#accountsubscriptionstatus) | Массив счетов клиента. |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](/invest/intro/developer/protocols/grpc#tracking-id). |
| stream_id |  [string](#string) | Идентификатор открытого соединения |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AccountSubscriptionStatus
Счет клиента.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета. |
| subscription_status |  [PortfolioSubscriptionStatus](#portfoliosubscriptionstatus) | Результат подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOperationsByCursorRequest
Запрос списка операций по счету с пагинацией.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета клиента, обязательный параметр. Остальные параметры опциональны. |
| instrument_id |  [string](#string) | Идентификатор инструмента — FIGI или UID инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода по UTC. |
| cursor |  [string](#string) | Идентификатор элемента, с которого начать формировать ответ. |
| limit |  [int32](#int32) | Лимит количества операций. По умолчанию — `100`, максимальное значение — `1000`. |
| operation_types | Массив объектов [OperationType](#operationtype) | Тип операции. Принимает значение из списка `OperationType`. |
| state |  [OperationState](#operationstate) | Статус запрашиваемых операций. Возможные значения указаны в `OperationState`. |
| without_commissions |  [bool](#bool) | Флаг возврата комиссии. По умолчанию — `false`. |
| without_trades |  [bool](#bool) | Флаг получения ответа без массива сделок. |
| without_overnights |  [bool](#bool) | Флаг показа overnight операций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOperationsByCursorResponse
Список операций по счету с пагинацией.


| Field | Type | Description |
| ----- | ---- | ----------- |
| has_next |  [bool](#bool) | Признак, есть ли следующий элемент. |
| next_cursor |  [string](#string) | Следующий курсор. |
| items | Массив объектов [OperationItem](#operationitem) | Список операций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OperationItem
Данные об операции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| cursor |  [string](#string) | Курсор. |
| broker_account_id |  [string](#string) | Номер счета клиента. |
| id |  [string](#string) | Идентификатор операции, может меняться с течением времени. |
| parent_operation_id |  [string](#string) | Идентификатор родительской операции. Может измениться, если изменился ID родительской операции. |
| name |  [string](#string) | Название операции. |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата поручения. |
| type |  [OperationType](#operationtype) | Тип операции. |
| description |  [string](#string) | Описание операции. |
| state |  [OperationState](#operationstate) | Статус поручения. |
| instrument_uid |  [string](#string) | Уникальный идентификатор инструмента. |
| figi |  [string](#string) | FIGI. |
| instrument_type |  [string](#string) | Тип инструмента. |
| instrument_kind |  [InstrumentType](#instrumenttype) | Тип инструмента. |
| position_uid |  [string](#string) | Уникальный идентификатор позиции. |
| payment |  [MoneyValue](#moneyvalue) | Сумма операции. |
| price |  [MoneyValue](#moneyvalue) | Цена операции за 1 инструмент. |
| commission |  [MoneyValue](#moneyvalue) | Комиссия. |
| yield |  [MoneyValue](#moneyvalue) | Доходность. |
| yield_relative |  [Quotation](#quotation) | Относительная доходность. |
| accrued_int |  [MoneyValue](#moneyvalue) | Накопленный купонный доход. |
| quantity |  [int64](#int64) | Количество единиц инструмента. |
| quantity_rest |  [int64](#int64) | Неисполненный остаток по сделке. |
| quantity_done |  [int64](#int64) | Исполненный остаток. |
| cancel_date_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время снятия заявки. |
| cancel_reason |  [string](#string) | Причина отмены операции. |
| trades_info |  [OperationItemTrades](#operationitemtrades) | Массив сделок. |
| asset_uid |  [string](#string) | Идентификатор актива. |
| child_operations | Массив объектов [ChildOperationItem](#childoperationitem) | Массив дочерних операций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OperationItemTrades
Массив с информацией о сделках.


| Field | Type | Description |
| ----- | ---- | ----------- |
| trades | Массив объектов [OperationItemTrade](#operationitemtrade) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OperationItemTrade
Сделка по операции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| num |  [string](#string) | Номер сделки. |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата сделки. |
| quantity |  [int64](#int64) | Количество в единицах. |
| price |  [MoneyValue](#moneyvalue) | Цена. |
| yield |  [MoneyValue](#moneyvalue) | Доходность. |
| yield_relative |  [Quotation](#quotation) | Относительная доходность. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsStreamRequest
Запрос установки stream-соединения позиций.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [string](#string) | Массив идентификаторов счетов пользователя. |
| with_initial_positions |  [bool](#bool) | Получение состояния позиций на момент подключения. |
| ping_settings |  [PingDelaySettings](#pingdelaysettings) | Запрос настройки пинга. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsStreamResponse
Информация по изменению позиций портфеля.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscriptions |  [PositionsSubscriptionResult](#positionssubscriptionresult) | Объект результата подписки. |
| position |  [PositionData](#positiondata) | Объект стриминга позиций. |
| ping |  [Ping](#ping) | Проверка активности стрима. |
| initial_positions |  [PositionsResponse](#positionsresponse) | Текущие позиции. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsSubscriptionResult
Объект результата подписки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [PositionsSubscriptionStatus](#positionssubscriptionstatus) | Массив счетов клиента. |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](/invest/intro/developer/protocols/grpc#tracking-id). |
| stream_id |  [string](#string) | Идентификатор открытого соединения |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsSubscriptionStatus
Счет клиента.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета. |
| subscription_status |  [PositionsAccountSubscriptionStatus](#positionsaccountsubscriptionstatus) | Результат подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionData
Данные о позиции портфеля.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счета. |
| money | Массив объектов [PositionsMoney](#positionsmoney) | Массив валютных позиций портфеля. |
| securities | Массив объектов [PositionsSecurities](#positionssecurities) | Список ценно-бумажных позиций портфеля. |
| futures | Массив объектов [PositionsFutures](#positionsfutures) | Список фьючерсов портфеля. |
| options | Массив объектов [PositionsOptions](#positionsoptions) | Список опционов портфеля. |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время операции в формате UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsMoney
Валютная позиция портфеля.


| Field | Type | Description |
| ----- | ---- | ----------- |
| available_value |  [MoneyValue](#moneyvalue) | Доступное количество валютный позиций. |
| blocked_value |  [MoneyValue](#moneyvalue) | Заблокированное количество валютных позиций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### ChildOperationItem



| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_uid |  [string](#string) | Уникальный идентификатор инструмента. |
| payment |  [MoneyValue](#moneyvalue) | Сумма операции. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### OperationState
Статус запрашиваемых операций.

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_STATE_UNSPECIFIED | 0 | Статус операции не определен. |
| OPERATION_STATE_EXECUTED | 1 | Исполнена частично или полностью. |
| OPERATION_STATE_CANCELED | 2 | Отменена. |
| OPERATION_STATE_PROGRESS | 3 | Исполняется. |




#### OperationType
Тип операции.

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_TYPE_UNSPECIFIED | 0 | Тип операции не определен. |
| OPERATION_TYPE_INPUT | 1 | Пополнение брокерского счета. |
| OPERATION_TYPE_BOND_TAX | 2 | Удержание НДФЛ по купонам. |
| OPERATION_TYPE_OUTPUT_SECURITIES | 3 | Вывод ЦБ. |
| OPERATION_TYPE_OVERNIGHT | 4 | Доход по сделке РЕПО овернайт. |
| OPERATION_TYPE_TAX | 5 | Удержание налога. |
| OPERATION_TYPE_BOND_REPAYMENT_FULL | 6 | Полное погашение облигаций. |
| OPERATION_TYPE_SELL_CARD | 7 | Продажа ЦБ с карты. |
| OPERATION_TYPE_DIVIDEND_TAX | 8 | Удержание налога по дивидендам. |
| OPERATION_TYPE_OUTPUT | 9 | Вывод денежных средств. |
| OPERATION_TYPE_BOND_REPAYMENT | 10 | Частичное погашение облигаций. |
| OPERATION_TYPE_TAX_CORRECTION | 11 | Корректировка налога. |
| OPERATION_TYPE_SERVICE_FEE | 12 | Удержание комиссии за обслуживание брокерского счета. |
| OPERATION_TYPE_BENEFIT_TAX | 13 | Удержание налога за материальную выгоду. |
| OPERATION_TYPE_MARGIN_FEE | 14 | Удержание комиссии за непокрытую позицию. |
| OPERATION_TYPE_BUY | 15 | Покупка ЦБ. |
| OPERATION_TYPE_BUY_CARD | 16 | Покупка ЦБ с карты. |
| OPERATION_TYPE_INPUT_SECURITIES | 17 | Перевод ценных бумаг из другого депозитария. |
| OPERATION_TYPE_SELL_MARGIN | 18 | Продажа в результате Margin-call. |
| OPERATION_TYPE_BROKER_FEE | 19 | Удержание комиссии за операцию. |
| OPERATION_TYPE_BUY_MARGIN | 20 | Покупка в результате Margin-call. |
| OPERATION_TYPE_DIVIDEND | 21 | Выплата дивидендов. |
| OPERATION_TYPE_SELL | 22 | Продажа ЦБ. |
| OPERATION_TYPE_COUPON | 23 | Выплата купонов. |
| OPERATION_TYPE_SUCCESS_FEE | 24 | Удержание комиссии SuccessFee. |
| OPERATION_TYPE_DIVIDEND_TRANSFER | 25 | Передача дивидендного дохода. |
| OPERATION_TYPE_ACCRUING_VARMARGIN | 26 | Зачисление вариационной маржи. |
| OPERATION_TYPE_WRITING_OFF_VARMARGIN | 27 | Списание вариационной маржи. |
| OPERATION_TYPE_DELIVERY_BUY | 28 | Покупка в рамках экспирации фьючерсного контракта. |
| OPERATION_TYPE_DELIVERY_SELL | 29 | Продажа в рамках экспирации фьючерсного контракта. |
| OPERATION_TYPE_TRACK_MFEE | 30 | Комиссия за управление по счету автоследования. |
| OPERATION_TYPE_TRACK_PFEE | 31 | Комиссия за результат по счету автоследования. |
| OPERATION_TYPE_TAX_PROGRESSIVE | 32 | Удержание налога по ставке 15%. |
| OPERATION_TYPE_BOND_TAX_PROGRESSIVE | 33 | Удержание налога по купонам по ставке 15%. |
| OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE | 34 | Удержание налога по дивидендам по ставке 15%. |
| OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE | 35 | Удержание налога за материальную выгоду по ставке 15%. |
| OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE | 36 | Корректировка налога по ставке 15%. |
| OPERATION_TYPE_TAX_REPO_PROGRESSIVE | 37 | Удержание налога за возмещение по сделкам РЕПО по ставке 15%. |
| OPERATION_TYPE_TAX_REPO | 38 | Удержание налога за возмещение по сделкам РЕПО. |
| OPERATION_TYPE_TAX_REPO_HOLD | 39 | Удержание налога по сделкам РЕПО. |
| OPERATION_TYPE_TAX_REPO_REFUND | 40 | Возврат налога по сделкам РЕПО. |
| OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE | 41 | Удержание налога по сделкам РЕПО по ставке 15%. |
| OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE | 42 | Возврат налога по сделкам РЕПО по ставке 15%. |
| OPERATION_TYPE_DIV_EXT | 43 | Выплата дивидендов на карту. |
| OPERATION_TYPE_TAX_CORRECTION_COUPON | 44 | Корректировка налога по купонам. |
| OPERATION_TYPE_CASH_FEE | 45 | Комиссия за валютный остаток. |
| OPERATION_TYPE_OUT_FEE | 46 | Комиссия за вывод валюты с брокерского счета. |
| OPERATION_TYPE_OUT_STAMP_DUTY | 47 | Гербовый сбор. |
| OPERATION_TYPE_OUTPUT_SWIFT | 50 | SWIFT-перевод. |
| OPERATION_TYPE_INPUT_SWIFT | 51 | SWIFT-перевод. |
| OPERATION_TYPE_OUTPUT_ACQUIRING | 53 | Перевод на карту. |
| OPERATION_TYPE_INPUT_ACQUIRING | 54 | Перевод с карты. |
| OPERATION_TYPE_OUTPUT_PENALTY | 55 | Комиссия за вывод средств. |
| OPERATION_TYPE_ADVICE_FEE | 56 | Списание оплаты за сервис Советов. |
| OPERATION_TYPE_TRANS_IIS_BS | 57 | Перевод ценных бумаг с ИИС на брокерский счет. |
| OPERATION_TYPE_TRANS_BS_BS | 58 | Перевод ценных бумаг с одного брокерского счета на другой. |
| OPERATION_TYPE_OUT_MULTI | 59 | Вывод денежных средств со счета. |
| OPERATION_TYPE_INP_MULTI | 60 | Пополнение денежных средств со счета. |
| OPERATION_TYPE_OVER_PLACEMENT | 61 | Размещение биржевого овернайта. |
| OPERATION_TYPE_OVER_COM | 62 | Списание комиссии. |
| OPERATION_TYPE_OVER_INCOME | 63 | Доход от оверанайта. |
| OPERATION_TYPE_OPTION_EXPIRATION | 64 | Экспирация опциона. |
| OPERATION_TYPE_FUTURE_EXPIRATION | 65 | Экспирация фьючерса. |




#### PortfolioSubscriptionStatus
Результат подписки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED | 0 | Тип не определен. |
| PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS | 1 | Успешно. |
| PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND | 2 | Счет не найден или недостаточно прав. |
| PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR | 3 | Произошла ошибка. |




#### PositionsAccountSubscriptionStatus
Результат подписки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED | 0 | Тип не определен. |
| POSITIONS_SUBSCRIPTION_STATUS_SUCCESS | 1 | Успешно. |
| POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND | 2 | Счет не найден или недостаточно прав. |
| POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR | 3 | Произошла ошибка. |




#### PortfolioRequest.CurrencyRequest


| Name | Number | Description |
| ---- | ------ | ----------- |
| RUB | 0 | Рубли |
| USD | 1 | Доллары |
| EUR | 2 | Евро |


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

