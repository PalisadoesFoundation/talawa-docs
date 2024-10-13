#!/bin/bash

###############################################################################
# Note: Exit here for debugging or troubleshooting.
# Comment out or remove `exit` in production to allow the full script to run.
###############################################################################
# exit
###############################################################################

# Clone the Talawa repo
git clone --depth=1 --branch develop https://github.com/PalisadoesFoundation/talawa.git

# Create a folder for Talawa mobile docs
mkdir -p docs/talawa-mobile-docs

# Navigate into the Talawa repo
cd talawa

# Install Flutter dependencies and generate the docs
flutter pub get
flutter pub global activate dartdoc
flutter pub global run dartdoc --output talawa-mobile-docs --format md --exclude=test/widget_tests/widgets/pinned_carousel_widget_test.dart,lib/widgets/pinned_carousel_widget.dart,lib/widgets/post_widget.dart,test/widget_tests/widgets/post_widget_test.dart

# Remove unwanted files from generated docs
rm -rf talawa-mobile-docs/widgets_pinned_carousel_widget/CustomCarouselScrollerState/build.md
rm -rf talawa-mobile-docs/widgets_post_widget/PostContainerState/build.md

# Run the Python script to adjust MDX format for Docusaurus
python3 .github/workflows/md_mdx_format_adjuster.py --directory talawa-mobile-docs

# Navigate back and copy the generated docs
cd ..
cp -r talawa/talawa-mobile-docs/* docs/talawa-mobile-docs/

# Remove the cloned Talawa repo
rm -rf talawa

# Commit and push the changes to the repo
git add .
git commit -m "Updated Talawa mobile docs"
git pull --rebase origin develop
git push -u origin develop
