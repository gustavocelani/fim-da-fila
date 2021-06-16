# Order

:warning: Segurança não precisa ser levada em consideração para o design dos endpoits.  
:warning: Os dados não serão persistentes, logo serão carregados na URL das requisições.

## Fluxo Principal

* Association
  * Associa-se uma comanda a uma mesa
* Home (sem pedidos)
  * Realiza-se um pedido
* Home (com pedidos)
  * Inicia-se o pagamento
* Payment
  * Realiza-se o pagemento
* Loalty
  * Realiza-se o processo de fidelidade
* Survey
  * Realiza-se a pesquisa de satisfação

## :green_circle: Associação da Comanda com a Mesa

Path: `/order/association.html?order={order_number}`

Ao associar uma mesa,  
Redirect to: `/order/home.html?order={order_number}&table{table_number}`

### Funcionalidade

* Exibe página solicitando o número da mesa para associar a comanda.  
  * "Comanda livre! Indique a mesa da comanda: _______"
  * Está funcionalidade é utilizada pelo garçom no memento da distribuição ou pelo próprio cliente
* Redirect

## :green_circle: Home Page

Path: `/order/home.html?order={order_number}&table{table_number}`

Ao fazer pedido,  
Redirect to: `/order/home.html?order={order_number}&table{table_number}&consumption[]={food_id}`

Ao realizar pagamento,  
Redirect to: `/order/loyalty.html?order={order_number}&table{table_number}&consumption[]={food_id}`

### Funcionalidade

* Exibe a página do restaurante contendo:
  * Cardápio Online (visualização e realização de pedidos)
  * Consulta do consumo atual
  * Pagamento
  * Consulta de pontos de fidelidade
  * Chamar garçom

## :green_circle: Programa de Fidelidade

Path: `/order/loyalty.html?order={order_number}&table{table_number}&consumption[]={food_id}`

Ao finalizar,  
Redirect to: `/order/thankyou.html`

### Funcionalidade

* Informa quantidade de pontos ganhos
* Campo para CPF (autenticação e identificação do cliente)
* Nota de 0 a 5 estrelas
* Mensagem aberta
* Enviar
  * Possibilidade de anonimização

## :green_circle: Agradecimento

Path: `/order/thankyou.html`

### Funcionalidade

* Tela de agradecimento (finalização da operação)

## Legenda de Cores

:red_circle: ToDo  
:yellow_circle: InProgress  
:green_circle: Done  
:purple_circle: Blocked
