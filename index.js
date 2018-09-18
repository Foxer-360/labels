var request = require('request');

const config = {
  api: 'https://api.github.com/repos',
  // This needs to be changed for repository, where you want to change labels
  repo: 'Foxer-360/delta',
  token: '0ed7c29bdf852d36cdc79dfcef80e8521fc33464',
};

const labels = [
  { name: 'Bug', description: `Inconsistencies or issues which will cause an issue or problem for users or implementors.`, 'color': 'd73a4a' },
  { name: 'Documentation', description: `Things related to documentation like add description of some functions.`, 'color': 'cfd3d7' },
  { name: 'Enchancement', description: `Most issues for additions or changes. It's expected that this type will result in a Pull Request.`, 'color': '3b38f4' },
  { name: 'Maintenance', description: `Code purification, updating phrasing or wording, without changing the functionality.`, 'color': '290e6b' },
  { name: 'Priority: Critical', description: `This should be dealt with ASAP. Not fixing this issue would be a serious error.`, 'color': 'd73a4a' },
  { name: 'Priority: High', description: `After critical issues are fixed, these should be dealt with before any further issues.`, 'color': 'FFC274' },
  { name: 'Priority: Low', description: `This issue can probably be picked up by anyone how has nothing to do.`, 'color': '91ca55' },
  { name: 'Priority: Medium', description: `This issue may be useful, and needs some attention.`, 'color': 'fef2c0' },
  { name: 'Question', description: `A query or seeking clarification on things. Probably doesn't need the attention of everyone.`, 'color': '8335a5' },
  { name: 'Status: Accepted', description: `It's clear what the subject of the issue is about, and what the resolution should be.`, 'color': '5080ce' },
  { name: 'Status: Completed', description: `Nothing further to be done with this issue. Awaiting to be closed.`, 'color': 'c0ff82' },
  { name: 'Status: In Progress', description: `This issue is being worked on, and has someone assigned.`, 'color': 'd4c5f9' },
  { name: 'Status: Pending', description: `This issue waits for acceptance or someone who starts working on it.`, 'color': '85e58e' },
];

labels.forEach((label) => {
  request({
    method: 'POST',
    uri: config.api + '/' + config.repo + '/labels',
    headers: {
      'User-Agent': '',
      'content-type': 'application/vnd.github.symmetra-preview+json',
      'Authorization': 'token ' + config.token,
    },
    body: JSON.stringify(label)
  }, (err, response, body) => {
    console.log(err, response.statusCode, body);
  });
});