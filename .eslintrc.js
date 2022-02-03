const { readdirSync } = require('fs')
const path = require('path')

const topLevelDirs = readdirSync(path.join(__dirname, 'src'), { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name.match(/^[a-z0-9]/i))
  .map(d => d.name)

module.exports = {
  root: true,
  extends: [
    'vectron',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.{md,mdx}'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': true,
      },
      rules: {
        'react/jsx-indent': 'off',
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/jsx-indent': 'off',
        'no-unused-vars': 'off',
        indent: 'off',
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true, overrides: { arrow: { before: true, after: true } } }],
        '@typescript-eslint/no-unused-vars': ['error', {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        }],
      },
    }
  ],
  rules: {
    'simple-import-sort/imports': ['error', {
      groups: [
        // Node.js builtins
        [
          `^(${require('module').builtinModules.join('|')})(/|$)`,
        ],
        // Packages. `react` related packages come first.
        ['^react', '^@?\\w'],
        // Internal packages.
        [`^(@|${topLevelDirs.join('|')})(/.*|$)`],
        // Side effect imports.
        ['^\\u0000'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports.
        ['^.+\\.s?css$'],
      ],
    }],
    'no-use-before-define': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': [0, { caseSensitive: true }],
    'import/order': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['**/*.module.css.d.ts', 'dist'],
}
