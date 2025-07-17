import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PinState {
  input: string;
  status: 'idle' | 'granted' | 'denied';
}

const initialState: PinState = {
  input: '',
  status: 'idle',
};

const CORRECT_PIN = '1337';

const pinSlice = createSlice({
  name: 'pin',
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      if (state.input.length < 4) {
        state.input += action.payload;
        state.status = 'idle';
      }
    },
    deleteDigit: (state) => {
      state.input = state.input.slice(0, -1);
      state.status = 'idle';
    },
    submitPin: (state) => {
      state.status = state.input === CORRECT_PIN ? 'granted' : 'denied';
    },
    reset: () => initialState,
  },
});

export const { addDigit, deleteDigit, submitPin, reset } = pinSlice.actions;
export default pinSlice.reducer;