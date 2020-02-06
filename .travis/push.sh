#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis BOT"
  # Keep track of where Travis put us.
  # We are on a detached head, and we need to be able to go back to it.
  local build_head=$(git rev-parse HEAD)
  
  # Fetch all the remote branches. Travis clones with `--depth`, which
  # implies `--single-branch`, so we need to overwrite remote.origin.fetch to
  # do that.
  git config --replace-all remote.origin.fetch +refs/heads/*:refs/remotes/origin/*
  git fetch
  # optionally, we can also fetch the tags
  git fetch --tags

  # create the tacking branches
  for branch in $(git branch -r|grep -v HEAD) ; do
      git checkout -qf ${branch#origin/}
  done

  # finally, go back to where we were at the beginning
  git checkout ${build_head}
}

setup_git

git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exitgit checkout master || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit
git push @github.com/">https://${GITHUB_TOKEN}@github.com/Tifloz/DEV_area_2019.git"
