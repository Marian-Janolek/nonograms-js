import { lazy, Suspense } from "react";
import styled from "styled-components";
import admin from "../assets/admin.jpg";
import profile from "../assets/user.svg";
import { useAppContext } from "../context/appContext";
import Button from "./Button";
import Loading from "./Loading";

const MdAlternateEmail = lazy(() => import("../utils/icons/mail"));
const AiOutlineUser = lazy(() => import("../utils/icons/user"));
const AiOutlineLock = lazy(() => import("../utils/icons/lock"));

const Profile = () => {
  const { languageSK, darkMode, user } = useAppContext();

  return (
    <Wrapper className="wrapper" darkMode={darkMode}>
      <Suspense fallback={<Loading />}>
        <div className="profile">
          <div className="user">
            <img src={`${user.isAdmin ? admin : profile}`} alt="user" />
          </div>
          <h2 className="text">
            {user.isAdmin ? "admin" : languageSK ? "užívateľ" : "member"}
          </h2>
          <h3>
            {languageSK
              ? "Zmena prihlasovacích údajov:"
              : "Change your credentails:"}{" "}
          </h3>
          <form>
            <div className="fields">
              <div className="username">
                <AiOutlineUser />
                <input type="text" placeholder="Username" />
              </div>
              <div className="email">
                <MdAlternateEmail />
                <input type="email" placeholder="Enter email" />
              </div>
              <div className="password">
                <AiOutlineLock />
                <input type="password" placeholder="Password" />
              </div>
              <div className="confirmPassword">
                <AiOutlineLock />
                <input type="password" placeholder="Confirm password" />
              </div>
            </div>
          </form>
        </div>
      </Suspense>
      <Button text={`${languageSK ? "späť" : "back"}`} path="/" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .profile {
    margin-top: 3rem;
    width: 90%;
  }
  .user {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: ${(props) =>
      props.darkMode
        ? "none"
        : ` 0px 0px 2px #5f5f5f, 0px 0px 0px 5px #ecf0f3,
      8px 8px 15px #a7aaaf, -8px -8px 15px #fff`};
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .text {
    margin-top: 1rem;
    text-transform: capitalize;
    text-align: center;
    letter-spacing: var(--spacing);
    opacity: 0.7;
  }
  h3 {
    padding-top: 20px;
    opacity: 0.7;
    letter-spacing: var(--spacing);
  }
  .fields {
    padding-top: 20px;
    padding-bottom: 10px;
    .username,
    .email,
    .password,
    .confirmPassword {
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
  }
`;

export default Profile;
