import { styled } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  padding: 50px 0px;
  background-color: #ffa4c8;
  border-radius: 50px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

export const Form = styled.form`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  &[type="submit"] {
    cursor: pointer;
    background-color: #ff5d9d;
    color: white;
    font-weight: 700;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: #ff5d9d;
  }
`;
