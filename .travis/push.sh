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
  git remote add origin-2 https://${GH_TOKEN}@github.com/Tifloz/DEV_area_2019.git
  git push --set-upstream origin-2 master
}

setup_git
commit_website_files
upload_files