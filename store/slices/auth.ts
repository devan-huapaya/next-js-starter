import { createSlice } from '@reduxjs/toolkit';

const fakeUser = {
  credential: {
    accessToken: 'This is a test'
  },
  data: {
    firstName: 'First',
    lastName: 'Last'
  }
}

export const slice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    signedIn: false,
    loading: false
  },
  reducers: {
    signInUser: (state, action) => {
      state.user = action.payload;
      state.signedIn = true;
    },
    logoutUser: state => {
      state.signedIn = false;
      state.user = undefined;
    },
    isLoading: (state, action) => {
      state.loading = !!action.payload;
    }
  }
});

export const { logoutUser } = slice.actions;
const {isLoading, signInUser } = slice.actions

/**
 * Dispatches actions to login the current user
 */
export const loginUser = () => dispatch => {
  setTimeout(() => {
    dispatch(slice.actions.isLoading(true))
    dispatch(signInUser(fakeUser));
    dispatch(slice.actions.isLoading(false))
  }, 1000);
};

/**
 * @returns user auth object
 */
export const getAuthUser = state => state.auth;
  
export default slice.reducer;
