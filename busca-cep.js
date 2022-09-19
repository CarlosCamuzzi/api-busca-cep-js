import fetch from "node-fetch";

  const Cep = (e => {
    const meuCep = "01311000";    
    
    const value = meuCep.replace(/[^0-9]+/, meuCep);
    const url = `https://viacep.com.br/ws/${value}/json/`;

    //console.log("Entrou cep");
    console.log(value);

    fetch(url)
      .then(response => response.json())
      .then(json => {

        if (json.logradouro) {
          console.log(json.logradouro);
          console.log(json.bairro);
          console.log(json.localidade);
          console.log(json.uf);         
        }
      });
  });

Cep();




