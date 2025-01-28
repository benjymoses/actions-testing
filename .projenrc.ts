import { typescript } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'actions-testing',
  repository: 'https://github.com/benjymoses/actions-testing.git/',
  projenrcTs: true,
  description:
    'This project is to learn and understand how Projen projects use Github actions to publish packages to NPM.',
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: 'actions-testing',
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  homepage: 'https://www.example.com',
  license: 'MIT',
  copyrightOwner: 'Ben Moses',
  keywords: ['experiment', 'github actions', 'projen'],
  buildWorkflowOptions: {
    workflowTriggers: {
      push: {
        branches: ['main'],
      },
    },
  },
  majorVersion: 1,
});

const ignoreFiles = ['.bashrc'];
ignoreFiles.forEach((ignoreFile) => {
  project.gitignore.addPatterns(ignoreFile);
  project.npmignore?.addPatterns(ignoreFile);
});

project.synth();
