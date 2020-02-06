#!/bin/sh

git config --global user.email 'travis@travis-ci.org'
git config --global user.name 'Travis'
git remote set-branches --add origin master
git fetch
git reset --hard
git checkout master
git merge --ff-only "$TRAVIS_COMMIT"
git push git+ssh://git@github.com/Tifloz/DEV_area_2019.git master
