import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import axios from "axios";
import { Title, NameContainer, PostContainer } from "./style";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
import { useCapturarNome } from "./hooks/useCapturarNome";
import { useCapturarPostagens } from "./hooks/useCapturarPostagens";
import { useRequestData } from "./hooks/useRequestData";

function App() {
  // const nomeUsuario = useCapturarNome();
  // const posts = useCapturarPostagens();

  const [nomes, carregando, erro] = useRequestData([], `${BASE_URL}/users`);
  const [postagens, carregando2, erro2] = useRequestData(
    [],
    `${BASE_URL}/comments`
  );

  const listaNomes = nomes.map((usuario) => {
    return (
      <Card
        key={usuario.id}
        text={usuario.name}
        backgroudColor={"nome"}
        textColor={"nome"}
      />
    );
  });

  const listaPostagens = postagens.map((post) => {
    //console.log(post);
    return (
      <Card
        key={post.id}
        text={post.body}
        backgroudColor={"#1dc690"}
        textColor={"#ffffff"}
      />
    );
  });

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/comments`)
  //     .then((response) => {
  //       setPostagens(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // se coloca o useEffect sem dependências, ou seja, sem [] pode ficar em um loop eterno no console log
  // }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {carregando ? (
          <p>Carregando...</p>
        ) : erro ? (
          <p>Ocorreu um erro</p>
        ) : (
          listaNomes
        )}
        {/* {nomes.map((usuario) => {
          return (
            <Card
              key={usuario.id}
              text={usuario.name}
              backgroudColor={"nome"}
              textColor={"nome"}
            />
          );
        })} */}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {carregando2 ? <p>Carregando...</p> : listaPostagens}
        {/* {postagens.map((post) => {
          //console.log(post);
          return (
            <Card
              key={post.id}
              text={post.body}
              backgroudColor={"#1dc690"}
              textColor={"#ffffff"}
            />
          );
        })} */}
      </PostContainer>
    </div>
  );
}

export default App;
