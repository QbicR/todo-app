# TODO app
Ссылка на демонстрационный вариант - https://qbic-todo-app.vercel.app/

# Реализовано:
- Смена языка (подгрузка языков идет с сервера)
- Смена темы
- Сохрание задач на удаленном json-server
- Адаптация под телефон

# Стек:
- React
- TypeScript 
- React query
- TailwindCSS
- NextUI
- i18n
- json-server
- FSD

Запуск приложения:
-   npm i
-   npm run dev - приложение запустится в production режиме. Все запросы будут идти на удаленный json-server по адресу https://json-server-todo-app.vercel.app/. Конфиг сервера находится в репозитории https://github.com/QbicR/json-server-todo-app
-   npm run start - приложение запустится в development режиме. Фронтенд часть на порту localhost:3000, json-server - localhost:8000. Все запросы будут идти на локальный сервер.

