function getRepositories() {
  const req = new XMLHttpRequest()
  const username = document.getElementById('username').value
  req.addEventListener("load", displayRepositories);
  req.open("GET", 'https://api.github.com/users/' + username + '/repos')
  req.send()
}

function displayRepositories(event, data) {
  let repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + '<h3>' + r.name + '</h3>' + r.html_url + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a>' + ' - <a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
  const repoName = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits)
  req.open("GET", 'https://api.github.com/repos/'+ el.dataset.login + repoName + '/commits')
  req.send()
}
