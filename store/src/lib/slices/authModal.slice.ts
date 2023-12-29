import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthModalState {
  showModal: boolean
}

const initialState: AuthModalState = {
  showModal: false,
}

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleModal } = authModalSlice.actions

export default authModalSlice.reducer
