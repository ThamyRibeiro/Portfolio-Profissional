# Portfólio de Thamires Queiroz

Portfólio profissional de Química com apresentação, formação, análises físico-químicas, instrumentação, desenvolvimento analítico, qualidade, experiência, projetos, pesquisa, cursos e contato. Conteúdo baseado no currículo fornecido, com fotografias, vídeos e espaço para novos estudos de caso.

Next.js 16, React 19, TypeScript, Tailwind CSS 4 e Zustand. Temas claro e escuro, navegação responsiva, download do currículo e PWA com página offline.

## Desenvolvimento

O proprietário inicia a aplicação. Agentes não devem executar servidores.

```bash
npm install
npm run dev
```

Usar a URL exibida no terminal. Não há variáveis de ambiente obrigatórias nesta versão. Fontes são servidas localmente. A build de produção usa Webpack e a integração oficial do Tailwind 4 via PostCSS.

## Validação

```bash
npm run check
npm run test:pwa
npm run build
```

Esses comandos não iniciam servidor. Para testar o PWA localmente, o proprietário pode executar npm run start após a build. O service worker é registrado somente em produção; instalação e offline exigem uma visita inicial com internet e contexto seguro (HTTPS ou localhost).

## Documentação

- [Regras](docs/rules.md)
- [Arquitetura por features](docs/architecture.md)
- [Harness de agentes](docs/agent-harness.md)
- [Direção visual](docs/design.md)
- [Conteúdo, fotografias e currículo](docs/content.md)
- [PWA](docs/pwa.md)
- [Validação](docs/validation.md)

Toda documentação própria fica em docs/. AGENTS.md na raiz conserva apenas o bootstrap de agentes e as instruções geradas pelo Next.js; arquivos internos das skills permanecem em .agents/skills/.
