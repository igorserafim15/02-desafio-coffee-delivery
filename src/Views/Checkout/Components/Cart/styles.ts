import styled from 'styled-components'

export const CaffeeCartItemUI = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2.4rem;
  padding-bottom: 3.2rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};
`

export const ContentUI = styled.div`
  width: 100%;
  h4 {
    font-size: 1.6rem;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }
  strong {
    margin: 0;
  }
`

export const ChangeCountUI = styled.div`
  display: flex;
  gap: 8px;

  button {
    border: none;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;

    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-400']};
    > button {
      background: none;
      padding: 1.2rem;
      font-size: 2rem;
      color: ${(props) => props.theme['purple-700']};
      font-weight: bold;
      line-height: 1;
    }
  }
  > button {
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['purple-700']};
    line-height: 0;
    border-radius: 8px;
    padding: 0.8rem 1.6rem;
    font-weight: normal;
    max-width: 13rem;
    text-align: center;
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    gap: 6px;
  }
`
