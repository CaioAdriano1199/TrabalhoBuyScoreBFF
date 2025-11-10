🔐 Autenticação
POST /api/login

Descrição: Faz login e retorna token JWT.

Body:

{
  "email": "string",
  "senha": "string"
}


Headers: Nenhum

Retorno:

{
  "token": "string",
  "usuario": { /* objeto usuário */ }
}

👤 Usuários
GET /api/usuario/{id}

Descrição: Busca usuário pelo ID.

Parâmetros: id (UUID)

Headers: Nenhum

Retorno: Objeto usuário

GET /api/usuario/all

Descrição: Lista todos os usuários (ADMIN).

Headers: Authorization: Bearer {token}

Retorno: Array de objetos usuário

POST /api/usuario

Descrição: Cria novo usuário.

Body: Objeto usuário

Headers: Nenhum

Retorno: Objeto usuário criado

🏪 Clientes
GET /api/cliente/all

Descrição: Lista todos os clientes

Headers: Nenhum

Retorno: Array de clientes

GET /api/cliente/{id}

Descrição: Busca cliente por ID

Headers: Nenhum

Retorno: Objeto cliente

POST /api/cliente

Descrição: Cria novo cliente

Body: Objeto cliente

Headers: Nenhum

Retorno: Token JWT

PUT /api/cliente/{id}

Descrição: Atualiza cliente

Body: Objeto cliente

Headers: Nenhum

Retorno: 204 No Content

DELETE /api/cliente/{id}

Descrição: Remove cliente

Headers: Nenhum

Retorno: 204 No Content

Favoritos de Comércio
Método	Endpoint	Descrição	Headers
POST	/api/cliente/comercio-favoritos/{comercioId}	Adiciona comércio aos favoritos	Authorization
DELETE	/api/cliente/comercio-favoritos/{comercioId}	Remove comércio dos favoritos	Authorization
GET	/api/cliente/comercio-favoritos	Lista comércios favoritos do cliente	Authorization
GET	/api/cliente/comercio-favoritos/{comercioId}/check	Checa se é favorito	Authorization
Favoritos de Produto
Método	Endpoint	Descrição	Headers
POST	/api/cliente/produto-favoritos/{produtoId}	Adiciona produto aos favoritos	Authorization
DELETE	/api/cliente/produto-favoritos/{produtoId}	Remove produto dos favoritos	Authorization
GET	/api/cliente/produto-favoritos	Lista produtos favoritos	Authorization
GET	/api/cliente/produto-favoritos/{produtoId}/check	Checa se é favorito	Authorization
🏢 Comércios
GET /api/comercio/{id}

Busca comércio por ID

Headers: Nenhum

POST /api/comercio

Cria novo comércio

Body: Objeto comércio

Headers: Nenhum

Retorno: Token JWT

GET /api/comercio/all

Lista todos os comércios

Headers: Nenhum

Consultas de Vendas
Método	Endpoint	Descrição
GET	/api/comercio/top5/setor/{seguimento}	Top 5 comércios por setor
GET	/api/comercio/top5/setores-principais	Top 5 setores principais
GET	/api/comercio/top5/cada-setor	Top 5 de cada setor
GET	/api/comercio/top5/setores?setores[]=a&setores[]=b	Top 5 por múltiplos setores
📦 Produtos
Método	Endpoint	Descrição	Headers	Body
GET	/api/produto/{id}	Busca produto por ID	Nenhum	-
POST	/api/produto	Cria produto	Authorization	Objeto produto
PUT	/api/produto	Atualiza produto	Nenhum	Objeto produto
DELETE	/api/produto/{id}	Remove produto	Nenhum	-
PUT	/api/produto/ativar/{id}	Ativa produto	Nenhum	-
PUT	/api/produto/desativar/{id}	Desativa produto	Nenhum	-
GET	/api/produto/all	Lista todos os produtos	Nenhum	-
🛒 Compras
Método	Endpoint	Descrição	Headers	Body
POST	/api/compra	Cria nova compra	Authorization	{ produtoId, quantidade }
GET	/api/compra/all	Lista todas as compras	Nenhum	-
GET	/api/compra/{id}	Busca compra por ID	Nenhum	-
GET	/api/compra/cliente/{clienteId}	Lista compras por cliente	Nenhum	-
GET	/api/compra/produto/{produtoId}	Lista compras por produto	Nenhum	-
GET	/api/compra/status/{status}	Lista compras por status	Nenhum	-
PUT	/api/compra/{id}/confirmar	Confirma compra	Nenhum	-
PUT	/api/compra/{id}/cancelar	Cancela compra	Nenhum	-
DELETE	/api/compra/{id}	Remove compra	Nenhum	-
🎯 Pontos
Método	Endpoint	Descrição	Headers	Body
POST	/api/gerarpontos	Cria pontos para comerciante	Authorization	{ pontos: 100 }
GET	/api/resgatarpontos/{codigo}	Resgata pontos por código	Authorization	-
🏠 Endereços
Método	Endpoint	Descrição	Headers	Body
POST	/api/endereco	Cria endereço	Nenhum	Objeto endereço
GET	/api/endereco/{id}	Busca endereço por ID	Nenhum	-
PUT	/api/endereco	Atualiza endereço	Nenhum	Objeto endereço
DELETE	/api/endereco/{id}	Remove endereço	Nenhum	-
GET	/api/endereco/all	Lista todos os endereços	Nenhum	-
POST	/api/endereco/cep	Busca endereço por CEP	Nenhum	"12345678"

✅ Observações:

Endpoints marcados com Authorization exigem token JWT.

Headers sempre devem ser Authorization: Bearer {token}.

Formato de datas: ISO 8601.

IDs: UUID v4.