import { styled } from "styled-components";

export const AuthContainer = styled.div`
  width: 600px;
  height: 600px;
  background: ${({ theme }) => theme.color.complementaryOne};
  border: 1px solid ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  h2 {
    padding: 10px;
    width: 400px;
    text-align: start;
  }
  h1 {
    padding: 10px;
    width: 400px;
    text-align: start;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    border: none;
  }
  @media (max-width: 500px) {
    h1,
    h2 {
      width: 300px;
      font-size: 30px;
    }
    h2 {
      font-size: 25px;
    }
  }
`;

export const Form = styled.form`
  width: 400px;
  padding: 10px;

  button {
    width: 100%;
    height: 35px;
    border-radius: 0.9em;
    font-size: 17px;
    font-weight: 600;
    margin-top: 25px;
    border: none;
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
  }
  span {
    text-align: start;
    font-size: 0.9em;
    width: 100%;
    height: 0.9em;
    padding: 5px;
    color: #ff7272;
    display: block;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;
export const InputBox = styled.div`
  font-size: 1.1em;
  width: 100%;
  background: transparent;
  position: relative;
  margin-top: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  input {
    font-size: 1.1em;
    margin: 0;
    text-align: start;
    border: 0;
    height: 35px;
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    padding: 0 0 0 15px;
  }
  input:focus {
    border: 0;
    outline: none;
  }
  input:focus ~ label {
    top: -5px;
  }
  label {
    color: ${({ theme }) => theme.color.text + "90"};
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s;
  }
`;
export const LinkTo = styled.div`
  width: 100%;
  margin: 10px;
  text-align: start;
  color: ${({ theme }) => theme.color.text};
  display: flex;
  a {
    color: ${({ theme }) => theme.color.primary};
    margin-left: 5px;
  }
`;
