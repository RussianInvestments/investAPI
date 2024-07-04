# Асинхронный метод выставления заявок


С целью уменьшить latency доставки торговых поручений до биржи в T-Invest API реализован асинхронный метод выставления поручений.
При подачи поручений асинхронным методом брокер не дожидается подтверждения от бирже об успешном статусе выставления заявки и 
присвоении ей биржевого номера. При работе с асинхронным методом есть ряд особенностей.



## PostOrderAsync запрос

Входные параметры асинхронного метода идентичны [PostOrder](https://russianinvestments.github.io/investAPI/orders/#postorder).
При этом есть особенности.

[Идентификатор ключа идемпотентности](https://russianinvestments.github.io/investAPI/head-orders/#_5) `order_id` является обязательным
и должен быть передан в UUID формате.


## PostOrderAsync ответ

###В случае ошибки

При выставлении асинхронного поручения на стороне брокера проводятся предварительные проверки, идентичные синхронному взаимодействию.
В случае ошибок валидации ответ будет идентичен [PostOrder](https://russianinvestments.github.io/investAPI/orders/#postorder).

###Успешное выставление заявки

Если проверки пройдены и заявка передана на биржу, то вернется [ответ](https://russianinvestments.github.io/investAPI/orders/#postorderasyncresponse), где
`order_request_id` - ключ идемпотентности, переданный в запросе в виде `order_id`.

>**Важно**<br>
>

<blockquote>
<p><strong>Важно</strong><br>
В ответе метода нет биржевого идентификатора.  <code>trade_intent_id</code> — внутренний идентификатор брокера. </p>
</blockquote>

<blockquote>
<p><strong>Важно</strong><br>
Успешный ответ не гарантирует, что заявка будет выставлена на бирже. Биржа на своей стороне может отклонить заявку.</p>
</blockquote>


## Получить статус торгового поручения.

Изменение статуса торгового поручения можно подписавшись на [Стрим заявок](https://russianinvestments.github.io/investAPI/orders_state_stream/).
`order_request_id` в сообщениях стрима соответствует `order_request_id` в ответе PostOrderAsync, `order_id` — биржевому номеру заявки.
Получив из стрима биржевой номер, дальнейшие статусы можно отслеживать методами [GetOrderState](https://russianinvestments.github.io/investAPI/orders/#getorderstate)
и [GetOrder](https://russianinvestments.github.io/investAPI/orders/#getorders), а отменить методом [CancelOrder](https://russianinvestments.github.io/investAPI/orders/#cancelorder).
В ближайших релизах GetOrderState и CancelOrder будут поддерживать работу и по ключу идемпотентности `order_request_id`.