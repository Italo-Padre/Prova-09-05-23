import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import apiArte from '@/apiArte';
import { Table } from 'react-bootstrap';
import Pagina from '@/Components/Pagina';
import Link from 'next/link';

const index = ({ arte }) => {
  return (
    <>
      <Pagina titulo='Obras de Arte'>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Detalhes</th>
              <th>Título</th>
              <th>Artista</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>

            {arte.map(item => (


              <tr>
                <td><Link href={'/detalhes/' + item.id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></Link></td>
                <td>{item.title}</td>
                <td>{item.artist_title}</td>
                <td>{item.department_title}</td>
              </tr>
            ))}
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Pagina>
    </>
  )
}
export async function getServerSideProps(context) {
  const resultado = await apiArte.get('/artworks')
  const arte = resultado.data.data
  return {
    props: { arte }, // will be passed to the page component as props
  }
}
export default index