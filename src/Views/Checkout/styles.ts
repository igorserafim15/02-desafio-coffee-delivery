import styled from 'styled-components'

export const GridUI = styled.form`
  max-width: calc(112rem + 3.2rem);
  margin: 0 auto;
  padding: 0 1.6rem;

  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`

export const FormUI = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .header-section {
    display: flex;
    gap: 1.2rem;
    margin-bottom: 3.2rem;
  }
`
