import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  font-size: 1.6rem;;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column;
  }
`;

export const MenuItem = styled.li`
  margin-left: 1rem;
  font-size: 1.1rem;
  padding: 0px 3px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 0.5rem;
  }
`;