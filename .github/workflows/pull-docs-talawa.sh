#!/bin/bash

# Clone the Talawa repo
git clone --depth=1 --branch develop https://github.com/PalisadoesFoundation/talawa.git

# Create a folder for Talawa mobile docs
mkdir -p docs/talawa-mobile-docs

# Navigate into the Talawa repo
cd talawa

# Install Flutter dependencies and generate the docs
flutter pub get
flutter pub global activate dartdoc
flutter pub global run dartdoc . --output talawa-mobile-docs --format md --exclude=test/widget_tests/widgets/pinned_carousel_widget_test.dart, lib/widgets/pinned_carousel_widget.dart, lib/widgets/post_widget.dart, test/widget_tests/widgets/post_widget_test.dart
rm -rf talawa-mobile-docs/widgets_pinned_carousel_widget/CustomCarouselScrollerState/build.md
rm -rf talawa-mobile-docs/widgets_post_widget/PostContainerState/build.md

# Navigate back and copy the generated docs
cd ..
cp -r talawa/talawa-mobile-docs/* docs/talawa-mobile-docs/

# Remove the cloned Talawa repo
rm -rf talawa

# Commit and push the changes
git add .
git commit -m "Updated Talawa mobile docs"
git pull --rebase origin develop
git push -u origin develop
