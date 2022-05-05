import React, { useState } from "react";

const Contador = () => {
  // const [numero , setNumero] = useState(0)
  // const [estado , setEstado] = useState("")

  const [contador, setContador] = useState(0);


  function sumar(params) {
      setContador(contador + 1)
  }


  function restar(params) {

    if(contador > 1) {

        setContador(contador - 1)
    }
  }

  return (
    <div  className="row">
      <button onClick={restar} className="btn btn-primary"> - </button>
      <p className="mt-2">{contador}</p>
      <button onClick={sumar} className="btn btn-primary"> + </button>
    </div>
  );
};

export default Contador;
