import styled from 'styled-components';
import admin from '../assets/admin.jpg';
import arrow from '../assets/arrowLeft.png';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';

const Profile = () => {
  const isAdmin = true;

  return (
    <Wrapper className="wrapper">
      <div className="profile">
        <Link to="/">
          <div className="btn">
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
        <div className="user">
          <img src={admin} alt="admin" />
        </div>
        <h2 className="text">{isAdmin && 'admin'}</h2>
        <h3>Change your credentails:</h3>
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
            <div className="btns">
              <button className="submit-btn">
                <span>submit</span>{' '}
              </button>
              <button className="clear-btn">
                <span>clear</span>{' '}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn {
    position: absolute;
    left: 7%;
    top: 5%;
    width: 4.5rem;
    height: 2.5rem;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;
    border-radius: 1rem;
    cursor: pointer;
    &:active {
      box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff;
      transform: scale(0.98);
    }
    img {
      position: absolute;
      left: 10%;
      top: -25%;
      height: 3.5rem;
      opacity: 0.8;
    }
  }
  .profile {
    margin-top: 3rem;
    width: 90%;
  }
  .user {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #5f5f5f, 0px 0px 0px 5px #ecf0f3,
      8px 8px 15px #a7aaaf, -8px -8px 15px #fff;
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
    .username,
    .email,
    .password,
    .confirmPassword {
      margin-bottom: 30px;
      border-radius: 25px;
      box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
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
        color: #555;
        padding: 20px 10px 20px 5px;
      }
    }
    .btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .submit-btn,
    .clear-btn {
      outline: none;
      border: none;
      width: 100%;
      height: 60px;
      border-radius: 30px;
      font-size: 1.25rem;
      color: #000;
      text-align-last: center;
      box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #fff;
      transition: var(--transition);
      cursor: pointer;
      span {
        opacity: 0.7;
        letter-spacing: var(--spacing);
        font-weight: var(--font-bold);
        text-transform: capitalize;
      }

      &:active {
        background-color: #000;
        color: #fff;
      }
    }
    .submit-btn {
      background-color: #000;
      color: #fff;
    }
  }
`;

export default Profile;
