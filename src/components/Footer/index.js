import styled from 'styled-components'
const Footer = () => {
    return ( 
        <Copyright>
            © 2023 Salesphere. All Rights Reserved
        </Copyright>
     );
}

const Copyright = styled.p`
font-size: 12px;
width: 100 %;
text-align: center;
margin-top: 50px;
margin-bottom: 10px;
`
export default Footer;