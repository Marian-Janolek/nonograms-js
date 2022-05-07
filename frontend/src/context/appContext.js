import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
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
import reducer from "../reducer/appReducer";
import axios from "axios";
import { level_url } from "../utils/constants";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const languageSK = JSON.parse(localStorage.getItem("Nonograms-L"));
const darkMode = JSON.parse(localStorage.getItem("Nonograms-D"));

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token ? JSON.parse(token) : null,
  isLoading: false,
  isError: false,
  levels: [],
  levels_loading: false,
  levels_error: false,
  single_level: {},
  single_level_loading: false,
  single_level_error: false,
  isSaved: false,
  languageSK: languageSK || false,
  darkMode: darkMode || false,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iconState, setIconState] = useState(0);
  const [userArray, setUserArray] = useState([]);
  const [path, setPath] = useState();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const pathToNumber = (setSize) => {
    if (path === "easy") {
      setSize(10);
    } else if (path === "medium") {
      setSize(15);
    } else if (path === "hard") {
      setSize(20);
    }
  };

  useEffect(() => {
    fetchLevels(`${level_url}/all`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("Nonograms-D", state.darkMode);
    localStorage.setItem("Nonograms-L", state.languageSK);
  }, [state.darkMode, state.languageSK]);

  const saveProgress = () => {
    dispatch({ type: SAVE_PROGRESS });
  };

  const toggleLanguage = () => {
    dispatch({ type: LANGUAGE_TOGGLE });
  };

  const toggleTheme = () => {
    dispatch({ type: THEME_TOGGLE });
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await axios.post(`/api/v1/register`, currentUser);
      const { user, token } = data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAIL });
    }
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post(`/api/v1/login`, currentUser);
      const { user, token } = data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAIL });
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const fetchLevels = async (url) => {
    dispatch({ type: GET_ALL_LEVELS_BEGIN });
    try {
      const { data } = await axios.get(url);
      const levels = data.levels;
      dispatch({
        type: GET_ALL_LEVELS_SUCCESS,
        payload: levels,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_LEVELS_FAIL });
    }
  };

  const fetchSingleLevel = async (url) => {
    dispatch({ type: GET_SINGLE_LEVEL_BEGIN });
    try {
      const { data } = await axios.get(url);
      const single_level = data.level;
      dispatch({ type: GET_SINGLE_LEVEL_SUCCESS, payload: single_level });
    } catch (error) {
      dispatch({ type: GET_SINGLE_LEVEL_FAIL });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        closeModal,
        openModal,
        isModalOpen,
        fetchSingleLevel,
        iconState,
        setIconState,
        saveProgress,
        userArray,
        setUserArray,
        toggleLanguage,
        logoutUser,
        toggleTheme,
        path,
        setPath,
        pathToNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
