import styled from 'styled-components';

export const SummarySection = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #333;
`;
export const DataSection = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 810px) {
    margin: 18px 20px;
    padding: 5px 30px;
  }
  @media only screen and (max-width: 809px) {
    margin: 18px 30px;
    padding: 5px 20px;
  }
`;
export const Card = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width 150px;
  height: 150px;
  margin: 15px;
  border: 2px solid #333;
`;
export const ListingContainer = styled.div`
  border: 1px solid #333;
  overflow: auto;
  height: 100%;
  margin-top:40px;
`;
export const Listing = styled.div`
  margin: 10px 0px;
  padding: 10px;
  width: contain;
  border-radius: 7px;
  :hover {
    box-shadow: 10px 10px 15px #e0e0e0, -10px -10px 15px #ffffff;
  }
`;
export const ListingFilter = styled.div`
  margin: 10px 0px;
  height: 100%;
  padding: 10px;
  width: 320px;
  border-radius: 7px;
  :hover {
    box-shadow: 10px 10px 15px #e0e0e0, -10px -10px 15px #ffffff;
  }
`;
export const Addlisting = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  select {
    margin: 3px 0px;
    width:50%;
  }
`;
export const AddListingButton = styled.div`
  padding: 10px;
  height: 1.7rem;
  border-radius: 7px;
  :hover{
    box-shadow: 10px 10px 15px #e0e0e0, -10px -10px 15px #ffffff;
  }
`;
export const Summary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  
  p {
    text-align: left;
    padding: 10px;
    margin-bottom: 0px;
  }
`;
