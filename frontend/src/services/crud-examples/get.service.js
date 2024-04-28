// Ejemplo de solicitud GET

import http from './http-common'

http
  .get('/some-endpoint')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error)
  })
