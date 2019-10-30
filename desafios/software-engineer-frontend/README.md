# Desafio Software Engineer, Front-end - Pagar.me

Você construirá um _ecommerce_ no formato de _marketplace_. Sendo um _marketplace_ deverá ser possível comprar produtos de diferentes vendedores.

## Contexto

No modelo de _marketplace_, uma empresa disponibiliza o espaço de seu _ecommerce_ para que vendedores parceiros possam ofertar seus produtos, cobrando pela utilização do seu serviço.

Ao realizar as compras através de um _ecommerce_, o pagamento normalmente é feito através de um serviço terceiro, que fornecerá os meios de pagamento.

Você desenvolverá esse _ecommerce_ já com alguns produtos, cobrando uma taxa por cada venda realizada. Para facilitar o processo de transações e divisão dos valores entre você e seus vendedores, você deve usar a API do Pagar.me com a funcionalidade de _split rules_.

## Observações
- Os dados dos produtos podem utilizar _mocks_, não é necessário desenvolver uma API para o desafio.
- Você pode criar uma conta de testes no Pagar.me através da seguinte requisição:
```curl
curl 'https://api.pagar.me/1/companies' -H 'Content-Type: application/json' --data '{"name":"<SEU_NOME>","company":"<NOME_DA_EMPRESA>","email":"<SEU_EMAIL>","password":"<SUA_SENHA>"}'
```
- Em relação as _API_KEY's_ e outros dados: Para o desafio não é necessário o cuidado colocá-las num servidor
- Lembre-se de utilizar a _API_KEY_ de teste
- Lembre-se de não commitar dados sigilosos como suas _API_KEY's_.
- Lembre-se de criar os recebedores que serão passados na _split rule_ de suas transações
- Você pode acessar a documentação da api do Pagar.me no link https://docs.pagar.me/reference


## Requisitos

Você deve criar um serviço com os seguintes requisitos:

1. Requisitos gerais
   - A aplicação deve ser desenvolvida utilizando a abordagem _mobile first_
   - A aplicação deve ser desenvolvida utilizando React
   - O projeto deve ter um README.md com todas as instruções sobre como executar e testar o projeto
   - O projeto deve utilizar Git como ferramenta de controle de versão
   - Possuir testes automatizados é um diferencial
2. Requisitos das páginas:
   1. A página inicial da aplicação deverá conter:
       - Uma lista de pelo menos 10 produtos
           - O cliente poderá adicionar o produto ao carrinho ou ver seus detalhes
           - Deverá ser mostrado o nome, preço e valor do produto
       - Um botão ou elemento visual para possibilitar que o cliente veja seu carrinho de compras
   2. Detalhe do produto
       - Nome do produto
       - Preço do produto
       - Descrição do produto
       - Id do vendedor (`recipient_id` que será passado na _splitrule_)
       - Uma imagem do produto
       - Botão para adicionar no carrinho
   3. Carrinho
       - Deve mostrar os seguintes campos:
         - Nome do produto
         - Quantidade
         - Valor unitário
         - Valor do conjunto (valor do produto * quantidade)
         - Valor total do carrinho com todos os produtos somados
       - Permitir que sejam removidos/alterados os itens no carrinho
       - Permitir a navegação para a página de finalização de pedido
   4. Finalização do pedido
       - Deverá criar um _checkout_ integrado com a API Pagar.me utilizando a biblioteca pagarme-js https://github.com/pagarme/pagarme-js
       - Deverá fazer o split de pagamento envolvendo dois recebedores
           - O vendedor do produto deve receber 85% do valor e ser responsável pelo taxa de processamento da transação;
           - A plataforma deve receber os 15% restante
       - Ao finalizar a compra deverá ser mostrada uma mensagem de sucesso com os seguintes itens:
           - Produtos que foram comprados
           - Valor unitário de cada produto
           - Quantidade comprada de cada produto
           - Valor total da compra
           - Quanto cada recebedor (vendedor e plataforma) envolvido na compra recebeu

## Avaliação

1. O desafio deve ser enviado para a pessoa do RH que estiver em contato com você, no formato de `.zip` ou um link para um repositório do Github
   1. Caso você envie o projeto no formato `.zip` lembrar de enviar neste arquivo o diretório `.git` da raiz do projeto
2. Iremos te avaliar pela arquitetura do serviço, qualidade do código, entendimento das regras de negócio, capricho com o desafio e o quão preparado esse serviço estaria para ser rodado em produção
3. Depois que corrigirmos o desafio, te chamaremos para conversar com o time, apresentar o desafio e discutir sobre as decisões que você tomou
4. Achamos que entre **7 a 15 dias** é um tempo ok para fazer o desafio, mas sabemos que nem todo mundo tem o mesmo nível de disponibilidade. Portanto, nos avise se precisar de mais tempo, ok?
5. Boa sorte :)
