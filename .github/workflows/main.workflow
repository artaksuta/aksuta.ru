workflow "deploy on push" {
  on = "push"
  resolves = ["deploy"]
}

action "install" {
  uses = "actions/npm@master"
  args = "install"
}

action "deploy" {
  uses = "actions/npm@master"
  needs = ["install"]
  args = "run-script deploy"
  secrets = ["GITHUB_TOKEN"]
}
