// Ejemplo de solicitud DELETE

import http from './http-common'

http
  .delete('/delete-resource/123')
  .then((response) => {
    console.log('Recurso eliminado:', response.data)
  })
  .catch((error) => {
    console.error('Error al eliminar el recurso:', error)
  })
