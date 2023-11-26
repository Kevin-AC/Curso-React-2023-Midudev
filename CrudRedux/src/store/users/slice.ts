import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
export type UserId = string
export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}
const defaultState = [
  {
    id: '1',
    name: 'Yazman',
    email: 'yazman@gmail.com',
    github: 'yazmanito'
  },
  {
    id: '2',
    name: 'Kevin',
    email: 'kevin@gmail.com',
    github: 'Kevin-AC'
  },
  {
    id: '3',
    name: 'miguel',
    email: 'miguel@gmail.com',
    github: 'miguedev'
  }
]

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('redux_state')
  if (persistedState) {
    return JSON.parse(persistedState).users
  }
  return defaultState
})()

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
      if (!isUserAlreadyDefined) {
        return [...state, action.payload]
      }
    }
  }
})

export default userSlice.reducer
export const { addNewUser, deleteUserById, rollbackUser } = userSlice.actions
