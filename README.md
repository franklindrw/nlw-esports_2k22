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
  * [Web Server (API)](#api)
  * [Aplicação Web](#web)
  * [Aplicação Mobile](#mobile)
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

Após clonar o projeto precisará instalar as aplicações web e server API é necessário ter instalado Node.js, caso não tenha pode baixar <a href="https://nodejs.org/pt-br/">Clicando aqui!</a>

E para a o aplicativo é necessário que tenha instalado o Expo no smartphone o [Expo Go](https://expo.dev/client)

ou também é possível compilar a aplicação para um arquivo .apk(android) e/ou .ipa(ios) usando o expo através do passo-a-passo [aqui!](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/)

com tudo pronto você poderá seguir com os passos abaixo:

### API

1. Abra o cmd e navegue através dele até a pasta server: nlw-esports_2k22/server/

    dentro da pasta use o comando abaixo:
    ```
      npm i
    ```
    e aguarde instalar todas as bibliotecas necessárias para rodar o projeto.

2. Com os bibliotecas instaladas use o comando abaixo para gerar o arquivo do swagger:
    ```
      npm run auto-gen
    ```

3. Após gerar os arquivos você pode testar a aplicação na máquina usando o comando:
    ```
      npm run dev
    ```
    em seguida irá gerar no cmd o endereço para acessar fazer as requisições ou acessar o swagger com http://localhost:3000/docs

4. Caso queira instalar em um servidor de produção pode compilar a aplicação usando o comando:
    ```
      npm run build
    ```
    em seguida copie a pasta dist gerada dentro da aplicação para o servidor desejado, navegue até dentro da pasta onde está a pasta build, e com Node instalado e use o comando abaixo para rodar o build:
    ```
      node ./dist/server.js
    ```
    
<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

<br />
    
### Web

1. Abra o cmd e navegue através dele até a pasta server: nlw-esports_2k22/web/
    dentro da pasta use o comando abaixo:
    ```
      npm i
    ```
    e aguarde instalar todas as bibliotecas necessárias para rodar o projeto.
    
2. Após instalar as bibliotecas você pode testar a aplicação na máquina usando o comando:
    ```
      npm run dev
    ```
    em seguida irá gerar no cmd o endereço para acessar a aplicação web.

3. Caso queira instalar em um servidor de produção pode compilar a aplicação usando o comando:
    ```
      npm run build
    ```
    em seguida copie a pasta dist gerada dentro da aplicação para o servidor desejado, navegue até dentro da pasta onde está a pasta build, e com Node instalado e use o comando abaixo para rodar o build:
    ```
      node ./dist
    ```

<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

<br />

### Mobile
1. Abra o cmd e navegue através dele até a pasta server: nlw-esports_2k22/mobile/
    dentro da pasta use o comando abaixo:
    ```
      npm i
    ```
    e aguarde instalar todas as bibliotecas necessárias para rodar o projeto.
    
 2. Após instalar as bibliotecas você pode testar a aplicação na máquina usando o comando:
    ```
      expo start
    ```
    em seguida irá gerar no cmd um QRCode para scannear usando o aplicativo Expo Go instalado no celular ou caso tenha algum simulador terá os comandos abaixo do QRCode para iniciar o simulador que deseja como também restartar, iniciar e parar o aplicativo.
    
3. Caso queira instalar uma compilação no celular ou subir na loja de aplicativos de preferência siga os passos nesse tutorial [aqui!](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/)
    
    após gerar a compilação, transfira para o celular e instale, ou faça upload na sua loja de preferência.
<br />

<div align='end'>
  
  [voltar para o índice](#-índice)
  
</div>

<br />

### 🖊 Autor

<a href="https://github.com/franklindrw">
<img style="border-radius: 50%; width: 100px" src="https://github.com/franklindrw.png" alt="Foto do Autor"/>
<br />
<sub><b>Franklin Campos </b></sub>
</a>
</br>
<p>Feito por <strong>Franklin Campos</strong> 👋🏻 </br>
Entre em contato!</p>
<div>
<a href="https://www.linkedin.com/in/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="mailto:franklindrw@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.instagram.com/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>

## 📋 Licença
<p> Copyright 2022 © Franklin Campos </br>
This project is MIT licensed.</p>
