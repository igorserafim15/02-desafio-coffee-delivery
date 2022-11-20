import styled from 'styled-components'

export const CaffeeItemUI = styled.div`
  max-width: 26rem;
  min-height: 30rem;
  flex: 1 1 25rem;

  padding: 1.6rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 8px 32px;

  text-align: center;

  img {
    margin: -4.4rem auto 1.2rem;
  }
  h4 {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    margin: 1.6rem 0 0.8rem;
  }
  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const CategoryUI = styled.div`
  align-self: center;
  display: inline-block;
  padding: 4px 12px;
  background-color: ${(props) => props.theme['yellow-300']};
  text-transform: uppercase;
  border-radius: 99px;
  font-size: 1rem;
  color: ${(props) => props.theme['yellow-500']};
  font-weight: bold;
`

export const ChangeCountUI = styled.div`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    flex: 1;
    font-size: 2.4rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-700']};
    text-align: start;
  }
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
    background-color: ${(props) => props.theme['purple-700']};
    color: white;
    line-height: 0;
    border-radius: 8px;
    padding: 0.8rem;
  }
`
