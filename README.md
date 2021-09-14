# Base dos bodi
A Bootstrap 4.5.2 boilerplate with font-awesome5 free, sass, gulp 4 tasks, browserSync (with hot-reloading). You can override bootstrap sass variables by placing those variables in `bootstrap-4-sass-gulp-4-boilerplate/assets/scss/_bootstrap_variable_overrides.scss`


## Pre-requisitos
- [Node.js](https://nodejs.org/en/download/ "Node Js")
-  NPM (Comes with Node.js)
- [Gulp 4](https://gulpjs.com/ "Gulp")

Install Gulp cli - Command Line Utility for Gulp 

     $ npm install --global gulp-cli
     
Verify Gulp Cli and Gulp Local Version

     $ gulp --version

## Da clone no trem, depois muda o repositorio se não vai cagar tudo

1. Clone repository:
`git clone https://github.com/blacksheeps-digital/Base`

2. Change directory:
`cd bootstrap-4-sass-gulp-4-boilerplate`
    
3. Install all dependencies and libraries:
   `npm install`

4. Run Gulp Task:
  - `gulp`      - To compile scss to css, minify css and js and build ready for production files in **dist** folder.

  - `gulp dev`  - Starts a local server with browserSync and hot reloading on changes to files (HTML, SCSS, JS).
   
5. Mudar pro repositório certo:
- Deletar a pasta `.git` do projeto. Ela pode estar oculta, troca lá nos settings pra achar.

- Depois que a pasta estiver deletada, manda um `git init` pra noiz no command line. 

- Joga esse comando depois `git remote add origin https://github.com/usuario/someDoSeuTreco.git`. 

- Da um primeiro push aí parca `git push --set-upstream origin master` e já ta já. Vai ser feliz.