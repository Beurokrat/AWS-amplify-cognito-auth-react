import styled from 'styled-components';


export const Component = styled.div`
  margin: 0;
  padding: 0;
  visibility: hidden;
  display: flex;
  justify-content: center;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
`;
export const Button = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 7px 13px;
  position: relative;
`;
export const Line = styled.div`
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #252525;
`;