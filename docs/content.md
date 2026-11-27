# Conteúdo e manutenção

## Fonte

O conteúdo inicial vem do currículo fornecido pelo proprietário, copiado sem alterações para public/documents/curriculo-thamires-queiroz.pdf. A referência visual enviada define as áreas do portfólio; ela não comprova experiência em todas as técnicas citadas.

Dados pessoais profissionais, formação, análises, instrumentos e experiências ficam em features/portfolio/data/profile.ts. Textos editoriais de cada seção ficam em features/portfolio/components/sections/.

## Critérios de fidelidade

- UV-Vis e Karl Fischer têm operação prática descrita no currículo.
- Cromatografia gasosa aparece como conhecimento técnico; FTIR como conhecimentos e HPLC como básico.
- O proprietário confirmou a foto 3 como análise de cloreto e a foto 15 como análise no espectrofotômetro em 15/10/2026. Essas identificações atualizam as legendas e categorias do acervo, sem alterar níveis de experiência dos instrumentos ou acrescentar resultados quantitativos. Alumínio e absorção atômica não constam como competências comprovadas no currículo.
- Manter as previsões de conclusão de Química (dezembro de 2026) e Qualidade (fevereiro de 2027) até receber confirmação atualizada.
- O vínculo na Procytek aparece como atual na fonte. Confirmar com a profissional quando o currículo for atualizado.
- Fotografias e vídeos fornecidos pelo proprietário ilustram práticas, estudos e encontros. Estudos de caso detalhados, pesquisa, extensão e certificados ainda aguardam conteúdo específico. Não inventar resultados ou apresentar atividades internas de empresas sem autorização de compartilhamento.
- Não reproduzir normas ambientais com numeração ambígua do currículo como aconselhamento técnico ou jurídico.

## Adicionar fotografias

Colocar arquivos em public/images/ e configurar media no arquivo de dados:

```ts
export const media = {
  portrait: {
    src: "/images/thamires.webp",
    alt: "Thamires Ribeiro de Queiroz em retrato profissional",
  },
};
```

Sem configuração, MediaSlot apresenta um espaço de imagem em breve, sem imagem quebrada. Preferir WebP, composição adequada ao recorte e arquivos leves. Descrever imagens com texto alternativo específico. Não publicar documentos, rótulos ou dados de clientes visíveis nas fotos.

## Fotografias e vídeos integrados

O acervo contém 12 fotos e 4 vídeos. O retrato `14.jpeg` é configurado em `profile.ts`. Os demais registros ficam em `features/portfolio/data/media-records.ts`, associados pelo número do arquivo e pelo tipo informado pelo proprietário:

| Seção           | Arquivo   | Legenda informada                          |
| --------------- | --------- | ------------------------------------------ |
| Análises        | `7.jpeg`  | Análise de Alcalinidade Total              |
| Análises        | `8.jpeg`  | Análise Microbiológica pelo método de Gram |
| Análises        | `10.jpeg` | Análise de DQO                             |
| Análises        | `11.jpeg` | Dureza                                     |
| Análises        | `12.jpeg` | Análise de DQO                             |
| Análises        | `16.mp4`  | Análise de titulação por potenciômetro     |
| Instrumentação  | `9.jpeg`  | Análise no CG                              |
| Desenvolvimento | `15.jpeg` | Criação de curva para analisar ferro       |

A legenda da foto 12 foi corrigida para Análise de DQO após confirmação do proprietário. A indicação do vídeo 16 foi normalizada para remover o `a` solto ao final da mensagem. Os registros sem nome técnico específico usam apenas descrições do conteúdo visível: fotos 1 e 3 e vídeos 6 e 13 em Projetos; fotos 2 e 5 e vídeo 4 em Pesquisa e competências. Não atribuir a esses registros técnicas ou resultados por inferência.

Cada registro define tipo, caminho e título; fotos incluem `alt`, e vídeos incluem `poster` e `duration` (duração em segundos, lida do arquivo). O opcional `posterTime` informa o ponto do primeiro quadro visível quando há quadros pretos no início: o vídeo 6 usa 0,04 segundo. Para adicionar material, colocar fotos em `public/images/` e vídeos MP4 em `public/videos/`, depois atualizar o registro na seção correspondente. Capas em `public/videos/*-poster.webp` foram extraídas dos próprios vídeos. Ao substituir um vídeo, atualizar também sua capa e duração.

