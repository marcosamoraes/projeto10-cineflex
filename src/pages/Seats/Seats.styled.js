import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;

  form {
    margin-top: 40px;
  }
`;

export const Title = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    font-weight: 400;
  }
`;

export const SeatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Labels = styled.div`
  display: flex;
  padding: 0 20px;
`;

export const Label = styled.div`
  flex: 3;
  text-align: center;

  > div {
    background-color: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    margin: auto;
    box-sizing: border-box;
    height: 25px;
    width: 25px;
    padding: 0;
    font-size: 11px;

    &.unavailable {
      background-color: #fbe192;
      border-color: #f7c52b;
    }

    &.selected {
      background-color: #1aae9e;
      border-color: #0e7d71;
    }
  }

  > p {
    font-size: 13px;
    font-weight: 400;
  }
`;

export const InputGroup = styled.div`

`;