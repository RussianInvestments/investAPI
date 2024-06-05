Существует несколько фондов Т-Банка, которые не торгуются на биржах.
В T-Invest API есть возможность работать с этими инструментами.

>Сейчас в T-Invest API нельзя совершать операции с этими инструментами.
Возможность торговли появится в ближайшее время.


## Торгуемые инструменты

Инструменты [торговой площадки](/investAPI/markets/) `dealer_realestate` и  [class_code](/investAPI/faq_instruments/#1.3)`ZPIF_OTC`

## Расписание торгов

Торговая сессия проходит по рабочим дням с 10:00 по 19:00 по Москве (UTC +3).

> Расписание торгов может меняться в зависимости от выходных, праздников и от работы биржи.
Актуальную информацию лучше получать методом [getTradingSchedules](/investAPI/instruments#tradingschedules),
 передавая в параметрах вызова соответствующую торговую площадку.

## Котировки и рыночные данные

### Свечи

Недоступно


### OrderBook

Стакан можно получить методом [GetOrderBook](/investAPI/marketdata/#getorderbook) 
или в [Stream-соединениях](/investAPI/marketdata/#subscribeorderbookrequest).
Для получения стакана по фондам Т-Банка в стриме нужно указать [тип подписки](/investAPI/marketdata/#orderbooktype) `ORDERBOOK_TYPE_DEALER`.


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

