# 🚀 Nome do Projeto

Breve descrição do seu projeto aqui. Explique o que ele faz, qual problema ele resolve e qual é o seu principal objetivo. Mantenha-a curta, mas impactante!

## ✨ Sobre o Projeto

Este repositório contém o código-fonte de uma aplicação completa (Full Stack + Mobile) construída com as mais modernas tecnologias do ecossistema JavaScript. O projeto é dividido em três partes principais:

* **Backend**: Uma API RESTful robusta, segura e escalável.
* **Frontend**: Uma interface web moderna, rápida e intuitiva.
* **Mobile**: Um aplicativo para iOS e Android com experiência de usuário nativa.

## 🛠️ Tecnologias Utilizadas

A stack do projeto foi escolhida para garantir alta performance, produtividade no desenvolvimento e escalabilidade.

### **Backend (API)**

| Tecnologia                                                                                                 | Descrição                                                                               |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Koa.js** | Framework Node.js minimalista e expressivo para a construção de APIs.                   |
| **Prisma** | ORM de próxima geração que facilita o acesso e a manipulação do banco de dados.         |
| **JSON Web Token (JWT)** | Padrão aberto para criação de tokens de acesso, usado para autenticação segura.         |
| **Yarn** | Gerenciador de pacotes rápido, confiável e seguro.                                      |
| **Insomnia** | Ferramenta utilizada para projetar, testar e debugar as rotas da API.                   |

### **Frontend (Web)**

| Tecnologia                                                                                                 | Descrição                                                                         |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **React** | Biblioteca JavaScript para construir interfaces de usuário interativas.           |
| **Axios** | Cliente HTTP baseado em Promises para fazer requisições à API.                    |

### **Mobile**

| Tecnologia                                                                                                 | Descrição                                                                                 |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **React Native** | Framework para criar aplicativos móveis para iOS e Android com uma única base de código.  |

### **Testes 🧪**

| Tecnologia                                                                                                 | Descrição                                                                       |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Jest** | Framework de testes em JavaScript com foco na simplicidade e "zero config".     |

### **Infraestrutura & Mensageria**

| Tecnologia                                                                                                 | Descrição                                                                                 |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **RabbitMQ** | Message broker que permite a comunicação assíncrona entre serviços (microsserviços). |

## 🏁 Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install)
* [Docker](https://www.docker.com/products/docker-desktop/) (para rodar o RabbitMQ facilmente)

### ⚙️ Configuração
# ⚙️ DESCONCIDERE POR ENQUANTO... FASE DE CONSTRUÇÃO INICIAL - 

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Inicie o RabbitMQ (via Docker):**
    ```bash
    docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management
    ```
    * A interface de gerenciamento estará disponível em `http://localhost:15672`.

3.  **Configure o Backend:**
    ```bash
    cd backend
    yarn install
    # Renomeie .env.example para .env e preencha as variáveis de ambiente
    cp .env.example .env 
    # Rode as migrations do Prisma para criar as tabelas no banco
    yarn prisma migrate dev
    ```

4.  **Configure o Frontend:**
    ```bash
    cd ../frontend
    yarn install
    ```
    
5.  **Configure o Mobile:**
    ```bash
    cd ../mobile
    yarn install
    ```

### ▶️ Executando a Aplicação

Com tudo configurado, você pode iniciar os servidores de desenvolvimento:

* **Para iniciar o Backend (com nodemon):**
    ```bash
    # No diretório /backend
    yarn dev
    ```

* **Para iniciar o Frontend:**
    ```bash
    # No diretório /frontend
    yarn start
    ```

* **Para iniciar o App Mobile:**
    ```bash
    # No diretório /mobile
    yarn android # ou yarn ios
    ```

### ✅ Rodando os Testes

Para executar a suíte de testes automatizados, utilize o seguinte comando no diretório correspondente (ex: `backend`):
```bash
yarn test