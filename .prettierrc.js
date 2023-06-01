<<<<<<< HEAD
const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
=======
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
>>>>>>> 6a0aae43b07858239026a24113e28d85a78f03a1
};
