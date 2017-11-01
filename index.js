function getRepositories() {
  const req = new XMLHttpRequest()
  const username = document.getElementById('username').value
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/' + username + '/repos')
  req.send()
}

function showRepositories(event, data) {
  let repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
