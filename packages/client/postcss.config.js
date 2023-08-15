import * as path from "path";
import { fileURLToPath } from 'url';
import { colors } from '@carousel-without-a-horse/client/src/shared/constants/colors.js'
import { variables } from '@carousel-without-a-horse/client/src/widgets/Arcade/utils/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default mode => {
  const isProd = mode !== 'development'
  const plugins = {
    'postcss-easy-import': {},
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, '/src/app/styles/mixins'),
    },
    'postcss-for': {},
    'postcss-nested': {},
    'postcss-custom-media': {},
    'postcss-simple-vars': { variables: {...colors, ...variables} },
  }
  if (isProd) {
    plugins['postcss-preset-env'] = {}
  }
  return {
    plugins,
    sourceMap: true,
  }
}
