import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const Preview = () => {
  const { darkMode } = useAppContext();
  return <Wrapper darkMode={darkMode}></Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  border: 2px solid black;
  border-bottom: none;
  border-right: none;
  background-color: ${(props) =>
    props.darkMode ? `black` : "var(--main-color)"};
`;

export default Preview;
