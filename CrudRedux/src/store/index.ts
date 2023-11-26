import { type Middleware, configureStore } from '@reduxjs/toolkit'
import usersReducer, { rollbackUser } from './users/slice'
import { toast } from 'sonner'
const persistanceMiddleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('redux_state', JSON.stringify(store.getState()))
}

const syncWithDatabase: Middleware = store => next => action => {
  const { type, payload } = action
  const previosState = store.getState()

  next(action)
  if (type === 'users/deleteUserById') {
    const userIdToRemove = payload
    const userToRemove = previosState.users.find(user => user.id === payload)
    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) toast.success(`Usuario ${userIdToRemove} Eliminado correctamente`)
        throw new Error('Error al eliminar el usuario')
      })
      .catch(() => {
        toast.error(`Error deleting user${userIdToRemove}`)
        if (userToRemove)store.dispatch(rollbackUser(userToRemove))
        console.log('error')
      })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceMiddleware, syncWithDatabase]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
