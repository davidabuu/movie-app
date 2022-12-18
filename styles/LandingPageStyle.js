import styled from "styled-components";

export const LandingStyle = styled.div`
  background: url("./img1.png");
  object-fit: contain;
  display: flex;
  align-items: flex-start;
  padding: 3rem 0 0 5rem;
  flex-direction: column;
  min-height: 60vh;
  h1 {
    font-size: 40px;
    color: #fff;
    margin: 0px;
    font-weight: bold;
  }
  .watch-movie {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    color: red !important;
  }
  @media (max-width: 1000px) {
    align-items: center;
    padding: 3rem 0 0 0rem;
    .watch {
      align-items: center;
    }
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 500px) {
    .watch-movie {
      flex-direction: row;
      h1{
        padding:0 0.2rem;
      }
    }
  }
`;
