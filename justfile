alias g:=gitp

set dotenv-load
set positional-arguments

##########
gitp:
  git add .
  git commit -m "build"
  git push origin main
