# Arquitetura por features

Este documento define a organização adotada para a evolução do portfólio. Deve ser aplicado junto com [Regras obrigatórias](./rules.md) e `AGENTS.md`.

## Estado atual e direção

O projeto utiliza Next.js App Router, TypeScript e Tailwind CSS 4. As rotas ficam em `app/`; Zustand já está instalado e controla o tema. A feature `portfolio` contém os dados e as seções, e a feature `pwa` contém registro e instalação. Componentes de seção, cards, ações e imagens ficam em `shared/`. A estrutura abaixo serve de referência para a evolução por domínio. Criar apenas arquivos e diretórios necessários à funcionalidade em desenvolvimento.

Manter `app/` na raiz, como no projeto atual. Organizar o restante por domínio, evitando concentrar todas as funcionalidades em pastas globais de componentes, hooks ou serviços.

## Estrutura de referência

```text
app/
  layout.tsx                     # Layout raiz e composição de providers
  page.tsx                       # Composição da página inicial
  globals.css                    # Tailwind 4, tokens e estilos globais
  providers.tsx                  # Fronteira cliente para providers necessários
features/
  projects/                      # Exemplo de domínio: projetos do portfólio
    components/
      project-card.tsx
      projects-section.tsx
    hooks/
      use-project-filters.ts
    stores/
      projects-store.ts
    services/
      projects-service.ts
    types/
      project.ts
    utils/
      filter-projects.ts
    projects.ts                  # Entrada pública compatível com servidor
    projects.client.ts           # Entrada pública de recursos de cliente
shared/
  components/
    ui/                          # Button, Input, Dialog e outras primitivas
    layout/                      # Container, Header, Footer, Section
  hooks/                         # Hooks sem vínculo com um domínio
  stores/
    theme-store.ts               # isDark e ações do tema
  providers/
    theme-provider.tsx           # Inicialização e sincronização do tema
  lib/
    http-client.ts               # Cliente Axios comum
  config/
    env.server.ts                # Variáveis exclusivas do servidor
    env.client.ts                # Somente configuração pública necessária
  types/                         # Tipos realmente transversais
  utils/                         # Funções genéricas e puras
public/                          # Arquivos estáticos
docs/
  rules.md
  architecture.md
```

`projects` é um exemplo, não uma feature obrigatória. Outros domínios, como apresentação, experiência ou contato, seguem o mesmo formato quando forem necessários. Uma feature pequena pode começar somente com `components/` e sua entrada pública.

## Responsabilidades e dependências

| Camada             | Responsabilidade                                           | Pode depender de                          |
| ------------------ | ---------------------------------------------------------- | ----------------------------------------- |
| `app/`             | Roteamento, layouts, metadados e composição                | Entradas públicas de features e `shared/` |
| `features/<nome>/` | Interface e comportamento de um domínio                    | Seus próprios arquivos e `shared/`        |
| `shared/`          | Recursos reutilizáveis sem regras de um domínio específico | Outros recursos de `shared/`              |

- Features não importam `app/` nem os detalhes internos de outras features. A composição entre domínios ocorre em `app/`, passando dados e callbacks por props.
- Se duas features precisarem da mesma lógica genérica, extrair essa lógica para `shared/`. Se for lógica de domínio, manter um responsável claro e orquestrar o uso na camada de composição.
- Expor apenas componentes, funções e tipos necessários nas entradas públicas. Não criar um único barrel que misture módulos de servidor, stores de cliente e serviços com credenciais.
- Proteger módulos exclusivos de servidor com `server-only` e manter suas entradas separadas das entradas de cliente.
- Dentro da feature, usar imports relativos; entre camadas, utilizar o alias `@/` configurado no projeto. Evitar ciclos de importação.

## Componentes reutilizáveis

Antes de criar um componente, verificar se já existe uma primitiva ou composição que atenda à necessidade. Reutilizar o componente existente e ampliar suas variantes quando isso mantiver uma responsabilidade clara.

