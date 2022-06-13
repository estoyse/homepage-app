import styled from 'styled-components';

export const WeatherStyles = styled.div`
  position: relative;
  margin: 1rem;
  .weather {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20%;
    .city {
      font-size: 25px;
    }
    .about,
    .temp {
      font-size: 13px;
      line-height: 20px;
      font-weight: lighter;
    }
  }
`;