MediaCard identifica cada registro com selo Foto ou Vídeo, ícone e título sempre visível. Na página, ambos usam capas 4:3; os vídeos acrescentam duração e ação Assistir vídeo. MediaGrid alinha os cartões nas seções de análises, projetos e pesquisa, preservando títulos inteiros e altura natural no celular. MediaDialog fornece a mesma janela horizontal e a mesma moldura para fotos e vídeos, com largura de até 1024 px e altura do conteúdo limitada à tela.

VideoPlayer mantém play/pause, progresso, tempo, som e tela cheia disponíveis abaixo do vídeo. O player mantém `playsInline` e `preload="metadata"` apenas depois de abrir o diálogo, com controles nativos antes da hidratação e controles próprios após ela; é desmontado e pausado ao fechar. As capas foram alinhadas ao primeiro quadro visível dos arquivos. Uma capa explícita permanece sobre o vídeo até esse quadro ser apresentado pelo navegador, evitando uma exposição do quadro vazio durante o carregamento. Os arquivos de mídia não foram adicionados ao cache offline do PWA.

## Atualizar currículo

Substituir o PDF em public/documents/curriculo-thamires-queiroz.pdf e revisar os dados correspondentes. Os botões de download usam o mesmo caminho. Executar a build para atualizar a versão do cache offline. Não editar o currículo sem pedido específico.

## Contato

E-mail e LinkedIn são links editoriais do perfil; não são endpoints de API. Não há formulário, backend, envio automático de mensagem ou variável de ambiente obrigatória nesta versão.

A seção de projetos também apresenta áreas reais de atuação em features/portfolio/data/practice-areas.ts, com links para análises, desenvolvimento e qualidade. O indicador de estudos em preparação deve permanecer até haver casos reais com material aprovado para publicação. Anos em destaque na formação representam conclusão ou previsão descrita no currículo, não percentual de progresso.

## Atualização de apresentação, formação e categorias — 15/10/2026

O texto da apresentação foi substituído pelo conteúdo fornecido pelo proprietário. O retrato usa agora a foto de titulação `1.jpeg`, em enquadramento vertical. As descrições das três formações ficam junto de seus dados em `profile.ts` e são abertas ao selecionar os cards de mesma altura. Cursos complementares preservam seu comportamento.

A organização vigente em `media-records.ts` substitui a distribuição histórica descrita acima:

- Análises físico-químicas: alcalinidade (7), dureza (11), cloreto (3), pH (`analise-ph.png`), sólidos totais (`solidos-totais.png`), DQO (10 e 12), titulação iodométrica (vídeo 13) e titulação por potenciômetro (vídeo 16).
- Análises microbiológicas: método de Gram (8) e novo registro `microbiologica.jpg`, com a legenda fornecida, sem inferir método.
- Análises instrumentais: CG (9), espectrofotômetro (15) e vídeo 6, identificado pelo proprietário como instrumental. O vídeo mantém a legenda visual Prática com pipeta, sem atribuir equipamento específico.
- Projetos conserva a foto 1; os vídeos 13 e 6 e a foto 3 passaram às categorias confirmadas. A foto 15 passou de Desenvolvimento para Instrumentação, sem duplicação.

As três novas imagens vieram dos anexos fornecidos. Não são capturas dos cards. Fotos e vídeos continuam fora do cache offline.

## Classificação consolidada pelo proprietário — 15/10/2026

A organização consolidada é físico-química (cloreto, alcalinidade total, dureza, medição de pH e condutividade, sólidos totais) e instrumental (DQO no espectrofotômetro UV-Vis, titulação por potenciometria, acetona no CG, desenvolvimento de curva analítica no espectrofotômetro UV-Vis e cafeína na Coca-Cola no HPLC). DQO (fotos 10 e 12) e potenciometria (vídeo 16) passaram à grade instrumental. A foto 9 identifica acetona no CG; a foto 15 identifica o desenvolvimento da curva analítica.

A titulação iodométrica permanece em físico-química, conforme o pedido anterior, e os registros microbiológicos permanecem em seu próprio grupo. O proprietário confirmou o vídeo 6 e o novo vídeo cafeina-hplc.mp4 como análise de cafeína na Coca-Cola no HPLC. A foto analise-ph.png representa o equipamento usado nas duas análises e recebe a legenda Medição de pH e condutividade.

## Confirmação dos registros de HPLC e pH/condutividade — 15/10/2026

Os vídeos 6 e cafeina-hplc.mp4 ficam em Instrumentação com o título Análise de cafeína na Coca-Cola no HPLC. O novo vídeo foi copiado do arquivo WhatsApp Video 2026-10-15 at 09.08.38.mp4 enviado pelo proprietário, sem transcodificação. A duração lida do cabeçalho MP4 é de aproximadamente 15,648 segundos. A capa cafeina-hplc-poster.webp foi extraída do próprio vídeo a 0,1 segundo, preservando a orientação vertical. O equipamento de pH e condutividade é representado pela mesma foto, conforme confirmação do proprietário.

