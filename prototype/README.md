# Protótipo

## Fluxo Principal

* Grupo de pessoas chega no restaurante e ocupa uma mesa
* Garçom distribui comandas de acordo com a necessidade dos clientes
  * Ao distribuir as comandas, o graçom precisa somente apontar a qual mesa ela pertence
* Pedidos podem ser:
  * Realizado pelo cardápio online sem a necessidade do garçom
  * Realizados através do garçom normalmente
* Pagamento pode ser:
  * Realizado pela comanda sem a necessidade do garçom
  * Realizados através do garçom normalmente

## Lista de Funcionalidades

:green_circle: Cadastro de comanda/mesa (uso do garçom)  
:green_circle: Cardápio Online  
:green_circle: Integração com Solução de Pagamento (Mockup)  
:yellow_circle: Pesquisa de Satisfação  
:green_circle: Programa de Fidelidade  
:green_circle: Consulta de pontos de fidelidade  
:green_circle: Consulta do consumo atual pela comanda  
:red_circle: Dashboard

## Funcionalidades do Dashboard

:red_circle: Gerenciador do cardápio online  
:red_circle: Quantidade de mesas ocupadas  
:red_circle: Detalhes de cada comanda (horário de chegada, consumo, ...)  
:red_circle: Ganhos por período (hora/dia/semana/mês/ano)  
:red_circle: Gráfico com porcentagem de uso dos métodos de pagamento  
:red_circle: Gráfico com resultado da pesquisa de satisfação  
:red_circle: Gráifco com horários de pico  
:red_circle: Lista de clientes (frequência, horários, produtos mais consumidos, média de gastos, feedbacks)

## Comanda

* Um QR Code por Comanda (cada comanda é um endpoint)  
* Pode estar ocupada ou não

## Programa de Fidelidade

### Participação

* Não obrigatória
* No momento do pagamento, ele faz um simples cadastro (se não possuir)
  * Nome Completo
  * CPF
  * Telefone (opcional) (Perguntar se quer receber novidades por SMS/WhatsApp)
* Caso já possua o cadastro, é só informar o CPF

### Usabilidade

* No momento do pagamento, é só informar o CPF cadastrado
  * Se não for encontrado, o cadastro é requerido
* Após o pagamento, o cliente recebe sua pontuação atual

## Pesquisa de Satisfação

### Perguntas

* Estrelas de 1~5
* O mais gostou?
  * Tempo do atendimento
  * Qualidade da comida
  * Ambiente
* O que precisa melhorar? (disable as que o cliente gostou)
  * Tempo do atendimento
  * Qualidade da comida
  * Ambiente
* Comentário (opcional)

### Opções

* Perguntar se quer que seja anônima
  * Se não for, requisitar CPF cadastrado

## Meios de Pagamento

* Pix
* Cartão de Crédito
* Cartão de Débito
* VA / VR
* PicPay
* Paypal

## Legenda de Cores

:red_circle: ToDo  
:yellow_circle: InProgress  
:green_circle: Done  
:purple_circle: Blocked
