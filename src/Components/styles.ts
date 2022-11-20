import styled from 'styled-components'

export const UIHeader = styled.header`
  max-width: calc(112rem + 3.2rem);
  margin: 0 auto;
  padding: 0 1.6rem;
  min-height: 10rem;
  background-color: ${(props) => props.theme.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
  }
`

export const UILocale = styled.div`
  color: ${(props) => props.theme['purple-500']};

  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.4rem;
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-300']};
`

export const UICart = styled.div`
  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-300']};
  line-height: 0;

  position: relative;

  a {
    color: ${(props) => props.theme['yellow-500']};
  }

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    background-color: ${(props) => props.theme['gray-700']};
    padding: 2px;
    border-radius: 99px;
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
    display: block;
    text-align: center;
    line-height: initial;
  }
`
