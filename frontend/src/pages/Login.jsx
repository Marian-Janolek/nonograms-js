import { lazy, Suspense } from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const MdAlternateEmail = lazy(() => import("../utils/icons/mail"));
const AiOutlineUser = lazy(() => import("../utils/icons/user"));
const AiOutlineLock = lazy(() => import("../utils/icons/lock"));

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, isLoading, darkMode, registerUser, loginUser } =
    useAppContext();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!name && !isMember)) {
      console.log("error");
      return;
    }
    const currentUserRegister = { name, email, password };
    const currentUserLogin = { email, password };
    if (!isMember) {
      registerUser(currentUserRegister);
    } else {
      loginUser(currentUserLogin);
    }
  };

  return (
    <Wrapper className="wrapper" darkMode={darkMode}>
      <Suspense fallback={<Loading />}>
        <div className="login">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="title">nonograms</h1>
          <h2 className="subtitle">{values.isMember ? "Login" : "Register"}</h2>
          <form onSubmit={onSubmit}>
            <div className="fields">
              {!values.isMember && (
                <div className="username">
                  <AiOutlineUser />
                  <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="email">
                <MdAlternateEmail />
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="password">
                <AiOutlineLock />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="signin-btn">
                {values.isMember ? "Login" : "Register"}
              </button>
            </div>
            <p>
              {values.isMember ? "Not a member yet?" : "Alreaddy a member? "}
              <button type="button" onClick={toggleMember}>
                {values.isMember ? "Register" : "Login"}
              </button>
            </p>
          </form>
        </div>
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .login {
    width: 85vw;
    height: 720px;
    padding: 60px 20px 35px 20px;
    border-radius: 40px;
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-bg)" : `var(--main-color)`};
    box-shadow: ${(props) =>
      props.darkMode
        ? "none"
        : `15px 15px 20px #cbced1, -15px -15px 20px #fff`};
  }
  .logo {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: ${(props) =>
      props.darkMode
        ? "none"
        : `0px 0px 2px #5f5f5f, 0px 0px 0px 5px #ecf0f3,
      8px 8px 15px #a7aaaf, -8px -8px 15px #fff`};
    img {
      border-radius: 50%;
    }
  }
  .title {
    text-align: center;
    padding-top: 24px;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    font-weight: var(--font-semi-bold);
  }
  .subtitle {
    text-align: center;
    padding-top: 7px;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    font-weight: var(--font-semi-bold);
  }
  .fields {
    width: 100%;
    padding: 40px 5px 5px 5px;

    .username,
    .email,
    .password {
      margin-bottom: 30px;
      border-radius: 25px;
      background-color: ${(props) =>
        props.darkMode ? "var(--dark-text)" : "none"};
      color: ${(props) => (props.darkMode ? "var(--dark-bg)" : "none")};
      box-shadow: ${(props) =>
        props.darkMode
          ? "none"
          : `inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff`};
      display: flex;
      align-items: center;

      svg {
        font-size: var(--bigger-font-size);
        margin: 0 10px -3px;
      }

      input {
        border: none;
        outline: none;
        background: none;
        font-size: var(--big-font-size);
        color: ${(props) => (props.darkMode ? "var(--dark-bg)" : "#none")};
        padding: 20px 10px 20px 5px;
        &::placeholder {
          color: ${(props) => (props.darkMode ? "var(--dark-bg)" : "#555")};
        }
      }
    }
    .signin-btn {
      outline: none;
      border: none;
      cursor: pointer;
      width: 100%;
      height: 60px;
      border-radius: 30px;
      font-size: 20px;
      font-weight: var(--font-bold);
      color: ${(props) => (props.darkMode ? "var(--dark-text)" : "white")};
      text-align-last: center;
      background-color: #000;
      text-transform: capitalize;
      box-shadow: ${(props) =>
        props.darkMode ? "none" : `3px 3px 8px #b1b1b1, -3px -3px 8px #fff`};
      transition: var(--transition);
      letter-spacing: var(--spacing);
      &:hover {
        background-color: ${(props) =>
          props.darkMode ? "var(--dark-text)" : "#fff"};
        color: #000;
      }
    }
  }
  p {
    margin-top: 0.5rem;
    text-align: center;
    font-size: var(--normal-font-size);

    button {
      outline: none;
      border: none;
      font-size: var(--big-font-size);
      margin-left: 0.5rem;
      letter-spacing: var(--spacing);
      background-color: inherit;
      color: ${(props) => (props.darkMode ? "var(--main-color)" : "black")};
    }
  }

  @media (min-width: 430px) {
    .login {
      height: 750px;
      width: 75vw;
    }

    p {
      font-size: var(--big-font-size);
      button {
        font-size: var(--bigger-font-size);
      }
    }
  }
`;

export default Login;
