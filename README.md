# MusicHub

MusicHub é um projeto front-end estático (HTML + CSS) que simula a interface de um player de música com foco em exibição de letras, painel do artista e controles visuais de reprodução.

## Visão geral do projeto

O repositório contém uma coleção de telas estáticas em português para demonstrar um layout completo de streaming musical:

- **Topo fixo** com busca, biblioteca, perfil e configurações.
- **Menu lateral** com ícones de navegação.
- **Área central de letras** com destaque visual.
- **Painel do artista** com imagem, ouvintes mensais e descrição.
- **Player inferior** com capa, nome da música, artista e barra de progresso/volume.

Páginas principais:

- [`telaLetras/index.html`](telaLetras/index.html) — versão com Drake / *Hotline Bling*.
- [`telaLetras/index2.html`](telaLetras/index2.html) — Michael Jackson / *Billie Jean*.
- [`telaLetras/index3.html`](telaLetras/index3.html) — MC IG / *Noite Fria*.
- [`telaLetras/index4.html`](telaLetras/index4.html) — Deftones / *Cherry Waves*.
- [`telaLetras/index5.html`](telaLetras/index5.html) — Tyler, The Creator / *See You Again*.

Arquivos de suporte:

- [`telaLetras/style.css`](telaLetras/style.css) — estilos principais da interface.
- [`Assets/`](Assets) — ícones SVG compartilhados entre as telas.
- [`telaLetras/assets/`](telaLetras/assets) — imagens de artistas e capas.
- [`Home/home.html`](Home/home.html) — página inicial mínima atualmente.

## Por que este projeto é útil

- Serve como **base visual** para protótipos de interfaces musicais.
- É simples de executar por ser **100% estático** (sem build, backend ou dependências de Node).
- Facilita estudos de **layout com CSS fixo**, composição de seções e organização de assets.
- Pode ser estendido para incluir interações reais com JavaScript e dados dinâmicos.

## Como começar

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari).
- (Opcional) VS Code com extensão **Live Server** para recarregamento automático.

### Instalação

```bash
git clone https://github.com/luisoferreira/Projeto-MusicHub.git
cd Projeto-MusicHub
```

### Execução local

Como é um projeto estático, abra diretamente uma das páginas HTML no navegador.

Opção 1 (duplo clique no arquivo):

- `telaLetras/index.html`

Opção 2 (servidor local com Python):

```bash
python -m http.server 8000
```

Depois acesse:

- `http://localhost:8000/telaLetras/index.html`
- `http://localhost:8000/telaLetras/index2.html`
- `http://localhost:8000/telaLetras/index3.html`
- `http://localhost:8000/telaLetras/index4.html`
- `http://localhost:8000/telaLetras/index5.html`

### Exemplo de uso prático

- Abra `index.html` para visualizar a estrutura base.
- Duplique uma página em `telaLetras/` e troque conteúdo textual/imagens para criar uma nova tela de música.
- Reutilize os ícones de `Assets/` e mantenha o padrão de classes definido em `style.css`.

## Suporte

Se encontrar problemas ou quiser sugerir melhorias:

- Abra uma issue: <https://github.com/luisoferreira/Projeto-MusicHub/issues>
- Consulte as discussões/PRs existentes no repositório para contexto técnico.

## Manutenção e contribuições

- **Mantenedor atual:** [@luisoferreira](https://github.com/luisoferreira)
- Contribuições são bem-vindas via fork + pull request.

Fluxo recomendado:

1. Crie uma branch descritiva.
2. Faça mudanças pequenas e objetivas.
3. Teste visualmente as páginas alteradas no navegador.
4. Abra um PR explicando o que foi alterado.

## Licença

Este repositório **não possui arquivo de licença** (`LICENSE`) no momento.
