import styled from 'styled-components'

export const AddressUI = styled.div`
  padding: 4rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-200']};

  .form-section {
    display: grid;
    grid-template:
      'cep . .' 4.2rem
      'street street street' 4.2rem
      'number complement complement' 4.2rem
      'district city uf' 4.2rem
      / 3fr 4fr 1fr;
    gap: 1.2rem;
  }
  #cep {
    grid-area: cep;
  }
  #street {
    grid-area: street;
  }
  #complement {
    grid-area: complement;
  }
  #number {
    grid-area: number;
  }
  #district {
    grid-area: district;
  }
  #city {
    grid-area: city;
  }
  #uf {
    grid-area: uf;
  }
`

export const InputUI = styled.input`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 1.2rem;
  border-radius: 6px;
  border: 2px solid transparent;
  width: 100%;

  &:focus {
    border: 2px solid ${(props) => props.theme['yellow-500']};
  }
`
