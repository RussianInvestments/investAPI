# Ошибки WebSocket-протокола T-Invest API

[Типовые ошибки работы протокла](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code)

Некоторые специфичные ошибки WebSocket:
 
|Код ошибки|Тип ошибки|Текст ошибки|Причины возникновения и </br> рекомендации по устранению|
|---|---|---|---|
4003|INVALID_ARGUMENT|Invalid argument spacified|Параметры вызова метода заданы неверно.|
4004|DEADLINE_EXCEEDED|Deadline exceeded|Превышено время ожидания ответа от сервера.|
4008|RESOURCE_EXHAUSTED|Request limit exceeded|Превышен лимит запросов в минуту. [Подробнее про лимитную политику](https://russianinvestments.github.io/investAPI/limits/).|
4016|UNAUTHENTICATED|Authentication token is missing or invalid|Токен доступа не найден или неактивен.</br>Новый токен можно выпустить в [личном кабинете](https://www.tbank.ru/invest/settings/).|
