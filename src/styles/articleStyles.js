import styled from 'styled-components';

export const ArticleStyles = styled.div`
  .article__img {
    height: 300px;
    border-radius: 2rem;
    overflow: hidden;
  }
  .article__meta {
    opacity: 0;
    pointer-events: none;
    padding: 2rem;
    height: 100%;
    width: 100%;
    background: #000b;
    transition: 0.2s ease;
  }
  &:hover {
    .article__meta {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
