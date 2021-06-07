# Dashboard

:warning: Segurança não precisa ser levada em consideração para o design dos endpoits.

:warning: Não é necessário desenvolver a etapa de autenticação.

## :red_circle: Home Page

Path: `/dashboard`

### :red_circle: Funcionalidade - Menu

* Seletor de período para cada gráfico ou global
* Faturamento
* Quantidade de mesas ocupadas
* Quantidade de pedidos realizados
* Gráfico com quais pedidos foram realizados
* Tabela com o prato relacionado ao horário que foi pedido
* Gráfico com o resultado da pesquisa de satisfação
* Lista de clientes
* Gerenciador de cardápio online (apensa uma aba é o suficiente)

## :red_circle: Consulta de Pontos de Fidelidade

Path: `/dashboard/user/loyalty`

### :red_circle: Funcionalidade

* Exibe campo de CPF para o cliente consultar os pontos de fidelidade
  * Se CPF não for encontrado, encaminha para o cadastro

## :red_circle: Cadastro de Novo Cliente

### Funcionalidade

* Exibe tela de cadastro com:
  * Nome Completo
  * CPF
  * Telefone (opcional)
    * Perguntar se quer receber novidades por SMS/WhatsApp

## Legenda de Cores

:red_circle: ToDo  
:yellow_circle: InProgress  
:green_circle: Done  
:purple_circle: Blocked
