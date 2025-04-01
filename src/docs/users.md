





## UsersService
С помощью сервиса можно получить: <br/> 1.
список счетов пользователя; <br/> 2. маржинальные показатели по счeту.

###Методы сервиса


#### GetAccounts
GetAccounts — счета пользователя
Получить список счетов.

- Тело запроса — [GetAccountsRequest](#getaccountsrequest)

- Тело ответа — [GetAccountsResponse](#getaccountsresponse)


#### GetMarginAttributes
GetMarginAttributes — маржинальные показатели по счeту
Метод позволяет получить маржинальные показатели и ликвидность по заданному счeту.

- Тело запроса — [GetMarginAttributesRequest](#getmarginattributesrequest)

- Тело ответа — [GetMarginAttributesResponse](#getmarginattributesresponse)


#### GetUserTariff
GetUserTariff — тариф пользователя
Получить информацию о текущих лимитах на подклчение, согласно текущему тарифу пользователя.

- Тело запроса — [GetUserTariffRequest](#getusertariffrequest)

- Тело ответа — [GetUserTariffResponse](#getusertariffresponse)


#### GetInfo
GetInfo — информация о пользователе
Получить информацию о пользователе: тариф, признак квалификации, пройденные тесты и др.

- Тело запроса — [GetInfoRequest](#getinforequest)

- Тело ответа — [GetInfoResponse](#getinforesponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### GetAccountsRequest
Запрос получения счетов пользователя.


| Field | Type | Description |
| ----- | ---- | ----------- |
| status |  [AccountStatus](#accountstatus) | Статус счета. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAccountsResponse
Список счетов пользователя.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [Account](#account) | Массив счетов клиента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Account
Информация о счeте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | Идентификатор счeта. |
| type |  [AccountType](#accounttype) | Тип счeта. |
| name |  [string](#string) | Название счeта. |
| status |  [AccountStatus](#accountstatus) | Статус счeта. |
| opened_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата открытия счeта в часовом поясе UTC. |
| closed_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата закрытия счeта в часовом поясе UTC. |
| access_level |  [AccessLevel](#accesslevel) | Уровень доступа к текущему счeту (определяется токеном). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetMarginAttributesRequest
Запрос маржинальных показателей по счeту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счeта пользователя. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetMarginAttributesResponse
Маржинальные показатели по счeту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| liquid_portfolio |  [MoneyValue](#moneyvalue) | Ликвидная стоимость портфеля. [Подробнее про ликвидный портфель](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q4). |
| starting_margin |  [MoneyValue](#moneyvalue) | Начальная маржа — начальное обеспечение для совершения новой сделки. [Подробнее про начальную и минимальную маржу](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q6). |
| minimal_margin |  [MoneyValue](#moneyvalue) | Минимальная маржа — это минимальное обеспечение для поддержания позиции, которую вы уже открыли. [Подробнее про начальную и минимальную маржу](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q6). |
| funds_sufficiency_level |  [Quotation](#quotation) | Уровень достаточности средств. Соотношение стоимости ликвидного портфеля к начальной марже. |
| amount_of_missing_funds |  [MoneyValue](#moneyvalue) | Объем недостающих средств. Разница между стартовой маржой и ликвидной стоимости портфеля. |
| corrected_margin |  [MoneyValue](#moneyvalue) | Скорректированная маржа. Начальная маржа, в которой плановые позиции рассчитываются с учeтом активных заявок на покупку позиций лонг или продажу позиций шорт. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetUserTariffRequest
Запрос текущих лимитов пользователя.

 <!-- end HasFields -->


#### GetUserTariffResponse
Текущие лимиты пользователя.


| Field | Type | Description |
| ----- | ---- | ----------- |
| unary_limits | Массив объектов [UnaryLimit](#unarylimit) | Массив лимитов пользователя по unary-запросам. |
| stream_limits | Массив объектов [StreamLimit](#streamlimit) | Массив лимитов пользователей для stream-соединений. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### UnaryLimit
Лимит unary-методов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| limit_per_minute |  [int32](#int32) | Количество unary-запросов в минуту. |
| methods | Массив объектов [string](#string) | Названия методов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### StreamLimit
Лимит stream-соединений.


| Field | Type | Description |
| ----- | ---- | ----------- |
| limit |  [int32](#int32) | Максимальное количество stream-соединений. |
| streams | Массив объектов [string](#string) | Названия stream-методов. |
| open |  [int32](#int32) | Текущее количество открытых stream-соединений. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetInfoRequest
Запрос информации о пользователе.

 <!-- end HasFields -->


#### GetInfoResponse
Информация о пользователе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| prem_status |  [bool](#bool) | Признак премиум клиента. |
| qual_status |  [bool](#bool) | Признак квалифицированного инвестора. |
| qualified_for_work_with | Массив объектов [string](#string) | Набор требующих тестирования инструментов и возможностей, с которыми может работать пользователь. [Подробнее](/invest/services/accounts/faq_users). |
| tariff |  [string](#string) | Наименование тарифа пользователя. |
| user_id |  [string](#string) | Идентификатор пользователя. |
| risk_level_code |  [string](#string) | Категория риска. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### AccountType
Тип счeта.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ACCOUNT_TYPE_UNSPECIFIED | 0 | Тип аккаунта не определeн. |
| ACCOUNT_TYPE_TINKOFF | 1 | Брокерский счeт Т-Инвестиций. |
| ACCOUNT_TYPE_TINKOFF_IIS | 2 | ИИС. |
| ACCOUNT_TYPE_INVEST_BOX | 3 | Инвесткопилка. |
| ACCOUNT_TYPE_INVEST_FUND | 4 | Фонд денежного рынка. |




#### AccountStatus
Статус счeта.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ACCOUNT_STATUS_UNSPECIFIED | 0 | Статус счeта не определeн. |
| ACCOUNT_STATUS_NEW | 1 | Новый, в процессе открытия. |
| ACCOUNT_STATUS_OPEN | 2 | Открытый и активный счeт. |
| ACCOUNT_STATUS_CLOSED | 3 | Закрытый счeт. |
| ACCOUNT_STATUS_ALL | 4 | Все счета. |




#### AccessLevel
Уровень доступа к счeту.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ACCOUNT_ACCESS_LEVEL_UNSPECIFIED | 0 | Уровень доступа не определeн. |
| ACCOUNT_ACCESS_LEVEL_FULL_ACCESS | 1 | Полный доступ к счeту. |
| ACCOUNT_ACCESS_LEVEL_READ_ONLY | 2 | Доступ с уровнем прав «только чтение». |
| ACCOUNT_ACCESS_LEVEL_NO_ACCESS | 3 | Доступа нет. |


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

