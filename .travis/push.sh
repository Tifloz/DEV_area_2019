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
  git push origin master
}

setup_git
commit_website_files
upload_files