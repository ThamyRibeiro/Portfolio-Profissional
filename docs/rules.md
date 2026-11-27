# Regras obrigatórias do projeto

Este documento define os padrões que devem ser considerados antes de qualquer análise, implementação ou refatoração. Toda alteração deve preservar as decisões abaixo.

A organização de pastas e as responsabilidades de cada camada estão detalhadas em [Arquitetura por features](./architecture.md). Os dois documentos devem ser consultados em conjunto. Antes de alterar código Next.js, ler também os guias relevantes da versão instalada em `node_modules/next/dist/docs/`, conforme `AGENTS.md`.

## 1. Identidade visual

- Manter o padrão visual existente, incluindo cores, tipografia, espaçamentos, bordas, sombras e densidade das seções.
- Aplicar o cuidado com proporções, densidade e aproveitamento da tela em todo o projeto: abertura, header, navegação, seções, cards, modais e novas funcionalidades. O destaque visual deve vir da hierarquia, tipografia e composição. Equilibrar a largura útil com limites de leitura e proporção dos cards; aproveitar a tela com moderação.
- Dimensionar seções e cards pelo conteúdo. Não usar altura de viewport, grandes alturas mínimas, linhas esticadas ou espaços vazios apenas para aumentar a presença visual.
- Antes de concluir uma alteração visual, revisar se cada padding, gap, reserva de mídia e altura ajuda a hierarquia ou à leitura; reduzir o espaço sem função e aproveitar colunas quando a largura permitir. Preservar legibilidade e áreas de toque no mobile.
- Reutilizar PageContainer para largura e margens principais: limite de 1360 px, margens internas de 16 px no celular, 24 px no tablet e 32 px no desktop. Alinhar header, abertura, seções, contato e rodapé; evitar containers estreitos independentes. Limitar a largura dos textos de leitura dentro do layout amplo.
- Não redesenhar componentes ou seções fora do escopo solicitado.
- Novos elementos devem parecer parte natural da interface atual, tanto no tema claro quanto no escuro.
- Não usar `duration`, `transition-colors`, `transition-all` ou transições de propriedades visuais que causem atraso ao alternar o tema.
- Animações de interação podem usar apenas propriedades que não prejudiquem a troca de tema, como `transform` e `opacity`.

## 2. Responsividade e temas

- Sempre que alterar o front-end, planejar e conferir o resultado na versão mobile, além do desktop. Responsividade é obrigatória desde o início, não uma etapa opcional ao final.
- Validar ao menos larguras de 320 px, 390 px, 768 px e desktop, nos temas claro e escuro, quando houver uma instância iniciada pelo proprietário disponível.
- Considerar textos longos, áreas clicáveis, quebras de linha, menus, modais, gráficos e estados de carregamento em telas pequenas.
- Toda interface deve funcionar corretamente nos temas claro e escuro.
- Não corrigir um tema causando regressão visual no outro.
- Usar Tailwind CSS 4 como padrão de estilização, com `@import "tailwindcss"` e configuração de tokens em CSS por meio de `@theme` / `@theme inline`.
- Centralizar tokens, variáveis de tema e estilos realmente globais em `app/globals.css`. Não introduzir outra biblioteca de estilização sem necessidade aprovada.
- Controlar o tema com o booleano `isDark` no store de tema do Zustand: `true` para escuro e `false` para claro.
- `isDark` é um estado da aplicação, não uma API do Tailwind. Sincronizar esse estado com a classe `dark` no elemento `<html>` e usar a variante `dark:` do Tailwind 4, configurada com `@custom-variant dark (&:where(.dark, .dark *));`.
- Usar classes base para o tema claro e `dark:` para diferenças no tema escuro, ou tokens semânticos que mudem com a classe `dark`. Não espalhar ternários de classes baseados em `isDark` pelos componentes.
- Persistir a escolha explícita do usuário; na ausência dela, considerar a preferência do sistema. Centralizar inicialização e sincronização, evitando flash do tema incorreto e divergências de hidratação.

## 3. Arquitetura e componentes

- Adotar arquitetura por features: cada domínio em `features/<nome-da-feature>/`, com componentes, hooks, stores, serviços e tipos próximos de quem os utiliza.
- Reservar `app/` para rotas, layouts, metadados, providers e composição das features. Regras de negócio e detalhes de implementação pertencem às features.
- Colocar componentes genéricos reutilizáveis em `shared/components/`, separando primitivas em `ui/` e estruturas visuais em `layout/`.
- Reutilizar componentes, tipos, utilitários e estilos existentes antes de criar novos.
- Quando um novo componente for necessário, criá-lo com responsabilidade clara e possibilidade real de reutilização.
- Extrair padrões repetidos para componentes reutilizáveis com props tipadas. Componentes específicos de um domínio permanecem na feature; componentes compartilhados não podem depender de features.
- Consumir uma feature por suas entradas públicas explícitas; não importar arquivos internos de outra feature nem criar dependências circulares. Compor features em `app/`.
- Evitar abstrações, dependências ou arquivos que não resolvam uma necessidade concreta.
- Manter as alterações limitadas ao escopo solicitado e não realizar refatorações visuais paralelas.

