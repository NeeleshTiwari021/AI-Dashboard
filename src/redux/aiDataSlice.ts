import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMockData } from '../api/mockApi';

interface AIDataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AIDataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAIData = createAsyncThunk('aiData/fetchAIData', async () => {
  const data = await fetchMockData();
  return data;
});

const aiDataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAIData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAIData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAIData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default aiDataSlice.reducer;
