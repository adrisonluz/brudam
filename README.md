# Brudam | Processo seletivo

## Teste de conhecimento

### 1. Escreva uma função em uma linguagem de programação de sua escolha que determine se uma string é um palíndromo. Um palíndromo é uma palavra, frase ou sequência que é igual quando ida da esquerda para a direita e da direita para a esquerda, ignorando espaços em branco, pontuação e diferenciação entre maiúsculas e minúsculas. Depois de elaborado a solução da questão na linguagem escolhida por você, monte toda a estrutura necessária para rodar esse código usando Docker. Não esqueça de orientar passo a passo como executar o seu código.

R1. A função foi escrita no arquivo "isPalindromo.php", dentro do diretório "task 1". Para exemplo de usabilidade, você pode executar o arquivo de exemplo através do comando de execução do próprio PHP em um terminal (exemplo abaixo). Este arquivo de exemplo aceita um parâmetro denominado "-s" no qual você pode fornecer qualquer string para validar se é um palíndromo.

> // exemplo de usabilidade
>
> // arquivo de exemplo
> 
> php exemplo.php
>
> // exemplo com parâmetro
>
> php exemplo -s "Olá mundo!"

R2. Para rodar via Docker, execute os seguintes comandos para criar o container e acessar o terminal para então executar os comandos citados na R1:

> docker build -t ispalindrome .
>
> docker run --name ispalindrome -d -i -t ispalindrome
>
> docker exec -it ispalindrome bash

### 2. Imagine que você está encarregado de projetar a arquitetura de software para um sistema de gerenciamento de entregas em tempo real na Brudam. O sistema deve permitir que os usuários pesquisem e solicitem entregas, gerenciem seus lançamentos baseados em entregas realizadas com sucesso, façam cotações e vejam a disponibilidade entregas feitas expressamente. Além disso, os usuários devem ser capazes de adicionar novas entregas ao sistema, atualizar informações das entregas existentes e gerenciar entrega em trânsito. Descreva a arquitetura de software geral para este sistema. Considere fatores como escalabilidade, segurança, manutenção e desempenho. Você pode usar diagramas, se necessário, para ilustrar sua arquitetura.

R. Documento contendo os aspectos gerais do que pensei para a arquitetura no diretório "task 2". Infelizmente não tive tempo hábil para estudar um pouco mais sobre arquitetura e criar um diagrama para esse sistema, com um pouco mais de tempo, isso seria perfeitamente possível.

### 3. Sabendo que recentemente surgiu um novo runtime em JavaScript chamado Bun (https://bun.sh/) que promete ser mais rápido em tempo de execução comparado aos seus concorrentes. Seu gerente pede que mande um email com um relatório de performance baseado em testes. Uma análise baseada em testes práticos comparando o Bun com o Node.js. Elabore essa análise intuitiva sobre qual deles de fato é mais rápido, baseado nos seus testes. Não esqueça de explicar os testes realizados também.

R1. As funções utilizadas para se comparar o desempenho das duas tecnologias estão no diretório "task 3". Também criei um exemplo de email que eu teria enviado para o meu gerente. Para os testes de desempenho, precisei pesquisar na internet alguma forma de fazer a comparação e encontrei 3 opções: "Tarefas intensivas em CPU" (operações matemáticas complexas), "Operações I/O" (leitura/gravação em arquivos) e "Manipulação de dados" (organização e filtragem de grandes volumes de dados).

R2. Para executar os testes, utilizei o Ubuntu como subsistema do Windows pois não há suporte nativo para o Bun.

R3. Comandos para executar os testes:

> // Tarefas intensivas em CPU:
>
> - node cpu-intensive.js
> - bun cpu-intensive.js

> // Operações I/O:
>
> - node io-intensive.js
> - bun io-intensive.js

> // Manipulação de dados:
>
> - node data-manipulation.js
> - bun data-manipulation.js

*Observações: os testes foram realizados em condições iguais para o Node e Bun. Os valores podem variar de acordo com a máquina em que os testes forem realizados.*

### 4. Você como líder, designou uma equipe para desenvolver um micro serviço de uma API de entregas. O projeto foi entregue um pouco adiantado em relação ao prazo. Porém, você na sua posição precisa garantir que tudo está funcionando conforme o solicitado, sempre garantindo também boas práticas de desenvolvimento e performance. Essa equipe devolveu a você o repositório com o projeto finalizado (https://github.com/brudam-dev/BRUDAM-2023-09-18). Seu papel é analisar, descrever e resolver os problemas ou sugestões de mudança em relação a esse projeto. Se achar necessário, pode solicitar uma PR com essas mudanças. Essa análise precisa ter alterações em código realizado por você, e uma descrição do que precisa ser arrumado ou que já foi corrigido por você.

R. O arquivo contendo a análise feita do repositório encontra-se no diretório "task 4".