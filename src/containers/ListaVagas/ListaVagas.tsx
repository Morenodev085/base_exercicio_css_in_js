import styled from 'styled-components'

const VagasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Em telas pequenas, exibe uma vaga por vez */
    margin-top: 16px;
    margin-bottom: 8px;
  }
`
export default VagasContainer
