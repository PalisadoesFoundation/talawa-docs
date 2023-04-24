# Quick start

 This quick start guide is designed for those experienced with Git and Github to quickly begin contributing to Talawa repositories. Please follow the details below:

 * We use ** GitHub for our source control and code review processes ** to ensure efficient collaboration and seamless management of code changes. To contribute, fork [PalisadoesFoundation/talawa](https://github.com/PalisadoesFoundation/talawa) (or the appropriate [repository](https://github.com/PalisadoesFoundation)) to your account and then create feature/issue branches. we currently work on the **develop** branch for all the repositories.

 * We use [merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merging)-oriented workflow. you should use ``` git pull upstream ``` followed by ``` git push origin develop```. To prevent your Pull requests from turning stale compared to the repository, rebase your feature branch before submitting a Pull request. If you want to read more about how to rebase a pull request, you can follow this [guide](https://github.com/openedx/edx-platform/wiki/How-to-Rebase-a-Pull-Request).

 * We have tools that help you submit quality code. These include linters, tests and continuous integrations, code coverage percentage, etc.

 * Talawa is currently being maintained by a small group of volunteers with limited resources. Please use the following guidelines to ensure your pull request is in the best form possible:
     
     1. Install the [Talawa developer environment](../../../docs/introduction/our-repositories) 
     2. Ensure your Pull request passes all the tests and there are no merge conflicts associated with it.
     3. Each Pull request should only be created if: 
        * it has an issue associated with it
        * the issue was assigned to you
        * the issue does not have an **"unapproved"** label we do not accept pull requests without an issue associated with it. 
     4. We do not accept Draft Pull requests, If you need to get feedback/review on your changes, you can submit either a code sample image or video, etc in the issue section itself and get the feedback/review from the concerned reviewer itself.
     5. Each pull request has a predefined format, which conveys the details of a particular Pull request, try to fill in the details as best as you can.
     6. Most importantly please go through the **CONTRIBUTING.md** file of the appropriate repository.

  You are all set to contribute. Thank you!