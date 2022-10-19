## Desafio Software Engineer, Back-end - Pagar.me

 - O projeto foi feito utilizando o framework Nest.Js com o ORM(Object/Relational Mapper)Sequelize e banco de dados MySQL.

<div style="display: inline_block"><br>
<img align="center" alt="Phaos-Typescript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg">
  <img align="center" alt="Phaos-NestJs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
  <img align="center" alt="Phaos-Sequelize" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
  <img align="center" alt="Phaos-MySQL" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
</div>

## Banco de dados.

- O banco de dados escolhido para realizar esse projeto foi o MySQL
- Utilizando sequelize a criação de tabelas é feita automaticamente com a inicialização do projeto: npm run start;
- Foi utilizado o dotenv para proteger as informações relacionadas ao banco de dados.

## Testando o funcionamento.

 - Fiz todos os testes utilizando o software "Insomnia" -> link para download (https://insomnia.rest/download)

 - Para criar uma nova transação é necessário utilizar a rota '/transactions' com verbo HTTP POST e enviar um body.json como o do exemplo abaixo:
 
 ```bash
 {
	"valor": 100.50,
	"descricao": "descrição teste",
	"metodo_pagamento": "debit_card",
	"numero_cartao": "1111222233334444",
	"nome_cartao": "nome teste",
	"data_validade": "05-05-2027",
	"codigo_CVV": "123"
}
```
- Para ver todas as transações é necessário utilizar a rota '/transactions' com verbo HTTP tipo GET;
- Para ver apenas uma transação específica é necessário utilizar a rota '/transactions/:id' com verbo HTTP tipo GET;
- Para ver todos os payables é necessário utilizar a rota '/payables' com verbo HTTP tipo GET;
- Para ver apenas um payable específico é necessário utilizar a rota '/payables/:id' com verbo HTTP tipo GET;
- Para verificar o saldo é necessário utilizar a rota '/balance'

##Obrigado!
