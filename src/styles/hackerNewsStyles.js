import styled from 'styled-components';

export const HackerNewsStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  align-items: center;
  justify-content: center;
  .news {
    width: 100%;
    height: 100%;
    margin-left: 70px;
    .header ul {
      display: flex;
      justify-content: center;
      button {
        margin: 10px;
        border: 1px solid #fff;
        border-radius: 15px;
        outline: none;
        cursor: pointer;
        background: #fff;
        padding: 5px 10px;
        font-size: 16px;
        min-width: 50px;
        text-align: center;
        &.active {
          background: transparent;
          color: #fff;
        }
      }
    }
    .main {
      height: 100%;
      overflow: scroll;
      .articles {
        padding: 2rem;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
