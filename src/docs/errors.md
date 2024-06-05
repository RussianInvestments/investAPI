# Ошибки T-Invest API

|Код ошибки|Тип ошибки|Текст ошибки|Причины возникновения и </br> рекомендации по устранению|
|---|---|---|---|
12001|UNIMPLEMENTED|Method is unimplemented|Метод не реализован.|
12002|UNAVAILABLE|Deprecated method is unavailable|Метод устарел и недоступен.|
30001|INVALID_ARGUMENT|Missing parameter: `from`|Входной параметр `from` является обязательным.</br>Укажите корректный параметр `from`.|
30002|INVALID_ARGUMENT|The required period should not exceed 7 days|Запрошенный период не может превышать 7 дней.</br>Укажите корректный период.|
30003|INVALID_ARGUMENT|`from` can't be less than the current date|Входной параметр `from` не может быть меньше текущей даты.</br>Укажите корректный параметр `from`.|
30004|INVALID_ARGUMENT|Missing parameter: `to`|Входной параметр `to` является обязательным.</br>Укажите корректный параметр `to`.|
30005|INVALID_ARGUMENT|`id_type` is invalid|Входной параметр `id_type` имеет некорректное значение.</br>[Список доступных значений](https://russianinvestments.github.io/investAPI/instruments#instrumentidtype)
30006|INVALID_ARGUMENT|Missing parameter: `id_type`|Входной параметр `id_type` является обязательным.</br>Укажите корректный параметр `id_type`.|
30007|INVALID_ARGUMENT|Missing parameter: `id`|Входной параметр `id` является обязательным.</br>Укажите корректный параметр `id`.|
30008|INVALID_ARGUMENT|Missing parameter: `figi`|Входной параметр `figi` является обязательным.</br>Укажите корректный параметр `figi`.|
30009|INVALID_ARGUMENT|`from` is invalid|Входной параметр `from` имеет некорректное значение.</br>Укажите корректный параметр `from`.|
30010|INVALID_ARGUMENT|`to` is invalid|Входной параметр `to` имеет некорректное значение.</br>Укажите корректный параметр `to`.|
30011|INVALID_ARGUMENT|`interval` is invalid|Входной параметр `interval` имеет некорректное значение.</br>[Список доступных значений](https://russianinvestments.github.io/investAPI/marketdata#subscriptioninterval)|
30012|INVALID_ARGUMENT|`to` can't be less than `from`|Входной параметр `to` не может быть меньше параметра `from`.</br>Укажите корректные параметры `from` и `to`.|
30013|INVALID_ARGUMENT|`class_code` require for `id_type` = `ticker`|Входной параметр `class_code` не может быть пустым при поиске по тикеру.</br>Укажите корректный параметр `class_code`.</br>[Подробнее](https://russianinvestments.github.io/investAPI/faq_identification/)|
30014|INVALID_ARGUMENT|The maximum request period for the given candle interval has been exceeded|Превышен максимальный период запроса для данного интервала свечи.</br>Укажите корректный интервал.</br>[Подробнее](https://russianinvestments.github.io/investAPI/load_history/)|
30015|INVALID_ARGUMENT|Parameter `quantity` is missing or equal to 0|Входной параметр `quantity` является обязательным.</br>Укажите корректный параметр `quantity`.|
30016|INVALID_ARGUMENT|`quantity` is invalid|Входной параметр `quantity` имеет некорректное значение.</br>Укажите корректный параметр `quantity`.|
30017|INVALID_ARGUMENT|Missing parameter: `price`|Входной параметр `price` является обязательным.</br>Укажите корректный параметр `price`.</br>Значение параметра `price` должно быть положительным.</br>units и nanos не могут иметь разные знак, модуль nanos должен быть < 999 999 999.|
30018|INVALID_ARGUMENT|`price` is invalid|Входной параметр `price` имеет некорректное значение.</br>Укажите корректный параметр `price`.|
30019|INVALID_ARGUMENT|Missing parameter: `direction`|Входной параметр `direction` является обязательным.</br>Укажите корректный параметр `direction`.|
30020|INVALID_ARGUMENT|`direction` is invalid|Входной параметр `direction` имеет некорректное значение.|
30021|INVALID_ARGUMENT|Missing parameter: `account_id`|Входной параметр `account_id` является обязательным.</br>Укажите корректный параметр `account_id`.|
30022|INVALID_ARGUMENT|Missing parameter: `state`|Входной параметр `state` является обязательным.</br>Укажите корректный параметр `state`.</br>Список доступных значений: [`direction`](https://russianinvestments.github.io/investAPI/operations/#operationstate).|
30023|INVALID_ARGUMENT|invalid parameter: `state`|Входной параметр `state` имеет некорректное значение.</br>Укажите корректный параметр `state`.</br>Список доступных значений: [`direction`](https://russianinvestments.github.io/investAPI/operations/#operationstate).|
30025|INVALID_ARGUMENT|Missing parameter: `order_type`|Входной параметр `order_type` является обязательным.</br>Укажите корректный параметр `order_type`. Список доступных значений: [`order_type`](https://russianinvestments.github.io/investAPI/orders/#ordertype).|
30026|INVALID_ARGUMENT|invalid parameter: `order_type`|Входной параметр `order_type` имеет некорректное значение.</br>Укажите корректный параметр `order_type`.|
30027|INVALID_ARGUMENT|Missing parameter: `order_id`|Входной параметр `order_id` является обязательным.</br>Укажите корректный параметр `order_id`.|
30028|INVALID_ARGUMENT|`order id` is invalid UUID format.|Входной параметр `order_id` имеет некорректное значение.</br>Укажите корректный параметр `order_id` формата UUID. Максимальная длина — 36 символов.|
30029|INVALID_ARGUMENT|Missing parameter: `idempotency_key`|Входной параметр `idempotency_key` является обязательным.</br>Укажите корректный параметр `idempotency_key`.|
30030|INVALID_ARGUMENT|`idempotency_key` is invalid|Входной параметр `idempotency_key` имеет некорректное значение.</br>Укажите корректный параметр `idempotency_key`. Максимальная длина — 36 символов.|
30031|INVALID_ARGUMENT|Missing parameter: `depth`|Входной параметр `depth` является обязательным.</br>Укажите корректный параметр `depth`.|
30032|INVALID_ARGUMENT|`depth` is invalid|Входной параметр `depth` имеет некорректное значение.</br>Укажите корректный параметр `depth`.|
30033|INVALID_ARGUMENT|Missing parameter: `trade_clearing_account` or `class_code`|Параметр `trade_clearing_account` или `class_code` не может быть пустым.|
30034|INVALID_ARGUMENT|Not enough balance|Недостаточно средств для совершения сделки (ошибка песочницы).</br>Пополните баланс нужной валюты через метод [SandboxPayIn](https://russianinvestments.github.io/investAPI/sandbox#sandboxpayin).|
30036|INVALID_ARGUMENT|Missing parameter: `stop_price`|Входной параметр `stop_price` является обязательным.</br>Укажите корректный параметр `stop_price`.|
30037|INVALID_ARGUMENT|Missing parameter: `stop_order_type`|Входной параметр `stop_order_type` является обязательным.</br>Укажите корректный параметр `stop_order_type`.|
30038|INVALID_ARGUMENT|`stop_order_type` is invalid|Входной параметр `stop_order_type` имеет некорректное значение.</br>[Список доступных значений](https://russianinvestments.github.io/investAPI/stoporders/#stopordertype)|
30039|INVALID_ARGUMENT|Bad request: `trailing_data`|Укажите корректное значение параметра `trailing_data`.|
30040|INVALID_ARGUMENT|`expire_date` is invalid|Входной параметр `expire_date` имеет некорректное значение.</br>Укажите корректный параметр `expire_date`.|
30041|INVALID_ARGUMENT|The method is available only for futures|Метод предназначен только для работы с фьючерсами.</br>Передайте во входные параметры метода идентификатор фьючерса.|
30042|INVALID_ARGUMENT|Not enough assets for a margin trade|Недостаточно активов для маржинальной сделки.</br>Проверьте маржинальные показатели счёта — это можно сделать через метод [GetMarginAttributes](https://russianinvestments.github.io/investAPI/users#getmarginattributes).|
30043|INVALID_ARGUMENT|Missing parameter: `expiration_type`|Входной параметр `expiration_type` является обязательным.</br>Укажите корректный параметр `expiration_type`.|
30044|INVALID_ARGUMENT|`expiration_type` is invalid|Входной параметр `expiration_type` имеет некорректное значение.</br>[Список доступных значен](https://russianinvestments.github.io/investAPI/stoporders/#stoporderexpirationtype).|
30045|INVALID_ARGUMENT|Missing parameter: `ticker`|Входной параметр `ticker` является обязательным.</br>Укажите корректный параметр `ticker`.|
30047|INVALID_ARGUMENT|Price currency does not match the settlement currency|Валюта цены не совпадает с валютой расчётов по инструменту.</br>Укажите корректную валюту цены. Узнать валюту расчёта конкретного инструмента можно через метод [GetInstrumentBy](https://russianinvestments.github.io/investAPI/instruments#getinstrumentby). |
30048|INVALID_ARGUMENT|Instrument type is not bond|Метод предназначен только для запроса информации по облигации.</br>Передайте во входные параметры метода идентификатор облигации.|
30049|INVALID_ARGUMENT|Post order error: %s|Ошибка метода выставления торгового поручения.</br>Смотрите подробнее в тексте ошибки.|
30050|INVALID_ARGUMENT|`instrument_status` is invalid|Входной параметр `instrument_status` имеет некорректное значение.</br>[Список доступных значений](https://russianinvestments.github.io/investAPI/instruments#instrumentstatus)|
30051|INVALID_ARGUMENT|Account margin status is disabled|Для данного договора недоступна маржинальная торговля.</br>Чтобы выставлять поручения на срочном рынке, включите маржинальную торговлю в приложении и терминале.|
30052|INVALID_ARGUMENT|Instrument forbidden for trading by API|Для данного инструмента торговля через API недоступна.</br>Вы можете проверить значение параметра `api_trade_available_flag` инструмента через метод [GetTradingStatus](https://russianinvestments.github.io/investAPI/marketdata#gettradingstatus).|
30053|INVALID_ARGUMENT|Post stop_order error: %s|Ошибка метода выставления стоп-заявки.</br>Смотрите подробнее в тексте ошибки.|
30054|INVALID_ARGUMENT|Instrument type is not a share or etf|Тип инструмента не инвестиционный фонд или акция.|
30055|INVALID_ARGUMENT|`order_id` cannot be longer than 36 characters|`order_id` не может быть длиннее 36 символов.|
30056|INVALID_ARGUMENT|Stop order settlement currency is not supported|Валюта выставления стоп-заявки не поддерживается.|
30057|INVALID_ARGUMENT|The order is a duplicate, but the order report was not found|Заявка является дублем, но отчёт по заявке не найден.</br>Проверьте параметр `order_id` (идентификатор запроса выставления поручения для целей идемпотентности) — он должен быть уникальным.|
30058|INVALID_ARGUMENT|Task not completed yet, please try again later|Выполнение задачи ещё не завершено, попробуйте позже.|
30059|INVALID_ARGUMENT|Cancel order error: %s|Ошибка метода отмены заявки.</br>Смотрите подробнее в тексте ошибки.|
30060|INVALID_ARGUMENT|Cancel stop-order error: %s|Ошибка метода отмены стоп-заявки.</br>Смотрите подробнее в тексте ошибки.|
30061|INVALID_ARGUMENT|`from` value out of range|Входной параметр `from` имеет некорректное значение.</br>Укажите значение в пределах от 1970-01-01T00:00:00Z до 2099-12-31T23:59:59.999999999Z включительно.|
30062|INVALID_ARGUMENT|`to` value out of range|Входной параметр `to` имеет некорректное значение.</br>Укажите значение в пределах от 1970-01-01T00:00:00Z до 2099-12-31T23:59:59.999999999Z включительно.|
30063|INVALID_ARGUMENT|`expire_date` value out of range|Входной параметр `expire_date` имеет некорректное значение.</br>Дата должна быть не ранее текущей и не позднее 2099-12-31T23:59:59.999999999Z.|
30064|INVALID_ARGUMENT|The required period should not exceed 31 days|Запрошенный период не может превышать 31 дня.</br>Укажите корректный период.|
30065|INVALID_ARGUMENT|Missing parameter: `task_id`|Входной параметр `task_id` является обязательным.</br>Укажите корректный параметр `task_id`.|
30066|INVALID_ARGUMENT|Missing parameter: `payload`|Входной параметр `payload` является обязательным.</br>Укажите корректный параметр `payload`.|
30067|INVALID_ARGUMENT|`action_type` is invalid|Некорректное значение `action_type`.</br>Выберите допустимое значение.|
30068|INVALID_ARGUMENT|Only limit order is allowed|В настоящий момент возможно выставление только лимитного торгового поручения. <br>[Подробнее про выставление торговых поручений](https://russianinvestments.github.io/investAPI/orders_details)|
30069|INVALID_ARGUMENT|Invalid parameter: `limit`|Входной параметр `limit` имеет некорректное значение.</br>Значение должно быть меньше или равно 1000.|
30070|INVALID_ARGUMENT|`from` can't be more than the current date|Входной параметр `from` имеет некорректное значение.</br>Укажите значение, которое не превышает текущую дату и время.|
30077|INVALID_ARGUMENT|Not available for OTC instruments|Метод недоступен для внебиржевых инструментов.</br>У таких инструментов параметр `api_trade_available_flag` метода [`GetTradingStatus`](https://russianinvestments.github.io/investAPI/marketdata#gettradingstatus) будет иметь значение `false`.|
30078|INVALID_ARGUMENT|Incorrect minimum price increment|Некорректный шаг изменения цены.</br>Остаток от деления `price` на `min_price_increment` должен быть равен 0.|
30079|INVALID_ARGUMENT|Instrument is not available for trading|Инструмент недоступен для торгов.<br> [Подробнее о торговых статусах](https://russianinvestments.github.io/investAPI/faq_trading_status)|
30080|INVALID_ARGUMENT|Quantity must be positive|Количество лотов должно быть положительным числом.|
30081|INVALID_ARGUMENT|Account status is closed|Аккаунт закрыт.|
30082|INVALID_ARGUMENT|Account status is blocked|Аккаунт заблокирован.|
30083|INVALID_ARGUMENT|`order_type` is invalid|Некорректный тип заявки.|
30084|INVALID_ARGUMENT|Maximum request period has been exceeded|Превышен лимит запрашиваемого периода.|
30085|INVALID_ARGUMENT|Price in points is available only for futures and bonds|Тип цены в пунктах доступен только для фьючерсов и облигаций.|
30086|INVALID_ARGUMENT|Year is invalid|Некорректный год.|
30087|INVALID_ARGUMENT|Missing parameter: `query`|Входной параметр `query` является обязательным.</br>Укажите не пустой параметр `query`.|
30088|INVALID_ARGUMENT|`from` and `to` must have the same year|Запрашиваемые даты должны быть в рамках одного года.|
30089|INVALID_ARGUMENT|`to` must not be later than `%s`|Поле `to` не должно быть позднее даты, указанной в тексте ошибки.</br>Дата указана в формате ISO 8601.|
30090|INVALID_ARGUMENT|Missing parameter: `siebel_id`|Входной параметр `siebel_id` является обязательным.</br>Укажите корректный параметр `siebel_id`.|
30091|INVALID_ARGUMENT|Quantity of instruments can`t be more than 100|Количество инструментов не может превышать 100.|
30092|INVALID_ARGUMENT|Trading unavailable on weekends|Торги недоступны по нерабочим дням. </br>[Подробнее о торговых сессиях](https://russianinvestments.github.io/investAPI/markets)|
30093|INVALID_ARGUMENT|Missing parameter: `figi` or `instrument_id`|Один из параметров — `figi` или `instrument_id` — является обязательным.|
30094|INVALID_ARGUMENT|Options trading is not available at the moment|Выставление заявок по опционам недоступно.|
30095|INVALID_ARGUMENT|The request was not executed by the exchange|Заявка не исполнена биржей.</br>Лимитная заявка может не исполняться, потому что не достигла установленной цены на бирже.</br>Рыночная — из-за отсутствия сделок с данными инструментов, то есть низкой ликвидности.|
30096|INVALID_ARGUMENT|The order was rejected, try again later|Заявка отклонена, попробуйте повторить позже.|
30097|INVALID_ARGUMENT|Inappropriate trading session|Сейчас эта сессия не идёт. </br>[Подробнее о торговых сессиях](https://russianinvestments.github.io/investAPI/markets)|
30098|INVALID_ARGUMENT|Currently, there is no trading on this financial instrument|Торги по этому финансовому инструменту сейчас не проводятся.</br>Проверить актуальный торговый статус инструмента можно через метод [GetTradingStatus](https://russianinvestments.github.io/investAPI/marketdata#gettradingstatus).|
30099|INVALID_ARGUMENT|The price is outside the limits for this instrument|Цена вне лимитов по инструменту или сделки вне лимита.</br>[Подробнее про выставление торговых поручений](https://russianinvestments.github.io/investAPI/orders_details)|
30100|INVALID_ARGUMENT|The price must be positive|Цена должна быть положительной.|
30101|INVALID_ARGUMENT|To trade this financial instrument, pass the test|Для торговли этим инструментом пройдите тестирование. [Подробнее про тестирование](https://www.tbank.ru/blog/articles/test-invest/).|
30102|INVALID_ARGUMENT|Required parameters Missing|Обязательные параметры указаны неправильно.|
30103|INVALID_ARGUMENT|Only best price is allowed|Для инструмента можно выставить заявки только с типом «лучшая цена».|
30104|INVALID_ARGUMENT|`price_type` is invalid|Некорректное значение `price_type`. Значением `price_type` может быть только `PRICE_TYPE_POINT` или `PRICE_TYPE_CURRENCY`.|
30105|INVALID_ARGUMENT|`exchange_order_type` is invalid|Некорректное значение `exchange_order_type`. Значением `exchange_order_type` может быть только `LIMIT` или `MARKET`.|
30106|INVALID_ARGUMENT|`status` is invalid|Некорректное значение `status`. Значением `status` может быть только `ACTIVE`, `EXCECUTED`, `CANCELED` или `EXPIRED`.|
30107|INVALID_ARGUMENT|Negative values are not allowed|Некорректное значение `limit` и/или `page`. Параметры `limit` и `page` не могут принимать отицательные значения.|
30108|INVALID_ARGUMENT|Specify a lower limit or page value because there are fewer brands|Количество брендов меньше запрашиваемых параметров.|
30109|INVALID_ARGUMENT|Maximum transaction amount has been exceeded|Превышена максимальная сумма сделки. Разделите ордер на несколько ордеров меньшего объема.|
30210|INVALID_ARGUMENT|Trailing data required|Проверьте параметры запроса стоп-заявки. Не заданы `indent` или `spread`.|
30211|INVALID_ARGUMENT|`indent type` required|Проверьте параметры запроса стоп-заявки. Не задан `indent_type`.|
30212|INVALID_ARGUMENT|`spread type` required|Проверьте параметры запроса стоп-заявки. Не задан `spread_type`.|
30213|INVALID_ARGUMENT|`indicator_type` is invalid|Проверьте параметры запроса. Некорректный `indicator_type`.|
30214|INVALID_ARGUMENT|`type_of_price` is invalid|Проверьте параметры запроса. Некорректный `type_of_price`.|
30215|INVALID_ARGUMENT|`length` is invalid|Проверьте параметры запроса. Некорректный `length`.|
30216|INVALID_ARGUMENT|d`eviation_data` is invalid|Проверьте параметры запроса. Некорректный параметр `deviation_data`.|
30217|INVALID_ARGUMENT|`smoothing_data` is invalid|Проверьте параметры запроса. Некорректный параметр `smoothing_data`.|
30218|INVALID_ARGUMENT|Quantity of instruments can`t be more than 3000|Количество инструментов в списке не может быть больше 3000.|
30219|INVALID_ARGUMENT|input `candle_source_type` is invalid|Проверьте параметры запроса. Некорректный параметр `candle_source_type`.|
35001|INVALID_ARGUMENT|Sandbox accounts limit reached|Достигнут лимит на открытие торговых счетов в песочнице. Чтобы открыть новый счёт, закройте один из существующих.|
40002|PERMISSION_DENIED|Insufficient privileges|Недостаточно прав для совершения операции.</br>Токен доступа имеет уровень прав read-only или у токена нет доступа к указанному счёту.</br>[Подробнее про виды токенов](https://russianinvestments.github.io/investAPI/index#_2)|
40003|UNAUTHENTICATED|Authentication token is missing or invalid|Токен доступа не найден или неактивен.</br>Новый токен можно выпустить в [личном кабинете](https://www.tbank.ru/invest/settings/).|
40004|PERMISSION_DENIED|Working with orders is not available with this account|Выставление заявок недоступно с текущего аккаунта.</br>Брокерский счёт не найден, не принадлежит пользователю или закрыт. Возможно, на пользователе ограничения от T-Invest API или от биржи — в этом случае обратитесь в техподдержку. |
50001|NOT_FOUND|Exchange not found|Биржа не найдена по переданному `exchange_id`.</br>Укажите корректный `exchange_id`.|
50002|NOT_FOUND|Instrument not found|Инструмент не найден.</br>Укажите корректный идентификатор инструмента.|
50004|NOT_FOUND|Account not found|Счёт по переданному `account_id` не найден.</br>Укажите корректный `account_id`.|
50005|NOT_FOUND|Order not found|Торговое поручение по переданному `order_id` не найдено.</br>Укажите корректный `order_id`.|
50006|NOT_FOUND|Stop-order not found|Стоп-заявка по переданному `stop_order_id` не найдена.</br>Укажите корректный `stop_order_id`.|
50007|NOT_FOUND|Task not found|Задача не найдена.|
50008|NOT_FOUND|No orderbook provider|Отсутствует источник данных по стаканам.|
50009|NOT_FOUND|Asset not found|Актив не найден.</br>Укажите корректный идентификатор актива.|
50010|NOT_FOUND|Brand not found|Бренд не найден.</br>Укажите корректный идентификатор бренда.|
70001|INTERNAL|Internal error|Внутренняя ошибка сервиса.</br>Если ошибка повторяется, обратитесь в службу технической поддержки.|
70002|INTERNAL|Internal network error|Неизвестная сетевая ошибка, попробуйте выполнить запрос позднее.</br>Если ошибка повторяется, обратитесь в службу технической поддержки.|
70003|INTERNAL|Internal error, please try again later|Внутренняя ошибка сервиса, попробуйте выполнить запрос позже.</br>Если ошибка повторяется, обратитесь в службу технической поддержки.|
80001|RESOURCE_EXHAUSTED|Limit of open streams exceeded|Превышен лимит одновременных открытых stream-соединений. [Подробнее про лимитную политику](https://russianinvestments.github.io/investAPI/limits/).|
80002|RESOURCE_EXHAUSTED|Request limit exceeded|Превышен лимит запросов в минуту. [Подробнее про лимитную политику](https://russianinvestments.github.io/investAPI/limits/).|
80003|RESOURCE_EXHAUSTED|The limit on SMS sending has been exceeded, try again in a minute|Превышен лимит на отправку СМС, попробуйте через минуту. Если вы не хотите получать СМС при выставлении заявки, отключите отправку СМС в личном кабинете.|
80004|RESOURCE_EXHAUSTED|No active subscriptions|В стриме отсутствуют активные подписки.|
90001|FAILED_PRECONDITION|Need confirmation: %s|Требуется подтверждение операции.</br>Смотрите подробнее в тексте ошибки.|
90002|FAILED_PRECONDITION|Only for qualified investors|Торговля этим инструментом доступна только квалифицированным инвесторам.|
90003|FAILED_PRECONDITION|The price is too high|Цена заявки слишком высокая. Разбейте заявку на заявки меньшего размера. [Подробнее про ограничения на стоимость заявки](https://russianinvestments.github.io/investAPI/faq_orders/).|
