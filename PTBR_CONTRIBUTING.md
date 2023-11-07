# Contribuindo para o VSCode AnyHooks Monitor

Antes de mais nada, obrigado por considerar a contribuição para o VSCode AnyHooks Monitor. É pessoas como você que tornam essa ferramenta tão grande para todos.

Seguir estas diretrizes ajuda a comunicar que você respeita o tempo dos desenvolvedores que gerenciam e desenvolvem este projeto de código aberto. Em troca, eles devem retribuir esse respeito ao abordar o seu problema, avaliar as mudanças e ajudá-lo a finalizar suas solicitações de pull.

## Começando

As contribuições para este repositório são feitas através de Issues e Pull Requests (PRs). Algumas diretrizes gerais que cobrem ambos:

- Procure por Issues e PRs existentes antes de criar o seu próprio.
- Trabalhamos no branch develop para desenvolvimento contínuo. Sempre baseie seu trabalho no branch `develop` do projeto, nomeando seu branch de acordo com as alterações que você está fazendo.
- Inclua capturas de tela e GIFs animados em sua solicitação de pull sempre que possível.
- Siga as convenções de codificação existentes.

## Issues

As Issues devem ser usadas para relatar problemas com a extensão, solicitar um novo recurso ou discutir mudanças potenciais antes que um PR seja criado. Quando você cria uma nova Issue, um template será carregado para guiá-lo na coleta e fornecimento das informações necessárias para investigação.

Se você encontrar uma Issue que aborda o problema que você está tendo, por favor, adicione sua própria informação de reprodução à issue existente em vez de criar uma nova. Adicionar uma reação também pode ajudar a indicar aos nossos mantenedores que um problema específico está afetando mais do que apenas o relator.

## Pull Requests

PRs são sempre bem-vindos e podem ser uma maneira rápida de obter sua correção ou melhoria programada para a próxima versão. Em geral, PRs devem:

- Apenas corrigir/adicionar a funcionalidade em questão OU abordar problemas de espaçamento/estilo generalizados, mas não ambos.
- Adicionar testes de unidade ou integração para a funcionalidade corrigida ou alterada (se já existir uma suíte de testes).
- Abordar uma única preocupação com o menor número possível de linhas alteradas.
- Incluir documentação no repositório ou atualizações no README.md para as alterações que você está fazendo.
- Ser acompanhado por um modelo completo de pull request (carregado automaticamente quando um PR é criado).

## Configuração

Se você quiser desenvolver a extensão localmente, siga estes passos:

```bash
fork e clone o repositório
cd anyhooks-vscode
npm install
code .
```

## Testes

Verifique se todos os testes passam antes de enviar uma solicitação de pull.

```bash
npm test
```

## Processo de Pull Request

1. Certifique-se de remover quaisquer dependências de instalação ou construção antes do final da camada ao fazer uma construção.
2. Atualize o README.md com os detalhes das alterações na interface, isso inclui novas variáveis de ambiente, portas expostas, locais úteis de arquivos e parâmetros de contêiner.
3. Aumente os números de versão em quaisquer arquivos de exemplos e no README.md para a nova versão que este Pull Request representaria. O esquema de versionamento que usamos é [SemVer](http://semver.org/).
4. Você pode mesclar o Pull Request quando tiver o aval de outros dois desenvolvedores ou, se não tiver permissão para fazer isso, pode solicitar ao segundo revisor que o faça por você.

## Código de Conduta

Nosso Código de Conduta significa que você é responsável por tratar todos no projeto com respeito e cortesia, independentemente de sua identidade. Se você for vítima de qualquer forma de assédio, ou notar que outra pessoa está sendo assediada, entre em contato com os mantenedores do projeto.

## Reconhecimento

Os contribuidores que fornecerem melhorias significativas ou ajudarem a gerenciar aspectos críticos do projeto podem ser reconhecidos como contribuidores principais.

Obrigado por contribuir para o projeto!

--
