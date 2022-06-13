import styled from 'styled-components';

export const SidebarStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  font-size: 25px;
  color: #fff;
  width: 60px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  .nav-links {
    list-style: none;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  & a {
    text-decoration: none;
    color: #fff;
  }
`;
