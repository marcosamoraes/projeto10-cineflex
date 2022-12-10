import styled from "styled-components";

export const Button = styled.button`
  background-color: #C3CFD9;
  border: 1px solid #808F9D;
  border-radius: 12px;
  margin-right: 7px;
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 11px;
  margin-bottom: 18px;

  &.unavailable {
    background-color: #FBE192;
    border-color: #F7C52B;
  }

  &.selected {
    background-color: #1AAE9E;
    border-color: #0E7D71;
  }
`
