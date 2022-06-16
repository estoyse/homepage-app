import styled from 'styled-components';
export const ModalStyles = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: ${(props) => props.height || '80vh'};
  width: ${(props) => props.width || '40%'};
  background: #000a;
  backdrop-filter: blur(5px);
  box-shadow: 5px 5px 15px #24242499;
  padding: 2rem;
  z-index: 10;
  border-radius: 25px;
  visibility: hidden;
  opacity: 0;

  input[type='text'] {
    width: 100%;
    height: 40px;
    background: #202020;
    border: none;
    font-size: 30px;
    border-radius: 20px;
    padding: 0 20px;
    color: #fff;
  }
  &.open {
    visibility: visible;
    opacity: 1;
    display: flex;
    align-items: center;
  }
  .modal-close {
    font-size: 25px;
    cursor: pointer;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 10;
  }
  transition: opacity 0.3s ease-in 0.1s;
  button {
    position: absolute;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    border: none;
    border-radius: 20px;
    height: 40px;
    width: 100px;
    cursor: pointer;
    user-select: none;
  }
  .preferences {
    list-style-type: none;
    li {
      margin-bottom: 2rem;
      input {
        margin-top: 1rem;
        outline: none;
      }
    }
  }
`;
