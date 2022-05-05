import React from 'react'
import Card from '../Card/Card'

import imagen1 from '../assets/imagen1.png'
import imagen2 from '../assets/imagen2.png'
import imagen3 from '../assets/imagen3.png'

const cards = [
        {
            id:1,
            title: "Escritura",
            desc: "La redacción de un texto, cualquiera que este sea, implica conocer y dominar las reglas y estrategias que hacen del producto final un escrito coherente.",
            imagok: imagen1
        },
        {
            id:2,
            title:"Marketing",
            desc:"Ya sea que haya estado jugando con las plataformas de redes sociales para su negocio o que sea completamente nuevo en el campo del marketing digital",
            imagok: imagen2
        },
        {
            id:3,
            title:"Desarrollo web",
            desc:"Este curso te proporcionará los conceptos básicos para iniciarte en el fascinante mundo de la Ingeniería de Software para aplicaciones web. ",
            imagok: imagen3
        },
]

function Cards() { 
  return (
      <div className="container">
          <div className="row text-center justify-content-center gap-3">
         {
             cards.map(card => (
                <Card title={card.title} imageok={card.imagok} desc={card.desc} />
             )) 
         }
         
          </div>
      </div>
  )
}

export default Cards