- `shared/components/ui/`: componentes genéricos com props tipadas, acessibilidade e variantes visuais, sem conhecimento dos dados do portfólio.
- `shared/components/layout/`: estruturas recorrentes de composição e espaçamento.
- `features/<nome>/components/`: componentes que conhecem o domínio, como `ProjectCard`, compostos a partir das primitivas compartilhadas.

Não copiar marcação e estilos de botões, campos, cards ou containers entre telas. Extrair padrões repetidos, mas manter componentes exclusivos na feature até existir uma necessidade concreta de compartilhamento. Preferir composição com props e `children` a componentes com muitos booleanos para casos distintos.

## Estado com Zustand

Cada store tem uma responsabilidade definida e ações tipadas. Stores de domínio ficam na própria feature; estado transversal fica em `shared/stores/`. Não criar um store único para toda a aplicação.

- Consumir o estado por seletores específicos, evitando assinar o store inteiro sem necessidade.
- Manter valores derivados calculados a partir do estado, sem duplicar fontes de verdade.
- Usar estado local para interações efêmeras exclusivas de um componente. Zustand é o padrão para estado compartilhado.
- Separar acesso HTTP em `services/`; o store pode orquestrar o resultado e os estados de carregamento, sucesso, vazio e erro quando necessário.
- Não copiar automaticamente dados renderizados pelo servidor para um store. Compartilhar somente o estado que a interação exige.
- Usar persistência apenas para dados selecionados, como a preferência de tema. Não guardar segredos no cliente.
- Server Components não leem nem alteram stores de cliente. Stores com estado inicial vindo do servidor devem ser criados por árvore/requisição, sem singleton mutável compartilhado entre usuários, e hidratados com o mesmo estado inicial.

## Tailwind CSS 4 e temas

Estilizar componentes com utilitários do Tailwind 4. `app/globals.css` concentra o import do Tailwind, tokens semânticos, variáveis dos temas, reset e scrollbar global. CSS adicional deve atender a uma necessidade que não fique clara com utilitários.

O contrato de tema usa `isDark: boolean`, com ações `setIsDark(value)` e `toggleTheme()` no store. O Tailwind aplica as variações pela classe `dark` no `<html>`; `isDark` é o nome do estado da aplicação, não uma variante nativa do Tailwind.

Ao implementar o tema manual, configurar em `app/globals.css`:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

O provider centraliza a sincronização: `isDark = true` adiciona `dark` ao `<html>`; `false` remove a classe. Componentes usam classes como `bg-white dark:bg-zinc-950` ou tokens semânticos, em vez de decidir suas cores com ternários em JavaScript.

Na inicialização, respeitar primeiro a escolha persistida e, quando ela não existir, a preferência do sistema. Distinguir ausência de preferência de uma escolha explícita pelo tema claro. Definir uma estratégia de inicialização antes da primeira pintura e de hidratação consistente; não acessar `window` ou `localStorage` durante a renderização no servidor. A regra de sistema e a escolha manual não devem competir em CSS: migrar os tokens atuais baseados apenas em media query para a classe `dark` ao implementar esse controle.

A troca de tema deve ser imediata, sem transições de cor, e todas as interfaces precisam funcionar em ambos os temas.

## Fluxo para uma nova funcionalidade

1. Consultar `rules.md`, este documento e os guias locais do Next.js relevantes à alteração.
2. Identificar o domínio responsável e os componentes existentes que podem ser reutilizados.
3. Criar ou ampliar a feature, adicionando somente as pastas necessárias.
4. Implementar estado compartilhado com Zustand e integrações HTTP com Axios quando necessários.
5. Expor as entradas públicas e compor a funcionalidade em `app/`, preservando as fronteiras entre servidor e cliente.
6. Validar tipos, lint e, quando houver código, build; para alterações de interface, conferir desktop, mobile e os dois temas em uma instância iniciada pelo proprietário. Agentes não iniciam servidores.