## Cursos, idiomas e informática — 15/10/2026

Currículo enviado em Downloads/curriculo-thamires-queiroz.pdf conferido por extração de texto e renderização da página. Confirma curso de Análise Instrumental no SENAI, concluído em abril de 2025, Pacote Office com Excel intermediário e Inglês básico com leitura técnica de laudos e normas. O nível básico de Análise Instrumental e a abrangência do pacote Office foram esclarecidos diretamente pelo proprietário nesta conversa.

A seção Cursos passa a mostrar o curso complementar e um grupo de idiomas/informática. Inglês, Excel e Office são apresentados como conhecimentos, sem inventar instituições, certificados ou datas. Os dados ficam em complementaryCourse e additionalQualifications em profile.ts. O PDF publicado não foi substituído ou editado.

As datas dos cards de Formação usam dateSummary em 14 px: Concluído em dez/2024, Previsão: dez/2026 e Previsão: fev/2027. O texto completo permanece em date, nos modais e no rótulo acessível da data.

## Certificados complementares — 15/10/2026

Os cinco certificados enviados foram lidos e tiveram suas primeiras páginas renderizadas para conferência. Os dados e conteúdos resumidos ficam em features/portfolio/data/complementary-courses.ts. As datas dos cursos SENAI são as conclusões dos períodos de realização, não as datas posteriores de emissão. Inglês informa somente o ano de conclusão no documento, por isso o site apresenta 2026.

| Curso                                                    | Instituição               | Carga | Conclusão  |
| -------------------------------------------------------- | ------------------------- | ----- | ---------- |
| Análise Instrumental                                     | SENAI Roberto Simonsen    | 40 h  | 24/04/2025 |
| Inglês — Básico 1                                        | Senac Santo André         | 48 h  | 2026       |
| Excel Básico                                             | SENAI Almirante Tamandaré | 20 h  | 25/06/2025 |
| Fluência — Fundamentos da Inteligência Artificial        | SENAI Almirante Tamandaré | 8 h   | 12/12/2025 |
| Fundamentos da Gestão de Projetos Aplicados na Indústria | SENAI Almirante Tamandaré | 12 h  | 22/09/2026 |

O certificado de Excel é básico; a competência intermediária continua identificada como informação do currículo. O nível básico do curso de Análise Instrumental foi informado pelo proprietário. O conteúdo programático citado nos modais representa a formação cursada, sem alterar os níveis de prática da lista de instrumentação.

Os PDFs originais SENAI incluem identificação pessoal e não foram copiados para public/ nem ligados à página. São fontes privadas para as informações dos cursos. Os cards abrem detalhes do conteúdo, instituição, carga horária e conclusão.

## Certificados e competências — 15/10/2026

Cada curso em complementary-courses.ts aponta para uma cópia local do certificado em public/documents/certificates/ e uma prévia WebP em public/images/certificates/. As cópias SENAI têm o número de RG removido de forma permanente; os documentos originais em Downloads permanecem intactos. A primeira página aparece somente ao abrir Visualizar certificado; o botão Abrir PDF completo dá acesso às duas páginas. As prévias têm entre 45 e 92 KB.

As 22 Hard Skills, agrupadas em três áreas, e as oito Soft Skills reproduzem os textos das imagens fornecidas pelo proprietário, sem atribuição de novos níveis de experiência aos instrumentos. O conteúdo fica em features/portfolio/data/skills.ts. A apresentação em sala está associada a Liderança e postura; o registro da FCE Cosmetique, a Networking e comunicação ativa.

## Lista de instrumentação — 15/10/2026

A pedido do proprietário, Karl Fischer e FTIR foram retirados da lista da seção Técnica, precisão e repertório. Os itens exibidos são Espectrofotometria UV-Vis, Cromatografia gasosa (CG) e HPLC, mantidos em instruments, em features/portfolio/data/profile.ts.

## Remoção de conteúdo repetido — 15/10/2026

DQO conserva apenas a foto 12.jpeg, o segundo registro mostrado pelo proprietário. A seção Da bancada para novas descobertas e seu atalho foram removidos. O retrato de titulação continua na apresentação pessoal. O registro Materiais volumétricos — Transferência de volumes foi retirado de Pesquisa; a FCE Cosmetique e a apresentação em sala permanecem com suas associações às competências, em uma grade equilibrada de dois cartões. As imagens originais não foram apagadas.
