import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { flightService } from '../../services/flightService';

export const searchFlights = createAsyncThunk(
  'flights/search',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await flightService.searchFlights(params);
      return { flights: data.data.flights, pagination: data.pagination };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to search flights'
      );
    }
  }
);

export const getFeaturedFlights = createAsyncThunk(
  'flights/featured',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await flightService.getFeaturedFlights();
      return data.data.flights;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch featured flights'
      );
    }
  }
);

export const getFlightById = createAsyncThunk(
  'flights/getById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await flightService.getFlightById(id);
      return data.data.flight;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch flight'
      );
    }
  }
);

const flightSlice = createSlice({
  name: 'flights',
  initialState: {
    flights: [],
    featuredFlights: [],
    selectedFlight: null,
    searchParams: {},
    pagination: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearSelectedFlight: (state) => {
      state.selectedFlight = null;
    },
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
    clearFlights: (state) => {
      state.flights = [];
      state.pagination = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFlights.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.flights = action.payload.flights;
        state.pagination = action.payload.pagination;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFeaturedFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeaturedFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featuredFlights = action.payload;
      })
      .addCase(getFeaturedFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFlightById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFlightById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedFlight = action.payload;
      })
      .addCase(getFlightById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedFlight, setSearchParams, clearFlights } =
  flightSlice.actions;
export default flightSlice.reducer;
