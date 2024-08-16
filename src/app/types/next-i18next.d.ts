import "i18next"

//FIXME: жесть какой костыль для работы переводов. Нужно следить за объектом на сервере и обновлять по мере необходимости
// По-хорошему нужен свагер =)
// eslint-disable-next-line
const a = {
  header: {
    app: "TODO list",
    modal: {
      add: "Adding a TODO",
      change: "Changing a TODO",
      delete: "Deleting a TODO",
    },
  },
  button: {
    addTodo: "Add TODO",
    add: "Add",
    save: "Save",
    delete: "Delete",
    cancel: "Cancel",
    find: "Find",
    home: "Home",
    reload: "Reload",
    todos: "TODOs",
  },
  tooltip: {
    delete: "Delete",
    change: "Change",
    lang: "Change lang",
  },
  select: {
    all: "All TODOs",
    completed: "Completed",
    active: "Active",
  },
  field: {
    search: {
      placeholder: "Search",
    },
    name: {
      placeholder: "Enter a name",
      label: "Name",
      requiredError: "Field must be filled in",
      lengthError: "Name too long",
    },
    description: {
      placeholder: "Enter a description",
      label: "Description",
      lengthError: "Description too long",
    },
  },
  error: {
    empty: "There is nothing",
    somethingWentWrong: "Something went wrong. Try again.",
  },
  text: {
    deleteModal: "Are you sure you want to delete the case?",
    errorBoundary: "An unexpected error occurred. Refresh the page.",
    loading: "Loading",
    wrongAddress:
      "Unfortunately, you have visited a non-existent page. Perhaps you followed an old link or entered an incorrect address.",
    checkLink: "Check the link or return to the main page.",
  },
  title: {
    main: "My TODOs",
    notFound: "Page not found",
    default: "TODO list",
  },
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation"
    resources: {
      translation: typeof a
    }
  }
}
