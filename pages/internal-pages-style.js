import styled from "@emotion/styled";


export const PageBanner = styled.div`
 height: 250px;
background-image: ${props=>'url('+props.bgImgUrl+')'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PageHeading = styled.div`
    color: #fff;
    font-size: 4.5rem;
    font-weight: 400;
    margin: 0px;
    @media (max-width:600px){
      max-width:239px;
      font-size:2.1rem;
    }
`;
export const PageDescription = styled.p`
    color:#000;
    margin: 30px auto;
    max-width: 310px;
    font-size: 16px;
    text-align: center;
    @media (min-width:768px){
      max-width:675px
    }
`;
