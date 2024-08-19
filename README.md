# TODO app
Ссылка на демонстрационный вариант - [ссылка](https://qbic-todo-app.vercel.app/)

# Реализовано:
- Поиск задач
- Фильтрация задач
- Добавление/изменение/удаление задачи (Задачи сохраняются на удаленном json-server)
- Подгрузка задач по скроллу
- Смена языка (подгрузка языков с сервера)
- Смена темы
- Адаптация под телефон

# Стек:
- vite
- React
- TypeScript 
- React query
- React hook forms
- TailwindCSS
- NextUI
- i18n
- json-server
- FSD
- husky

# Запуск приложения:
- npm i
- npm run dev - приложение запустится в production режиме. Все запросы будут идти на [удаленный json-server](https://json-server-todo-app.vercel.app/). Конфиг сервера находится в [репозитории](https://github.com/QbicR/json-server-todo-app)
- npm run start - приложение запустится в development режиме. В development режиме Фронтенд запустится на порту localhost:3000, json-server - localhost:8000. 

