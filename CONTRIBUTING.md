# Contributing to VSCode AnyHooks Monitor

First off, thank you for considering contributing to VSCode AnyHooks Monitor. It's people like you that make it a great tool for everyone.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open-source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Getting Started

Contributions are made to this repo via Issues and Pull Requests (PRs). A few general guidelines that cover both:

- Search for existing Issues and PRs before creating your own.
- We work on the develop branch for ongoing development. Always base your work on the project's `develop` branch, naming your branch according to the changes you're making.
- Include screenshots and animated GIFs in your pull request whenever possible.
- Follow the existing coding conventions.

## Issues

Issues should be used to report problems with the extension, request a new feature, or to discuss potential changes before a PR is created. When you create a new Issue, a template will be loaded that will guide you through collecting and providing the information we need to investigate.

If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a reaction can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.

## Pull Requests

PRs are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:

- Only fix/add the functionality in question OR address wide-spread whitespace/style issues, not both.
- Add unit or integration tests for fixed or changed functionality (if a test suite already exists).
- Address a single concern in the least number of changed lines as possible.
- Include documentation in the repo or updates to the README.md for the changes you're making.
- Be accompanied by a complete Pull Request template (loaded automatically when a PR is created).

## Setup

If you want to develop the extension locally, follow these steps:

```bash
fork and clone the repo
cd anyhooks-vscode
npm install
code .
```

## Testing

Ensure that all tests pass before you submit a pull request.

```bash
npm test
```

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Code of Conduct

Our Code of Conduct means that you are responsible for treating everyone on the project with respect and courtesy regardless of their identity. If you are the victim of any form of harassment, or notice that someone else is being harassed, please contact the project's maintainers.

## Recognition

Contributors who provide significant improvement or help manage critical aspects of the project may be recognized as core contributors.

Thank you for contributing to the project!

--