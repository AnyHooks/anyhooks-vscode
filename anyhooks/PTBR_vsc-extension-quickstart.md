# Bem-vindo à sua extensão do VS Code

## O que está na pasta

- Esta pasta contém todos os arquivos necessários para a sua extensão.
- `package.json` - este é o arquivo de manifesto no qual você declara sua extensão e comando.
  - O plugin de exemplo registra um comando e define seu título e nome de comando. Com essas informações, o VS Code pode exibir o comando na paleta de comandos. Ainda não é necessário carregar o plugin.
- `extension.js` - este é o arquivo principal onde você fornecerá a implementação do seu comando.
  - O arquivo exporta uma função, `activate`, que é chamada na primeira vez em que a extensão é ativada (neste caso, por meio da execução do comando). Dentro da função `activate`, chamamos `registerCommand`.
  - Passamos a função contendo a implementação do comando como segundo parâmetro para `registerCommand`.

## Comece a funcionar imediatamente

- Pressione `F5` para abrir uma nova janela com a sua extensão carregada.
- Execute seu comando na paleta de comandos pressionando (`Ctrl+Shift+P` ou `Cmd+Shift+P` no Mac) e digitando `Hello World`.
- Defina pontos de interrupção em seu código dentro de `extension.js` para depurar sua extensão.
- Encontre a saída da sua extensão no console de depuração.

## Faça alterações

- Você pode reiniciar a extensão na barra de ferramentas de depuração após alterar o código em `extension.js`.
- Você também pode recarregar (`Ctrl+R` ou `Cmd+R` no Mac) a janela do VS Code com sua extensão para carregar suas alterações.

## Explore a API

- Você pode abrir o conjunto completo da nossa API ao abrir o arquivo `node_modules/@types/vscode/index.d.ts`.

## Execute testes

- Abra a visualização de depuração (`Ctrl+Shift+D` ou `Cmd+Shift+D` no Mac) e, no menu suspenso de configuração de lançamento, escolha `Extension Tests`.
- Pressione `F5` para executar os testes em uma nova janela com sua extensão carregada.
- Veja a saída do resultado do teste no console de depuração.
- Faça alterações em `src/test/suite/extension.test.js` ou crie novos arquivos de teste dentro da pasta `test/suite`.
  - O executor de teste fornecido considerará apenas os arquivos que correspondem ao padrão de nome `**.test.ts`.
  - Você pode criar pastas dentro da pasta `test` para estruturar seus testes da maneira que desejar.

## Vá além

* [Siga as diretrizes de UX](https://code.visualstudio.com/api/ux-guidelines/overview) para criar extensões que se integram perfeitamente à interface e padrões nativos do VS Code.
* [Publique sua extensão](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) no marketplace de extensões do VS Code.
* Automatize as compilações configurando [Integração Contínua](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
