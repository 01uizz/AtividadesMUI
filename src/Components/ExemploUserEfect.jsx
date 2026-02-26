import React from 'react';

function ExemploEffect() {
  const [status, setStatus] = React.useState("Carregando...");

  // O useEffect executa automaticamente
  React.useEffect(function() {

    // Simulando que após 2 segundos algo acontece
    setTimeout(function() {
      setStatus("Sistema Pronto!");
    }, 2000);

  }, []); // O [] garante que só rode uma vez

  return (
    <div>
      <h1>Status do Sistema: {status}</h1>
      <p>O vigia (useEffect) mudou o texto sozinho após 2 segundos.</p>
    </div>
  );
}

export default ExemploEffect;