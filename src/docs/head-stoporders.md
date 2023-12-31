#Сервис работы со стоп-ордерами

В процессе работы торговый робот может использовать возможности стоп-заявки. 

стоп-заявка или (стоп-ордер, стоп-приказ) — это особый вид торгового поручения, который трансформируется
в биржевое торговое поручение с заданными параметрами при достижении какого-то условия.

Подробнее про типы стоп-заявок можно почитать по [ссылке](https://www.tinkoff.ru/invest/account/help/trade-on-bs/bids/).

##Метод выставления стоп-заявки

Для выставления стоп-заявки используется метод [PostStopOrder](/investAPI/stoporders#poststoporder).

Обратите внимание на параметр *expiration_type*, он отвечает за время жизни (экспирации) заявки. Например,
значение GoodTillCancel говорит, что такая заявка будет активна до отмены, а GoodTillDate — что заявка
будет активна до определённой даты (параметр *expire_date*).

##Метод получения списка активных стоп-заявок

Для получения полного списка стоп-заявок рекомендуется использовать метод [GetStopOrders](/investAPI/stoporders#getstoporders).
Обратите внимание, что метод вернёт только стоп-заявку, которые ещё не были конвертированы в 
реальные торговые поручения. 

##Метод отмены стоп-заявки

Для отмены активной стоп-заявки используется метод [CancelStopOrder](/investAPI/stoporders#cancelstoporder).