<h1 align="center">To Do List</h1>

<p align="center">Uma to do list, desenvolvida com React e Spring Boot.<p>

<p align="center">
    <a href="#pre-requisitos">Pré-requisitos</a> •
    <a href="#rodando-a-aplicacao">Rodando a aplicação</a> •
    <a href="#tecnologias">Tecnologias</a> •
    <a href="#autor">Autor</a>
<p>

---

<h3 id="pre-requisitos">Pré-requisitos</h3>
Antes de começar, você vai precisar ter instalado em sua máquina as seguinte ferramentas: <a href="https://git-scm.com" target="_blank">Git</a> para clonar este repositório e <a href="https://www.docker.com" target="_blank">Docker</a> para rodar a aplicação.

---

<h3 id="rodando-a-aplicacao">Rodando a aplicação</h3>

Execute os comandos abaixo para tornar a aplicação acessível na url http://localhost:3001.

```bash
# Faça o clone deste repositório em sua máquina
$ git clone git@github.com:jspereiramoura/todo-list-spring-react.git

# Entre na pasta do projeto
cd todo-list-spring-react/

# Altere o arquivo `.env.sample` para `.env`
mv .env.sample .env

# Execute os serviços utilizando o docker-compose
$ docker compose --env-file .env up -d
```

---

<h3 id="tecnologias">Tecnologias</h3>
As seguintes ferramentas foram utilizadas na construção deste projeto:

#### Frontend

- [Vite](https://vitejs.dev)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

#### Backend

- [Spring Boot](https://spring.io/projects/spring-boot)
- [Gradle](https://gradle.org)
- [GraalVM](https://www.graalvm.org)
- [Flyway](https://www.red-gate.com/products/flyway)
- [PostgreSQL](https://www.postgresql.org)

---

<div align="center">
<h3 id="autor">Autor</h3>

<strong>José Luiz de Moura Pereira - Desenvolvedor Front-end</strong>

<div>
  <a href="https://www.linkedin.com/in/jspereiramoura" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="32" alt="LinkedIn" />
  </a>
  <a href="mailto:joseluiz.zp@gmail.com">
    <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="32" alt="Gmail" />
  </a>
  <a href="https://discordapp.com/users/jspereiramoura" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289DA&logoColor=white&labelColor=&style=for-the-badge" height="32" alt="Discord" />
  </a>
</div>

</div>