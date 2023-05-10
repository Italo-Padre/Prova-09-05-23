import Pagina from '@/Components/Pagina'
import apiArte from '@/apiArte'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const detalhes = ({ Obra }) => {
  return (
    <div>
      <Pagina titulo={Obra.title}>
        <Row >
          <Col md={4}>
            <Card className='mb-3' border="danger">
              <Card.Header className='bg-danger text-white'>Foto</Card.Header>
              <Card.Body>
                <Card.Img className='mb-2' variant="top" src={'https://www.artic.edu/iiif/2/' + Obra.image_id + '/full/843,/0/default.jpg'} />

                <Button href={'https://www.artic.edu/iiif/2/' + Obra.image_id + '/full/843,/0/default.jpg'}>Ampliar<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                </svg></Button>
              </Card.Body>
            </Card>
            <Button variant="success" href='/' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>Voltar</Button>
          </Col>


          <Col md={8}>
            <Card variant='Danger' border="danger">
              <Card.Header className='bg-danger text-white' >{Obra.title}</Card.Header>
              <Card.Body>
                <p><strong>Artista: </strong>{Obra.artist_title}</p>
                <p><strong>Departamento: </strong>{Obra.department_title}</p>
                <p><strong>Origem: </strong>{Obra.place_of_origin}</p>
                <p><strong>Dimensões: </strong>{Obra.dimensions}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Pagina>
    </div>
  )
}
export async function getServerSideProps(context) {
  const id = context.params.id

  const resultado = await apiArte.get('/artworks/' + id)
  const Obra = resultado.data.data
  return {
    props: { Obra }, // will be passed to the page component as props
  }
}

export default detalhes