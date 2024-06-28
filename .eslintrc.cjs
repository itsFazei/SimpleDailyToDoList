module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/typedef': [
            'error',
            {
                'variableDeclaration': true,
                'variableDeclarationIgnoreFunction': true,
                'memberVariableDeclaration': true,
                'propertyDeclaration': true,
                'parameter': true,
                'arrowParameter': true
            }
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/typedef': [
                    'error',
                    {
                        'variableDeclaration': true,
                        'variableDeclarationIgnoreFunction': true,
                        'memberVariableDeclaration': true,
                        'propertyDeclaration': true,
                        'parameter': true,
                        'arrowParameter': true
                    }
                ],
            },
        },
    ],
};
