





## SandboxService
Методы для работы с песочницей T-Invest API

###Методы сервиса


#### OpenSandboxAccount
OpenSandboxAccount — зарегистрировать счет

- Тело запроса — [OpenSandboxAccountRequest](#opensandboxaccountrequest)

- Тело ответа — [OpenSandboxAccountResponse](#opensandboxaccountresponse)


#### GetSandboxAccounts
GetSandboxAccounts — счета пользователя

- Тело запроса — [GetAccountsRequest](#getaccountsrequest)

- Тело ответа — [GetAccountsResponse](#getaccountsresponse)


#### CloseSandboxAccount
CloseSandboxAccount — закрыть счет

- Тело запроса — [CloseSandboxAccountRequest](#closesandboxaccountrequest)

- Тело ответа — [CloseSandboxAccountResponse](#closesandboxaccountresponse)


#### PostSandboxOrder
PostSandboxOrder — выставить заявку

- Тело запроса — [PostOrderRequest](#postorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### PostSandboxOrderAsync
PostSandboxOrderAsync — выставить заявку асинхронным методом
Особенности работы приведены в [статье](/invest/services/orders/async).

- Тело запроса — [PostOrderAsyncRequest](#postorderasyncrequest)

- Тело ответа — [PostOrderAsyncResponse](#postorderasyncresponse)


#### ReplaceSandboxOrder
ReplaceSandboxOrder — изменить выставленную заявку

- Тело запроса — [ReplaceOrderRequest](#replaceorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### GetSandboxOrders
GetSandboxOrders — получить список активных заявок по счету

- Тело запроса — [GetOrdersRequest](#getordersrequest)

- Тело ответа — [GetOrdersResponse](#getordersresponse)


#### CancelSandboxOrder
CancelSandboxOrder — отменить заявку

- Тело запроса — [CancelOrderRequest](#cancelorderrequest)

- Тело ответа — [CancelOrderResponse](#cancelorderresponse)


#### GetSandboxOrderState
GetSandboxOrderState — получить статус торгового поручения

- Тело запроса — [GetOrderStateRequest](#getorderstaterequest)

- Тело ответа — [OrderState](#orderstate)


#### GetSandboxPositions
GetSandboxPositions — список позиций по счету

- Тело запроса — [PositionsRequest](#positionsrequest)

- Тело ответа — [PositionsResponse](#positionsresponse)


#### GetSandboxOperations
GetSandboxOperations — список операций по счету
При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).

- Тело запроса — [OperationsRequest](#operationsrequest)

- Тело ответа — [OperationsResponse](#operationsresponse)


#### GetSandboxOperationsByCursor
GetSandboxOperationsByCursor — список операций по счету с пагинацией
При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).

- Тело запроса — [GetOperationsByCursorRequest](#getoperationsbycursorrequest)

- Тело ответа — [GetOperationsByCursorResponse](#getoperationsbycursorresponse)


#### GetSandboxPortfolio
GetSandboxPortfolio — портфель по счету

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


#### SandboxPayIn
SandboxPayIn — пополнить счет.

- Тело запроса — [SandboxPayInRequest](#sandboxpayinrequest)

- Тело ответа — [SandboxPayInResponse](#sandboxpayinresponse)


#### GetSandboxWithdrawLimits
GetSandboxWithdrawLimits — доступный остаток для вывода средств

- Тело запроса — [WithdrawLimitsRequest](#withdrawlimitsrequest)

- Тело ответа — [WithdrawLimitsResponse](#withdrawlimitsresponse)


#### GetSandboxMaxLots
GetSandboxMaxLots — расчет количества доступных для покупки/продажи лотов

- Тело запроса — [GetMaxLotsRequest](#getmaxlotsrequest)

- Тело ответа — [GetMaxLotsResponse](#getmaxlotsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### OpenSandboxAccountRequest
Запрос открытия счета в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| name | Массив объектов [string](#string) | Название счета |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OpenSandboxAccountResponse
Номер открытого счета в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счета |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CloseSandboxAccountRequest
Запрос закрытия счета в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счета |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CloseSandboxAccountResponse
Результат закрытия счета в песочнице.

пустой ответ

 <!-- end HasFields -->


#### SandboxPayInRequest
Запрос пополнения счета в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счета |
| amount |  [MoneyValue](#moneyvalue) | Сумма пополнения счета в рублях |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SandboxPayInResponse
Результат пополнения счета, текущий баланс.


| Field | Type | Description |
| ----- | ---- | ----------- |
| balance |  [MoneyValue](#moneyvalue) | Текущий баланс счета |
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

