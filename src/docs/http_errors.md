# HTTP-коды ответа T-Invest API
 
|Код ошибки|Тип ошибки|Текст ошибки|Причины возникновения и </br> рекомендации по устранению|
|---|---|---|---|
200| OK | | Успешный запрос |
400|INVALID_ARGUMENT| 400 Bad Request|Запрос составлен неверно, проверьте параметры вызова и синтаксические ошибки.|
401|UNAUTHENTICATED| 401 Unauthorized|Токен доступа не найден или не активен.</br>Новый токен можно выпустить в [личном кабинете](https://www.tbank.ru/invest/settings/).|
403|PERMISSION_DENIED| 403 Forbidden|Недостаточно прав для выполнения запроса. Проверьте соответствие токена и передаваемого в запросе счёта.|
404|Unimplemented| 404 Not Found |Неверный URL запроса.|
405| |405 Method Not Allowed| Вызов медота недоступен. Попробуйте повторить запрос позже.|
408| |408 Request Timeout|Превышено время ожидания ответа от сервера. Попробуйте повторить запрос позже.|
415|Internal|415 Unsupported Media Type| Неверный тип данных. |
426| |426 Upgrade Required|Обновите версию протокола в вызове.|
429|RESOURCE_EXHAUSTED|429 Too Many Requests|Превышен лимит запросов в минуту. [Подробнее про лимитную политику](https://russianinvestments.github.io/investAPI/limits/).|
500|INTERNAL, UNKNOWN, DATA_LOSS, Unknown|500 Internal Server Error|Внутренняя ошибка сервера.|
501|UNIMPLEMENTED|501 Not Implemented|Сервер не поддерживает функцию, нужную для выполнения запроса. |
503|UNAVAILABLE|503 Service Unavailable|Сервис временно недоступен. Попробуйте повторить запрос позже.|
504|DEADLINE_EXCEEDED|504 Gateway Timeout|Нет ответа от шлюза или прокси-сервера.|