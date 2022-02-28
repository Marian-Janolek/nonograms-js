import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER_BEGIN:
      return { ...state, isLoading: true, isError: false };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case REGISTER_USER_FAIL:
      return { ...state, isLoading: false, isError: true };
    case LOGIN_USER_BEGIN:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGIN_USER_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
