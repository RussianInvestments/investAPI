





## SandboxService
Методы для работы с песочницей T-Invest API

###Методы сервиса


#### OpenSandboxAccount
Зарегистрировать счёт.

- Тело запроса — [OpenSandboxAccountRequest](#opensandboxaccountrequest)

- Тело ответа — [OpenSandboxAccountResponse](#opensandboxaccountresponse)


#### GetSandboxAccounts
Получить счета.

- Тело запроса — [GetAccountsRequest](#getaccountsrequest)

- Тело ответа — [GetAccountsResponse](#getaccountsresponse)


#### CloseSandboxAccount
Закрыть счёт.

- Тело запроса — [CloseSandboxAccountRequest](#closesandboxaccountrequest)

- Тело ответа — [CloseSandboxAccountResponse](#closesandboxaccountresponse)


#### PostSandboxOrder
Выставить торговое поручение.

- Тело запроса — [PostOrderRequest](#postorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### ReplaceSandboxOrder
Изменить выставленную заявку.

- Тело запроса — [ReplaceOrderRequest](#replaceorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### GetSandboxOrders
Получить список активных заявок по счёту.

- Тело запроса — [GetOrdersRequest](#getordersrequest)

- Тело ответа — [GetOrdersResponse](#getordersresponse)


#### CancelSandboxOrder
Отменить торговое поручение.

- Тело запроса — [CancelOrderRequest](#cancelorderrequest)

- Тело ответа — [CancelOrderResponse](#cancelorderresponse)


#### GetSandboxOrderState
Поулчить статус заявки в песочнице. Заявки хранятся в таблице 7 дней.

- Тело запроса — [GetOrderStateRequest](#getorderstaterequest)

- Тело ответа — [OrderState](#orderstate)


#### GetSandboxPositions
Получить позиции по виртуальному счёту.

- Тело запроса — [PositionsRequest](#positionsrequest)

- Тело ответа — [PositionsResponse](#positionsresponse)


#### GetSandboxOperations
Получить операции по номеру счёта.

- Тело запроса — [OperationsRequest](#operationsrequest)

- Тело ответа — [OperationsResponse](#operationsresponse)


#### GetSandboxOperationsByCursor
Получить операции по номеру счёта с пагинацией.

- Тело запроса — [GetOperationsByCursorRequest](#getoperationsbycursorrequest)

- Тело ответа — [GetOperationsByCursorResponse](#getoperationsbycursorresponse)


#### GetSandboxPortfolio
Получить портфель.

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


#### SandboxPayIn
Пополнить счёт.

- Тело запроса — [SandboxPayInRequest](#sandboxpayinrequest)

- Тело ответа — [SandboxPayInResponse](#sandboxpayinresponse)


#### GetSandboxWithdrawLimits
Получить доступный остаток для вывода средств.

- Тело запроса — [WithdrawLimitsRequest](#withdrawlimitsrequest)

- Тело ответа — [WithdrawLimitsResponse](#withdrawlimitsresponse)


#### GetSandboxMaxLots
Расчёт количества доступных для покупки/продажи лотов в песочнице.

- Тело запроса — [GetMaxLotsRequest](#getmaxlotsrequest)

- Тело ответа — [GetMaxLotsResponse](#getmaxlotsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### OpenSandboxAccountRequest
Запрос открытия счёта в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| name | Массив объектов [string](#string) | Название счёта |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OpenSandboxAccountResponse
Номер открытого счёта в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CloseSandboxAccountRequest
Запрос закрытия счёта в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CloseSandboxAccountResponse
Результат закрытия счёта в песочнице.

пустой ответ

 <!-- end HasFields -->


#### SandboxPayInRequest
Запрос пополнения счёта в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
| amount |  [MoneyValue](#moneyvalue) | Сумма пополнения счёта в рублях |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SandboxPayInResponse
Результат пополнения счёта, текущий баланс.


| Field | Type | Description |
| ----- | ---- | ----------- |
| balance |  [MoneyValue](#moneyvalue) | Текущий баланс счёта |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

 <!-- range .Enums -->
 <!-- range HasServices -->
 <!-- range .Files -->


## Нестандартные типы данных

### MoneyValue
Денежная сумма в определенной валюте

| Field | Type | Description |
| ----- | ---- | ----------- |
| currency |  [string](#string) | Строковый ISO-код валюты |
| units |  [int64](#int64) | Целая часть суммы, может быть отрицательным числом |
| nano |  [int32](#int32) | Дробная часть суммы, может быть отрицательным числом |


### Quotation
Котировка - денежная сумма без указания валюты

| Field | Type | Description |
| ----- | ---- | ----------- |
| units |  [int64](#int64) | Целая часть суммы, может быть отрицательным числом |
| nano |  [int32](#int32) | Дробная часть суммы, может быть отрицательным числом |

