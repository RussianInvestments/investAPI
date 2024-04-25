### Сколько действует ключ идемпотентности

Ключ идемпотентности передаётся как параметры `order_id` в методе [postOrder](/investAPI/orders#postorder) и `idempotency_key` в методе [replaceOrder](/investAPI/orders#replaceorder).

Он хранится на стороне брокера и действует один год.

Счётчик стрим-соединений обновляется каждые 2 минуты.