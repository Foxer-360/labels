# Labels

Simple script to push custom labels for Issues into repository.

## How to use it ?

In file `index.js`, there is **config** object. Here has to be specified repository, where you want to change labels. Also, you need to specify a correct token (It's a **personal access token**, which you can find or create in your `profile settings -> developer settings -> personal access tokens`). Then just run `yarn start`.

## Which labels will be set up ?

Here is a full list of labels with all descriptions which will be set up after you run this script.

- **Bug**
Inconsistencies or issues which will cause an issue or problem for users or implementors.

- **Documentation**
Things related to documentation like add description of some functions.

- **Enhancement**
Most issues for additions or changes. It's expected that this type will result in a Pull Request.

- **Maintenance**
Code purification, updating phrasing or wording, without changing the functionality.

- **Priority: Critical**
This should be dealt with ASAP. Not fixing this issue would be a serious error.

- **Priority: High**
After critical issues are fixed, these should be dealt with before any further issues.

- **Priority: Low**
This issue can probably be picked up by anyone how has nothing to do.

- **Priority: Medium**
This issue may be useful, and needs some attention.

- **Question**
A query or seeking clarification on things. Probably doesn't need the attention of everyone.

- **Status: Accepted**
It's clear what the subject of the issue is about, and what the resolution should be.

- **Status: Completed**
Nothing further to be done with this issue. Awaiting to be closed.

- **Status: In Progress**
This issue is being worked on, and has someone assigned.

- **Status: Pending**
This issue waits for acceptance or someone who starts working on it.


> Descriptions have to be copied manually into labels because GitHub API doesn't work correctly
