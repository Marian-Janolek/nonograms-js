import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Navbar } from "../components";
import Resizer from "react-image-file-resizer";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ChoosePage = () => {
  const { languageSK, darkMode } = useAppContext();
  const [selectedFile, setSelectedFile] = useState();
  const [size, setSize] = useState(0);
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];
  const [binaryArray, setBinaryArray] = useState([]);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (path === "medium") {
      setSize(15);
    } else if (path === "hard") {
      setSize(20);
    }
    const img = imageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    img.onload = function () {
      img.crossOrigin = "anonymous";
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < imgData.data.length; i += 4) {
        let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
        let colour = 0;
        if (count > 450) colour = 255;
        imgData.data[i] = colour;
        imgData.data[i + 1] = colour;
        imgData.data[i + 2] = colour;
        imgData.data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);

      let helper = [];
      const whitePixel = 1;
      const blackPixel = 0;
      for (let i = 0; i < imgData.data.length; i += 4) {
        if (imgData.data[i] === 255) {
          helper.push(whitePixel);
        } else {
          helper.push(blackPixel);
        }
      }
      setBinaryArray(helper);
    };
  }, []);

  let convertedNewArray = [];
  for (let i = 0; i < binaryArray.length; i += size) {
    convertedNewArray.push(binaryArray.slice(i, i + size));
  }
  console.log(convertedNewArray.length);
  let horHints = [];
  let vertHints = [];

  for (let i = 0; i < convertedNewArray[0]?.length; i++) {
    let rowArray = [];
    let rowHints = 0;
    for (let j = 0; j < convertedNewArray?.length; j++) {
      if (convertedNewArray[i][j] === 0) {
        rowHints++;
      } else {
        if (rowHints > 0) {
          rowArray.push(rowHints);
          rowHints = 0;
        }
      }
    }
    if (rowHints > 0) {
      rowArray.push(rowHints);
      rowHints = 0;
    }
    vertHints[i] = rowArray;
  }

  for (let j = 0; j < convertedNewArray[0]?.length; j++) {
    let colArray = [];
    let colHints = 0;
    for (let i = 0; i < convertedNewArray?.length; i++) {
      if (convertedNewArray[i][j] === 0) {
        colHints++;
      } else {
        if (colHints > 0) {
          colArray.push(colHints);
          colHints = 0;
        }
      }
    }
    if (colHints > 0) {
      colArray.push(colHints);
      colHints = 0;
    }
    horHints[j] = colArray;
  }

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        size,
        size,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
          setSelectedFile(uri);
        },
        "base64"
      );
    });

  const handleChange = async (event) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      console.log(image);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper className="wrapper" darkMode={darkMode}>
      <Navbar />
      <form>
        <input
          type="file"
          value={""}
          onChange={handleChange}
          id="img"
          className="hide"
        />
        <label htmlFor="img">
          {languageSK ? "Vybrať súbor" : "Choose file"}
        </label>
      </form>
      <img
        src={selectedFile}
        alt="selected file"
        ref={imageRef}
        style={{
          marginTop: "4.5rem",
          transform: selectedFile && "scale(5)",
          display: !selectedFile && "none",
        }}
      />

      <canvas
        width={size}
        height={size}
        ref={canvasRef}
        style={{ opacity: 0 }}
      ></canvas>
      <div className="select-btns">
        {selectedFile && (
          <Button
            text={`${languageSK ? "potvrdiť" : "submit"}`}
            path="/custom"
          />
        )}
        <Button text={`${languageSK ? "späť" : "back"}`} path="/difficulty" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form {
    margin-top: 2rem;
    .hide {
      display: none;
    }
    label {
      padding: 0.7rem 2rem;
      box-shadow: ${(props) => (props.darkMode ? `none` : `var(--neu-shadow)`)};
      background-color: ${(props) =>
        props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};
      border-radius: 15px;
      font-size: var(--normal-font-size);
      letter-spacing: var(--spacing);
      font-weight: var(--font-bold);
      border: none;
      outline: none;
      margin-top: 2rem;
      margin-bottom: 2rem;
      color: ${(props) => (props.darkMode ? `var(--dark-text)` : `black`)};
      &:active {
        box-shadow: ${(props) =>
          props.darkMode
            ? `inset 3px 3px 5px var(--dark-text), inset -3px -3px 5px var(--dark-text)`
            : `inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff`};
      }
    }
  }

  .select-btns {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-bottom: 4rem;
  }
`;

export default ChoosePage;
