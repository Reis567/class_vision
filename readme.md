# ClassVision API

Bem-vindo à ClassVision API! Esta API é projetada para fornecer funcionalidades relacionadas a salas de aula virtuais, gerenciamento de vídeos de aulas e interações com disciplinas.

## Funcionalidades

### Usuários

#### 1. Criação de Usuário
- **Endpoint:** `POST /user`
- **Descrição:** Cria um novo usuário na plataforma.
- **Acesso:** Público

#### 2. Login de Usuário
- **Endpoint:** `POST /login`
- **Descrição:** Autentica um usuário e fornece um token JWT para acesso seguro.
- **Acesso:** Público

#### 3. Perfil do Usuário
- **Endpoint:** `GET /profile`
- **Descrição:** Obtém o perfil do usuário autenticado.
- **Acesso:** Privado (requer autenticação)

### Salas de Aula (Rooms)

#### 4. Listagem de Salas de Aula
- **Endpoint:** `GET /room`
- **Descrição:** Obtém a lista de salas de aula com vídeos e disciplinas associadas.
- **Acesso:** Privado (requer autenticação)

#### 5. Criação de Sala de Aula
- **Endpoint:** `POST /room`
- **Descrição:** Cria uma nova sala de aula.
- **Acesso:** Privado (requer autenticação)

#### 6. Atualização de Sala de Aula por ID
- **Endpoint:** `PUT /room/:id`
- **Descrição:** Atualiza os detalhes de uma sala de aula específica.
- **Acesso:** Privado (requer autenticação)

#### 7. Detalhes de Sala de Aula por ID
- **Endpoint:** `GET /room/:id`
- **Descrição:** Obtém os detalhes de uma sala de aula específica.
- **Acesso:** Privado (requer autenticação)

#### 8. Exclusão de Sala de Aula por ID
- **Endpoint:** `DELETE /room/:id`
- **Descrição:** Exclui uma sala de aula específica.
- **Acesso:** Privado (requer autenticação)

### Disciplinas (Subjects)

#### 9. Criação de Disciplina
- **Endpoint:** `POST /subject`
- **Descrição:** Cria uma nova disciplina.
- **Acesso:** Privado (requer autenticação)

#### 10. Listagem de Disciplinas
- **Endpoint:** `GET /subject`
- **Descrição:** Obtém a lista de disciplinas.
- **Acesso:** Privado (requer autenticação)

#### 11. Atualização de Disciplina por ID
- **Endpoint:** `PUT /subject/:id`
- **Descrição:** Atualiza os detalhes de uma disciplina específica.
- **Acesso:** Privado (requer autenticação)

#### 12. Detalhes de Disciplina por ID
- **Endpoint:** `GET /subject/:id`
- **Descrição:** Obtém os detalhes de uma disciplina específica.
- **Acesso:** Privado (requer autenticação)

#### 13. Exclusão de Disciplina por ID
- **Endpoint:** `DELETE /subject/:id`
- **Descrição:** Exclui uma disciplina específica.
- **Acesso:** Privado (requer autenticação)

### Relacionamentos

#### 14. Adição de Vídeo a uma Sala de Aula
- **Endpoint:** `POST /room/:idRoom/create`
- **Descrição:** Adiciona um novo vídeo a uma sala de aula específica.
- **Acesso:** Privado (requer autenticação)

#### 15. Associação de Disciplina a uma Sala de Aula
- **Endpoint:** `POST /room/:idRoom/subject`
- **Descrição:** Associa uma disciplina a uma sala de aula específica.
- **Acesso:** Privado (requer autenticação)

## Configuração

1. Clone o repositório: `git clone https://github.com/Reis567/class_vision`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto.

## Execução

Execute o servidor localmente com:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000/`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull.

# Feito por Reis567 
## Acesse meu portifolio : [matheusdosreis.com](matheusdosreis.com)

