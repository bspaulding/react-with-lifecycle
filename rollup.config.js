/* @flow */

import babel from 'rollup-plugin-babel';

export default {
	dest: 'dist/bundle.js',
	entry: 'src/index.js',
	format: 'umd',
	moduleName: 'reactWithLifecycle',
	plugins: [babel()]
};
