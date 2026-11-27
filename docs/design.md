# Direção visual

## Conceito

Um portfólio científico com presença editorial: o nome e a vidraria ilustrada conduzem a apresentação; técnicas, trajetória e qualidade dão substância ao restante da página. Referência funcional: https://github.com/Kaiquii/portfolio-em-next.js. Preservar a identidade própria de Química, sem copiar conteúdo do portfólio de desenvolvimento.

## Tokens

| Papel               | Cor     |
| ------------------- | ------- |
| Azul profundo       | #123459 |
| Azul de laboratório | #1c65ad |
| Azul claro          | #a5d6ff |
| Superfície suave    | #eaf1fa |
| Fundo claro         | #f5f8fd |
| Fundo escuro        | #091b2e |

Manrope para títulos e DM Sans para leitura. Fontes locais com licença OFL, sem requisição externa na build. Alinhamento à esquerda e parágrafos curtos. Espaçamento amplo com variações de densidade conforme o conteúdo.

## Composição

Desktop: apresentação em duas colunas, nome à esquerda e vidraria à direita; faixa de competências; apresentação pessoal com retrato; formação; bancada interativa de análises; instrumentos e registro fotográfico; desenvolvimento; painel de qualidade; trajetória; projetos, pesquisa, cursos e contato.

Mobile: uma coluna, nome sem corte, arte abaixo da apresentação, menu recolhível, controles de pelo menos 44 px, seletores de análises que quebram linha e cards sem largura fixa. A ordem do conteúdo permanece lógica sem depender da posição no desktop.

## Revisão do conceito

Evitar uma sequência de cards idênticos: formação usa credenciais; análises usam uma bancada interativa; experiência usa uma linha de trajetória; qualidade usa um painel de contraste. A ilustração representa o tema e não uma medição real. Não criar gráficos com resultados inventados, níveis percentuais de domínio, depoimentos ou estatísticas sem fonte.

## Critérios

- A cada mudança de interface, considerar e validar mobile e desktop nos dois temas.
- Reutilizar componentes de seção, ações, imagens e credenciais; manter cada seção em seu próprio componente.
- Hierarquia visual e legibilidade têm prioridade sobre efeitos. Respeitar movimento reduzido e troca instantânea de tema.
- Fotografias futuras ficam configuradas em features/portfolio/data/profile.ts; não usar imagens genéricas como se fossem registros reais da profissional.

## Reformulação visual de 14/10

Abertura imersiva em azul profundo, nome em escala editorial e uma composição artística de vidro, água e refração. O azul claro entra como luz e material, sem virar decoração espalhada por todos os cards. Manrope ganha contraste por escala e peso; DM Sans mantém a leitura.

```text
Desktop
[ marca                 navegação                  tema ]
[ nome grande         | vidro e água em cena artística  ]
[ apresentação / CTA  | arte com profundidade           ]
[ áreas de atuação em faixa conectada                   ]
[ retrato em moldura  | apresentação e formação resumida ]
[ credenciais com nova hierarquia                       ]
[ bancada de análises e instrumentação                   ]
[ painel de qualidade / trajetória / projetos            ]
[ contato em um grande painel de fechamento              ]

Mobile
[ marca / tema / menu ]
[ nome e apresentação ]
[ ações que quebram linha ]
[ arte em recorte próprio ]
[ competências em duas colunas ]
[ conteúdo em uma coluna ]
```

Revisão: a pequena alteração de cards anterior manteve a mesma composição e não atendeu à mudança pedida. Nesta versão, abertura, escala, superfícies, espaços de fotografia e encerramento mudam em conjunto. A arte é conceitual e não representa o laboratório ou a pessoa; registros reais continuam aguardando fotografias. Evitar números decorativos, excesso de badges e animações repetidas.

Ajuste solicitado durante a execução: não integrar fotografias geradas. O destaque usa apenas arte vetorial de uma molécula de água, construída em código. Fotos e vídeos aguardam os materiais da profissional. O painel principal e o painel de contato mudam de azul claro/texto escuro para azul profundo/texto claro conforme isDark; botões e detalhes gráficos usam os mesmos tokens.

Header em uma barra flutuante com navegação em cápsula. No mobile, dialog modal lateral com margem de 12 px, fundo desfocado e rolagem independente: não ocupa espaço no fluxo da página. Fechar por botão, Escape, toque fora ou seleção de seção; manter foco no painel e restaurá-lo ao acionador. A marca e o controle de tema são componentes reutilizados.

## Continuidade nas seções internas

Formação: uma credencial principal para a graduação concluída e duas credenciais de formação técnica em andamento; anos e previsões são dados do currículo, sem barras de progresso inventadas. Experiência: cartões de largura completa no mobile, com cargo, empresa, período e atividades em grupos legíveis; a linha cronológica aparece apenas onde houver espaço. Projetos: registro visual futuro e áreas de prática com links para conteúdo real, identificando estudos de caso em preparação. Instrumentação, desenvolvimento, qualidade, competências e cursos usam os mesmos contornos, ícones e espaçamentos.

