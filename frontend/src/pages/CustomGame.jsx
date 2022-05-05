import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import image0 from "../assets/image0.jpg";

const CustomGame = () => {
  const [binaryArray, setBinaryArray] = useState([]);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
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
        if (count > 483) colour = 255;
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
  for (let i = 0; i < binaryArray.length; i += 10) {
    convertedNewArray.push(binaryArray.slice(i, i + 10));
  }

  let horHints = Array.from(Array(10), () => new Array(5));
  let vertHints = Array.from(Array(10), () => new Array(5));

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
  console.log(`result array: ${binaryArray}`);
  console.log(JSON.stringify(vertHints) + ",");
  console.log(JSON.stringify(horHints) + ",");

  return (
    <Wrapper>
      <img src={image0} alt="image0" ref={imageRef} />
      <canvas width="10" height="10" ref={canvasRef}></canvas>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  background-color: white;
  img {
    margin-bottom: 2rem;
  }
`;

export default CustomGame;
