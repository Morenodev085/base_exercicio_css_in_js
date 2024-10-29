import React from 'react'
import Vagas from './Vagas' // Componente estilizado

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas>
    {' '}
    {/* Aqui estamos usando o componente estilizado */}
    <h3 className="vagaTitulo">{props.titulo}</h3>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <a className="vagaLink" href="#">
      Ver detalhes e candidatar-se
    </a>
  </Vagas>
)

export default Vaga
