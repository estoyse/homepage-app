import styled from 'styled-components';

export const ImagesStyles = styled.div`
  position: relative;
  margin-left: 60px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  padding-bottom: 0;
  padding-left: 0;
  .header {
    position: fixed;
    z-index: 9;
    width: calc(100% - 120px);
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    h3 {
      font-weight: 400;
      margin-bottom: 1rem;
    }

    form {
      width: 50%;
      height: 2rem;
      position: relative;
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
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
      font-weight: 500;
      font-size: 1rem;
      color: #fff;
      margin: 10px;
      &:disabled {
        color: #fff5;
        cursor: not-allowed;
      }
    }
  }
  .main {
    margin-top: 3rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
    .card {
      margin: 1rem;
      position: relative;
      width: 300px;
      img-container {
        height: 300px;
        position: relative;
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      .main-body {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .buttons {
          display: flex;
          .btn {
            margin: 10px;
          }
        }
      }
    }
  }
`;
