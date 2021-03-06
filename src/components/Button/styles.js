import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: ${(props) => (props.width ? props.width : "204px")};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.125rem;

  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  font-weight: 500;

  color: var(--white);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--blue)"};
  border-radius: 4px;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 850px) {
    width: 100%;
    font-size: ${(props) =>
      props.mobileFontSize ? props.mobileFontSize : "1.2rem"};
  }
`;
