import { colors } from './src/shared/constants/colors.js'

export default mode => {
  const isProd = mode !== 'development'
  const plugins = {
    'postcss-easy-import': {},
    'postcss-mixins': {
      mixinsDir: './src/app/styles/mixins',
    },
    'postcss-for': {},
    'postcss-nested': {},
    'postcss-custom-media': {},
    'postcss-simple-vars': { variables: colors },
  }
  if (isProd) {
    plugins['postcss-preset-env'] = {}
  }
  return {
    plugins,
    sourceMap: true,
  }
}
