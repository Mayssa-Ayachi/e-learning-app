import styled, { css, keyframes } from "styled-components";

const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <title>Search Icon</title>
    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <title>Arrow Rigth Icon</title>
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
  </svg>
);

export const Container = styled.div`
  position: relative;
  width: 41px;
  height: 32.2px;
  box-sizing: border-box;
  margin-top: 0.9999vh;
  margin-left: 1vh;
  border: 2px solid #393e46;
  padding: 5px;
  background: #feffff;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 30%;
      -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      border: 4px solid #BBA14A;

      @media (min-width: 768px) {
        width: 20%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 28px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 1.2rem;
  border-radius: 0px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #BBA14A;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
`;