```text
Desktop
[ graduação em destaque | Química em andamento  ]
[                        | Qualidade em andamento ]
[ cargo / empresa / período                      ]
[ resumo                 | atividades em grupos  ]
[ registro de projetos   | áreas de prática      ]

Mobile
[ graduação ]
[ Química ]
[ Qualidade ]
[ experiência com largura útil completa ]
[ registro de projetos ]
[ áreas de prática ]
```

Revisão do plano: evitar repetir três cards iguais em todas as seções ou manter grandes recuos de timeline que estreitem o texto no celular. O destaque usa os tokens showcase existentes; o restante fica em superfícies neutras azuis. Manter fotos e vídeos aguardando o material da profissional.

## Densidade e aproveitamento da tela

Revisão solicitada pelo proprietário: a graduação não deve se esticar ao lado de dois cartões empilhados. Formação passa a três colunas no desktop, duas no tablet e uma no celular, com alturas naturais. O destaque permanece na cor, sem um painel vazio.

Section usa 48 px de respiro vertical no celular e 64 px em telas maiores; títulos internos têm escala menor que a apresentação. Cards compartilham padding de 20/24 px, com variante compacta de 16/20 px. Experiência, bancada de análises e listas de instrumentação têm intervalos menores. As áreas de projetos são links de card inteiro, sem uma linha extra dedicada à ação.

Reservas de fotografia de apoio não preenchem a altura de uma coluna inteira: projetos usa uma janela compacta, instrumentação usa recorte horizontal e retrato tem limite de altura. A apresentação principal mantém sua escala de destaque. Validar altura pelo conteúdo, sem impor ocupação de tela inteira às demais seções.

## Abertura compacta

O nome mantém sua escala e a molécula permanece como arte principal. A composição reduz padding e intervalos, aproxima as ações e usa duas colunas a partir do tablet. No celular, os dois botões compartilham a mesma linha e conservam pelo menos 44 px de altura; ActionLink oferece uma variante de tamanho compacta reutilizável.

A molécula usa um enquadramento horizontal que remove margens vazias do SVG, preservando os átomos e as ligações. Sua legenda fica menor e a faixa inferior apresenta as quatro áreas sem repetir descrições já presentes nas seções. A atenção às proporções passa a ser um critério permanente de todo o projeto.

Revisão da direção: compactar o entorno do nome e da arte preserva a identidade científica aprovada; reduzir ambos indiscriminadamente enfraqueceria a apresentação. Conferir principalmente 320 e 390 px, incluindo presença da molécula e acesso às ações.

Ajuste de largura: PageContainer unifica header, abertura, seções, contato e rodapé com limite de 1360 px e margens de 16/24/32 px. Cards aproveitam a largura adicional, enquanto títulos e parágrafos conservam limites próprios de leitura. Arte e fotografias de apoio têm limites de tamanho para a largura extra não recriar excesso de altura.

O limite de 1360 px amplia a largura útil com moderação. Os textos mantêm limites de leitura e os cards acompanham o conteúdo, preservando a proporção da composição.

## Integração do acervo real

Fotos e vídeos fornecidos pelo proprietário ocupam apresentação, análises, instrumentação, desenvolvimento, projetos e estudos. O retrato de laboratório substitui a reserva da apresentação. A molécula continua conduzindo a abertura.

Após a revisão do proprietário, as galerias com miniaturas foram substituídas por cartões individuais. Todas as legendas ficam visíveis na página: análises junto das respectivas fotos e vídeos, HPLC em Instrumentação e a curva para ferro em Desenvolvimento. A seção Análises oferece atalhos diretos às seções de instrumentação, desenvolvimento e práticas. Os demais registros são separados entre práticas e estudos, com descrições visuais simples.

MediaCard reutiliza superfícies, bordas, tipografia e tokens existentes. A grade passa de uma coluna para duas e, quando há largura, três ou quatro, conforme a seção. Fotos e vídeos aparecem inteiros em uma janela 4:3, com selos explícitos Foto/Vídeo e ícones distintos. Fotografias mantêm a ação de ampliar em diálogo com fundo desfocado, fechamento por Escape, botão ou toque fora e controle de foco.

