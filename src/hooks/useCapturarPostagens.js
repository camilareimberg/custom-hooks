import React, { useDebugValue, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const useCapturarPostagens = () => {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    requisicao();
  }, []);

  const requisicao = () => {
    axios
      .get(`${BASE_URL}/comments`)
      .then((res) => {
        setPostagens(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return postagens;
};
