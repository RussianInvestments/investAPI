В выходные и нерабочие дни, когда торги на биржах не проводятся, в T-Invest API есть возможность совершать операции.
Такая торговля имеет ряд ограничений: нельзя совершать операции по ИИС счету, стоп заявки недоступны, открыта маржинальная торговля. 

[Подробнее про особенности торговли в выходные](https://www.tbank.ru/finance/blog/weekend-trading/)


## Торгуемые инструменты

Заключать сделки возможно только по [ограниченному списку инструментов](/investAPI/faq_instruments/#1.13).
Сейчас это инструменты [торговых площадок](/investAPI/markets/) `MOEX_WEEKEND` и `MOEX_EVENING_WEEKEND` с признаком `weekendFlag=true`.

## Расписание торгов

Торговая сессия выходного дня проходит с 10:00 по 19:00 по Москве (UTC +3).

> Расписание торгов может меняться в зависимости от выходных, праздников и от работы биржи.
Актуальную информацию лучше получать методом [getTradingSchedules](/investAPI/instruments#tradingschedules),
 передавая в параметрах вызова соответствующую торговую площадку.

## Котировки и рыночные данные

### Свечи

Доступны в API в методе [GetCandles](/investAPI/marketdata/#getcandles) только на маленьких [интервалах](/investAPI/marketdata/#candleinterval)
в диапазоне от `CANDLE_INTERVAL_1_MIN` до `CANDLE_INTERVAL_HOUR`.

В [Stream-соединениях](/investAPI/stream/) свечи пока не доступны.


### OrderBook

Стакан можно получить методом [GetOrderBook](/investAPI/marketdata/#getorderbook) 
или в [Stream-соединениях](/investAPI/marketdata/#subscribeorderbookrequest).
Для получения стакана от торговли по выходным в стриме нужно указать [тип подписки](/investAPI/marketdata/#orderbooktype) `ORDERBOOK_TYPE_DEALER`.


### Цена последней сделки

Цену последней сделки мижно получить методом [GetLastPrices](/investAPI/marketdata/#getlastprices)
или из [Stream-соединения](/investAPI/marketdata/#subscribelastpricerequest).

### Цена закрытия

На внебиржевом рынке не применима цена закрытия `ClosePrice`.


### Обезличенные сделки

Поток обезличенных сделок от торговли по выходным можно получить в  [Stream-соединениях](/investAPI/marketdata/#subscribetradesrequest),
указав [тип подписки](/investAPI/marketdata/#tradesourcetype) `TRADE_SOURCE_DEALER` или `TRADE_SOURCE_ALL`.


### Торговый статус

Торговля ведётся на внутреннем рынке, поэтому во время торгов он будет `DEALER_NORMAL_TRADING`.
Получить статус можно методом [GetTradingStatus](/investAPI/marketdata/#gettradingstatus) или из [Stream-соединения](/investAPI/marketdata/#subscribeinforequest).



## Торговля

В выходные дни заявки можно выставлять с некоторыми ограничениями. Доступные [типы заявок](/investAPI/orders/#ordertype) приведены в таблице.

|Тип заявки|Доступность выставления торгов|
|---|---|
Лимитная|Доступно. Исключение — [алгоритм исполнения](/investAPI/orders/#timeinforcetype) `FILL_OR_KILL`|
Рыночная|Недоступно|
Лучшая цена|Доступно|

[Отмена](/investAPI/orders/#cancelorder), [получение cтатуса](/investAPI/orders/#getorderstate) и [изменение](/investAPI/orders/#replaceorder) выставленной заявки
по выходным выполняются без каких-либо особенностей.

### Сделки и заявки

Сделки, совершенные в выходные, можно получать в [стриме сделок](/investAPI/orders/#tradesstream).
Подписаться на статусы заявок можно используя [OrderStateStream](/investAPI/orders_state_stream/).

