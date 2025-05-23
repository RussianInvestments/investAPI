





## InstrumentsService
Методы сервиса предназначены для получения:<br/>1. Информации об инструментах.<br/>2.
Расписания торговых сессий.<br/>3. Календаря выплат купонов по облигациям.<br/>4.
Размера гарантийного обеспечения по фьючерсам.<br/>5. Дивидендов по ценной бумаге.

###Методы сервиса


#### TradingSchedules
TradingSchedules — расписания торговых площадок

- Тело запроса — [TradingSchedulesRequest](#tradingschedulesrequest)

- Тело ответа — [TradingSchedulesResponse](#tradingschedulesresponse)


#### BondBy
BondBy — получить облигацию по ее идентификатору

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [BondResponse](#bondresponse)


#### Bonds
Bonds — список облигаций

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [BondsResponse](#bondsresponse)


#### GetBondCoupons
GetBondCoupons — график выплат купонов по облигации

- Тело запроса — [GetBondCouponsRequest](#getbondcouponsrequest)

- Тело ответа — [GetBondCouponsResponse](#getbondcouponsresponse)


#### GetBondEvents
GetBondEvents — события по облигации

- Тело запроса — [GetBondEventsRequest](#getbondeventsrequest)

- Тело ответа — [GetBondEventsResponse](#getbondeventsresponse)


#### CurrencyBy
CurrencyBy — получить валюту по ее идентификатору

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [CurrencyResponse](#currencyresponse)


#### Currencies
Currencies — список валют

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [CurrenciesResponse](#currenciesresponse)


#### EtfBy
EtfBy — получить инвестиционный фонд по его идентификатору

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [EtfResponse](#etfresponse)


#### Etfs
Etfs — список инвестиционных фондов

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [EtfsResponse](#etfsresponse)


#### FutureBy
FutureBy — получить фьючерс по его идентификатору

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [FutureResponse](#futureresponse)


#### Futures
Futures — список фьючерсов

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [FuturesResponse](#futuresresponse)


#### OptionBy
OptionBy — получить опцион по его идентификатору

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [OptionResponse](#optionresponse)


#### Options
Deprecated Options — список опционов

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [OptionsResponse](#optionsresponse)


#### OptionsBy
OptionsBy — список опционов

- Тело запроса — [FilterOptionsRequest](#filteroptionsrequest)

- Тело ответа — [OptionsResponse](#optionsresponse)


#### ShareBy
ShareBy — получить акцию по ее идентификатору

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [ShareResponse](#shareresponse)


#### Shares
Shares — список акций

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [SharesResponse](#sharesresponse)


#### Indicatives
Indicatives — индикативные инструменты — индексы, товары и другие

- Тело запроса — [IndicativesRequest](#indicativesrequest)

- Тело ответа — [IndicativesResponse](#indicativesresponse)


#### GetAccruedInterests
GetAccruedInterests — накопленный купонный доход по облигации

- Тело запроса — [GetAccruedInterestsRequest](#getaccruedinterestsrequest)

- Тело ответа — [GetAccruedInterestsResponse](#getaccruedinterestsresponse)


#### GetFuturesMargin
GetFuturesMargin — размера гарантийного обеспечения по фьючерсам

- Тело запроса — [GetFuturesMarginRequest](#getfuturesmarginrequest)

- Тело ответа — [GetFuturesMarginResponse](#getfuturesmarginresponse)


#### GetInstrumentBy
GetInstrumentBy — основная информация об инструменте

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [InstrumentResponse](#instrumentresponse)


#### GetDividends
GetDividends — события выплаты дивидендов по инструменту

- Тело запроса — [GetDividendsRequest](#getdividendsrequest)

- Тело ответа — [GetDividendsResponse](#getdividendsresponse)


#### GetAssetBy
GetAssetBy — получить актив по его идентификатору

- Тело запроса — [AssetRequest](#assetrequest)

- Тело ответа — [AssetResponse](#assetresponse)


#### GetAssets
GetAssets — список активов
Метод работает для всех инструментов, кроме срочных — фьючерсов и опционов

- Тело запроса — [AssetsRequest](#assetsrequest)

- Тело ответа — [AssetsResponse](#assetsresponse)


#### GetFavorites
GetFavorites — получить список избранных инструментов

- Тело запроса — [GetFavoritesRequest](#getfavoritesrequest)

- Тело ответа — [GetFavoritesResponse](#getfavoritesresponse)


#### EditFavorites
EditFavorites — отредактировать список избранных инструментов

- Тело запроса — [EditFavoritesRequest](#editfavoritesrequest)

- Тело ответа — [EditFavoritesResponse](#editfavoritesresponse)


#### CreateFavoriteGroup
CreateFavoriteGroup — создать новую группу избранных инструментов

- Тело запроса — [CreateFavoriteGroupRequest](#createfavoritegrouprequest)

- Тело ответа — [CreateFavoriteGroupResponse](#createfavoritegroupresponse)


#### DeleteFavoriteGroup
DeleteFavoriteGroup — удалить группу избранных инструментов

- Тело запроса — [DeleteFavoriteGroupRequest](#deletefavoritegrouprequest)

- Тело ответа — [DeleteFavoriteGroupResponse](#deletefavoritegroupresponse)


#### GetFavoriteGroups
GetFavoriteGroups — список групп избранных инструментов

- Тело запроса — [GetFavoriteGroupsRequest](#getfavoritegroupsrequest)

- Тело ответа — [GetFavoriteGroupsResponse](#getfavoritegroupsresponse)


#### GetCountries
GetCountries — список стран

- Тело запроса — [GetCountriesRequest](#getcountriesrequest)

- Тело ответа — [GetCountriesResponse](#getcountriesresponse)


#### FindInstrument
FindInstrument — найти инструмент

- Тело запроса — [FindInstrumentRequest](#findinstrumentrequest)

- Тело ответа — [FindInstrumentResponse](#findinstrumentresponse)


#### GetBrands
GetBrands — список брендов

- Тело запроса — [GetBrandsRequest](#getbrandsrequest)

- Тело ответа — [GetBrandsResponse](#getbrandsresponse)


#### GetBrandBy
GetBrandBy — получить бренд по его идентификатору

- Тело запроса — [GetBrandRequest](#getbrandrequest)

- Тело ответа — [Brand](#brand)


#### GetAssetFundamentals
GetAssetFundamentals — фундаментальные показатели по активу

- Тело запроса — [GetAssetFundamentalsRequest](#getassetfundamentalsrequest)

- Тело ответа — [GetAssetFundamentalsResponse](#getassetfundamentalsresponse)


#### GetAssetReports
GetAssetReports — расписания выхода отчетностей эмитентов

- Тело запроса — [GetAssetReportsRequest](#getassetreportsrequest)

- Тело ответа — [GetAssetReportsResponse](#getassetreportsresponse)


#### GetConsensusForecasts
GetConsensusForecasts — мнения аналитиков по инструменту

- Тело запроса — [GetConsensusForecastsRequest](#getconsensusforecastsrequest)

- Тело ответа — [GetConsensusForecastsResponse](#getconsensusforecastsresponse)


#### GetForecastBy
GetForecastBy — прогнозы инвестдомов по инструменту

- Тело запроса — [GetForecastRequest](#getforecastrequest)

- Тело ответа — [GetForecastResponse](#getforecastresponse)


#### GetRiskRates
GetRiskRates — ставки риска по инструменту

- Тело запроса — [RiskRatesRequest](#riskratesrequest)

- Тело ответа — [RiskRatesResponse](#riskratesresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### TradingSchedulesRequest
Запрос расписания торгов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| exchange |  [string](#string) | Наименование биржи или расчетного календаря. <br/>Если не передается, возвращается информация по всем доступным торговым площадкам. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода по UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingSchedulesResponse
Список торговых площадок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| exchanges | Массив объектов [TradingSchedule](#tradingschedule) | Список торговых площадок и режимов торгов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingSchedule
Данные по торговой площадке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| exchange |  [string](#string) | Наименование торговой площадки. |
| days | Массив объектов [TradingDay](#tradingday) | Массив с торговыми и неторговыми днями. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingDay
Информация о времени торгов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата. |
| is_trading_day |  [bool](#bool) | Признак торгового дня на бирже. |
| start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала торгов по UTC. |
| end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания торгов по UTC. |
| opening_auction_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала аукциона открытия по UTC. |
| closing_auction_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания аукциона закрытия по UTC. |
| evening_opening_auction_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала аукциона открытия вечерней сессии по UTC. |
| evening_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала вечерней сессии по UTC. |
| evening_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания вечерней сессии по UTC. |
| clearing_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала основного клиринга по UTC. |
| clearing_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания основного клиринга по UTC. |
| premarket_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала премаркета по UTC. |
| premarket_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания премаркета по UTC. |
| closing_auction_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала аукциона закрытия по UTC. |
| opening_auction_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания аукциона открытия по UTC. |
| intervals | Массив объектов [TradingInterval](#tradinginterval) | Торговые интервалы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentRequest
Запрос получения инструмента по идентификатору.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id_type |  [InstrumentIdType](#instrumentidtype) | Тип идентификатора инструмента. Возможные значения — `figi`, `ticker`. [Подробнее об идентификации инструментов](./faq_identification/). |
| class_code |  [string](#string) | Идентификатор `class_code`. Обязательный, если `id_type = ticker`. |
| id |  [string](#string) | Идентификатор запрашиваемого инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentsRequest
Запрос получения инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_status |  [InstrumentStatus](#instrumentstatus) | Статус запрашиваемых инструментов. [Возможные значения](#instrumentstatus). |
| instrument_exchange |  [InstrumentExchangeType](#instrumentexchangetype) | Тип площадки торговли. [Возможные значения](#instrumentexchangetype). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FilterOptionsRequest
Параметры фильтрации опционов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| basic_asset_uid |  [string](#string) | Идентификатор базового актива опциона.  Обязательный параметр. |
| basic_asset_position_uid |  [string](#string) | Идентификатор позиции базового актива опциона. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BondResponse
Информация об облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Bond](#bond) | Информация об облигации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BondsResponse
Список облигаций.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Bond](#bond) | Массив облигаций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBondCouponsRequest
Запрос купонов по облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода по UTC. Фильтрация по `coupon_date` — дата выплаты купона. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода по UTC. Фильтрация по `coupon_date` — дата выплаты купона. |
| instrument_id |  [string](#string) | Идентификатор инструмента — `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBondCouponsResponse
Купоны по облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| events | Массив объектов [Coupon](#coupon) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBondEventsRequest
События по облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода по UTC. |
| instrument_id |  [string](#string) | Идентификатор инструмента — `figi` или `instrument_uid`. |
| type |  [GetBondEventsRequest.EventType](#getbondeventsrequesteventtype) | Тип события |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBondEventsResponse
Объект передачи информации о событии облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| events | Массив объектов [GetBondEventsResponse.BondEvent](#getbondeventsresponsebondevent) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBondEventsResponse.BondEvent



| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id |  [string](#string) | Идентификатор инструмента. |
| event_number |  [int32](#int32) | Номер события для данного типа события. |
| event_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата события. |
| event_type |  [GetBondEventsRequest.EventType](#getbondeventsrequesteventtype) | Тип события. |
| event_total_vol |  [Quotation](#quotation) | Полное количество бумаг, задействованных в событии. |
| fix_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фиксации владельцев для участия в событии. |
| rate_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата определения даты или факта события. |
| default_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата дефолта, если применимо. |
| real_pay_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата реального исполнения обязательства. |
| pay_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выплаты. |
| pay_one_bond |  [MoneyValue](#moneyvalue) | Выплата на одну облигацию. |
| money_flow_val |  [MoneyValue](#moneyvalue) | Выплаты на все бумаги, задействованные в событии. |
| execution |  [string](#string) | Признак исполнения. |
| operation_type |  [string](#string) | Тип операции. |
| value |  [Quotation](#quotation) | Стоимость операции — ставка купона, доля номинала, цена выкупа или коэффициент конвертации. |
| note |  [string](#string) | Примечание. |
| convert_to_fin_tool_id |  [string](#string) | ID выпуска бумаг, в который произведена конвертация (для конвертаций). |
| coupon_start_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало купонного периода. |
| coupon_end_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание купонного периода. |
| coupon_period |  [int32](#int32) | Купонный период. |
| coupon_interest_rate |  [Quotation](#quotation) | Ставка купона, процентов годовых. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Coupon
Объект передачи информации о купоне облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| coupon_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выплаты купона. |
| coupon_number |  [int64](#int64) | Номер купона. |
| fix_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фиксации реестра для выплаты купона — опционально. |
| pay_one_bond |  [MoneyValue](#moneyvalue) | Выплата на одну облигацию. |
| coupon_type |  [CouponType](#coupontype) | Тип купона. |
| coupon_start_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало купонного периода. |
| coupon_end_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание купонного периода. |
| coupon_period |  [int32](#int32) | Купонный период в днях. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CurrencyResponse
Данные по валюте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Currency](#currency) | Информация о валюте. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CurrenciesResponse
Данные по валютам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Currency](#currency) | Массив валют. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EtfResponse
Данные по фонду.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Etf](#etf) | Информация о фонде. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EtfsResponse
Данные по фондам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Etf](#etf) | Массив фондов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FutureResponse
Данные по фьючерсу.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Future](#future) | Информация о фьючерсу. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FuturesResponse
Данные по фьючерсам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Future](#future) | Массив фьючерсов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OptionResponse
Данные по опциону.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Option](#option) | Информация по опциону. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OptionsResponse
Данные по опционам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Option](#option) | Массив данных по опциону. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Option
Опцион.


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| position_uid |  [string](#string) | Уникальный идентификатор позиции. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код. |
| basic_asset_position_uid |  [string](#string) | Уникальный идентификатор позиции основного инструмента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчетов (биржа). |
| direction |  [OptionDirection](#optiondirection) | Направление опциона. |
| payment_type |  [OptionPaymentType](#optionpaymenttype) | Тип расчетов по опциону. |
| style |  [OptionStyle](#optionstyle) | Стиль опциона. |
| settlement_type |  [OptionSettlementType](#optionsettlementtype) | Способ исполнения опциона. |
| name |  [string](#string) | Название инструмента. |
| currency |  [string](#string) | Валюта. |
| settlement_currency |  [string](#string) | Валюта, в которой оценивается контракт. |
| asset_type |  [string](#string) | Тип актива. |
| basic_asset |  [string](#string) | Основной актив. |
| exchange |  [string](#string) | Tорговая площадка (секция биржи). |
| country_of_risk |  [string](#string) | Код страны рисков. |
| country_of_risk_name |  [string](#string) | Наименование страны рисков. |
| sector |  [string](#string) | Сектор экономики. |
| brand |  [BrandData](#branddata) | Информация о бренде. |
| lot |  [int32](#int32) | Количество бумаг в лоте. |
| basic_asset_size |  [Quotation](#quotation) | Размер основного актива. |
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| dlong |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| min_price_increment |  [Quotation](#quotation) | Минимальный шаг цены. |
| strike_price |  [MoneyValue](#moneyvalue) | Цена страйка. |
| dlong_client |  [Quotation](#quotation) | Ставка риска в лонг с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_client |  [Quotation](#quotation) | Ставка риска в шорт с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| expiration_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата истечения срока в формате UTC. |
| first_trade_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата начала обращения контракта в формате UTC. |
| last_trade_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата исполнения в формате UTC. |
| first_1min_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой минутной свечи в формате UTC. |
| first_1day_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой дневной свечи в формате UTC. |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций шорт. |
| for_iis_flag |  [bool](#bool) | Возможность покупки или продажи на ИИС. |
| otc_flag |  [bool](#bool) | Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| for_qual_investor_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. |
| weekend_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом по выходным. |
| blocked_tca_flag |  [bool](#bool) | Флаг заблокированного ТКС. |
| api_trade_available_flag |  [bool](#bool) | Возможность торговать инструментом через API. |
| required_tests | Массив объектов [string](#string) | Тесты, которые необходимо пройти клиенту, чтобы совершать сделки по инструменту. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### ShareResponse
Данные по акции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Share](#share) | Информация об акции. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SharesResponse
Данные по акциям.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Share](#share) | Массив акций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Bond
Объект передачи информации об облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| isin |  [string](#string) | ISIN-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру `lot`. [Подробнее](./glossary#lot). |
| currency |  [string](#string) | Валюта расчетов. |
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| dlong |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Tорговая площадка (секция биржи). |
| coupon_quantity_per_year |  [int32](#int32) | Количество выплат по купонам в год. |
| maturity_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата погашения облигации по UTC. |
| nominal |  [MoneyValue](#moneyvalue) | Номинал облигации. |
| initial_nominal |  [MoneyValue](#moneyvalue) | Первоначальный номинал облигации. |
| state_reg_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска облигации по UTC. |
| placement_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата размещения по UTC. |
| placement_price |  [MoneyValue](#moneyvalue) | Цена размещения. |
| aci_value |  [MoneyValue](#moneyvalue) | Значение НКД (накопленного купонного дохода) на дату. |
| country_of_risk |  [string](#string) | Код страны риска — то есть страны, в которой компания ведет основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска — то есть страны, в которой компания ведет основной бизнес. |
| sector |  [string](#string) | Сектор экономики. |
| issue_kind |  [string](#string) | Форма выпуска. Возможные значения: <br/>**documentary** — документарная; <br/>**non_documentary** — бездокументарная. |
| issue_size |  [int64](#int64) | Размер выпуска. |
| issue_size_plan |  [int64](#int64) | Плановый размер выпуска. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| floating_coupon_flag |  [bool](#bool) | Признак облигации с плавающим купоном. |
| perpetual_flag |  [bool](#bool) | Признак бессрочной облигации. |
| amortization_flag |  [bool](#bool) | Признак облигации с амортизацией долга. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Параметр указывает на возможность торговать инструментом через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчетов. (биржа) |
| position_uid |  [string](#string) | Уникальный идентификатор позиции инструмента. |
| asset_uid |  [string](#string) | Уникальный идентификатор актива. |
| required_tests | Массив объектов [string](#string) | Тесты, которые необходимо пройти клиенту, чтобы совершать сделки по инструменту. |
| for_iis_flag |  [bool](#bool) | Признак доступности для ИИС. |
| for_qual_investor_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. |
| weekend_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом по выходным. |
| blocked_tca_flag |  [bool](#bool) | Флаг заблокированного ТКС. |
| subordinated_flag |  [bool](#bool) | Признак субординированной облигации. |
| liquidity_flag |  [bool](#bool) | Флаг достаточной ликвидности. |
| first_1min_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой минутной свечи. |
| first_1day_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой дневной свечи. |
| risk_level |  [RiskLevel](#risklevel) | Уровень риска. |
| brand |  [BrandData](#branddata) | Информация о бренде. |
| bond_type |  [BondType](#bondtype) | Тип облигации. |
| call_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата погашения облигации. |
| dlong_client |  [Quotation](#quotation) | Ставка риска в лонг с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_client |  [Quotation](#quotation) | Ставка риска в шорт с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Currency
Объект передачи информации о валюте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| isin |  [string](#string) | ISIN-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру `lot`. [Подробнее](./glossary#lot). |
| currency |  [string](#string) | Валюта расчетов. |
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| dlong |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Tорговая площадка (секция биржи). |
| nominal |  [MoneyValue](#moneyvalue) | Номинал. |
| country_of_risk |  [string](#string) | Код страны риска — то есть страны, в которой компания ведет основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска — то есть страны, в которой компания ведет основной бизнес. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| iso_currency_name |  [string](#string) | Строковый ISO-код валюты. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Параметр указывает на возможность торговать инструментом через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчетов (биржа). |
| position_uid |  [string](#string) | Уникальный идентификатор позиции инструмента. |
| required_tests | Массив объектов [string](#string) | Тесты, которые необходимо пройти клиенту, чтобы совершать сделки по инструменту. |
| for_iis_flag |  [bool](#bool) | Признак доступности для ИИС. |
| for_qual_investor_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. |
| weekend_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом по выходным. |
| blocked_tca_flag |  [bool](#bool) | Флаг заблокированного ТКС. |
| first_1min_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой минутной свечи. |
| first_1day_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой дневной свечи. |
| brand |  [BrandData](#branddata) | Информация о бренде. |
| dlong_client |  [Quotation](#quotation) | Ставка риска в лонг с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_client |  [Quotation](#quotation) | Ставка риска в шорт с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Etf
Объект передачи информации об инвестиционном фонде.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| isin |  [string](#string) | ISIN-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру `lot`. [Подробнее](./glossary#lot). |
| currency |  [string](#string) | Валюта расчетов. |
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| dlong |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Tорговая площадка (секция биржи). |
| fixed_commission |  [Quotation](#quotation) | Размер фиксированной комиссии фонда. |
| focus_type |  [string](#string) | Возможные значения: <br/>**equity** — акции;<br/>**fixed_income** — облигации;<br/>**mixed_allocation** — смешанный;<br/>**money_market** — денежный рынок;<br/>**real_estate** — недвижимость;<br/>**commodity** — товары;<br/>**specialty** — специальный;<br/>**private_equity** — private equity;<br/>**alternative_investment** — альтернативные инвестиции. |
| released_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска по UTC. |
| num_shares |  [Quotation](#quotation) | Количество паев фонда в обращении. |
| country_of_risk |  [string](#string) | Код страны риска — то есть страны, в которой компания ведет основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска — то есть страны, в которой компания ведет основной бизнес. |
| sector |  [string](#string) | Сектор экономики. |
| rebalancing_freq |  [string](#string) | Частота ребалансировки. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Параметр указывает на возможность торговать инструментом через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчетов (биржа). |
| position_uid |  [string](#string) | Уникальный идентификатор позиции инструмента. |
| asset_uid |  [string](#string) | Уникальный идентификатор актива. |
| instrument_exchange |  [InstrumentExchangeType](#instrumentexchangetype) | Тип площадки торговли. |
| required_tests | Массив объектов [string](#string) | Тесты, которые необходимо пройти клиенту, чтобы совершать сделки по инструменту. |
| for_iis_flag |  [bool](#bool) | Признак доступности для ИИС. |
| for_qual_investor_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. |
| weekend_flag |  [bool](#bool) | ФлагФлаг, отображающий доступность торговли инструментом по выходным. |
| blocked_tca_flag |  [bool](#bool) | Флаг заблокированного ТКС. |
| liquidity_flag |  [bool](#bool) | Флаг достаточной ликвидности. |
| first_1min_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой минутной свечи. |
| first_1day_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой дневной свечи. |
| brand |  [BrandData](#branddata) | Информация о бренде. |
| dlong_client |  [Quotation](#quotation) | Ставка риска в лонг с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_client |  [Quotation](#quotation) | Ставка риска в шорт с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Future
Объект передачи информации о фьючерсе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру `lot`. [Подробнее](./glossary#lot). |
| currency |  [string](#string) | Валюта расчетов. |
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| dlong |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Tорговая площадка (секция биржи). |
| first_trade_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата начала обращения контракта по UTC. |
| last_trade_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата по UTC, до которой возможно проведение операций с фьючерсом. |
| futures_type |  [string](#string) | Тип фьючерса. Возможные значения: <br/>**physical_delivery** — физические поставки; <br/>**cash_settlement** — денежный эквивалент. |
| asset_type |  [string](#string) | Тип актива. Возможные значения: <br/>**commodity** — товар; <br/>**currency** — валюта; <br/>**security** — ценная бумага; <br/>**index** — индекс. |
| basic_asset |  [string](#string) | Основной актив. |
| basic_asset_size |  [Quotation](#quotation) | Размер основного актива. |
| country_of_risk |  [string](#string) | Код страны риска — то есть страны, в которой компания ведет основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска — то есть страны, в которой компания ведет основной бизнес. |
| sector |  [string](#string) | Сектор экономики. |
| expiration_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата истечения срока в часов поясе UTC. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Параметр указывает на возможность торговать инструментом через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчетов (биржа). |
| position_uid |  [string](#string) | Уникальный идентификатор позиции инструмента. |
| basic_asset_position_uid |  [string](#string) | Уникальный идентификатор позиции основного инструмента. |
| required_tests | Массив объектов [string](#string) | Тесты, которые необходимо пройти клиенту, чтобы совершать сделки по инструменту. |
| for_iis_flag |  [bool](#bool) | Признак доступности для ИИС. |
| for_qual_investor_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. |
| weekend_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом по выходным. |
| blocked_tca_flag |  [bool](#bool) | Флаг заблокированного ТКС. |
| first_1min_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой минутной свечи. |
| first_1day_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой дневной свечи. |
| initial_margin_on_buy |  [MoneyValue](#moneyvalue) | Гарантийное обеспечение при покупке. |
| initial_margin_on_sell |  [MoneyValue](#moneyvalue) | Гарантийное обеспечение при продаже. |
| min_price_increment_amount |  [Quotation](#quotation) | Стоимость шага цены. |
| brand |  [BrandData](#branddata) | Информация о бренде. |
| dlong_client |  [Quotation](#quotation) | Ставка риска в лонг с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_client |  [Quotation](#quotation) | Ставка риска в шорт с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Share
Объект передачи информации об акции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| isin |  [string](#string) | ISIN-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру `lot`. [Подробнее](./glossary#lot) |
| currency |  [string](#string) | Валюта расчетов. |
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| dlong |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Tорговая площадка (секция биржи). |
| ipo_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата IPO акции по UTC. |
| issue_size |  [int64](#int64) | Размер выпуска. |
| country_of_risk |  [string](#string) | Код страны риска — то есть страны, в которой компания ведет основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска — то есть страны, в которой компания ведет основной бизнес. |
| sector |  [string](#string) | Сектор экономики. |
| issue_size_plan |  [int64](#int64) | Плановый размер выпуска. |
| nominal |  [MoneyValue](#moneyvalue) | Номинал. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| div_yield_flag |  [bool](#bool) | Признак наличия дивидендной доходности. |
| share_type |  [ShareType](#sharetype) | Тип акции. Возможные значения — `[ShareType](./instruments#sharetype)`. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Возможность торговать инструментом через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчетов (биржа). |
| position_uid |  [string](#string) | Уникальный идентификатор позиции инструмента. |
| asset_uid |  [string](#string) | Уникальный идентификатор актива. |
| instrument_exchange |  [InstrumentExchangeType](#instrumentexchangetype) | Тип площадки торговли. |
| required_tests | Массив объектов [string](#string) | Тесты, которые необходимо пройти клиенту, чтобы совершать сделки по инструменту. |
| for_iis_flag |  [bool](#bool) | Признак доступности для ИИС. |
| for_qual_investor_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. |
| weekend_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом по выходным. |
| blocked_tca_flag |  [bool](#bool) | Флаг заблокированного ТКС. |
| liquidity_flag |  [bool](#bool) | Флаг достаточной ликвидности. |
| first_1min_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой минутной свечи. |
| first_1day_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой дневной свечи. |
| brand |  [BrandData](#branddata) | Информация о бренде. |
| dlong_client |  [Quotation](#quotation) | Ставка риска в лонг с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_client |  [Quotation](#quotation) | Ставка риска в шорт с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAccruedInterestsRequest
Запрос НКД по облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода по UTC. |
| instrument_id |  [string](#string) | Идентификатор инструмента — `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAccruedInterestsResponse
НКД облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accrued_interests | Массив объектов [AccruedInterest](#accruedinterest) | Массив операций начисления купонов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AccruedInterest
Операция начисления купонов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время выплаты по UTC. |
| value |  [Quotation](#quotation) | Величина выплаты. |
| value_percent |  [Quotation](#quotation) | Величина выплаты в процентах от номинала. |
| nominal |  [Quotation](#quotation) | Номинал облигации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFuturesMarginRequest
Запрос информации о фьючерсе


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Идентификатор инструмента. |
| instrument_id |  [string](#string) | Идентификатор инструмента — `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFuturesMarginResponse
Данные по фьючерсу


| Field | Type | Description |
| ----- | ---- | ----------- |
| initial_margin_on_buy |  [MoneyValue](#moneyvalue) | Гарантийное обеспечение при покупке. |
| initial_margin_on_sell |  [MoneyValue](#moneyvalue) | Гарантийное обеспечение при продаже. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| min_price_increment_amount |  [Quotation](#quotation) | Стоимость шага цены. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentResponse
Данные по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Instrument](#instrument) | Основная информация об инструменте. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Instrument
Объект передачи основной информации об инструменте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код инструмента. |
| isin |  [string](#string) | ISIN-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру `lot`. [Подробнее](./glossary#lot). |
| currency |  [string](#string) | Валюта расчетов. |
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР); 1 – клиент с повышенным уровнем риска (КПУР). |
| dlong |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort |  [Quotation](#quotation) | Ставка риска начальной маржи для КСУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР лонг. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи для КПУР шорт. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Tорговая площадка (секция биржи). |
| country_of_risk |  [string](#string) | Код страны риска — то есть страны, в которой компания ведет основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска — то есть страны, в которой компания ведет основной бизнес. |
| instrument_type |  [string](#string) | Тип инструмента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Параметр указывает на возможность торговать инструментом через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчетов (биржа). |
| position_uid |  [string](#string) | Уникальный идентификатор позиции инструмента. |
| asset_uid |  [string](#string) | Уникальный идентификатор актива. |
| required_tests | Массив объектов [string](#string) | Тесты, которые необходимо пройти клиенту, чтобы совершать сделки по инструменту. |
| for_iis_flag |  [bool](#bool) | Признак доступности для ИИС. |
| for_qual_investor_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. |
| weekend_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом по выходным. |
| blocked_tca_flag |  [bool](#bool) | Флаг заблокированного ТКС. |
| instrument_kind |  [InstrumentType](#instrumenttype) | Тип инструмента. |
| first_1min_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой минутной свечи. |
| first_1day_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой дневной свечи. |
| brand |  [BrandData](#branddata) | Информация о бренде. |
| dlong_client |  [Quotation](#quotation) | Ставка риска в лонг с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
| dshort_client |  [Quotation](#quotation) | Ставка риска в шорт с учетом текущего уровня риска портфеля клиента. [Подробнее про ставки риска](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q5). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsRequest
Запрос дивидендов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода по UTC. Фильтрация происходит по параметру `record_date` — дата фиксации реестра. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода по UTC. Фильтрация происходит по параметру `record_date` — дата фиксации реестра. |
| instrument_id |  [string](#string) | Идентификатор инструмента — `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsResponse
Дивиденды.


| Field | Type | Description |
| ----- | ---- | ----------- |
| dividends | Массив объектов [Dividend](#dividend) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Dividend
Информация о выплате.


| Field | Type | Description |
| ----- | ---- | ----------- |
| dividend_net |  [MoneyValue](#moneyvalue) | Величина дивиденда на 1 ценную бумагу (включая валюту). |
| payment_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фактических выплат по UTC. |
| declared_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата объявления дивидендов по UTC. |
| last_buy_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Последний день (включительно) покупки для получения выплаты по UTC. |
| dividend_type |  [string](#string) | Тип выплаты. Возможные значения: `Regular Cash` – регулярные выплаты, `Cancelled` – выплата отменена, `Daily Accrual` – ежедневное начисление, `Return of Capital` – возврат капитала, прочие типы выплат. |
| record_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фиксации реестра по UTC. |
| regularity |  [string](#string) | Регулярность выплаты. Возможные значения: `Annual` – ежегодная, `Semi-Anl` – каждые полгода, прочие типы выплат. |
| close_price |  [MoneyValue](#moneyvalue) | Цена закрытия инструмента на момент `ex_dividend_date`. |
| yield_value |  [Quotation](#quotation) | Величина доходности. |
| created_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время создания записи по UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetRequest
Запрос актива по идентификатору.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | UID-идентификатор актива. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetResponse
Данные по активу.


| Field | Type | Description |
| ----- | ---- | ----------- |
| asset |  [AssetFull](#assetfull) | Актив. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetsRequest
Запрос списка активов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_type |  [InstrumentType](#instrumenttype) |  |
| instrument_status |  [InstrumentStatus](#instrumentstatus) | Статус запрашиваемых инструментов. [Возможные значения](#instrumentstatus). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetsResponse
Список активов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| assets | Массив объектов [Asset](#asset) | Активы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetFull



| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | Уникальный идентификатор актива. |
| type |  [AssetType](#assettype) | Тип актива. |
| name |  [string](#string) | Наименование актива. |
| name_brief |  [string](#string) | Короткое наименование актива. |
| description |  [string](#string) | Описание актива. |
| deleted_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время удаления актива. |
| required_tests | Массив объектов [string](#string) | Тестирование клиентов. |
| currency |  [AssetCurrency](#assetcurrency) | Валюта. Обязательно и заполняется только для `type = ASSET_TYPE_CURRENCY`. |
| security |  [AssetSecurity](#assetsecurity) | Ценная бумага. Обязательно и заполняется только для `type = ASSET_TYPE_SECURITY`. |
| gos_reg_code |  [string](#string) | Номер государственной регистрации. |
| cfi |  [string](#string) | Код CFI. |
| code_nsd |  [string](#string) | Код НРД инструмента. |
| status |  [string](#string) | Статус актива. |
| brand |  [Brand](#brand) | Бренд. |
| updated_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время последнего обновления записи. |
| br_code |  [string](#string) | Код типа ц.б. по классификации Банка России. |
| br_code_name |  [string](#string) | Наименование кода типа ц.б. по классификации Банка России. |
| instruments | Массив объектов [AssetInstrument](#assetinstrument) | Массив идентификаторов инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Asset
Информация об активе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | Уникальный идентификатор актива. |
| type |  [AssetType](#assettype) | Тип актива. |
| name |  [string](#string) | Наименование актива. |
| instruments | Массив объектов [AssetInstrument](#assetinstrument) | Массив идентификаторов инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetCurrency
Валюта.


| Field | Type | Description |
| ----- | ---- | ----------- |
| base_currency |  [string](#string) | ISO-код валюты. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetSecurity
Ценная бумага.


| Field | Type | Description |
| ----- | ---- | ----------- |
| isin |  [string](#string) | ISIN-идентификатор ценной бумаги. |
| type |  [string](#string) | Тип ценной бумаги. |
| instrument_kind |  [InstrumentType](#instrumenttype) | Тип инструмента. |
| share |  [AssetShare](#assetshare) | Акция. Заполняется только для акций — тип актива `asset.type = ASSET_TYPE_SECURITY` и `security.type = share`. |
| bond |  [AssetBond](#assetbond) | Облигация. Заполняется только для облигаций — тип актива `asset.type = ASSET_TYPE_SECURITY` и `security.type = bond`. |
| sp |  [AssetStructuredProduct](#assetstructuredproduct) | Структурная нота. Заполняется только для структурных продуктов — тип актива `asset.type = ASSET_TYPE_SECURITY` и `security.type = sp`. |
| etf |  [AssetEtf](#assetetf) | Фонд. Заполняется только для фондов — тип актива `asset.type = ASSET_TYPE_SECURITY` и `security.type = etf`. |
| clearing_certificate |  [AssetClearingCertificate](#assetclearingcertificate) | Клиринговый сертификат участия. Заполняется только для клиринговых сертификатов — тип актива `asset.type = ASSET_TYPE_SECURITY` и security.type = `clearing_certificate`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetShare
Акция.


| Field | Type | Description |
| ----- | ---- | ----------- |
| type |  [ShareType](#sharetype) | Тип акции. |
| issue_size |  [Quotation](#quotation) | Объем выпуска (шт.). |
| nominal |  [Quotation](#quotation) | Номинал. |
| nominal_currency |  [string](#string) | Валюта номинала. |
| primary_index |  [string](#string) | Индекс (Bloomberg). |
| dividend_rate |  [Quotation](#quotation) | Ставка дивиденда (для привилегированных акций). |
| preferred_share_type |  [string](#string) | Тип привилегированных акций. |
| ipo_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата IPO. |
| registry_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата регистрации. |
| div_yield_flag |  [bool](#bool) | Признак наличия дивидендной доходности. |
| issue_kind |  [string](#string) | Форма выпуска ФИ. |
| placement_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата размещения акции. |
| repres_isin |  [string](#string) | ISIN базового актива. |
| issue_size_plan |  [Quotation](#quotation) | Объявленное количество, шт. |
| total_float |  [Quotation](#quotation) | Количество акций в свободном обращении. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetBond
Облигация.


| Field | Type | Description |
| ----- | ---- | ----------- |
| current_nominal |  [Quotation](#quotation) | Текущий номинал. |
| borrow_name |  [string](#string) | Наименование заемщика. |
| issue_size |  [Quotation](#quotation) | Объем эмиссии облигации (стоимость). |
| nominal |  [Quotation](#quotation) | Номинал облигации. |
| nominal_currency |  [string](#string) | Валюта номинала. |
| issue_kind |  [string](#string) | Форма выпуска облигации. |
| interest_kind |  [string](#string) | Форма дохода облигации. |
| coupon_quantity_per_year |  [int32](#int32) | Количество выплат в год. |
| indexed_nominal_flag |  [bool](#bool) | Признак облигации с индексируемым номиналом. |
| subordinated_flag |  [bool](#bool) | Признак субординированной облигации. |
| collateral_flag |  [bool](#bool) | Признак обеспеченной облигации. |
| tax_free_flag |  [bool](#bool) | Признак показывает, что купоны облигации не облагаются налогом — для mass market. |
| amortization_flag |  [bool](#bool) | Признак облигации с амортизацией долга. |
| floating_coupon_flag |  [bool](#bool) | Признак облигации с плавающим купоном. |
| perpetual_flag |  [bool](#bool) | Признак бессрочной облигации. |
| maturity_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата погашения облигации. |
| return_condition |  [string](#string) | Описание и условия получения дополнительного дохода. |
| state_reg_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска облигации. |
| placement_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата размещения облигации. |
| placement_price |  [Quotation](#quotation) | Цена размещения облигации. |
| issue_size_plan |  [Quotation](#quotation) | Объявленное количество, шт. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetStructuredProduct
Структурная нота.


| Field | Type | Description |
| ----- | ---- | ----------- |
| borrow_name |  [string](#string) | Наименование заемщика. |
| nominal |  [Quotation](#quotation) | Номинал. |
| nominal_currency |  [string](#string) | Валюта номинала. |
| type |  [StructuredProductType](#structuredproducttype) | Тип структурной ноты. |
| logic_portfolio |  [string](#string) | Стратегия портфеля. |
| asset_type |  [AssetType](#assettype) | Тип базового актива. |
| basic_asset |  [string](#string) | Вид базового актива в зависимости от типа базового актива. |
| safety_barrier |  [Quotation](#quotation) | Барьер сохранности в процентах. |
| maturity_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата погашения. |
| issue_size_plan |  [Quotation](#quotation) | Объявленное количество, шт. |
| issue_size |  [Quotation](#quotation) | Объем размещения. |
| placement_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата размещения ноты. |
| issue_kind |  [string](#string) | Форма выпуска. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetEtf
Фонд.


| Field | Type | Description |
| ----- | ---- | ----------- |
| total_expense |  [Quotation](#quotation) | Суммарные расходы фонда в процентах. |
| hurdle_rate |  [Quotation](#quotation) | Барьерная ставка доходности, после которой фонд имеет право на perfomance fee — в процентах. |
| performance_fee |  [Quotation](#quotation) | Комиссия за успешные результаты фонда в процентах. |
| fixed_commission |  [Quotation](#quotation) | Фиксированная комиссия за управление в процентах. |
| payment_type |  [string](#string) | Тип распределения доходов от выплат по бумагам. |
| watermark_flag |  [bool](#bool) | Признак необходимости выхода фонда в плюс для получения комиссии. |
| buy_premium |  [Quotation](#quotation) | Премия (надбавка к цене) при покупке доли в фонде — в процентах. |
| sell_discount |  [Quotation](#quotation) | Ставка дисконта (вычет из цены) при продаже доли в фонде — в процентах. |
| rebalancing_flag |  [bool](#bool) | Признак ребалансируемости портфеля фонда. |
| rebalancing_freq |  [string](#string) | Периодичность ребалансировки. |
| management_type |  [string](#string) | Тип управления. |
| primary_index |  [string](#string) | Индекс, который реплицирует (старается копировать) фонд. |
| focus_type |  [string](#string) | База ETF. |
| leveraged_flag |  [bool](#bool) | Признак использования заемных активов (плечо). |
| num_share |  [Quotation](#quotation) | Количество акций в обращении. |
| ucits_flag |  [bool](#bool) | Признак обязательства по отчетности перед регулятором. |
| released_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска. |
| description |  [string](#string) | Описание фонда. |
| primary_index_description |  [string](#string) | Описание индекса, за которым следует фонд. |
| primary_index_company |  [string](#string) | Основные компании, в которые вкладывается фонд. |
| index_recovery_period |  [Quotation](#quotation) | Срок восстановления индекса после просадки. |
| inav_code |  [string](#string) | IVAV-код. |
| div_yield_flag |  [bool](#bool) | Признак наличия дивидендной доходности. |
| expense_commission |  [Quotation](#quotation) | Комиссия на покрытие расходов фонда в процентах. |
| primary_index_tracking_error |  [Quotation](#quotation) | Ошибка следования за индексом в процентах. |
| rebalancing_plan |  [string](#string) | Плановая ребалансировка портфеля. |
| tax_rate |  [string](#string) | Ставки налогообложения дивидендов и купонов. |
| rebalancing_dates | Массив объектов [google.protobuf.Timestamp](#googleprotobuftimestamp) | Даты ребалансировок. |
| issue_kind |  [string](#string) | Форма выпуска. |
| nominal |  [Quotation](#quotation) | Номинал. |
| nominal_currency |  [string](#string) | Валюта номинала. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetClearingCertificate
Клиринговый сертификат участия.


| Field | Type | Description |
| ----- | ---- | ----------- |
| nominal |  [Quotation](#quotation) | Номинал. |
| nominal_currency |  [string](#string) | Валюта номинала. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Brand
Бренд.


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | UID-идентификатор бренда. |
| name |  [string](#string) | Наименование бренда. |
| description |  [string](#string) | Описание. |
| info |  [string](#string) | Информация о бренде. |
| company |  [string](#string) | Компания. |
| sector |  [string](#string) | Сектор. |
| country_of_risk |  [string](#string) | Код страны риска. |
| country_of_risk_name |  [string](#string) | Наименование страны риска. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetInstrument
Идентификаторы инструмента.


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | UID-идентификатор инструмента. |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| links | Массив объектов [InstrumentLink](#instrumentlink) | Массив связанных инструментов. |
| instrument_kind |  [InstrumentType](#instrumenttype) | Тип инструмента. |
| position_uid |  [string](#string) | ID позиции. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentLink
Связь с другим инструментом.


| Field | Type | Description |
| ----- | ---- | ----------- |
| type |  [string](#string) | Тип связи. |
| instrument_uid |  [string](#string) | UID-идентификатор связанного инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFavoritesRequest
Запрос списка избранных инструментов, входные параметры не требуются.


| Field | Type | Description |
| ----- | ---- | ----------- |
| group_id |  [string](#string) | Уникальный идентификатор группы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFavoritesResponse
В ответ передается список избранных инструментов в качестве массива.


| Field | Type | Description |
| ----- | ---- | ----------- |
| favorite_instruments | Массив объектов [FavoriteInstrument](#favoriteinstrument) | Массив инструментов. |
| group_id |  [string](#string) | Уникальный идентификатор группы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FavoriteInstrument
Массив избранных инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код инструмента. |
| isin |  [string](#string) | ISIN-идентификатор инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| name |  [string](#string) | Название инструмента. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| otc_flag |  [bool](#bool) | Флаг, используемый ранее для определения внебиржевых инструментов. На данный момент не используется для торгуемых через API инструментов. Может использоваться как фильтр для операций, совершавшихся некоторое время назад на ОТС площадке. |
| api_trade_available_flag |  [bool](#bool) | Возможность торговать инструментом через API. |
| instrument_kind |  [InstrumentType](#instrumenttype) | Тип инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EditFavoritesRequest
Запрос редактирования списка избранных инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [EditFavoritesRequestInstrument](#editfavoritesrequestinstrument) | Массив инструментов. |
| action_type |  [EditFavoritesActionType](#editfavoritesactiontype) | Тип действия со списком. |
| group_id |  [string](#string) | Уникальный идентификатор группы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EditFavoritesRequestInstrument
Массив инструментов для редактирования списка избранных инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| instrument_id |  [string](#string) | Идентификатор инструмента — `figi` или `instrument_uid`. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EditFavoritesResponse
Результат редактирования списка избранных инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| favorite_instruments | Массив объектов [FavoriteInstrument](#favoriteinstrument) | Массив инструментов. |
| group_id |  [string](#string) | Уникальный идентификатор группы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CreateFavoriteGroupRequest
Запрос создания новой группы избранных инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| group_name |  [string](#string) | Название группы, не более 255 символов. |
| group_color |  [string](#string) | Цвет группы. Принимает значения в HEX-формате, от "000000" до "FFFFFF" |
| note |  [string](#string) | Описание |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CreateFavoriteGroupResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| group_id |  [string](#string) | Уникальный идентификатор группы. |
| group_name |  [string](#string) | Название группы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### DeleteFavoriteGroupRequest
Запрос удаления избранной группы


| Field | Type | Description |
| ----- | ---- | ----------- |
| group_id |  [string](#string) | Уникальный идентификатор группы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### DeleteFavoriteGroupResponse


 <!-- end HasFields -->


#### GetFavoriteGroupsRequest
Запрос получения списка избранных групп


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id | Массив объектов [string](#string) | Массив идентификаторов инструментов. Принимает значение `figi` или `instrument_uid`. Если в группе будет хотя бы один из инструментов массива, то в ответе у группы вернется признак `containsInstrument = true`. |
| excluded_group_id | Массив объектов [string](#string) | Массив идентификаторов групп, которые необходимо исключить из ответа. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFavoriteGroupsResponse
Избранные группы


| Field | Type | Description |
| ----- | ---- | ----------- |
| groups | Массив объектов [GetFavoriteGroupsResponse.FavoriteGroup](#getfavoritegroupsresponsefavoritegroup) | Массив групп избранных списков инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFavoriteGroupsResponse.FavoriteGroup
Избранная группа


| Field | Type | Description |
| ----- | ---- | ----------- |
| group_id |  [string](#string) | Уникальный идентификатор группы. |
| group_name |  [string](#string) | Название группы. |
| color |  [string](#string) | Цвет группы в HEX-формате. |
| size |  [int32](#int32) | Количество инструментов в группе. |
| contains_instrument |  [bool](#bool) | Признак наличия в группе хотя бы одного инструмента из запроса. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetCountriesRequest
Запрос справочника стран.

 <!-- end HasFields -->


#### GetCountriesResponse
Справочник стран.


| Field | Type | Description |
| ----- | ---- | ----------- |
| countries | Массив объектов [CountryResponse](#countryresponse) | Массив стран. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### IndicativesRequest
Запрос справочника индексов и товаров

 <!-- end HasFields -->


#### IndicativesResponse
Справочник индексов и товаров


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [IndicativeResponse](#indicativeresponse) | Массив инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### IndicativeResponse
Индикатив


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | FIGI-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код инструмента. |
| currency |  [string](#string) | Валюта расчетов. |
| instrument_kind |  [InstrumentType](#instrumenttype) | Тип инструмента. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Tорговая площадка (секция биржи). |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CountryResponse
Данные о стране.


| Field | Type | Description |
| ----- | ---- | ----------- |
| alfa_two |  [string](#string) | Двухбуквенный код страны. |
| alfa_three |  [string](#string) | Трехбуквенный код страны. |
| name |  [string](#string) | Наименование страны. |
| name_brief |  [string](#string) | Краткое наименование страны. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FindInstrumentRequest
Запрос на поиск инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| query |  [string](#string) | Строка поиска. |
| instrument_kind |  [InstrumentType](#instrumenttype) | Фильтр по типу инструмента. |
| api_trade_available_flag |  [bool](#bool) | Фильтр для отображения только торговых инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FindInstrumentResponse
Результат поиска инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [InstrumentShort](#instrumentshort) | Массив инструментов, удовлетворяющих условиям поиска. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentShort
Краткая информация об инструменте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| isin |  [string](#string) | ISIN инструмента. |
| figi |  [string](#string) | FIGI инструмента. |
| ticker |  [string](#string) | Ticker инструмента. |
| class_code |  [string](#string) | ClassCode инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| name |  [string](#string) | Название инструмента. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| position_uid |  [string](#string) | Уникальный идентификатор позиции инструмента. |
| instrument_kind |  [InstrumentType](#instrumenttype) | Тип инструмента. |
| api_trade_available_flag |  [bool](#bool) | Возможность торговать инструментом через API. |
| for_iis_flag |  [bool](#bool) | Признак доступности для ИИС. |
| first_1min_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой минутной свечи. |
| first_1day_candle_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата первой дневной свечи. |
| for_qual_investor_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. |
| weekend_flag |  [bool](#bool) | Флаг, отображающий доступность торговли инструментом по выходным. |
| blocked_tca_flag |  [bool](#bool) | Флаг заблокированного ТКС. |
| lot |  [int32](#int32) | Количество бумаг в лоте. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrandsRequest
Запрос списка брендов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| paging |  [Page](#page) | Настройки пагинации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrandRequest
Запрос бренда.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | UID-идентификатор бренда. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrandsResponse
Список брендов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| brands | Массив объектов [Brand](#brand) | Массив брендов. |
| paging |  [PageResponse](#pageresponse) | Данные по пагинации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAssetFundamentalsRequest
Запрос фундаментальных показателей


| Field | Type | Description |
| ----- | ---- | ----------- |
| assets | Массив объектов [string](#string) | Массив идентификаторов активов, не более 100 шт. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAssetFundamentalsResponse
Фундаментальные показатели


| Field | Type | Description |
| ----- | ---- | ----------- |
| fundamentals | Массив объектов [GetAssetFundamentalsResponse.StatisticResponse](#getassetfundamentalsresponsestatisticresponse) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAssetFundamentalsResponse.StatisticResponse
Фундаментальные показатели по активу


| Field | Type | Description |
| ----- | ---- | ----------- |
| asset_uid |  [string](#string) | Идентификатор актива. |
| currency |  [string](#string) | Валюта. |
| market_capitalization |  [double](#double) | Рыночная капитализация. |
| high_price_last_52_weeks |  [double](#double) | Максимум за год. |
| low_price_last_52_weeks |  [double](#double) | Минимум за год. |
| average_daily_volume_last_10_days |  [double](#double) | Средний объем торгов за 10 дней. |
| average_daily_volume_last_4_weeks |  [double](#double) | Средний объем торгов за месяц. |
| beta |  [double](#double) |  |
| free_float |  [double](#double) | Доля акций в свободном обращении. |
| forward_annual_dividend_yield |  [double](#double) | Процент форвардной дивидендной доходности по отношению к цене акций. |
| shares_outstanding |  [double](#double) | Количество акций в обращении. |
| revenue_ttm |  [double](#double) | Выручка. |
| ebitda_ttm |  [double](#double) | EBITDA — прибыль до вычета процентов, налогов, износа и амортизации. |
| net_income_ttm |  [double](#double) | Чистая прибыль. |
| eps_ttm |  [double](#double) | EPS — величина чистой прибыли компании, которая приходится на каждую обыкновенную акцию. |
| diluted_eps_ttm |  [double](#double) | EPS компании с допущением, что все конвертируемые ценные бумаги компании были сконвертированы в обыкновенные акции. |
| free_cash_flow_ttm |  [double](#double) | Свободный денежный поток. |
| five_year_annual_revenue_growth_rate |  [double](#double) | Среднегодовой  рocт выручки за 5 лет. |
| three_year_annual_revenue_growth_rate |  [double](#double) | Среднегодовой  рocт выручки за 3 года. |
| pe_ratio_ttm |  [double](#double) | Соотношение рыночной капитализации компании к ее чистой прибыли. |
| price_to_sales_ttm |  [double](#double) | Соотношение рыночной капитализации компании к ее выручке. |
| price_to_book_ttm |  [double](#double) | Соотношение рыночной капитализации компании к ее балансовой стоимости. |
| price_to_free_cash_flow_ttm |  [double](#double) | Соотношение рыночной капитализации компании к ее свободному денежному потоку. |
| total_enterprise_value_mrq |  [double](#double) | Рыночная стоимость компании. |
| ev_to_ebitda_mrq |  [double](#double) | Соотношение EV и EBITDA. |
| net_margin_mrq |  [double](#double) | Маржа чистой прибыли. |
| net_interest_margin_mrq |  [double](#double) | Рентабельность чистой прибыли. |
| roe |  [double](#double) | Рентабельность собственного капитала. |
| roa |  [double](#double) | Рентабельность активов. |
| roic |  [double](#double) | Рентабельность активов. |
| total_debt_mrq |  [double](#double) | Сумма краткосрочных и долгосрочных обязательств компании. |
| total_debt_to_equity_mrq |  [double](#double) | Соотношение долга к собственному капиталу. |
| total_debt_to_ebitda_mrq |  [double](#double) | Total Debt/EBITDA. |
| free_cash_flow_to_price |  [double](#double) | Отношение свободногоо кэша к стоимости. |
| net_debt_to_ebitda |  [double](#double) | Отношение чистого долга к EBITDA. |
| current_ratio_mrq |  [double](#double) | Коэффициент текущей ликвидности. |
| fixed_charge_coverage_ratio_fy |  [double](#double) | Коэффициент покрытия фиксированных платежей — FCCR. |
| dividend_yield_daily_ttm |  [double](#double) | Дивидендная доходность за 12 месяцев. |
| dividend_rate_ttm |  [double](#double) | Выплаченные дивиденды за 12 месяцев. |
| dividends_per_share |  [double](#double) | Значение дивидендов на акцию. |
| five_years_average_dividend_yield |  [double](#double) | Средняя дивидендная доходность за 5 лет. |
| five_year_annual_dividend_growth_rate |  [double](#double) | Среднегодовой рост дивидендов за 5 лет. |
| dividend_payout_ratio_fy |  [double](#double) | Процент чистой прибыли, уходящий на выплату дивидендов. |
| buy_back_ttm |  [double](#double) | Деньги, потраченные на обратный выкуп акций. |
| one_year_annual_revenue_growth_rate |  [double](#double) | Рост выручки за 1 год. |
| domicile_indicator_code |  [string](#string) | Код страны. |
| adr_to_common_share_ratio |  [double](#double) | Соотношение депозитарной расписки к акциям. |
| number_of_employees |  [double](#double) | Количество сотрудников. |
| ex_dividend_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) |  |
| fiscal_period_start_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало фискального периода. |
| fiscal_period_end_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание фискального периода. |
| revenue_change_five_years |  [double](#double) | Изменение общего дохода за 5 лет. |
| eps_change_five_years |  [double](#double) | Изменение EPS за 5 лет. |
| ebitda_change_five_years |  [double](#double) | Изменение EBIDTA за 5 лет. |
| total_debt_change_five_years |  [double](#double) | Изменение общей задолжности за 5 лет. |
| ev_to_sales |  [double](#double) | Отношение EV к выручке. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAssetReportsRequest
Запрос отчетов эмитентов


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id |  [string](#string) | Идентификатор инструмента в формате UID. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода по UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода по UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAssetReportsResponse
Отчеты эмитентов


| Field | Type | Description |
| ----- | ---- | ----------- |
| events | Массив объектов [GetAssetReportsResponse.GetAssetReportsEvent](#getassetreportsresponsegetassetreportsevent) | Массив событий по облигации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAssetReportsResponse.GetAssetReportsEvent
Отчет


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id |  [string](#string) | Идентификатор инструмента. |
| report_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата публикации отчета. |
| period_year |  [int32](#int32) | Год периода отчета. |
| period_num |  [int32](#int32) | Номер периода. |
| period_type |  [GetAssetReportsResponse.AssetReportPeriodType](#getassetreportsresponseassetreportperiodtype) | Тип отчета. |
| created_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата создания записи. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetConsensusForecastsRequest
Запрос консенсус-прогнозов


| Field | Type | Description |
| ----- | ---- | ----------- |
| paging |  [Page](#page) | Настройки пагинации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetConsensusForecastsResponse
Консенсус-прогнозы


| Field | Type | Description |
| ----- | ---- | ----------- |
| items | Массив объектов [GetConsensusForecastsResponse.ConsensusForecastsItem](#getconsensusforecastsresponseconsensusforecastsitem) | Массив прогнозов. |
| page |  [PageResponse](#pageresponse) | Данные по пагинации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetConsensusForecastsResponse.ConsensusForecastsItem
Прогноз


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | UID-идентификатор. |
| asset_uid |  [string](#string) | UID-идентификатор актива. |
| created_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время создания записи. |
| best_target_price |  [Quotation](#quotation) | Целевая цена на 12 месяцев. |
| best_target_low |  [Quotation](#quotation) | Минимальная прогнозная цена. |
| best_target_high |  [Quotation](#quotation) | Максимальная прогнозная цена. |
| total_buy_recommend |  [int32](#int32) | Количество аналитиков рекомендующих покупать. |
| total_hold_recommend |  [int32](#int32) | Количество аналитиков рекомендующих держать. |
| total_sell_recommend |  [int32](#int32) | Количество аналитиков рекомендующих продавать. |
| currency |  [string](#string) | Валюта прогнозов инструмента. |
| consensus |  [Recommendation](#recommendation) | Консенсус-прогноз. |
| prognosis_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата прогноза. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetForecastRequest
Запрос прогнозов инвестдомов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id |  [string](#string) | Идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetForecastResponse
Прогнозы инвестдомов по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| targets | Массив объектов [GetForecastResponse.TargetItem](#getforecastresponsetargetitem) | Массив прогнозов. |
| consensus |  [GetForecastResponse.ConsensusItem](#getforecastresponseconsensusitem) | Согласованный прогноз. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetForecastResponse.TargetItem
Прогноз


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| company |  [string](#string) | Название компании, давшей прогноз. |
| recommendation |  [Recommendation](#recommendation) | Прогноз. |
| recommendation_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата прогноза. |
| currency |  [string](#string) | Валюта. |
| current_price |  [Quotation](#quotation) | Текущая цена. |
| target_price |  [Quotation](#quotation) | Прогнозируемая цена. |
| price_change |  [Quotation](#quotation) | Изменение цены. |
| price_change_rel |  [Quotation](#quotation) | Относительное изменение цены. |
| show_name |  [string](#string) | Наименование инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetForecastResponse.ConsensusItem
Консенсус-прогноз.


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| recommendation |  [Recommendation](#recommendation) | Прогноз. |
| currency |  [string](#string) | Валюта. |
| current_price |  [Quotation](#quotation) | Текущая цена. |
| consensus |  [Quotation](#quotation) | Прогнозируемая цена. |
| min_target |  [Quotation](#quotation) | Минимальная цена прогноза. |
| max_target |  [Quotation](#quotation) | Максимальная цена прогноза. |
| price_change |  [Quotation](#quotation) | Изменение цены. |
| price_change_rel |  [Quotation](#quotation) | Относительное изменение цены. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### RiskRatesRequest
Запрос ставок риска


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id | Массив объектов [string](#string) | Идентификаторы инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### RiskRatesResponse
Ставки риска


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_risk_rates | Массив объектов [RiskRatesResponse.RiskRateResult](#riskratesresponseriskrateresult) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### RiskRatesResponse.RiskRateResult



| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_uid |  [string](#string) |  |
| short_risk_rate |  [RiskRatesResponse.RiskRate](#riskratesresponseriskrate) | Ставка риска пользователя  в шорт |
| long_risk_rate |  [RiskRatesResponse.RiskRate](#riskratesresponseriskrate) | Ставка риска пользователя в лонг |
| short_risk_rates | Массив объектов [RiskRatesResponse.RiskRate](#riskratesresponseriskrate) | Доступные ставки риска в шорт |
| long_risk_rates | Массив объектов [RiskRatesResponse.RiskRate](#riskratesresponseriskrate) | Доступные ставки риска в лонг |
| error |  [string](#string) | Ошибка. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### RiskRatesResponse.RiskRate



| Field | Type | Description |
| ----- | ---- | ----------- |
| risk_level_code |  [string](#string) | Категория риска. |
| value |  [Quotation](#quotation) | Значение ставки риска. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingInterval



| Field | Type | Description |
| ----- | ---- | ----------- |
| type |  [string](#string) | Название интервала. |
| interval |  [TradingInterval.TimeInterval](#tradingintervaltimeinterval) | Интервал. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingInterval.TimeInterval



| Field | Type | Description |
| ----- | ---- | ----------- |
| start_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала интервала. |
| end_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания интервала. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### CouponType
Тип купонов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| COUPON_TYPE_UNSPECIFIED | 0 | Неопределенное значение. |
| COUPON_TYPE_CONSTANT | 1 | Постоянный. |
| COUPON_TYPE_FLOATING | 2 | Плавающий. |
| COUPON_TYPE_DISCOUNT | 3 | Дисконт. |
| COUPON_TYPE_MORTGAGE | 4 | Ипотечный. |
| COUPON_TYPE_FIX | 5 | Фиксированный. |
| COUPON_TYPE_VARIABLE | 6 | Переменный. |
| COUPON_TYPE_OTHER | 7 | Прочее. |




#### OptionDirection
Тип опциона по направлению сделки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPTION_DIRECTION_UNSPECIFIED | 0 | Тип не определен. |
| OPTION_DIRECTION_PUT | 1 | Опцион на продажу. |
| OPTION_DIRECTION_CALL | 2 | Опцион на покупку. |




#### OptionPaymentType
Тип расчетов по опциону.

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPTION_PAYMENT_TYPE_UNSPECIFIED | 0 | Тип не определен. |
| OPTION_PAYMENT_TYPE_PREMIUM | 1 | Опционы с использованием премии в расчетах. |
| OPTION_PAYMENT_TYPE_MARGINAL | 2 | Маржируемые опционы. |




#### OptionStyle
Тип опциона по стилю.

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPTION_STYLE_UNSPECIFIED | 0 | Тип не определен. |
| OPTION_STYLE_AMERICAN | 1 | Американский опцион. |
| OPTION_STYLE_EUROPEAN | 2 | Европейский опцион. |




#### OptionSettlementType
Тип опциона по способу исполнения.

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPTION_EXECUTION_TYPE_UNSPECIFIED | 0 | Тип не определен. |
| OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY | 1 | Поставочный тип опциона. |
| OPTION_EXECUTION_TYPE_CASH_SETTLEMENT | 2 | Расчетный тип опциона. |




#### InstrumentIdType
Тип идентификатора инструмента. [Подробнее об идентификации инструментов](./faq_identification/).

| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_ID_UNSPECIFIED | 0 | Значение не определено. |
| INSTRUMENT_ID_TYPE_FIGI | 1 | FIGI. |
| INSTRUMENT_ID_TYPE_TICKER | 2 | Ticker. |
| INSTRUMENT_ID_TYPE_UID | 3 | Уникальный идентификатор. |
| INSTRUMENT_ID_TYPE_POSITION_UID | 4 | Идентификатор позиции. |




#### ShareType
Тип акций.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SHARE_TYPE_UNSPECIFIED | 0 | Значение не определено. |
| SHARE_TYPE_COMMON | 1 | Обыкновенная. |
| SHARE_TYPE_PREFERRED | 2 | Привилегированная. |
| SHARE_TYPE_ADR | 3 | Американские депозитарные расписки. |
| SHARE_TYPE_GDR | 4 | Глобальные депозитарные расписки. |
| SHARE_TYPE_MLP | 5 | Товарищество с ограниченной ответственностью. |
| SHARE_TYPE_NY_REG_SHRS | 6 | Акции из реестра Нью-Йорка. |
| SHARE_TYPE_CLOSED_END_FUND | 7 | Закрытый инвестиционный фонд. |
| SHARE_TYPE_REIT | 8 | Траст недвижимости. |




#### AssetType
Тип актива.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ASSET_TYPE_UNSPECIFIED | 0 | Тип не определен. |
| ASSET_TYPE_CURRENCY | 1 | Валюта. |
| ASSET_TYPE_COMMODITY | 2 | Товар. |
| ASSET_TYPE_INDEX | 3 | Индекс. |
| ASSET_TYPE_SECURITY | 4 | Ценная бумага. |




#### StructuredProductType
Тип структурной ноты.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SP_TYPE_UNSPECIFIED | 0 | Тип не определен. |
| SP_TYPE_DELIVERABLE | 1 | Поставочный. |
| SP_TYPE_NON_DELIVERABLE | 2 | Беспоставочный. |




#### EditFavoritesActionType
Тип действия со списком избранных инструментов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED | 0 | Тип не определен. |
| EDIT_FAVORITES_ACTION_TYPE_ADD | 1 | Добавить в список. |
| EDIT_FAVORITES_ACTION_TYPE_DEL | 2 | Удалить из списка. |




#### RealExchange
Реальная площадка исполнения расчетов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| REAL_EXCHANGE_UNSPECIFIED | 0 | Тип не определен. |
| REAL_EXCHANGE_MOEX | 1 | Московская биржа. |
| REAL_EXCHANGE_RTS | 2 | Санкт-Петербургская биржа. |
| REAL_EXCHANGE_OTC | 3 | Внебиржевой инструмент. |
| REAL_EXCHANGE_DEALER | 4 | Инструмент, торгуемый на площадке брокера. |




#### Recommendation


| Name | Number | Description |
| ---- | ------ | ----------- |
| RECOMMENDATION_UNSPECIFIED | 0 | Не определено. |
| RECOMMENDATION_BUY | 1 | Покупать. |
| RECOMMENDATION_HOLD | 2 | Держать. |
| RECOMMENDATION_SELL | 3 | Продавать. |




#### RiskLevel
Уровень риска облигации.

| Name | Number | Description |
| ---- | ------ | ----------- |
| RISK_LEVEL_UNSPECIFIED | 0 | Не указан. |
| RISK_LEVEL_LOW | 1 | Низкий уровень риска. |
| RISK_LEVEL_MODERATE | 2 | Средний уровень риска. |
| RISK_LEVEL_HIGH | 3 | Высокий уровень риска. |




#### BondType


| Name | Number | Description |
| ---- | ------ | ----------- |
| BOND_TYPE_UNSPECIFIED | 0 | Тип облигации не определен. |
| BOND_TYPE_REPLACED | 1 | Замещающая облигация. |




#### InstrumentExchangeType
Площадка торговли.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_EXCHANGE_UNSPECIFIED | 0 | Площадка торговли не определена. |
| INSTRUMENT_EXCHANGE_DEALER | 1 | Бумага, торгуемая у дилера. |




#### GetBondEventsRequest.EventType


| Name | Number | Description |
| ---- | ------ | ----------- |
| EVENT_TYPE_UNSPECIFIED | 0 | Неопределенное значение. |
| EVENT_TYPE_CPN | 1 | Купон. |
| EVENT_TYPE_CALL | 2 | Опцион (оферта). |
| EVENT_TYPE_MTY | 3 | Погашение. |
| EVENT_TYPE_CONV | 4 | Конвертация. |




#### GetAssetReportsResponse.AssetReportPeriodType


| Name | Number | Description |
| ---- | ------ | ----------- |
| PERIOD_TYPE_UNSPECIFIED | 0 | Не указан. |
| PERIOD_TYPE_QUARTER | 1 | Квартальный. |
| PERIOD_TYPE_SEMIANNUAL | 2 | Полугодовой. |
| PERIOD_TYPE_ANNUAL | 3 | Годовой. |


 <!-- range .Enums -->
 <!-- range HasServices -->
 <!-- range .Files -->

#### InstrumentType
| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_TYPE_UNSPECIFIED | 0 | Тип инструмента не определён |
| INSTRUMENT_TYPE_BOND | 1 | Облигация |
| INSTRUMENT_TYPE_SHARE | 2 | Акция |
| INSTRUMENT_TYPE_CURRENCY | 3 | Валюта |
| INSTRUMENT_TYPE_ETF | 4 | Exchange-traded fund |
| INSTRUMENT_TYPE_FUTURES | 5 | Фьючерс |
| INSTRUMENT_TYPE_SP | 6 | Структурная нота |
| INSTRUMENT_TYPE_OPTION | 7 | Опцион |
| INSTRUMENT_TYPE_CLEARING_CERTIFICATE | 8 | Clearing certificate |
| INSTRUMENT_TYPE_INDEX | 9 | Индекс |
| INSTRUMENT_TYPE_COMMODITY | 10 | Товар |


#### InstrumentStatus
| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_TYPE_UNSPECIFIED | 0 | Значение не определено |
| INSTRUMENT_STATUS_BASE | 1 | Базовый список инструментов (по умолчанию). Инструменты, доступные для торговли через T-Invest API. Cейчас списки бумаг, которые доступны из API и других интерфейсах совпадают — кроме внебиржевых бумаг. Но в будущем возможны ситуации, когда списки инструментов будут отличаться. |
| INSTRUMENT_STATUS_ALL | 2 | Список всех инструментов |



#### Execution
| Value | Description |
| ----- | ------ |
| ED | Execution after Default - платеж выполнен после дефолта (должна быть дата платежа) |
| ET | Выполнены обязательства по техническому дефолту (платеж выполнен после дефолта) |
| ES | Выполнены обязательства по соглашению (платеж выполнен после соглашения) |
| S | Соглашение |
| T | Технический дефолт |
| E | Execution - исполнено, платеж выполнен без задержек |
| D | Default - дефолт |
| TD | Технически дефолт - задержка платежа более 5 дней, но менее 20 |


#### OperationType
| EventType | Value | Description |
| --------- | ----- | ----------- |
| CPN | Одно из значений: Прочий, Переменный, Фиксированный, Ипотечный, Дисконт, Плавающий, Постоянный |
| MTY | CA | Эмитент реализовал Call-опцион / частичное (амортизационное) погашение |
| MTY | OA | Call-опциона нет или не реализован / частичное (амортизационное) погашение |
| MTY | CM | Полное погашение оставшегося номинала, OM - полное погашение оставшегося номинала |
| MTY | CA | Эмитент реализовал Call-опцион / частичное (амортизационное) погашение |
| CALL | M | Досрочное погашение облигаций по праву эмитента | 
| CALL | N | Досрочное погашение облигаций по требованию владельцев | 
| CALL | C | Call-опцион |
| CALL | L | Call опцион на период |
| CALL | O | Оферта с возможностью дальнейшего обращения облигаций по требованию владельцев |
| CALL | K | Выкуп РЕПО |
| CALL | A | Досрочный выкуп облигаций по соглашению с их владельцами |
| CALL | V | Досрочное погашение ковенант |
| CONV | пусто | Не применимо |


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


#### BrandData
Данные о бренде

| Field | Type | Description |
| ----- | ---- | ----------- |
| logo_name |  [string](#string) | Логотип инструмента. Имя файла для получения логотипа |
| logo_base_color |  [string](#string) | Цвет бренда |
| text_color |  [string](#string) | Цвет текста для цвета логотипа бренда |
