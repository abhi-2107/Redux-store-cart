import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
})
const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDLE
  },
  reducers: {
    // setProducts (state, action) {
    //   state.data = action.payload
    // },
    // setStatus (state, action) {
    //   state.status = action.payload
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = STATUSES.IDLE
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR
      })
  }
})

export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer
// Thunks (function will return a function)

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch(
    'https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000'
  )
  const data = await res.json()
  return data
})

// export function fetchProducts () {
//   return async function fetchProductsThunk (dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING))
//     try {
//       const res = await fetch(
//         'https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000'
//       )
//       const data = await res.json()
//       dispatch(setProducts(data))
//       dispatch(setStatus(STATUSES.IDLE))
//     } catch (error) {
//       console.log(error)
//       dispatch(setStatus(STATUSES.ERROR))
//     }
//   }
// }
