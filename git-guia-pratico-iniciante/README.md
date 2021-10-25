# GIT E GITHUB

Guia prático para iniciantes.

### Instalação

https://git-scm.com/download

# SCENES

- [x] Você deseja criar pontos na história da produção do seu projeto
- [x] Você deseja verificar mudanças feitas no seu projeto

- [x] Você começa uma nova funcionalidade no seu projeto, sem estragar o que já foi feito.
- [x] Você adiciona as novas funcionalidades ao seu projeto em produção
- [x] Você quer deletar a branch da nova funcionalidade, depois de aplicar em seu projeto.

- [x] Você quer colocar seu projeto na nuvem.

- [x] Você vai pegar um projeto já iniciado, para trabalhar com o time
- [x] Você precisa resolver um conflito.
- [x] Antes de enviar a resolução, precisamos atualizar o projeto local.

- [x] Você precisa voltar um arquivo para um determinado momento da linha do tempo.
- [x] Você precisa recuperar algo deletado.

* `git init` // inicia a linha do tempo(USAR EM PASTAS - define o repositorio local)

* `git remote and origin ...` // para definir o caminho de um reporitório

* `git config --global user.email "yourEmail@gmail.com"`// para registar seu email

* `git config --global user.name "Your Name"`// para registar seu nome como author.

* `git add "file"` // adiciona ou atualiza mudanças para irem para a linha do tempo

* `git commit "coment"` // adiciona um ponto na linha do tempo

* `git log ou git reflog` // visualiza os pontos na linha do tempo / commit

* `git status` // informa o estado das alterações do nosso projeto

* `git show` // apresenta determinado ponto na história

* `git branch ...` // gerenciar novas linhas do tempo, se escrever so git branch ele vai mostrar as brach que já existem, se escrever com mais alguma coisa ela vai criar uma

* `git checkout ...` // manipula as linhas do tempo e define o mundo que voce quer habitar

* `git checkout -b "nome da branch de origem" "nome da nova branch"`// permite mudar e criar uma nova branch com base em outra

* `git merge ...` // universos alternativos; tem que entrar na branch que deseja unir os mundos e trazer o outro mundo para o atual

* `git push` // envia alterações locais para o repositório remoto

* `git clone ...` // clonar um projeto / repositório

* `git pull` // puxa do repositório remoto

* `git --help` // para mostrar todos comandos do git

* `git config credential.helper store` // para não ter que ficar logando o tempo todo

* `git reset --hard ...` // vai reseta para a versao que vc quer definir usando o id do commit ao qual vc quer restaurar

* `git push --set-upstream origin ...`// apos o origin voce colocará o repositório que deseja dar o push; isso é para caso não de o git push

* `touch .gitignore`// para usar isso não pode pode usar o git add, devido a ele ao objeto passar a ser versionado,usand o .gitignore vai criar um arquivo onde voce pode definir quem não terá controle de versionamento