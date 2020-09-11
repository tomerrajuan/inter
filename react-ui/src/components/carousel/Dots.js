/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      opacity: 0.7;
      border: 1px solid rgb(41, 56, 65);
      background: ${active ? "grey" : "white"};
    `}
  />
);

const Dots = ({ slides, activeSlide }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </div>
);

export default Dots;
