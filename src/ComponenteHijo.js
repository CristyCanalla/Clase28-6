import React from 'react'

function ComponenteHijo({img,info}) {
  return (
    <div>
    <img src={img} alt='img'/>
    <p>{info}</p>
    </div>
  )
}

export default ComponenteHijo