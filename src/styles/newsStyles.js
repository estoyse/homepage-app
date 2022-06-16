import styled from 'styled-components';

export const NewsStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  align-items: center;
  justify-content: center;
  .news {
    width: calc(100% - 70px);
    height: 100%;
    margin-left: 70px;
    .header {
      padding-bottom: 1rem;
    }
    .main {
      height: 100%;
      overflow-y: scroll;
      .articles {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 1rem;
        overflow-y: scroll;
      }
    }
  }
`;
