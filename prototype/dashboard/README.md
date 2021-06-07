# Dashboard

:warning: Segurança não precisa ser levada em consideração para o design dos endpoits.  
:warning: Não é necessário planejar a etapa de autenticação.

## :red_circle: Dashboard

Path: `/dashboard.html`

### Funcionalidade

* Seletor de período para cada gráfico ou global
* Gráfico de faturamento
* Quantidade de mesas ocupadas
* Quantidade de pedidos realizados
* Gráfico de barras com quais pedidos foram realizados
* Tabela com o prato relacionado ao horário que foi pedido
* Gráfico com o resultado da pesquisa de satisfação
* Lista de clientes
* Gerenciador de cardápio online (apensa uma aba é o suficiente)

## :red_circle: Consulta de Pontos de Fidelidade

Path: `/dashboard/user/loyalty.html`

### Funcionalidade

* Exibe campo de CPF para o cliente consultar os pontos de fidelidade
  * Se CPF não for encontrado, encaminha para o cadastro

## :red_circle: Cadastro de Novo Usuário

Path: `/dashboard/user/register.html`

Se o usuário está se cadastrando pela etapa de fidelidade durante o pagamento,  
Path: `/dashboard/user/register.html?order={order_number}&table{table_number}&consumption[]={food_id}`

Se o usuário estiver durante uma operação de pagamento,  
Redirect to: `/order/payment.html?order={order_number}&table{table_number}&consumption[]={food_id}&user={user_id}`

### Funcionalidade

* Exibe tela de cadastro com:
  * Nome Completo
  * CPF
  * Telefone (opcional)
    * Perguntar se quer receber novidades por SMS/WhatsApp
* Redirect

## Legenda de Cores

:red_circle: ToDo  
:yellow_circle: InProgress  
:green_circle: Done  
:purple_circle: Blocked
