# Create a pull request

Once you feel you are ready to get feedback on your work, submit a pull request. Pull requests is a way to submit your work to a particular Project. The reason for calling it as a **pull request** is because you're asking the project to pull changes from your fork.

If you’re unfamiliar with how to create a pull request, you can check out GitHub’s documentation [on creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork). You might also find GitHub’s article [about pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) helpful. That all said, the tutorial below will walk you through the process.


## Create a pull request

:::important
We do not accept Draft pull request, Submit your work only when you are finished.

:::

### Step 1: Make sure you’re on a feature branch (not ```develop```)

It is important to [work on a feature branch](../../docs/git-guide/gitworkflow#work-on-a-feature-branch) when creating a pull request. Your new pull request will be inextricably linked with your branch while it is open, so you will need to reserve your branch only for changes related to your issue, and avoid introducing extraneous changes for other issues or from upstream.

If you are working on a branch named ```develop```, you need to create and switch to a feature branch before proceeding.

### Step 2: Open the pull request

If you’ve never created a pull request or need a refresher, take a look at GitHub’s article on [creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork). We’ll briefly review the process here.

First, sign in to GitHub on your web browser and navigate to your fork of Talawa.

Next, navigate to the branch you’ve been working on. Do this by clicking on the **Branch** button and selecting the relevant branch. Finally, click the **New pull request** button. Alternatively, if you’ve recently pushed the relevant branch to your fork, you will see a **Compare & pull request** button.

A pull request template will open with some information pre-filled in. Provide (or update) the title for your pull request and write a first comment.

If your pull request makes UI changes, always include one or more still screenshots to demonstrate your changes. If it seems helpful, add a screen capture of the new functionality as well. You can find a list of tools you can use for this here.

When ready, click the Create pull request button to submit the pull request, After the pull request is submitted, an automated comment may pop up from the Talawa volunteers. Review that message and ensure you've followed their guidelines.  

Note: Pull request titles are different from commit messages. Commit messages can be edited with ```git commit --amend```, ```git rebase -i```, etc., while the title of a pull request can only be edited via GitHub.

# Update a pull request

As you get make progress on your feature or bugfix, your pull request, once submitted, will be updated each time you push commits to your remote branch. This means you can keep your pull request open as long as you need, rather than closing and opening new ones for the same feature or bugfix.

It’s a good idea to keep your pull request mergeable with Talawa upstream by frequently fetching and pushing changes. See [keep your fork](/docs/git-guide/gitworkflow#keep-your-fork-up-to-date) up to date for details. 

And, as you address review comments others have made, we recommend posting a follow-up comment in which you: 
 * ask for any clarifications you need, 
 * explain to the reviewer how you solved any problems they mentioned
 * ask for another review.

We have a predefined [pull request template](https://github.com/PalisadoesFoundation/talawa-docs/blob/develop/.github/pull_request_template.md) which you can go through to understand what kind of details you need to provide for your pull request.