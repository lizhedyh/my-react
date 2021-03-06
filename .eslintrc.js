module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        '@myfe/eslint-config-maoyan',
        'plugin:@myfe/eslint-plugin-myfe/myfeRule'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
      
    }
};