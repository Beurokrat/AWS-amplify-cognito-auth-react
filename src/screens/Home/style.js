import styled from 'styled-components';

export const HeroText = styled.div`
  flex-direction: column;
  margin: 30px;
  padding: 10px;
  width: 65%;
`;
export const HeroImage = styled.div`
  width: 35%;
  margin: 30px;
  img{
    width: 1080px; /* you can use % */
    height: auto;
  }
  overflow: hidden;
`;
export const HeroContainer = styled.div`
  display: flex;
  fiex-direction: row;
`;
