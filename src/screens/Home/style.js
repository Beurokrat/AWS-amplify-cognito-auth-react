import styled from 'styled-components';

export const HeroText = styled.div`
  flex-direction: column;
  margin: 30px;
  padding: 10px;
`;
export const HeroImage = styled.div`
  margin: 30px;
  img{
    width: 1080px; /* you can use % */
    height: auto;
  }
  overflow: hidden;
`;
export const HeroContainer = styled.div`
  display: grid;
  grid-template: auto / 35% 65%;
  grid-gap: 10px;
  flex-directon: row;
`;
