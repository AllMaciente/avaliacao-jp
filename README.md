# avaliacao-jp
Avaliaçao Backend JP

### git init
inicializa um repositório git num diretório ja criado

criar um diretório oculto chamado /.git

para apagar o repositório delete os aquivos do /.git
### git status
Exibe informações do repositório
- aquivos modificados
- novos aquivos
- aquivos para commit
### git add &lt;filename ou . >
Prepara os aquivos para o proximo commit

para reverter git rm --cached &lt;file> 
### git rm --cached &lt;file> / git restore --staged &lt;filename ou . >
remove os aquivos do índice para o proximo commit
### git branch
- lista as branch's
- lista as branch's remotas (git branch -r)
- lista as branch's remotas e locais (git branch -a)
### git checkout &lt;branchname>
Muda para branch selecionada

o diretório muda para ficar igual ao estado da branch
### git checkout -b &lt;branchname>
Criar e muda para a nova branch

para excluir uma branch use git branch -D &lt;branchname>
### git commit -m "&lt;description>"
Faz um commit com uma mensagem descrevendo o que foi feito

para desfazer o ultimo commit e manter as mudanças : git reset --soft HEAD~1
### git merge &lt;branch>
Recebera as alterações da branch selecionada
### git push
Envia os commits do repositório Local para o repositório Remoto (Exp.:GitHub)
### git branch -D &lt;branchname>
Usado para Excluir uma branch selecionada
### git fetch
atualiza o repositório local com somente as informações do repositório remoto 
### git pull
Mescla o repositório remoto no repositório local
### git config -- global user.name "{Seu Nome}"
Configura o nome do usuário do git 

Para informar o nome de quem fez determinada coisa (commit)
### git config -- global user.email "{seuEmail@gmail.com}"
Configura o email do usuário no git

aconselhável ser o mesmo do github
