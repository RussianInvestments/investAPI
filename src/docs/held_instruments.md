На внутреброкерском рынке Тинькофф заключаются операции с инструментами, по которым приостановлена торговля на биржах.
Не все ценные бумаги обращаются на внутреннем рынке. На странице представлен доступный функционал Tinkoff Invest API.

>Сейчас в Tinkoff Invest API нельзя совершать операции с этими инструментами.
Возможность торговли появится в ближайшее время.

## Торгуемые инструменты

Инструменты [торговой площадки](/investAPI/markets/) `dealer_int_exchange`. Получить список можно
методами [Shares](/investAPI/instruments/#shares) и [Etfs](/investAPI/instruments/#etfs) задав параметры:

* [Статус запрашиваемых инструментов](/investAPI/instruments/#instrumentstatus) — `INSTRUMENT_STATUS_ALL`

* [Площадка торговли](/investAPI/instruments/#instrumentexchangetype) — `INSTRUMENT_EXCHANGE_DEALER`


## Расписание торгов

Торговая сессия проходит с 12:00 по 21:00 по Москве (UTC +3).

> Расписание торгов может меняться в зависимости от выходных, праздников и от работы биржи.
Актуальную информацию лучше получать методом [getTradingSchedules](/investAPI/instruments#tradingschedules),
 передавая в параметрах вызова соответствующую торговую площадку.

## Котировки и рыночные данные

### Свечи

Недоступно

### OrderBook

Стакан можно получить методом [GetOrderBook](/investAPI/marketdata/#getorderbook) 
или в [Stream-соединениях](/investAPI/marketdata/#subscribeorderbookrequest).
Для получения стакана в стриме нужно указать [тип подписки](/investAPI/marketdata/#orderbooktype) `ORDERBOOK_TYPE_DEALER`.


### Цена последней сделки

Цену последней сделки мижно получить методом [GetLastPrices](/investAPI/marketdata/#getlastprices)
или из [Stream-соединения](/investAPI/marketdata/#subscribelastpricerequest).

### Цена закрытия

На внебиржевом рынке не применима цена закрытия `ClosePrice`.


### Обезличенные сделки

Недоступно


### Торговый статус

Торговля ведётся на внутриброкерском рынке, поэтому во время торгов он будет `DEALER_NORMAL_TRADING`.
Получить статус можно методом [GetTradingStatus](/investAPI/marketdata/#gettradingstatus) или из [Stream-соединения](/investAPI/marketdata/#subscribeinforequest).



## Торговля

Недоступно