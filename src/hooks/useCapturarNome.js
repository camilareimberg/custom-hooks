import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export const useCapturarNome = () => {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    requisicao();
  }, []);

  const requisicao = () => {
    axios
      .get(`${BASE_URL}/users`)
      .then((res) => {
        setNomes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return nomes;
};
