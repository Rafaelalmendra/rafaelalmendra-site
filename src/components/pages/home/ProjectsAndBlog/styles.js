import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  svg {
    transition: transform ease-in-out 0.2s;
  }

  button:hover {
    svg {
      transform: translateX(0.4rem);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--dark-grey);

  cursor: pointer;
`;

export const TitleSection = styled.p`
  font-size: 1rem;
  padding: 1rem 1.375rem 1rem 0;
  color: var(--grey);
  transition: color 0.2s ease-in-out;

  ${(props) => props.active && { color: props.theme.text, fontWeight: 500 }};

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.625rem;
  margin: 1.75rem 0 3rem 0;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;
