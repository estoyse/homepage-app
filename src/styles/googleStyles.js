import styled from 'styled-components';

export const GoogleStyles = styled.form`
  margin: 0 5%;
  position: relative;
  width: 90%;
  height: 50px;
  input {
    font-family: roboto, sans-serif;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border: 1px solid #fff;
    border-radius: 25px;
    outline: none;
    background: none;
    padding: 0 25px;
    font-size: 1rem;
    color: #fff;
    &::placeholder {
      color: #fffc;
    }
  }
  .icon {
    height: 25px;
    width: 25px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
