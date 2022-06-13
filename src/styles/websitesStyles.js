import styled from 'styled-components';

export const WebsitesStyles = styled.div`
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  padding: 10px;

  .websites {
    display: grid;
    place-items: center;
    grid-template-columns: auto auto auto auto;
    width: 100%;
    gap: 1.5rem 10px;
    margin-bottom: 1rem;
    .website {
      position: relative;
      transition: all 0.2s ease;
      a {
        display: grid;
        place-items: center;
      }
      &__img {
        display: grid;
        place-items: center;
        height: 4rem;
        width: 4rem;
        border-radius: 15px;
        background: #fff;
        position: relative;
        img {
          width: 60%;
        }
      }
      &__name {
        text-align: center;
        font-size: 1rem;
        font-weight: 300;
        margin-top: 1rem;
      }
      &__delete {
        position: absolute;
        top: -5px;
        left: calc(3rem + 5px);
        height: 1.1rem;
        width: 1.1rem;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: grid;
        place-items: center;
        opacity: 0;
        pointer-events: none;
      }
      &:hover {
        .website__delete {
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }
`;
