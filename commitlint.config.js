module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'never',
      [
        'feat',
        'fix',
        'test',
        'style',
      ],
    ],

  },
};
