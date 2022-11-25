import styled from 'styled-components'

export const SelectedUI = styled.div`
  flex: 5;

  background-color: ${(props) => props.theme['gray-200']};
  padding: 4rem;
  border-radius: 8px 32px;

  p {
    display: flex;
    justify-content: space-between;
    gap: 8px;

    font-size: 1.4rem;
    margin-top: 1.2rem;
  }
  .total {
    display: flex;
    justify-content: space-between;
    gap: 8px;

    font-size: 2rem;
    margin: 1.2rem 0 2.4rem;
  }
  .button-confirm {
    cursor: pointer;
    display: block;
    width: 100%;
    border: none;
    background: ${(props) => props.theme['yellow-500']};
    padding: 1.2rem 2.4rem;
    border-radius: 6px;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`
