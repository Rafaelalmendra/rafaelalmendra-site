import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    margin-bottom: 1.765rem;

    @media (max-width: 850px) {
      font-size: 2.1rem;
    }
  }

  .image-blog {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
  }
`;

export const Techs = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.4rem;
  gap: 1rem;

  span {
    min-width: 5.875rem;
    height: 1.688rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 1rem;

    font-weight: 500;
    font-size: 0.775rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.techText};

    border-radius: 8.25rem;
    background: ${(props) => props.theme.techBackground};

    @media (max-width: 850px) {
      gap: 0.875rem;
      margin-bottom: 0.4rem;

      font-size: 0.7rem;
    }
  }
`;

export const Return = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  transition: font-size 0.2s ease-in-out;

  &:hover {
    font-size: 1.05rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }
`;

export const Content = styled.div`
  h6 {
    width: 100%;
    margin-bottom: 0.575rem;

    font-size: 1.8rem;
    font-weight: 500;

    @media (max-width: 850px) {
      font-size: 1.6rem;
    }
  }

  p {
    width: 100%;
    margin-bottom: 0.4rem;

    font-size: 1.1rem;
    font-weight: 300;
    line-height: 2rem;
    text-align: justify;
  }

  a {
    font-size: 1.1rem;
    color: var(--blue);
  }

  img {
    width: 30rem;
    margin: 1rem 0 1.25rem 0;

    @media (max-width: 850px) {
      width: 100%;
    }
  }
`;
