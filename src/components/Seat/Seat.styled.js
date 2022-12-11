import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.colors.bg};
  border: 1px solid;
  border-color: ${props => props.colors.border};
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
`;