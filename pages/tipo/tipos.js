import Pagina from '@/Components/Pagina'
import apiArte from '@/apiArte'
import React from 'react'

const tipos = ({ tipos }) => {
  return (
    <div>
      <Pagina titulo='Tipos de Arte'>
        {tipos.map(item => (
          <li>{item.title}(Atualizado em {item.timestamp})</li>
        ))}
      </Pagina>
    </div>
  )
}
export async function getServerSideProps(context) {
  const resultado = await apiArte.get('/artwork-types')
  const tipos = resultado.data.data
  return {
    props: { tipos }, // will be passed to the page component as props
  }
}
export default tipos