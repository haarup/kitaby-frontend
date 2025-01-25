// src/redux/slices/productFilterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance';

// تعريف الإجراءات المساعدة لجلب البيانات
export const fetchProducts = createAsyncThunk(
  'productFilter/fetchProducts',
  async (params, { rejectWithValue }) => {
    try {
      const { categoryId, domain } = params;

      // إعداد الطلب
      const url = categoryId 
        ? `/products?category_id=${categoryId}` 
        : `/products`;

      const response = await axiosInstance(url, {
        method: 'GET',
        headers: {
          'X-Domain': domain, 
        },
      });

      if (response.status !== 200) {
        throw new Error('فشل في جلب المنتجات');
      }
      const data = response.data; 
      return {
        products: data.products.data, 
        tenant: data.tenant,
        pagination: {
          currentPage: data.products.current_page,
          totalPages: data.products.last_page,
          perPage: data.products.per_page,
          totalItems: data.products.total,
        },
      };
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState: {
    products: [],
    tenant: null,
    loading: false,
    error: null,
    hasMore: true,
    pagination: {
      currentPage: 1,
      totalPages: 1,
      perPage: 12,
      totalItems: 0,
    },
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        
        // إذا كان يتم تطبيق فلترة جديدة، يتم مسح المنتجات القديمة
        if (action.payload.pagination.currentPage === 1) {
          state.products = [];
        }
      
        // إضافة المنتجات الجديدة بدون تكرار
        const newProducts = action.payload.products.filter(
          (newProduct) => !state.products.some((product) => product.id === newProduct.id)
        );
      
        state.products = [...state.products, ...newProducts];
        state.tenant = action.payload.tenant;
        state.pagination = action.payload.pagination || state.pagination;
        state.hasMore =
          action.payload.pagination.currentPage <
          action.payload.pagination.totalPages;
      })
      
      
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});


export const { resetError } = productFilterSlice.actions;

export default productFilterSlice.reducer;
