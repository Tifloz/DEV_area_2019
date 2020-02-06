#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis BOT"
}

commit_website_files() {
  git add .
  git commit --message "Travis validated build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  if  git ls-remote --exit-code origin > /dev/null 2>&1; then
	  git remote rm origin
  fi
  git remote get-url origin --all
  git remote set-url origin https://${GH_TOKEN}@github.com/Tifloz/DEV_area_2019.git
  git push origin master
}

setup_git
commit_website_files
upload_files
