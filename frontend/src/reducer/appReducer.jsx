import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  GET_ALL_LEVELS_BEGIN,
  GET_ALL_LEVELS_SUCCESS,
  GET_ALL_LEVELS_FAIL,
  GET_SINGLE_LEVEL_BEGIN,
  GET_SINGLE_LEVEL_SUCCESS,
  GET_SINGLE_LEVEL_FAIL,
  SAVE_PROGRESS,
  LANGUAGE_TOGGLE,
  LOGOUT_USER,
  THEME_TOGGLE,
} from "../actions";

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
    case LOGOUT_USER:
      return { ...state, user: null, token: null };
    case GET_ALL_LEVELS_BEGIN:
      return { ...state, levels_loading: true, levels_error: false };
    case GET_ALL_LEVELS_SUCCESS:
      return {
        ...state,
        levels: action.payload,
        levels_loading: false,
      };
    case GET_ALL_LEVELS_FAIL:
      return { ...state, levels_loading: false, levels_error: true };
    case GET_SINGLE_LEVEL_BEGIN:
      return {
        ...state,
        single_level_loading: true,
        single_level_error: false,
      };
    case GET_SINGLE_LEVEL_SUCCESS:
      return {
        ...state,
        single_level_loading: false,
        single_level: action.payload,
      };
    case GET_SINGLE_LEVEL_FAIL:
      return {
        ...state,
        single_level_loading: false,
        single_level_error: true,
      };
    case SAVE_PROGRESS:
      return { ...state, isSaved: true };
    case LANGUAGE_TOGGLE:
      return { ...state, languageSK: !state.languageSK };
    case THEME_TOGGLE:
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

export default reducer;
