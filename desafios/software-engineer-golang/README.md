# Desafio Software Engineer, Golang - Pagar.me

Nesse desafio você construirá uma versão simplificada de um processador de pagamentos.

## Contexto

A pagar.me é uma subadquirente. Para funcionar, precisamos do serviço das adquirentes nas quais temos conta. Para efetuar uma transação de cartão de crédito, por exemplo, precisamos enviar os dados da compra e do cartão para que as adquirentes processem aquela transação.

Pelas [regras do pci](https://pt.pcisecuritystandards.org/pci_security/) não podemos permitir que os dados abertos de cartões de crédito e débito circulem pela nossa infraestrutura sem controles rígidos de segurança. Por isso, criamos internamente um ambiente segregado, em que as regras do pci são seguidas, para armazenar e processar dados de cartão. Liberando todos os nossos serviços de seguirem as mesmas regras rígidas.

Seu desafio é justamente simular o funcionamento desse ambiente de forma simplificada :smile:

## Desafio

Você deve construir um serviço simples para simular o processamento de uma transação pela pagar.me. Abaixo segue um esquema da arquitetura do desafio.

![Esquema do desafio](https://user-images.githubusercontent.com/25036560/70663404-088dfc00-1c47-11ea-8341-453a57a2f751.png)

### Serviço de processamento

Seu serviço de processamento deve:

1. Receber requisições de transação do mundo exterior
2. Opcionalmente, você pode efetuar alguma forma de autenticação
3. Enriquecer essa requisição com dados sensíveis de cartão (número do cartão e cvv) encontrados em alguma camada de persistência (filesystem, um banco de dados externo, &c) com base em algum token recebido na request acima
4. Enviar esses dados para alguma das [adquirentes simuladas](#adquirentes) abaixo, baseado no que a requisição informar, e tratar a resposta
5. Informar ao requisitante do item 1 se a transação deu certo ou errado e por que

Você pode escolher qualquer arquitetura, frameworks e libs que achar válido. As transações devem chegar a esse serviço com:

- Dados de cartão sensíveis (número e cvv) representados por um token, que seu serviço irá utilizar para fazer uma busca na sua camada de persistência
- Dados de cartão não sensíveis (nome do portador, bandeira e data de validade) abertos
- Dados da compra como valor, itens comprados e número de parcelas
- Dados do lojista como cnpj/cpf, endereço e cep
- A indicação de em qual adquirente aquela transação deve ser processada (leia abaixo para mais detalhes)

### Persistência
Você pode usar qualquer tipo de persistência de dados preferir. Pode ser um banco de dados, sistema se arquivos ou outro esquema que faça sentido para você. A camada de persistência deve ser bem simples e pode conter apenas os dados de cartão abertos, que devem ter como id o token recebido no [serviço de processamento](#servi%c3%a7o-de-processamento).

Você pode criar dados de cartão iniciais para simular o funcionamento do serviço e não precisa se preocupar em cadastrar novos dados no dia a dia.

### Adquirentes
Para deixar sua aplicação mais próxima do nosso dia a dia você deve simular o funcionamento das adquirentes (stone, cielo, rede, &c) de alguma forma. Pode ser criando um outro serviço, pode ser utilizando alguma ferramenta de mock como o [mockable](https://www.mockable.io/). A ideia é simular alguns tipos de resposta que encontramos no dia a dia e como sua aplicação reage a eles.

Para isso, crie algumas rotas simples que recebam requisições de transação. Cada rota pode simular uma adquirente. Não se preocupe com fluxos de estorno, listagem de transações passadas, &c. 

Para poder testar melhor seu [serviço de processamento](#servi%c3%a7o-de-processamento) é interessante que você simule pelo menos 2 adquirentes diferentes.

Para facilitar, as transações podem ser autorizadas ou negadas de acordo com algum dado da request. Por exemplo:

1. Você pode criar rotas diferentes para simular a falha e o sucesso
2. Você pode definir _ranges_ de valor para os quais as transações são válidas. Exemplo: abaixo de R$ 1000,00 o serviço aprova, acima de R$ 1000,00 nega
3. Você pode usar dados do comprador, como o nome do portador do cartão, para definir se aprova ou não. Exemplo: se for o comprador João Antônio, nega; para todos os outros aprova

Ou o que mais fizer sentido para você. O importante é que o seu [serviço de processamento](#servi%c3%a7o-de-processamento) saiba tratar as respostas de falha e sucesso adequadamente. Você pode usar o mesmo modelo de request para todas as adquirentes simuladas.

## Restrições

1. O serviço deve ser escrito em golang
2. O projeto deve ter um `README.md` com todas as instruções sobre como executá-lo, testá-lo, modelos de requests que possamos usar e como nos autenticar (caso necessário). Vamos curtir ainda mais se você usar docker e docker-compose para isso :smile:
3. O seu processador deve conter testes automatizados. Não precisa testar seu mock, claro :wink:

## Avaliação

1. O desafio deve ser enviado para quem do nosso time de pessoas estiver em contato com você como:
  1.1. Um link para algum repositório do github, gitlab, &c.
  1.2. Ou um arquivo no formato `.zip`
2. Iremos te avaliar pela arquitetura do serviço, qualidade do código, entendimento das regras de negócio e capricho em geral com o desafio
3. Depois que corrigirmos o desafio, te chamaremos para conversar com o time, apresentar o que criou e discutir sobre suas decisões
4. Achamos que **2 semanas** é um tempo ok para fazer o desafio, mas sabemos que nem todo mundo tem a mesma disponibilidade. Portanto, nos avise se precisar de mais tempo, ok?
5. Boa sorte :)
