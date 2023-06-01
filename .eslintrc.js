module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,

    extends: [require.resolve('@umijs/lint/dist/config/eslint')],
    globals: {
      page: true,
      REACT_APP_ENV: true,
    },
  }
}
