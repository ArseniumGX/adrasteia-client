# Adrasteia Client

Desafio desenvolvido como parte das etapas de seleção a vaga de Desenvolvedor Fullstack Jr na da [Senior](https://www.senior.com.br/).
O desafio se baseia em uma **Aplicação de fluxo de aprovação para compra de material de escritótio**. O projeto possui três cenarios: Solicitante, Almoxarife e Administrativo.
O Solicitante é responsável por criar as solicitações de compras de materia, informando obrigatoriamente seu nome, descrição do material e valor. Com a solicitação gerada, o Almoxarife é responsável por analisar a solicitação aberta e decidir se aprova ou reprova. E por fim, o Administrativo é um usuário do setor que pode consultar o fluxo de todas as solicitações realizadas.

> Projeto batisado com o nomen do menor dos satélites de Júpiter do Grupo Amalteia.

> Adrasteia, na mitologia grega, é uma figura da mitologia grega, conhecida como a deusa da justiça e da vingança divina.

## Requisitos

- NodeJS v16+
- [Adrasteia API](https://github.com/ArseniumGX/adrasteia-api)
- _Yarn (opcional)_

### Tecnologias utilizadas

- [Angular](https://angular.io/)
- [Sass](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)

## Preparando o ambiente

Antes de tudo, faça download ou clone para sua máquina do api consumida. O link está disponível em Requisitos. Sigas os passos do Readme da api para subir a aplicação. Feito isso sigo as passos a seguir.

Primeiramente, execute o comando abaixo para instalar as dependências:

```sh
npm install
```

ou

```sh
yarn
```

Apos instalar as dependências, a aplicação está ponta para execução. Execute o comando abaixo para inicalizar:

```sh
npm run start
```

ou

```sh
yarn start
```

A aplicação será inicializada na port 4200. Acesse no seu navegado `http://localhost:4200` para acessar.

## Instrução de uso

A tela inicial da aplicação possui três itens que correspondem aos cenário da aplicação.

### Tela Solicitante

Esta tela possui um formulário com três campo: Solicitante, descrição e preço. Todos campos são obrigatórios, o botão de enviar so será habilitado após os dados inseridos atenderem as requisitos. Os campo `Solicitante` e `Descrição` precisam obrigatoriamente ter 3 caracteres para passar na validação. Já o campo `Preço` deve ser preenchido usado o formato `R$ xxxx,xx` ou `R$ x.xxx,xx` ou `R$ xxx`, é obrigatório que a seja passado o simbolo da moeda `R$` para atender a validação do campo. Tendo atendido a todos os requisitos campos, o botão enviar será habilitado e, após enviar, não havendo erro, uma alert será disparado informando que o envio foi bem sucedido. Caso o botão cancelar seja clicado, a tela irá renderizar a tela anteiro, nesse cenário a tela inicial.

### Tela Almoxarife

Esta opção possui uma tabela com todas as solicitações pendentes para aprovação ou reprovação. O botão voltar possui a mesma função citata anteriormente na tela do Solicitante na ação de cancelar.
Para analisar uma solicitação, você pode clicar um uma das linhas das requisições pendentes, está ação irá redirecionar a para um formulário identico ao formulário do `Solicitante` com 2 itens adicionais: `Aprovação` e `Observação`. o item os campos `Solicitante`, `Descrição` e `Preço` estáo em modo de leitura sendo impossível edição. O campo `Aprovação` conta apenas com duas opções: `Aprovar` e `Reprovar`. A ação de `Aprovar` já habilita o botão de enviar, porêm caso seja seleciada a opção `Reprovar`, o campo `Observação` será habilitado para preenchimento. É necessário digitar no mínimo 10 caracteres para passar na validação e habilitat o o botão enviar.
Após enviar a Aprovação, será acionado um alert informando sucesso na ação e será redirecionado a tela anterior. Observe que a solicitação aprovada/reprovada ja não aprece mais na tela.

### Tela Administrativo

Opção, de inicio, está configurada para exibir todas as solicitações realizadas. Existem dois grupos de filtros. O primeiro deles é possível filtrar todas as solicitação, padrão, aprovados e reprovados. Acionando qualquer umas delas os _cards_ com as solicitações será atualizadas de acordo com a opção selecionada.
O segundo grupo é possível fazer filtagem por `Solicitante` ou `Descrição`, selecionando uma das opção e após digitar no mínimo 3 caracteres, a filtragem será iniciada mostrando dos os resultados possiveis para o filtro.

## Autor

Criado por José Pereira Macedo, vulgo "ArseniumGX".

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).
