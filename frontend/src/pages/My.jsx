// import React from "react";
// import styled from "styled-components";
// import { BsArrow90DegRight } from "react-icons/bs";

// const My = () => {
//   return (
//     <Wrapper>
//       <div className="container">
//         {array51.map((item, i) => (
//           <div key={i} className="box">
//             <span
//               className={`${
//                 item.content === "1"
//                   ? "square"
//                   : item.content === "X"
//                   ? "marker"
//                   : item.content === "2"
//                   ? "blue"
//                   : "space"
//               }`}
//             >
//               {item.content === "0" ? (
//                 ""
//               ) : item.content === "X" ? (
//                 <FaTimes />
//               ) : (
//                 item.content
//               )}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="container last">
//         {array52.map((item, i) => (
//           <div key={i} className="box">
//             <span
//               className={`${
//                 item.content === "1"
//                   ? "square"
//                   : item.content === "X"
//                   ? "marker"
//                   : item.content === "2"
//                   ? "blue"
//                   : "space"
//               }`}
//             >
//               {item.content === "0" ? (
//                 ""
//               ) : item.content === "X" ? (
//                 <FaTimes />
//               ) : (
//                 item.content
//               )}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="container last">
//         {array23.map((item, i) => (
//           <div key={i} className="box">
//             <span
//               className={`${
//                 item.content === "1"
//                   ? "square"
//                   : item.content === "X"
//                   ? "marker"
//                   : item.content === "2"
//                   ? "blue"
//                   : "space"
//               }`}
//             >
//               {item.content === "0" ? (
//                 ""
//               ) : item.content === "X" ? (
//                 <FaTimes />
//               ) : (
//                 item.content
//               )}
//             </span>
//           </div>
//         ))}
//       </div>
//       <AiOutlineArrowDown style={{ fontSize: "1.6rem", marginTop: "2rem" }} />
//       <BsArrow90DegRight
//         style={{
//           fontSize: "10rem",
//           marginTop: "2rem",
//           color: "green",
//           textWeight: "bold",
//         }}
//       />
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   padding: 2rem;
//   width: 100vw;
//   height: 100vh;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   .container {
//     display: flex;
//     margin-right: 4rem;
//   }
//   .last {
//     margin-top: 2.5rem;
//   }
//   .box {
//     width: 2rem;
//     height: 2rem;
//     border: 1px solid black;
//     &:nth-child(4) {
//       border-right: 3px solid black;
//     }
//     span {
//       margin-top: 0.1rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       svg {
//         font-size: 1.5rem;
//         margin-top: 0.1rem;
//       }
//     }
//     .square {
//       background-color: black;
//       margin: 0.15rem;
//     }
//     .blue {
//       background-color: blue;
//       color: blue;
//       margin: 0.1rem;
//     }
//   }
// `;

// export default My;
