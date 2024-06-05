### Можно ли узнать идентификатор поручения из операции? 

Нет, сейчас такой информации в операции нет, но мы работаем над этим. 

### Почему в операции пустой FIGI? 

Такое может быть у операций внесения денежных средств и подобных — у них нет связанного с операцией биржевого
инструмента.

### Будут ли отображаться операции по бумагам, которые прошли делистинг?

Да. Также операции по бумагам будут отображаться после различных [корпоративных действий](/investAPI/faq_corp_action/).

### Параметр `quantity` передаётся в лотах или количествах?

В рамках сервиса операций параметр `quantity` всегда передаётся в лотах инструмента.

### Как с помощью T-Invest API получить брокерский отчёт? 

Через метод [GetBrokerReport](/investAPI/operations#getbrokerreport).

Обратите внимание: получение брокерского отчёта асинхронно — сначала вы запрашиваете формирование
отчёта, отправляя пакет [generate_broker_report_request](/investAPI/operations#generatebrokerreportrequest), и
получаете идентификатор задачи формирования отчёта — параметр `task_id.` После этого можно запрашивать
отчёт по его идентификатору. 

Если формирование отчёта ещё не закончено, вы получите соответствующее сообщение об ошибке.

[Подробнее о брокерском отчёте](https://www.tbank.ru/invest/account/help/trade-on-bs/get-report/)

### Как получить информацию о позициях и доходности портфеля?

Одним из способов:

- Подпишитесь на [PortfolioStream](/investAPI/operations/#portfoliostream). В стриме не отображаются бумаги, заблокированные биржей. 
- Используйте методы [GetPortfolio](/investAPI/operations/#getportfolio) и [GetPossitions](/investAPI/operations/#getpositions). Через них также можно получить бумаги, заблокированные биржей. 

### Как получить информацию об операциях?

Через [getOperationsByCursor](/investAPI/operations#getoperationsbycursor). Метод возвращает постраничную информацию обо всех операциях, в том числе отменённых, поддерживает пагинацию и расширенную фильтрацию.
Во входных параметрах запроса достаточно указать только `account_id`.

Также в T-Invest API есть метод [getOperations](/investAPI/operations#getoperations) — это более старая версия [getOperationsByCursor](/investAPI/operations#getoperationsbycursor). Мы рекомендуем использовать [getOperationsByCursor](/investAPI/operations#getoperationsbycursor).

>**Важно**<br>
>Метод [getOperations](/investAPI/operations#getoperations) возвращает только последнюю тысячу операций.

### Как понять, какие бумаги в портфеле заблокированы по решению ЦБ?

В методах [getPortfolio](/investAPI/operations#getportfolio) и [getPositions](/investAPI/operations#getpositions) есть специальные булевы параметры `exchange_blocked` и `blocked`. Они принимают значение `true`, если инструмент заблокирован депозитарием.

### В чем различие между параметрами `positions.blocked` и `positions.blocked_lots` в методе [getPortfolio](/investAPI/operations#getportfolio)? 

- `positions.blocked_lots` — количество заблокированных бумаг на счёте. Используется при выставлении лимитных заявок. 
- `positions.blocked` — булевый параметр. Отображает, заблокирован ли инструмент депозитарием.

### Что за значения приходят в `positions.expectedYield` в методе [getPortfolio](/investAPI/operations#getportfolio)?

В параметрах `positions.expectedYield` и `positions.expectedYieldFifo` возвращается значение текущей рассчитанной доходности позиции — это значение в валюте инструмента.