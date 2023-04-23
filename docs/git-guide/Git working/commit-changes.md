# Commit changes

Once you've staged all your changes, you're ready to commit. You can do this with ``` git commit -m "My commit message." ``` to include a commit message.

Here’s an example of committing with the ```-m``` for a one-line commit message:

```
$ git commit -m "Add few lines to docs"
[issue-178-docsissue] Add a few lines to docs.
1 file changed, 1 insertion(+)
created mode 100644 test.md
```

You can also use git commit without the ```-m``` option and your editor to open, allowing you to easily draft a multi-line commit message.

How long your commit message should be depends on where you are in your work. Using short, one-line messages for commits related to in-progress work makes sense. For a commit that you intend to be final or that encompasses a significant amount or complex work, you should include a longer message.
