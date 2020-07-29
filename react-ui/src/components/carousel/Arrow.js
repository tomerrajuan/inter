/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === "right" ? `right: 25px` : `left: 25px`};
      height: 39px;
      width: 39px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        height: 55px;
        width: 55px;
        transform: translateX(${direction === "left" ? "-2" : "2"}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === "right" ? (
      <img src={"arrow-right.svg"} alt="" />
    ) : (
      <img src={"arrow-left.svg"} alt="" />
    )}
  </div>
);

export default Arrow;
