# TODO app
Демонстрационный вариант - [ссылка](https://qbic-todo-app.vercel.app/)

# Реализовано:
- Поиск задач
- Фильтрация задач
- Добавление/изменение/удаление задачи (Задачи сохраняются на удаленном json-server)
- Подгрузка задач по скроллу
- Смена языка (подгрузка языков с сервера)
- Смена темы
- Адаптация под телефон

# Стек:
- [vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript ](https://www.typescriptlang.org/)
- [React query](https://tanstack.com/query/v3)
- [React hook form](https://react-hook-form.com/)
- [yup](https://www.npmjs.com/package/yup)
- [TailwindCSS](https://tailwindcss.com/)
- [NextUI](https://nextui.org/)
- [i18n](https://www.i18next.com/)
- [json-server](https://www.npmjs.com/package/json-server/v/0.17.4)
- [FSD](https://feature-sliced.design/)
- [husky](https://www.npmjs.com/package/husky)

# Запуск приложения:
- npm i
- npm run dev - приложение запустится в production режиме. Все запросы будут идти на [удаленный json-server](https://json-server-todo-app.vercel.app/). Конфиг сервера находится в [репозитории](https://github.com/QbicR/json-server-todo-app)
- npm run start - приложение запустится в development режиме. В development режиме Фронтенд запустится на порту localhost:3000, json-server - localhost:8000. 

