module.exports = async ({ github, payload }) => {
  const repo = {
    owner: payload.repository.owner.login,
    repo: payload.repository.name
  };

  /* ============ 1️⃣ When a maintainer comments "LGTM" ============ */
  if (payload.comment && payload.issue.pull_request) {
    const commentBody = payload.comment.body.toLowerCase();
    const commenter = payload.comment.user.login;

    const isMaintainer = true; // For now treat all reviewers as maintainers
                              // You can later restrict to an allowed list if needed

    if (isMaintainer && commentBody.includes("lgtm")) {
      await github.issues.addLabels({
        ...repo,
        issue_number: payload.issue.number,
        labels: ["LGTM"]
      });

      await github.issues.createComment({
        ...repo,
        issue_number: payload.issue.number,
        body: `Label added: **LGTM** by @${commenter} 👍`
      });

      return;
    }
  }

  /* ============ 2️⃣ If workflow CI passed (tests passed) ============ */
  if (payload.check_suite && payload.check_suite.conclusion === "success") {
    const prList = await github.search.issuesAndPullRequests({
      q: `repo:${repo.owner}/${repo.repo} is:pr is:open`
    });

    for (const pr of prList.data.items) {
      await github.issues.addLabels({
        ...repo,
        issue_number: pr.number,
        labels: ["LGTM"]
      });

      await github.issues.createComment({
        ...repo,
        issue_number: pr.number,
        body: `CI passed — **LGTM** label added automatically ✔`
      });
    }

    return;
  }
};
