import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance'; 

export const fetchTenantData = createAsyncThunk(
  'tenant/fetchData',
  async (domain, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/store', {
        headers: {
          'X-Domain': domain,
        },
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response || error.message);
    }
  }
);

const tenantSlice = createSlice({
  name: 'tenant',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenantData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTenantData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; 
      })
      .addCase(fetchTenantData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // حفظ الخطأ في حالة حدوثه
      });
  },
});

export default tenantSlice.reducer;
