# T-Invest API

T-Invest API — это интерфейс для взаимодействия с торговой платформой [Т-Инвестиции](https://www.tbank.ru/invest/).

[Документация для разработчиков](https://russianInvestments.github.io/investAPI/)

# Акции

С 25 июля 2022 действует акция с кэшбэком в размере 10% от комиссии по всем торговым поручениям, выставляемым через [API](https://www.tbank.ru/invest/open-api/).

# Примеры решаемых задач

### Анализ котировок бумаг

Через API можно загрузить как исторические котировки, так и котировки в режиме реального времени по всем бумагам

Для загрузки всех исторических котировок (по всем годам и бумагам) рекомендуем использовать [скрипт](https://github.com/russianInvestments/investAPI/blob/main/src/marketdata/download_md.sh) 

### Сигналы на покупку или продажу

Торговлю по алгоритму можно автоматизировать, запрограммировав выставление сигналов


### Ведение собственной системы статистики

Если не хватает существующей функциональности по анализу портфеля, то легко сделать свою собственную

### Тестирование стратегий на истории

T-Invest API позволит протестировать торговую гипотезу на основе исторических данных

### Создание торговых роботов

При помощи T-Invest API можно создать своего торгового робота, осуществляющего полностью автоматическую торговлю по стратегии


# Функциональные возможности
API позволяет автоматизировать торговлю ценными бумагами, предоставляя возможность:
* выгрузки торговых инструментов и их параметров;
* выгрузки истории котировок и текущие рыночные котировки;
* выставление и отмены поручений;
* просмотр текущего портфеля и операций;
* времени работы бирж;
* ставки риска инструментов;
* подписку на поток сделок;

и многое другое

# Об API и протоколе
API реализован на быстром, удобном и функциональном протоколе [gRPC](https://grpc.io/docs/).

Для поддержки web-клиентов, например браузерных JS скриптов, внедрена поддержка [gRPC-web](https://grpc.io/docs/platforms/web/basics/).

Для клиентов, привыкших работать с REST API, реализован прокси [Swagger](https://russianInvestments.github.io/investAPI/swagger-ui/).

Есть поддержка WebSocket стриминга. [Спецификация](https://github.com/RussianInvestments/investAPI/blob/main/src/docs/ws/asyncapi.yaml)

[Документация для разработчиков](https://RussianInvestments.github.io/investAPI/)

# SDK
Вы можете как самостоятельно создать обертку по [proto-контрактам](https://github.com/RussianInvestments/investAPI/tree/main/src/docs/contracts) так воспользоваться одним из SDK:

## SDK от RussianInvestments
* [go](https://github.com/RussianInvestments/invest-api-go-sdk)
* [python](https://github.com/RussianInvestments/invest-python)
* [java](https://github.com/RussianInvestments/invest-api-java-sdk)
* [csharp](https://github.com/RussianInvestments/invest-api-csharp-sdk)

## Неофициальные SDK
* [golang](https://github.com/ssummers02/invest-api-go-sdk)
* nodejs
  - [betslus1/unofficial-tinkoff-invest-api_v2-lazy-sdk-NODEJS](https://github.com/betslus1/unofficial-tinkoff-invest-api_v2-lazy-sdk-NODEJS)
  - [vitalets/tinkoff-invest-api](https://github.com/vitalets/tinkoff-invest-api)
* [golang](https://github.com/vodolaz095/go-investAPI)
* [haskell](https://github.com/nickmi11er/tinkoff-invest-haskell)
* [php](https://github.com/metaseller/tinkoff-invest-api-v2-php)
* [php YII2](https://packagist.org/packages/metaseller/tinkoff-invest-api-v2-yii2)
* swift
  - [JohnReeze/TinkoffInvestSwiftSDK](https://github.com/JohnReeze/TinkoffInvestSwiftSDK)
  - [egorbos/invest-api-swift-sdk](https://github.com/egorbos/invest-api-swift-sdk)
* [ruby](https://github.com/blackchestnut/invest_tinkoff)
* [rust](https://github.com/ovr/tinkoff-invest-rust)
* [c++](https://github.com/samoilovv/TinkoffInvestSDK)

SDK на других языках в процессе разработки.

# Как работать с этим репозитарием

В [Issues](https://github.com/RussianInvestments/investAPI/issues) вы можете задать вопрос или найти ответ, если вопрос уже был задан другими пользователями.

Если вы встретили неточность или хотели бы что-то дополнить, то мы будем рады принять от вас pull request.

# Сообщество

* [Telegram-канал](https://t.me/tinkoffinvestopenapi)
* [Telegram-чат по общим вопросам](https://t.me/joinchat/VaW05CDzcSdsPULM)

# Разработчикам ПО для широкого круга пользователей

Если Вы разрабатываете публичное ПО, использующее T-Invest API, то необходимо написать в поддержку Т-Инвестиций по адресу invest-public-api@tbank.ru краткую информацию о проекте для регистрации выделенного appname и получения дополнительной техподдержки.
