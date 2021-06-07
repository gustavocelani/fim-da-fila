# Order

:warning: Segurança não precisa ser levada em consideração para o design dos endpoits.

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

## :red_circle: Associação da Comanda com a Mesa

Path: `/order/association?order={order_number}`

Ao associar uma mesa,  
Redirect to: `/order/home?order={order_number}&table{table_number}`

### Funcionalidade

* Exibe página solicitando o número da mesa para associar a comanda.  
  * "Comanda livre! Indique a mesa da comanda: _______"
  * Está funcionalidade é utilizada pelo garçom no memento da distribuição ou pelo próprio cliente
* Redirect

## :red_circle: Home Page

Path: `/order/home?order={order_number}&table{table_number}`

Ao fazer pedido,  
Redirect to: `/order/home?order={order_number}&table{table_number}&consumption[]={food_id}`

Ao solicitar pagamento,  
Redirect to: `/order/loyalty?order={order_number}&table{table_number}&consumption[]={food_id}`

### Funcionalidade

* Exibe a página do restaurante contendo:
  * Cardápio Online (visualização e realização de pedidos)
  * Consulta do consumo atual (botão para realizar pagamento)
  * Consulta de pontos de fidelidade
  * Chamar garçom

## :red_circle: Programa de Fidelidade

Path: `/order/loyalty?order={order_number}&table{table_number}&consumption[]={food_id}`

Se for cadastrado ou se usar modo anônimo,  
Redirect to: `/order/payment?order={order_number}&table{table_number}&consumption[]={food_id}`

Se não for cadastrado,  
Redirect to: `/dashboard/user/register?order={order_number}&table{table_number}&consumption[]={food_id}`

### Funcionalidade

* Vai usar o programa de fidelidade?
  * Se sim: Autenticação por CPF (Se CPF não for encontrado, redirect para o cadastro)
  * Se não: continua de forma anônima
* Informa quantidade de pontos ganhos
* Informa quantidade de pontos total
* Redirect para a funcionalidade de pagamento

## :red_circle: Pagamento

Path: `/order/payment?order={order_number}&table{table_number}&consumption[]={food_id}&user={user_id}`

Ao finalizar pagamento,  
Redirect to: `/order/survey?order={order_number}&user={user_id}`

### Funcionalidade

* Exibe o consumo e valor total
* Exibe as diferentes formas de pagamento
* Realiza pagamento
* Redirect para a funcionalidade de pesquisa de satisfação

## :red_circle: Pesquisa de Satisfação

Path: `/order/survey?order={order_number}&user={user_id}`

Ao finalizar pesquisa,  
Redirect to: `/order/association?order={order_number}`

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
