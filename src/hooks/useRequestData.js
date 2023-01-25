import React, { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (estadoInicial, url) => {
  const [dados, setDados] = useState(estadoInicial);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    setCarregando(true);
    requisicao();
  }, []);

  const requisicao = () => {
    axios
      .get(url)
      .then((res) => {
        //o then é quando deu certo, então o setCarregando vai para falso, ai mostra os dados depois
        setCarregando(false);
        setDados(res.data);
      })
      .catch((err) => {
        setErro(true);
        console.log(err);
      });
  };
  return [dados, carregando, erro];
};
