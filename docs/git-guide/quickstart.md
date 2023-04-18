# Quick start: how Talawa uses Git and Github

 This quick start provides an overview of how Talawa uses Git and Github.
 Those who are familiar with Git and Github should be able to contribute to Talawa with the details outlined below:

 * We use ** GitHub for our source control and code review processes ** to ensure efficient collaboration and seamless management of code changes. To contribute, fork [PalisadoesFoundation/talawa](https://github.com/PalisadoesFoundation/talawa) (or the appropriate [repository](https://github.com/PalisadoesFoundation)) to your account and then create feature/issue branches. we currently work on the **develop** branch for all the repositories.a

 * we use [merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merging)-oriented workflow. you should use ``` git pull upstream ``` followed by ``` git push origin develop```. To prevent your Pull requests from turning stale compared to the repository, ensure rebasing your feature branch before submitting a Pull request. If you want to read more about how to rebase a pull request, you can follow this [guide](https://github.com/openedx/edx-platform/wiki/How-to-Rebase-a-Pull-Request).

 * We have tools that helps you submit quality code. These include linters, tests and continuous integrations, code coverage percentage, etc.

 * Talawa is currently being maintained by a small group of volunteers with limited resources, hence each chunk of time spared to review Pull requests and further making changes to it is valuable, To ensure we have an efficient Pull request review flow, we have the following rules below you should consider while creating a pull request-:
     1. Ensure your Pull request passes all the tests and There are no merge conflicts associated with it.
     2. Each Pull request should be created only after it has an Issue associated with it, which has an **approved** label and has been assigned to you, we do not accept Pull requests without any Issue associated with it. 
     3. We do not accept Draft Pull requests, If you need to get feedback/review on your changes, you can submit either a code sample image or video, etc in the issue section itself and get the feedback/review from the concerned reviewer itself.
     4. Each pull request has a predefined format, which conveys the details of a particular Pull request, try to fill in the details as best as you can.
     5. Most importantly please go through the **CONTRIBUTING.md** file of the appropriate repository.

 * Finally, install the [Talawa developer environment](../../../docs/introduction/our-repositories) and you are all set to contribute. Thank you!