# PWA

## Implementação

Manifesto em app/manifest.ts, ícone-fonte em app/icon.svg, PNGs de 192/512 px, máscara de 512 px e ícone Apple de 180 px em public/icons/. O botão de instalação e o registro ficam na feature pwa, composta em app/page.tsx.

O service worker é gerado de scripts/service-worker.template.js por scripts/build-pwa.mjs no prebuild. A versão é derivada do conteúdo do template, página offline, ícones e PDF. public/sw.js é gerado e ignorado pelo Git.

## Instalação

Em produção, o registro ocorre após o carregamento e apenas quando o navegador suporta service workers. Manifesto e ícones também ficam disponíveis em desenvolvimento, mas o service worker não é registrado para evitar interferência no desenvolvimento.

O botão usa o prompt nativo quando disponível. Em outros navegadores, informa como instalar pelo menu ou adicionar à tela de início no Safari. Se a aplicação já estiver em modo standalone, não oferece instalação novamente. A instalação permanece uma ação do visitante.

## Offline e atualizações

- Após uma visita de produção com internet e instalação bem-sucedida do worker, o currículo, os ícones e a página offline são armazenados.
- Navegações tentam a rede; sem conexão, abrem a página offline. O portfólio completo e as interações React não são prometidos offline.
- Arquivos estáticos selecionados tentam a rede e usam o cache em caso de falha. Nenhuma API, requisição POST, resposta RSC ou conteúdo de outro domínio entra no cache.
- A ativação remove apenas caches antigos com o prefixo deste portfólio. Um novo worker aguarda a saída das abas antigas; não força recarga durante a visita.
- A resposta de sw.js usa no-cache/no-store para permitir detecção de atualizações.

## Validação

npm run test:pwa cobre precache, fallback, PDF offline, exclusão de caches próprios antigos e não interceptação de API/RSC/POST/outro domínio. npm run build verifica a integração com a versão instalada do Next.js usando Webpack e Tailwind via PostCSS.

O proprietário deve iniciar a build de produção para testar a instalação real. Em DevTools > Application, verificar Manifest, Service Workers e Cache Storage; desligar a rede após a primeira visita e navegar para conferir a página offline e o download do currículo. Também validar a instalação no Android/desktop e o fluxo de adicionar à tela inicial no iOS quando esses dispositivos estiverem disponíveis.

Referências: [guia oficial do Next.js](https://nextjs.org/docs/app/guides/progressive-web-apps), [service workers no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) e [prompt de instalação](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeinstallprompt_event).
