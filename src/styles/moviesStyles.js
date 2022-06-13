import styled from 'styled-components';

export const MoviesStyles = styled.div`
  position: relative;
  margin-left: 60px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  padding: 2rem; 
  padding-bottom: 0;
  .header {
    position: fixed;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 120px);
    h3 {
      font-weight: 400;
      margin-bottom: 1rem;
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
      }
    }
  }
  .main {
    margin-top: 5rem;
    height: calc(100vh - 5rem);
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    .single-movie {
      .img-container {
        position: relative;
        border-radius: 25px;
        height: 300px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .score {
          position: absolute;
          display: grid;
          place-items: center;
          top: 15px;
          right: 5%;
          background: #0007;
          color: #fff;
          height: 1.75rem;
          width: 1.75rem;
          border-radius: 50%;
          font-size: 14px;
        }
        .description {
          background: #000b;
          padding: 1rem;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          overflow-y: scroll;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
          width: 100%;
        }
      }
      .titles h4 {
        font-weight: 300;
        font-size: 14px;
        text-align: center;
        margin-top: 1rem;
      }
      &:hover {
        .description {
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }
`;