### Estado com Zustand

- Usar Zustand para estados compartilhados da aplicação e das features. Stores de domínio ficam em `features/<nome>/stores/`; stores transversais, como tema, em `shared/stores/`.
- Manter estado efêmero restrito a um componente local quando não houver necessidade de compartilhamento; não criar um store global para cada interação.
- Definir estado e ações com TypeScript, separar stores por responsabilidade e consumir apenas os valores necessários com seletores.
- Persistir somente preferências ou dados necessários; não persistir segredos, estados de carregamento ou erros transitórios.
- Não acessar stores de cliente em Server Components nem compartilhar estado de usuário entre requisições no servidor. Quando houver inicialização pelo servidor, usar instâncias por árvore/requisição com estado inicial consistente na hidratação.
- Preservar Server Components por padrão e limitar `"use client"` às fronteiras que precisam de interatividade ou hooks de estado.

## 4. Requisições HTTP

- Usar Axios em todas as conexões HTTP realizadas pelo código da aplicação.
- Não usar `fetch`, direta ou indiretamente, para consumir APIs. O service worker pode usar a API nativa `fetch` exclusivamente para interceptar navegação e armazenar arquivos estáticos do próprio PWA.
- Preservar timeout, cancelamento, tratamento de erro, fallback e estados de carregamento quando uma integração for alterada.
- Tokens e credenciais devem permanecer somente no servidor e nunca usar o prefixo `NEXT_PUBLIC_`.

## 5. URLs e variáveis de ambiente

- Não fixar URLs-base de APIs ou serviços externos no código-fonte.
- Armazenar URLs externas, identificadores configuráveis e credenciais em variáveis de ambiente.
- Centralizar a leitura e a validação dessas variáveis em um único módulo de configuração.
- Documentar novas variáveis em `.env.example` e no `README.md`.
- Nunca versionar `.env.local`, tokens ou outros segredos.

## 6. Scrollbars

- Usar a scrollbar global definida em `app/globals.css` em áreas roláveis.
- Não usar a scrollbar padrão do navegador nem criar uma segunda identidade visual para scrollbars locais.
- Ocultar a scrollbar somente quando o componente já seguir o padrão existente e continuar acessível por toque, mouse e teclado.

## 7. Qualidade da interface

- Toda funcionalidade assíncrona deve considerar estados de carregamento, sucesso, vazio e erro.
- Controles interativos devem ter foco visível, nome acessível e área de toque adequada no mobile.
- Não permitir sobreposição incoerente, rolagem horizontal acidental ou conteúdo cortado.
- Preservar o conteúdo e o comportamento profissional já aprovados no projeto.

## 8. Validação antes de concluir

- Somente o proprietário do projeto inicia a aplicação. Agentes não podem executar `npm run dev`, `npm start`, `next dev`, `next start`, servidores de preview ou comandos equivalentes, nem escolher outra porta para iniciar uma instância.
- Para validação visual, utilizar apenas a instância já iniciada pelo proprietário. Se não houver uma disponível, informar a limitação e concluir as verificações estáticas possíveis, sem iniciar servidores.
- ESLint, TypeScript e build são verificações permitidas; não iniciar automaticamente a aplicação após a build.

- Confirmar que as regras deste documento foram respeitadas.
- Executar ESLint e a verificação do TypeScript.
- Executar a build de produção quando a alteração afetar código, configuração, dependências ou PWA.
- Validar visualmente desktop, mobile, tema claro e tema escuro quando houver mudança de front-end. Revisar também a composição ao redor do componente alterado, altura total, posição das ações principais, legibilidade e espaços sem função.
- Não considerar a tarefa concluída enquanto houver erros conhecidos relacionados à alteração.

## 9. Documentação e trabalho de agentes

- Manter documentação e regras em `docs/`, com `README.md` como ponto de entrada na raiz.
- O `AGENTS.md` da raiz é somente o bootstrap de descoberta de agentes e o bloco obrigatório gerado pelo Next.js; as instruções completas ficam em `docs/agent-harness.md`. Arquivos internos das skills permanecem em seus caminhos de instalação.
- Consultar `docs/agent-harness.md` antes de implementar, além deste documento e de `docs/architecture.md`.
- Componentes de página devem compor seções, sem concentrar a implementação de toda a interface em um único arquivo.
- Separar seções por responsabilidade dentro da feature e extrair padrões efetivamente repetidos para componentes compartilhados. Não usar a divisão em arquivos como substituto da reutilização.
