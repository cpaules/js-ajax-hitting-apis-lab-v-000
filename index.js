function getRepositories() {
  const req = new XMLHttpRequest()
  const username = document.getElementById('username').value
  req.addEventListener("load", displayRepositories);
  req.open("GET", 'https://api.github.com/users/' + username + '/repos')
  req.send()
}

function displayRepositories(event, data) {
  let repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + '<h2>' + r.name + </h2> + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
