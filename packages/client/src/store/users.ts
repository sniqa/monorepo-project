import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define the initial state using that type
const initialState = {
	value: 0,
}

export const userSlice = createSlice({
	name: 'user',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {},
})

export const {} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer
