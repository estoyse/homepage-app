import styled from 'styled-components';

export const HomeStyles = styled.div`
  height: 100vh;
  padding: 2rem;
  margin-left: 60px;
  width: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .upper-section {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    & > div {
      width: 50%;
    }
    .welcome .welcome-text {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 1rem;
    }
  }
  .bottom-section {
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
  .search-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
