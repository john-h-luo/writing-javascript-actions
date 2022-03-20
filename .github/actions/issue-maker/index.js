const core = require("@actions/core");
const github = require("@actions/github");
const octokit = require("@octokit/rest");

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");

    const issue = new octokit.getOctokit(token);

    const newIssue = await issue.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: jokeBody
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
