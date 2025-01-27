import { typescript } from "projen";
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "actions-testing",
  repository: "https://github.com/benjymoses/actions-testing.git/",
  projenrcTs: true,
  release: false,
  description:
    "This project is to learn and understand how Projen projects use Github actions to publish packages to NPM.",
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: "actions-testing",
  buildWorkflowOptions: {
    workflowTriggers: {
      push: {
        branches: ["main"],
      },
    },
  },
  majorVersion: 1,
});
project.synth();