## Estrutura implementada

- `app/page.tsx`: compõe as entradas públicas de portfólio e PWA.
- `features/portfolio/components/portfolio.tsx`: apenas compõe seções; as implementações ficam em `sections/`.
- `features/portfolio/components/analysis-explorer.tsx`: grade de registros de análises com títulos visíveis; a interação de ampliação fica em MediaCard.
- `features/pwa/`: instalação e registro, com entrada pública de cliente separada.
- `shared/components/`: Section, InfoCard, ActionLink, MediaSlot, MediaCard, MediaDialog, MediaGrid, VideoPlayer, cabeçalho e rodapé. MediaDialog centraliza moldura, abertura, fechamento e foco das mídias; MediaGrid centraliza o alinhamento de cartões. VideoPlayer concentra os eventos e controles locais de reprodução; MediaCard compõe a capa e o conteúdo de foto ou vídeo.
- `shared/stores/theme-store.ts`: estado compartilhado isDark.
- `scripts/`: verificações do harness, testes e geração do service worker, sem iniciar servidores.

O bootstrap mínimo de descoberta de agentes fica em AGENTS.md por convenção do framework. Toda documentação própria fica em docs/.

## Componentes das seções internas

SurfaceCard centraliza superfícies e espaçamentos; IconBadge, StatusBadge e Checklist são reutilizados nas seções. CredentialCard, ExperienceCard e InstrumentList pertencem à feature portfolio, e os componentes de sections/ apenas os compõem com os dados.

Section concentra o ritmo vertical das seções internas. SurfaceCard oferece espaçamentos normal e compacto, e MediaSlot oferece densidades regular e compacta para adaptar fotografias de apoio sem duplicar componentes. A feature escolhe o arranjo das colunas; os cards conservam altura natural.

PageContainer centraliza a largura útil (até 1360 px) e as margens responsivas de 16/24/32 px. Header, abertura, Section, contato e rodapé reutilizam esse componente. Limites de linha pertencem aos textos internos, sem estreitar todo o layout. ActionLink oferece tamanhos regular e compacto, ambos com área de toque adequada.

## Formação e categorias de análises

EducationSection compõe CredentialCard e ContentDialog: o card conserva a apresentação compartilhada com cursos, enquanto a interação fica em um componente cliente pequeno. ContentDialog recebe o conteúdo renderizado pelo servidor, controla abertura, fechamento, foco e rolagem, e permite acionar toda a superfície do card. As descrições ficam nos dados da formação.

AnalysisExplorer apresenta grupos físico-químico e microbiológico. InstrumentationSection reúne a lista de conhecimentos e a grade de registros instrumentais. As três listas tipadas de mídia ficam em media-records.ts; os componentes reutilizam MediaGrid, MediaCard e MediaDialog.

MediaGrid oferece a opção balanced para distribuir os filhos em uma grade de 12 colunas com linhas completas, conforme a quantidade de registros e o breakpoint. InstrumentationSection usa balanced com columns=4; a implementação permanece compatível com servidor, sem estado ou listeners de redimensionamento.

CourseCard compõe SurfaceCard e ContentDialog para apresentar as formações certificadas. O conteúdo está em complementary-courses.ts; CoursesSection organiza a grade e conserva os conhecimentos complementares em profile.ts. ContentDialog aceita closeLabel para nomear o fechamento conforme o contexto, mantendo o padrão dos modais de Formação. Os PDFs originais permanecem fora de public/; cópias locais com RG removido e prévias WebP são usadas na visualização dos certificados.

CertificateViewer reutiliza ContentDialog com acionador visível e mountOnOpen: a prévia não é montada antes da abertura e é desmontada no fechamento. As opções novas conservam o comportamento padrão dos modais de formação e de conteúdo dos cursos. SkillsTables renderiza os dois quadros no servidor a partir de skills.ts, dentro de ResearchSection. MediaCard aceita uma legenda complementar opcional para associar os registros às competências solicitadas.
