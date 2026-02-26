import React from 'react'

function ExemploUseState() {
  const [numero, setNumero] = React.useState(0);

  function aumentar(){
    setNumero(numero + 1);
  }

  return (
    <div>
      <h1>Contagem: </h1>
      <button onClick={aumentar}>Aumentar Numero :\</button>
    </div>
  );
}

export default ExemploUseState