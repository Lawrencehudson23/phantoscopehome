import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(#000, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    // box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: "Couture Bold";
  font-size: 11px;
  font-weight: bolder;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