Fotos e vídeos usam o mesmo MediaDialog horizontal, preservando a apresentação compacta dos cartões na página. A janela compartilhada tem no máximo 1024 px de largura e a mesma moldura de conteúdo, com altura limitada à tela. Vídeos verticais aparecem inteiros dentro dessa moldura, sobre a própria capa desfocada nas laterais. Azul profundo (#071d36 e #0d2944), luz azul (#a5d6ff e #e2f0ff), bordas sutis e o mesmo raio dos cartões mantêm a relação com o portfólio. Vídeo e duração aparecem no topo; o botão central de reprodução se destaca sobre a capa. Dentro do diálogo, play/pause, progresso, tempo, som e tela cheia ficam em uma faixa fixa abaixo da imagem, sem desaparecer durante a reprodução. Fechar a janela desmonta o player e encerra a reprodução. Fotos usam selo claro e a ação Ampliar foto.

MediaGrid compartilha as regras de grade das mídias. A partir de duas colunas, linhas e legendas se ajustam à altura do maior conteúdo, mantendo as bases dos cartões alinhadas sem cortar os títulos. No celular, a coluna única conserva a altura natural de cada legenda. A entrada do vídeo mantém a capa até a apresentação do primeiro frame; pausar ou buscar uma posição conserva o frame atual.

Datas de conclusão e previsão de formação ficam próximas do título da credencial, em painel com calendário, contraste de superfície e texto de 16 px com peso semibold. Cursos reutilizam CredentialCard; o status acompanha o título no desktop e mantém a disposição adequada ao celular.

Em Desenvolvimento, a imagem ocupa a segunda coluna e as três linhas da grade em telas grandes. Sua altura acompanha o conteúdo dos três cartões de atividades, sem deixar um vazio abaixo da coluna de texto nem aumentar esses cartões. A capa usa um recorte de apoio; a ampliação conserva a fotografia inteira. No celular, atividades e foto seguem em uma coluna com proporções naturais.

## Apresentação e formação — 15/10/2026

O retrato de titulação usa moldura vertical 3:4 para conservar o rosto, a bureta e a amostra. O texto e os três destaques seguem o conteúdo aprovado. A formação usa cards com alturas iguais, uma coluna no celular, duas no tablet e três no desktop. A ação Conheça a formação sinaliza que toda a superfície abre detalhes; o diálogo tem largura máxima de 672 px e rolagem interna em telas pequenas, com os tokens existentes de claro e escuro.

As mídias ficam em grupos nomeados de análises físico-químicas, microbiológicas e instrumentais. A fotografia de espectrofotometria acompanha Instrumentação; Desenvolvimento mantém três cards de atividades em altura natural.

## Galeria instrumental sem linha isolada — 15/10/2026

A grade instrumental usa a variante equilibrada de MediaGrid: sete registros ocupam quatro e três cartões no desktop, duas linhas de dois e uma de três no tablet, e uma coluna no celular. Cada linha preenche a largura útil, mantendo proporção 4:3 das capas e legendas inteiras. A altura é compartilhada somente dentro da mesma linha. As demais galerias preservam sua composição.

## Legibilidade da seção Qualidade — 15/10/2026

A tipografia foi ampliada somente em Qualidade: textos e lista de 14 para 16 px; subtítulo de 24 px no celular e 28 px a partir do tablet; título entre 32 e 44 px. Cores, conteúdo, componentes, colunas e espaçamentos aprovados foram preservados, com altura natural conforme a quebra de linha.

## Ajustes restritos após revisão do proprietário — 15/10/2026

O aumento amplo de tipografia em Qualidade foi revertido: título, subtítulo e textos de apoio voltam às dimensões originais. Somente a lista mantém 16 px, com duas colunas de listas independentes para uma quebra de linha não aumentar o intervalo da outra coluna. A composição e os espaçamentos externos permanecem os aprovados.

A data do curso Análise Instrumental usa uma pílula de largura natural; as datas da formação preservam os painéis existentes. O rodapé acrescenta direitos autorais e crédito Desenvolvido por Kaiqui Lucas, ligado ao LinkedIn informado pelo proprietário.

## Cursos certificados e competências — 15/10/2026

Cursos usa uma grade própria com três cards na primeira linha e dois na segunda no desktop, duas colunas no tablet e uma no celular. O curso de laboratório usa a superfície showcase existente; os demais mantêm superfície neutra. Área, instituição, resumo e metadados dão hierarquia sem miniaturas de documentos. Ver conteúdo do curso abre o diálogo existente com os tópicos da formação. Conhecimentos de informática e idioma ficam separados das certificações.

Somente as pílulas do painel de competências de Pesquisa foram compactadas: fonte de 11 px, padding horizontal de 8 px, gap de 4 px e linha única a partir de 1280 px. Em 1280 px, as cinco ocupam cerca de 564 px dos 568 px disponíveis; em telas menores, a quebra natural preserva os textos inteiros. O texto e a composição do painel permanecem iguais.

## Certificados e quadros de competências — 15/10/2026

As ações Visualizar certificado seguem as bordas e cores dos cursos, com área de toque de 44 px. O modal carrega uma prévia WebP da primeira página ao abrir, permite ampliar a imagem e acessar o PDF completo. Hard Skills e Soft Skills aparecem em dois quadros com altura natural e textos fornecidos pelo proprietário: lado a lado no desktop e empilhados nas telas menores. Os itens técnicos ocupam uma coluna inteira no celular e duas colunas internas a partir de 640 px. As legendas da apresentação e da FCE Cosmetique indicam as competências associadas.
