import styled from "styled-components";

export const Feature = styled.div`
  text-align: center;
  width: calc(100% / 3);
  box-sizing: border-box;
  @media (max-width: 500px) {
    width: auto;
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  margin: 40px 0;
  flex-wrap: wrap;
`;

export const FeatureDesc = styled.p`
  @media (max-width: 500px) {
    font-size: 18px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
