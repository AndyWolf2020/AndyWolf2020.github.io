'use strict';
(function () {
    //helper functions
    function id(idName) {
        return document.getElementById(idName);
    }
    function checkStatus(response) {
        if (!response.ok) {
            throw Error('Error in request: ' + response.statusText);
        }
        return response.json();
    }
})();

const GITHUB_API_BASEURL = 'https://api.github.com/users/';
window.addEventListener('load', init);
function init() {
    getUserRepos();
}

function getUserRepos() {
    let gitHubUsername = 'AndyWolf2020';
    let url = GITHUB_API_BASEURL + gitHubUsername + '/repos?sort=created'
    fetch(url)
        .then(checkStatus)
        .then((repoData) => {
            console.log(repoData);
            let div = id('container');
            for (const item of repoData) {
                let repoName = document.createElement('p');
                const name = item['name'];
                repoName.innerHTML = 'Name:' + name;
                div.appendChild(repoName);
                let repoDesc = document.createElement('p');
                const desc = item['description'];
                repoDesc.innerHTML = desc;
                div.appendChild(repoDesc)
                let repoDate = document.createElement('p');
                const date = item['created_at'];
                repoDate.innerHTML = 'Created:' + date;
                div.appendChild(repoDate);
                let upateDate = document.createElement('p');
                const updated = item['updated_at'];
                upateDate.innerHTML = 'Updated:' + updated;
                div.appendChild(upateDate);
                let repoCommits = document.createElement('p');
                const commits = item['commits'];
                repoCommits.innerHTML = 'number of commits:' + commits;
                let repoLangs = document.createElement('p');
                const langs = item['language'];
                repoLangs.innerHTML = 'Languages:' + langs;
                let repoWatchers = document.createElement('p');
                const watchers = item['watchers_count'];
                repoWatchers.innerHTML = 'number of watchers:' + watchers;
                let rule = document.createElement('hr');
                div.appendChild(rule);
            }
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
}


