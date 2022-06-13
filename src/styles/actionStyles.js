import styled from 'styled-components';

export const ActionStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding-top: 1rem;
  .buttons {
    display: flex;
    width: 50%;
    padding: 10px;
    & > div {
      padding: 0 10px;
    }
  }
`;
