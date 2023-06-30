import React from 'react'


function ComponentePadre({children}) {
  return (
    <div>
    <h1>Soy el componente padre</h1>
    <p>Dentro mio va a estar el children</p>
                   {children}
    <button>Soy el boton</button>
     
    </div>
  )
}

export default ComponentePadre