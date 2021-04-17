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
  name: 'counter',
  initialState: {
    user: undefined,
    signedIn: false,
    loading: false
  },
  reducers: {
    signInUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
/**
 * Dispatches actions to login the current user
 * 
 */
export const loginUser = () => dispatch => {
  setTimeout(() => {
    dispatch(slice.actions.isLoading(true))
    dispatch(signInUser(fakeUser));
    dispatch(slice.actions.isLoading(false))
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getAuthUser = state => state.auth;
  
export default slice.reducer;
