/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SliderContent = (props) => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
);

export default SliderContent;
