<a id="readme-top"></a>
<br />

<div align="center">
  <img src="public/assets/images/logo.png" alt="Logo" width="auto" height="30">
   <br/>
   <br/>
  <br/>
  <div>
    <img height="30px" alt="React JS" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img height="30px" alt="Typescript" src="https://img.shields.io/badge/Typescript-1572B6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img height="30px" alt="JWT" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
    <img height="30px" alt="GraphQL" src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql" />
  </div>
    <br/>
    <br/>
</div>

<p align="center">
  <img src="public/assets/images/gif.gif" width="400" align=center />
</p>

## 🔎 About

This website was developed using React + TypeScript + Auth0 + Apollo GraphQL.

Utilizes the SpaceX API, allowing users to log in and access information about the rockets The core aim of its creation was to practice using Apollo GraphQL to consume the API and implement Auth0 for JWT authentication.

## 🚀 Ejecution

Steps to install and run the project:

1. Clone the project
   ```sh
   git clone https://github.com/diaslucia/spacex.git
   ```
2. Open your current directory project
   ```sh
   cd spacex
   ```
3. Install the libraries
   ```sh
   npm install
   ```
4. Create an `.env` file to enter your AUth0 keys
   ```js
   VITE_DOMAIN = "";
   VITE_KEY = "";
   ```
5. Ejecute the app

   ```sh
   npm run start
   ```

## 📂 Structure

The file structure is:

- assets: to store images and local fonts.
- components-reusable: to store reusable and layout components.
- hooks: to store apollo hook.
- utils: to store typescript types and theme from sass.
- pages: to store pages structure and their components.

<p align="right">(<a href="#readme-top">to Top</a>)</p>
