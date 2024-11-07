import styled from 'styled-components'

// Formulário estilizado
const StyledFormVagas = styled.form<{ children?: React.ReactNode }>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

// Botão de pesquisa estilizado
const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

// Campo de entrada estilizado
const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

export { StyledFormVagas, BtnPesquisar, Campo }
