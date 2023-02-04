alias g:=gitp
alias d:=deploy

set dotenv-load
set positional-arguments

##########
gitp:
  git add .
  git commit -m "build"
  git push origin main

deploy:
  just gitp
  echo "https:"