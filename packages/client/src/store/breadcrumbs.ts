import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state using that type

interface BreadcrumbInfo {
  title: string
  to?: string
}

type BreadcrumbsInfo = {
  info : Array<BreadcrumbInfo>
}

const initialState: BreadcrumbsInfo = {
  info: []
}

export const breadcrumbsInfoSlice = createSlice({
	name: 'breadcrumbsInfo',
	initialState,
  reducers: {
    setBreadcrumbsInfo: (state, action: PayloadAction<Array<BreadcrumbInfo>>) => {
      state.info = [...action.payload]
    }
  },
})

export const { setBreadcrumbsInfo } = breadcrumbsInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default breadcrumbsInfoSlice.reducer
