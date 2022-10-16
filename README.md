![capa-nlw 1](https://user-images.githubusercontent.com/81038899/196049193-145cfd64-55de-4674-a977-5b8fe6fa76a3.jpg#vidrinedev)
<h1 align="center"> NLW E-Sports 2022 </h1>
<div id="statusProject" align="center">
  <img src="https://img.shields.io/github/license/franklindrw/nlw-esports_2k22.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/franklindrw/nlw-esports_2k22.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/franklindrw/nlw-esports_2k22.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/franklindrw/nlw-esports_2k22.svg?style=for-the-badge" />
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=green&style=for-the-badge"/>
</div>

<br />

| :placard: Vitrine.Dev | https://cursos.alura.com.br/vitrinedev/franklindrw |
| -------------  | --- |
| :sparkles: Nome        |  NLW E-Sports
| :label: Tecnologias | React, Node, React-native, Express.js, Expo, Prisma.js, Vite.js
| :rocket: URL         | 
| :fire: Desafio     | Plataforma Full Stack para conectar gamers de vários jogos de uma maneria fácil, tanto pela web quanto no celular.

<br /><br />

## 🧭 Índice
* [Sobre o Projeto](#-sobre-o-projeto)
  * [Página Web](#plataforma-web)
  * [Aplicativo Mobile](#aplicativo-mobile)
  * [API Rest](#api-rest)
    * [Desenvolvimento](#desenvolvimento)
    * [Routes](#routes)
    * [Controllers](#controllers)
    * [Models](#models)
  * [Linguagens Usadas](#-construído-com)
* [Instalação](#-instalação)
  * [Requisitos](#requisitos)
  * [Instalar a aplicação Web](#instalar-a-aplicação-web)
* [Como usar](%EF%B8%8F-como-usar)
* [Autor](#-autor)
* [Licença](#-licença)

<br /><br />

## 🔎 Sobre o Projeto
A plataforma NLW E-Sports tem o objetivo de conectar os jogadores de diversas plataformas e generos de jogos de forma fácil. O projeto foi divido em 3 aplicações, uma plataforma web feita com React e Vite.js para criação de anúncios de novos jogadores procurando grupo para jogar, um aplicativo híbrido usando React-native e Expo para que os players consigam ver os anúncios de novos grupos de seu jogo favorito e possa conectar de forma fácil usando seu smartphone Ios ou Android. E para conectar as duas aplicações foi feita uma API Rest usando Express.js. Todas as aplicações foi usado como linguagem de programação Typescript para ter uma tipagem e uma estrutura de código mais segura e de fácil entendimento e vercionamento

### Plataforma Web

O site foi construido usando Vite.js que é uma ferramenta de construção para aplicativos Web usando React, Angular e Vue, e para a estilização foi usado tailwind CSS para estilização de forma mais simples onde é colocado as configurações de CSS direto na className incurtando as propriedades e folhas de código. Para conexão da API foi usado a biblioteca Axios, com ela é possível de forma simples e objetiva fazer requisições HTTP e receber os dados.

O site foi construído com uma página web onde teremos uma lista de jogos mostrando a capa e na legenda a quantidade de anúncios que existe nele.

<img width="1432" alt="nlw-web_1" src="https://user-images.githubusercontent.com/81038899/196051193-8959e7c2-f4a7-46b0-8897-a185ae1c4bf5.png">

Ao clicar em Públicar Anúncio, abrirá um modal com um formulário onde será enviado os dados para o backend atravéz do End-point da api para criar novos anúncios no jogo selecionado.

<img width="1396" alt="nlw-web_2" src="https://user-images.githubusercontent.com/81038899/196051630-917053bf-e470-4567-af70-563aa58de9d1.png">


<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

### Aplicativo Mobile

O Aplicativo mobile foi construído usando React Native e Expo, sendo uma linguagem híbrida pode ser tanto instalado em smartphones Ios da Apple quanto smartphones com sistema operacional Android. Com o aplicativo é possível ver todos os Jogos e ao clicar no jogo abre uma nova tela onde temos os anúncios de outros jogadores criados e ao clicar em conectar mostra o nome do discord para que o jogador possa conectar com o jogador que criou o anúncio.

<div align='center'>

![mobile_1](https://user-images.githubusercontent.com/81038899/196052422-f23dfbd5-0d61-4431-b7a3-32d470eed466.gif)
![mobile_2](https://user-images.githubusercontent.com/81038899/196052527-d4f56961-90f2-4370-8a41-fc43ae0f3e32.gif)
  
</div>

<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

### API Rest
#### Desenvolvimento
O Backend das aplicações foi usado Express.js que é um framework que fornece métodos para especificar qual função é chamada quando chega requisição HTTP (GET, POST, SET, etc). Com ele fui capaz de criar uma API Rest usando arquitetura MVC, onde para que cada rota que o usuario faça uma requisição possa executar um controller determinado que por sua vez executa suas funções do Models e retorna para o usuário os dados requisitados.

Também foi usado o Prisma, ele é um ORM simples que recebe os comando em json e por debaixos dos panos executa no banco os comandos em SQL de acordo com o banco usado, assim pode-se trabalhar em vários tipos de bancos (mySQL, PostgreSQL, SQLite) usando uma unica arquitura, no caso dessa aplicação foi usado SQLite para demonstração.

E para melhor visualização das rotas também adicionei o Swagger-autogen, que é uma biblioteca onde você consegue de forma rápida e simples documentar seu backend e ao gerar o arquivo usando a biblioteca, a mesma cria a página de swagger com as rotas escritas no documento de forma automática.

<img width="900" alt="image" src="https://user-images.githubusercontent.com/81038899/196053392-925ad9df-7992-43c4-b80f-7efc105bef59.png">

<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

#### Routes
A arquitetura do backend foi feita um arquivo de rotas principal onde ele recebe os outros arquivos de rotas individualmente para ter uma melhor organização e entendimento, assim facilitando uma futura manutenção.

<div>
  <img width="500" alt="api_routes" src="https://user-images.githubusercontent.com/81038899/196053768-30fd7d70-ab8f-421f-94ba-8705e1ce2569.png">
  <img width="500" alt="api_routes2" src="https://user-images.githubusercontent.com/81038899/196053772-a9e01e26-4d43-4847-9fbf-1adc3a36f16b.png">
</div>

<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

#### Controllers
Os controles por sua vez, foi feita uma classe principal para todas as funções que tenham manibulação daquele grupo de dados específico, e também onde fica concentrado as configurações do swagger que ao gerar percorre todos os arquivos e monta automáticamente. o Objetivo do controller é ao ser chamado na pela sua rota especifica possa realizar todas as funções contidas nele e retornar apenas os dados que foi solicitado.

Nessa aplicação foi criado um controller que faz todo tratamento de dados dos games, e outro controllers que faz o tratamento de dados dos anúncios

<img width="800" alt="api_controllers" src="https://user-images.githubusercontent.com/81038899/196054243-0bcbf200-641a-47da-8c75-1e66dbecde3c.png">

<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

#### Models
Já os Models segue a mesma idéia dos controllers, temos um arquivo principal que conecta no banco e executa as querys de acordo com o tipo de dados que está sendo solicitado, assim temos um arquivo para querys referentes aos games e um outro arquivos de querys referentes aos anúncios.

<img width="800" alt="api_models" src="https://user-images.githubusercontent.com/81038899/196054447-b0e9cc2d-ae2d-4e4c-ae18-53448c89a866.png">

### 🔨 Construído com
<div id="statusProject" align="left">
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
 <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
 <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
 <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" />
 <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
 <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
 <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
 <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
</div>

<br />

<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

<br /><br />

## 📥 Instalação

### Requisitos

Para instalar as aplicações web e server API é necessário ter instalado Node.js, caso não tenha pode baixar <a href="https://nodejs.org/pt-br/">Clicando aqui!</a>


