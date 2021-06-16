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
* Loalty
  * Realiza-se o processo de fidelidade
* Payment
  * Realiza-se o pagemento
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

## :red_circle: Programa de Fidelidade

Path: `/order/loyalty.html?order={order_number}&table{table_number}&consumption[]={food_id}`

Se for cadastrado ou se usar modo anônimo,  
Redirect to: `/order/payment.html?order={order_number}&table{table_number}&consumption[]={food_id}`

Se não for cadastrado,  
Redirect to: `/dashboard/user/register.html?order={order_number}&table{table_number}&consumption[]={food_id}`

### Funcionalidade

* Vai usar o programa de fidelidade?
  * Se sim: Autenticação por CPF (Se CPF não for encontrado, redirect para o cadastro)
  * Se não: continua de forma anônima
* Informa quantidade de pontos ganhos
* Informa quantidade de pontos total
* Redirect para a funcionalidade de pagamento

## :red_circle: Pesquisa de Satisfação

Path: `/order/survey.html?order={order_number}&user={user_id}`

Ao finalizar pesquisa,  
Redirect to: `/order/association.html?order={order_number}`

### Funcionalidade

* Exibe perguntas
* Cliente está autenticado (pelo CPF informado no programa de fidelidade)?
  * Se sim: Pergunta se pode ser identificado na pesquisa ou se será anônima
  * Se não: envia de forma anônima

## Legenda de Cores

:red_circle: ToDo  
:yellow_circle: InProgress  
:green_circle: Done  
:purple_circle: Blocked
