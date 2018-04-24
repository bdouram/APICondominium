API Condomínio
=================
**Requisitos**
```
MongoDB 3.6.
NodeJS v.8.11.1 ou maior.
Postman - opcional - (Para testes)
```
**Após Clonar o Repositório**

No diretório, digite:
```
npm install
```
**Rotas adotadas**

* Rotas abertas (sem necessidade de autenticação).
```
http://localhost:3000/oapi/login
http://localhost:3000/oapi/signup
http://localhost:3000/oapi/validateToken
```
* Rotas fechadas (necessidade de autenticação).
```
http://localhost:3000/api/condominium 			// Capturando todos os documentos da coleção.
http://localhost:3000/api/condominium/name 		// Filtrando por nome do residente.
http://localhost:3000/api/condominium/block 		//Filtrando documentos por bloco
http://localhost:3000/api/condominium/apartament 	//Filtrando documentos por apartamento
http://localhost:3000/api/condominium/apartament_block 	//Filtrando documentos por um bloco e um apartamento
```

Para gerar um token, é necessário fazer uma request utilizando POST para:
```
http://localhost:3000/oapi/signup 
```
com os seguintes parâmetros (com valores de exemplo):

```
{
	"name":"Bruno",
	"password":"AaBbC1@",
	"confirm_password":"AaBbC1@",
	"email":"teste1@teste1.br"
}
```
Todos os passwords devem ser do tipo string e a senha deve ter uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$ %) e tamanho entre 6 - 20.

Após o POST, o seguinte resultado é gerado:

```
    "name": "Bruno",
    "email": "teste1@teste1.br",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWFkZjIwZTBlODhjYjAxYjBjZGVjNjI3Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwibmFtZSI6ImluaXQiLCJfaWQiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJuYW1lIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIl9fdiI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH0sIiRvcHRpb25zIjp0cnVlfSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjVhZGYyMGUwZTg4Y2IwMWIwY2RlYzYyNyIsIm5hbWUiOiJCcnVubyIsImVtYWlsIjoidGVzdGUxQHRlc3RlMS5iciIsInBhc3N3b3JkIjoiJDJhJDEwJGp3cGZNZFVadHpkRXdyMUU5Mms4VnVlL05NZk5MMTNjem1BUnFJLk9aSFBVUzAyZjBLZmNDIiwiX192IjowfSwiJGluaXQiOnRydWUsImlhdCI6MTUyNDU3MjM4NSwiZXhwIjoxNTI0NjU4Nzg1fQ.vy8xtnZxNkhVxjo8_9HjW7KrjlLVIRLZzglPDRxdIe4"
```

O Token gerado **deve** ser enviado em cada requisição GET e POST.

**Parâmetros e rotas**

Devem ser adotados os seguintes parâmetros na requisição para cada rota:

```
 -- GET E POST --

http://localhost:3000/api/condominium

(GET)

{"token":"..."}

(POST)
{   
    "token":"...",
    "block": 1,
    "numberApartment":1,
    "resident":{
        "name":"Foo Bar",
        "email":"foo@foo.br"
    },
    "phone": 999999999, [opcional]
    "documment":{ [opcional]
        rg:11111111,
        cpf:99999999999
    }
}
```
```
(GET)
http://localhost:3000/api/condominium/name

{"name":"Foo Bar","token":"..."}
```
```
(GET)
http://localhost:3000/api/condominium/block

{"block":1,"token":"..."}
```
```
(GET)
http://localhost:3000/api/condominium/apartament

{"apartament":1,"token":"..."}
```
```
(GET)
http://localhost:3000/api/condominium/apartament_block

{"apartament":1,"block":1,"token":"..."}
```

Para executar (modo de desenvolvedor) dentro do diretório digite:
```
npm run dev
``
