#Ошибки WebSocket протокола TINKOFF INVEST API

Типовые ошибки работы протокла приведены на [странице](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code)

Некоторые специфичные ошибки WebSocket
 
|Код ошибки|Тип ошибки|Текст ошибки|Причины возникновения и </br> рекомендации по устранению|
|---|---|---|---|
4003|INVALID_ARGUMENT|Invalid argument spacified|Параметры вызова метода заданы неверно|
4004|DEADLINE_EXCEEDED|Deadline exceeded|Превышено время ожидания ответа от сервера|
4008|RESOURCE_EXHAUSTED|request limit exceeded|Превышен лимит запросов в минуту. Подробнее: [Лимитная политика](https://russianinvestments.github.io/investAPI/limits/)|
4016|UNAUTHENTICATED|authentication token is missing or invalid|Токен доступа не найден или не активен.</br>Вы можете выпустить новый токен по ссылке [Настройки](https://www.tinkoff.ru/invest/settings/)|
