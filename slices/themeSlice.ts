import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ThemeState {
  hamburgerOpen: boolean
}

const initialState: ThemeState = {
  hamburgerOpen: false,
}

export const themeSlice = createSlice({
  name: 'themeContext',

  initialState,
  reducers: {
    setHamburgerOpen: (state) => {
      state.hamburgerOpen = !state.hamburgerOpen
    },
  },
})

export const { setHamburgerOpen } = themeSlice.actions

export const hamburgerOpen = (state: RootState) => state.themeContext.hamburgerOpen

export default themeSlice.reducer
