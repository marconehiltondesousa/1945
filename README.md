# Scramble 1945 — Formação Aérea

Remake em HTML5 Canvas do arcade *Tokio / Scramble Formation* (Taito, 1986), ambientado na Segunda Guerra Mundial.
Feito para ensinar a história da guerra a uma criança de 8 anos.

- Jogo: `index.html` (arquivo único, abre direto no navegador)
- 6 campanhas: Londres, Normandia, Ardenas, Vale do Reno, Berlim, Hiroshima e Nagasaki
- Tiro automático; formações 1/2/3 (Delta, Cruz, Híbrida); tecla D alterna o Modo Aprendiz
- `history/`: versões anteriores · `tools/`: teste de fumaça e capturas de tela

## Áudio
O jogo procura os arquivos de música na pasta `audio/` (versionada só porque o repositório é privado; não torne o repositório público com esses arquivos):
`credit.mp3` (briefing), `start.mp3` (início da fase), `main.mp3` (fase), `boss-intro.mp3` + `boss-loop.mp3` (chefe),
`gameover.mp3`, `nameentry.mp3` (fim da guerra). Sem a pasta, o jogo usa a música sintetizada.
