# Micro serviço - API de entregas

### Considerações

Ao analisar o [repositório](https://github.com/brudam-dev/BRUDAM-2023-09-18), a primeira coisa que percebo é que o projeto foi desenvolvido em NodeJS. Infelizmente esta não é minha especialidade, mas isso não me impede de sugerir alguns pontos baseados na minha experiência e no conhecimento que possuo da tecnologia escolhida. São eles:

1. As rotas do projeto estão todas descritas no arquivo "index.js". Sei que é um micro serviço apenas, mas prefiro organizar as rotas em um arquivo separado, desta maneira, o desenvolvedor que precisar dar manutenção ao código encontrará as rotas mais rapidamente e não precisará modificar o arquivo principal do projeto.
2. As versões das rotas do projeto estão fixas no código. Eu acredito que poderia ser desenvolvida uma maneira mais dinâmica para controlar as versões e, caso a sugestão anterior tenha sido adotada, talvez até separar as versões das rotas em arquivos diferentes.
3. Percebi que há muitas validações sendo executadas nos controllers. Eu deixaria elas em um local separado, visto que os objetos não mudam suas estruturas tão facilmente. Isso facilidaria a manutenção e controle das regras de negócio.

De modo geral, este projeto é muito simples e talvez não haja tanto espaço para "inventar" muita coisa. O código parece estar bem identado e documentado, então eu investiria o tempo que a squad ganhou por entregar antes do prazo na próxima entrega de maior valor.