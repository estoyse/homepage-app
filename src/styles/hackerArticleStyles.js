import styled from 'styled-components';

export const HackerArticleStyles = styled.div`
  display: flex;
  height: 75px;
  align-items: center;
  .image {
    height: 60px;
    background: #fff;
    width: 60px;
    border-radius: 10px;
  }
  .news-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 1rem;
    .date {
      font-weight: 300;
    }
  }
`;
