import styled from 'styled-components';
export const WrapperStyles = styled.div`
  background: url(${(props) => props.background}) no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, ${(props) => props.bgOpacity});
  }
  .content {
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    height: 100vh;
  }
`;
