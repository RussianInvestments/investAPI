
Стрим соединение Tinkoff Invest API для получения изменений состояния заявок 


##Для чего используется

Стрим используется для получения событий по заявкам с момента выставления до момента исполнения или отмены. 
Статусная модель заявок описана на [странице](/investAPI/head-orders/#_2). Переход заявки от одного статуса в другой формирует событие в стриме.
В статусе `PARTYALLY_FILL` события формируются по мере исполнения заявки.

##Особенности работы

В методе передаются все заявки по счету из подписки, однако не во всех случаях возможно связать заявку в стриме с поручением отправленным методом `PostOrder`.
Заявки, транслируемые в стриме можно идентифицировать по `order_request_id` - [ключу идемпотентности](/investAPI/head-orders/#_6), переданному при [выставлении ордера](/investAPI/orders/#postorder).
Чтобы поддержать клиентский идентификатор в стриме требуется выполнение ряда условий:

- ордер должен содержать явно заданный [алгоритм исполнения](/investAPI/orders/#timeinforcetype);

- [ключ идемпотентности](/investAPI/faq_orders/#order_id-postorder_1) должен быть передан в формате UID;


###TimeInForceType

Для идентификации заявки в стриме по ключу идемпотентности требуется явно указать алгоритм исполнения поручения в `PostOrderRequest`.
Ниже приведены подходящие под условия варианты исполнения в зависимости от [типа заявки](/investAPI/orders/#ordertype):

| OrderType | TimeInForceType |
| ----- | ---- |
| ORDER_TYPE_LIMIT     |  **один из алгоритмов**: </br> TIME_IN_FORCE_DAY </br> TIME_IN_FORCE_FILL_AND_KILL </br> TIME_IN_FORCE_FILL_OR_KILL </br>|
| ORDER_TYPE_MARKET    |  TIME_IN_FORCE_DAY |
| ORDER_TYPE_BESTPRICE | указывать алгоритм исполнения не требуется, все bestprice заявки маршрутизируются в стрим с ключом идемпотентности |


####Что если не передавать подходящий `TimeInForceType`?

В сообщениях стрима **не будет заполнен** `order_request_id`. Однозначно связать выставленное поручение не получится.


###Ключ идемпотентности в формате UID

`order_request_id` в сообщениях стрима передается только формате UID. Если в запросе [PostOrderRequest](/investAPI/orders/#postorderrequest) 
передать значение в любом другом формате, оно **будет подменено** в сообщениях стрима на сгенерированный API UID. Однозначно связать выставленное поручение не получится.

###Резюме

В таблице показаны возможные ответы стрима в зависимости от параметов, переданных в `PostOrderRequest`:

|    | Ключ идемпотентности </br> не передан | Ключ идемпотентности </br> передан не в UID |Ключ идемпотентности </br> передан в UID |
| ----- | ---- | ---- |  ---- |
| **Тип исполнения не передан**  </br> **или не соответствует типу заявки** | order_request_id </br> отсутствует в сообщениях | order_request_id </br> отсутствует в сообщениях | order_request_id </br> отсутствует в сообщениях |
| **Тип исполнения передан** </br> **и соответствует типу заявки**          | в сообщениях order_request_id </br> сгенерированный API | в сообщениях order_request_id </br> сгенерированный API| **в сообщениях order_request_id </br> из PostOrder** |


##ReplaceOrder

Методом [изменения выставленной заявки](/investAPI/orders/#replaceorderrequest) пока не поддерживается новая маршрутизация. Будет доработано в ближайшее время.


##Сообщения стрима

###Статусы

Первое сообщение по поручению в стриме соответствует получению заявки брокером. На этом этапе еще не определен биржевой номер заявки, в `order_id` передается внутренний номер.

###Состав сообщений

Некоторые параметры ответа, такие, как список сделок и маркер, опциональные и ориентированы на будущее развитие метода.