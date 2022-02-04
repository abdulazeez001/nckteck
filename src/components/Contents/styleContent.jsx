import styled from "styled-components";
import { device } from "../../assets/mediaQuery";

const StyledFirstContent = styled.section`
  & h1{
    font-size:1.7rem;
    
  }
  & .grey{
      color:#909090;
      margin:5px 0 2.5rem;
  }
   & .first-content{
       padding:1rem 0 2rem 0;
   }
   & .forms{
       margin-top:1rem;
   }
   & .master-card{
       width:max(60%, 400px);
   }
   & svg{
       width:35px;
       margin-left:.6rem;
   }
   & label{
       color:black;
       font-weight:500;
       margin-bottom:5px;
   }
   & input{

       font-weight:500;
       font-size:.9rem;
       background-color:rgb(248, 247, 247);
       padding:1em;
       border-radius:.3rem;
       border: 1.9px solid rgb(199, 197, 197);
   }
   & .first-content{
       display:grid;
       grid-template-columns:1fr 1fr;
   }
   & path{
       fill:rgb(52, 137, 248);
   }
   & .card-detail-container{
        margin-top:2.5rem;
        display:grid;
        grid-template-columns:1fr 1fr;
        row-gap:1.5rem;
        column-gap:1.3rem;
   }
   & .card-detail{
       display:flex;
       flex-direction:column;
   }
   & .card-types{
       text-align:right;
       margin-bottom:1rem;
   }
   & .radio{
       margin-top:1rem;
   }
   & .radio > div {
       margin-top:.8rem;
   }
   & .radio > button{
       color:white;
       font-weight:600;
       background-color:#0e46d6;
       margin-top:.8rem;
       width:100%;
       padding:1rem;
       border:1px solid #0e46d6;
       border-radius:.2rem;
   }
   & input[type="radio"]{
       margin-right:.2rem;
   }


   @media ${device.laptop} { 
    & .first-content{
        display:block;
    }
    & .master-card{
        display:flex;
        justify-contents:center;
    }

  }

  @media ${device.tablet}{
    & .card-detail-container{
        margin-top:2.5rem;
        display:block;

   }
  }


`

const StyledSecondContent = styled.section`
    padding:1rem;
    font-weight:550;
    & > div{
        display:flex;
        margin:.8rem 0;
        justify-content:space-between;
    }
    & span{
        font-weight:600;
        color:#C0C0C0;
    }
`
const StyledThirdContent = styled.section`
    font-weight:700;
    padding:2rem 1rem;
    display:flex;
    justify-content:space-between;
    color:black;
    align-items:center;
    & p{
        font-size:1rem;
    }
    & button{
        font-weight:550;
        background-color:#0e46d6;
        padding:1rem  3rem;
        font-size:1rem;
        color:white;
        border:1px solid rgb(50, 138, 252);
        border-radius:.2rem;
    }
`

export {
    StyledFirstContent,
    StyledSecondContent,
    StyledThirdContent

}