import styled from "styled-components";
import { device } from "../../assets/mediaQuery";

const StyledHeader = styled.header`

   display:grid;
   grid-template-columns:1fr 2fr;
   font-weight:550;
   font-size:1rem;
   padding:1rem 0 4rem;
//    padding-bottom:4rem;
   border-bottom: 1px solid #E7E7E7;

   & > div{
       grid-column:2/3;
       display:flex;
       align-items:center;
       justify-content:flex-end;
   }

   & nav li{
       margin-right:2.5rem;
       display:inline-block;
   }

   & img{
         width:40px;
    }

    @media ${device.laptop} { 
            display:block;
            & nav li{
                margin-right:1rem;
                display:inline-block;
            }
    }
       

`

export default StyledHeader