# Comanda (Order)

:warning: Segurança não precisa ser levada em consideração para o design dos endpoits.

## :red_circle: Home Page

Path: `/order/{order_number}`

Cada comanda terá um QR Code contendo um desses endpoints.  
Exemplo:
* QR Code Comanda 1: `/order/1`
* QR Code Comanda 2: `/order/2`
* QR Code Comanda 3: `/order/3`

### Funcionalidade 1

Se estiver livre (não está sendo usada por outro cliente)

* Exibe página solicitando o número da mesa para associar a comanda.  
  * "Comanda livre! Indique a mesa da comanda: _______"
  * Está funcionalidade é utilizada pelo garçom no memento da distribuição

### Funcionalidade 2

Se estiver ocupada (está sendo usada por um cliente)

* Exibe a página do restaurante contendo:
  * Cardápio Online (visualização e realização de pedidos)
  * Consulta do consumo atual (botão para realizar pagamento)
  * Consulta de pontos de fidelidade

## :red_circle: Pagamento

Path: `/payment/{order_number}`

### Funcionalidade 1 - Programa de Fidelidade

* Questiona se vai usar o programa de fidelidade
  * Se sim: Autenticação (CPF)
    * Se CPF não for encontrado, direciona para o cadastro
  * Se não, continua de forma anônima
* Informa quantidade de pontos ganhos
* Informa quantidade de pontos total
* Prossegue para a funcionalidade de pagamento

### Funcionalidade 2 - Pagamento

* Exibe o consumo e valor total
* Exibe as diferentes formas de pagamento
* Realiza pagamento
* Prossegue para a funcionalidade de pesquisa de satisfação

### Funcionalidade 3 - Pesquisa de Satisfação

* Exibe perguntas
* Cliente está autenticado (pelo CPF informado no programa de fidelidade)?
  * Se sim: Pergunta se pode ser identificado na pesquisa ou se será anônima
  * Se não: envia de forma anônima

## Legenda de Cores

:red_circle: ToDo  
:yellow_circle: InProgress  
:green_circle: Done  
:purple_circle: Blocked
