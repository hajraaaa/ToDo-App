import { configureStore } from '@reduxjs/toolkit'
import { todoItemService } from '../service/todo.service'

export const store = configureStore({
    reducer: {
        [todoItemService.reducerPath]: todoItemService.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoItemService.middleware),
})