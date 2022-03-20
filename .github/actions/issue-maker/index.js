const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");

    const octokit = github.getOctokit(token);
    
    const newIssue = await octokit.issues.create({
        repo: ${{ github.repository }},
        owner: ${{ github.repository_owner }},
        title: issueTitle,
        body: jokeBody
    });
  } catch (err) {
      core.setFailed(err.message);
  }
}

run()
