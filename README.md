# Nx Conf 2022 - Workspace Guardrails

[Google Slides](https://docs.google.com/presentation/d/1_AF7LSjCw-4Ikstap_BYv22u6CTjuyw_tY6SuRLMPfI/edit?usp=sharing)

This repo contains all of the configuration for the examples shown in the presentation above.

Click the Actions tab above to check out the GitHub Actions CI workflows, also linked below.

## workspace-lint

https://nx.dev/nx/workspace-lint

The `demo/workspace-lint` branch and [this pull request](https://github.com/rpd10/nxconf2022/pull/2) show how you can prevent unexpected behavior by running `npx nx workspace-lint` in CI.

See the following files for where we're applying that check:

- [Husky pre-commit hook](https://github.com/rpd10/nxconf2022/blob/main/.husky/pre-commit)
- [GitHub Actions](https://github.com/rpd10/nxconf2022/blob/main/.github/workflows/ci.yml#L19)

## @nrwl/nx/enforce-module-boundaries

https://nx.dev/core-features/enforce-project-boundaries

The `demo/enforce-module-boundaries` branch and [this pull request](https://github.com/rpd10/nxconf2022/pull/1) show how we can use these ESLint rules to enforce structure on our dependency graph.

- [ESLint config](https://github.com/rpd10/nxconf2022/blob/main/.eslintrc.json#L11)
- [Example tags for a library](https://github.com/rpd10/nxconf2022/blob/main/libs/shared/ui/button/project.json#L42)

## Workspace Lint Rules

https://nx.dev/packages/linter/generators/workspace-rule

The `demo/workspace-eslint` branch and [this pull request](https://github.com/rpd10/nxconf2022/pull/3) show how we can fail a PR if the code doesn't meet our custom ESLint rule.

- [ESLint config](https://github.com/rpd10/nxconf2022/blob/main/.eslintrc.json#L9)
- [Workspace Lint Rule barrel file](https://github.com/rpd10/nxconf2022/blob/main/tools/eslint-rules/index.ts)
- [Example lint rule - no-provided-in-any](https://github.com/rpd10/nxconf2022/blob/main/tools/eslint-rules/rules/no-provided-in-any.ts)
- [Example unit tests](https://github.com/rpd10/nxconf2022/blob/main/tools/eslint-rules/rules/no-provided-in-any.spec.ts)

## Code Owners

Though I didn't really touch on it in the presentation (and it's not setup in this demo repo), all of these checks are meaningless if engineers can easily sidestep them. To prevent that, we use GitHub's `CODEOWNERS` feature to apply a layer of protection to the Nx configuration files like the `eslintrc.json` and our CI configuration.
