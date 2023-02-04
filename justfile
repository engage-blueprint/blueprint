alias g:=gitp
alias d:=deploy
name:= "share-video-behind-a-pin"
publicurl:= "https://engage-blueprint.github.io/{{name}}/"

set dotenv-load
set positional-arguments

##########
gitp:
  git add .
  git commit -m "build"
  git push origin main

deploy:
  just gitp
  echo {{publicurl}}