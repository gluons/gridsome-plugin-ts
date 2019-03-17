import { Options } from 'ts-loader';
import Config from 'webpack-chain';

/**
 * Infust TS loader into `webpack-chain` instance.
 *
 * @param {Config} config `webpack-chain` instance
 * @param {Options} tsLoaderOptions Options for `ts-loader`
 */
function infuseTS(config: Config, tsLoaderOptions: Options) {
	let appendTsSuffixTo = [/\.vue$/];

	if (tsLoaderOptions && Array.isArray(tsLoaderOptions.appendTsSuffixTo)) {
		appendTsSuffixTo = [...appendTsSuffixTo, ...tsLoaderOptions.appendTsSuffixTo];
	}

	const finalOptions: Options = {
		...tsLoaderOptions,
		appendTsSuffixTo
	};

	config.resolve.extensions.prepend('.ts');

	config.module.rule('typescript')
		.test(/\.ts$/)
		.use('typescript')
			.loader('ts-loader')
			.options(finalOptions);
}

/**
 * TypeScript plugin for Gridsome.
 *
 * @exports
 * @param {any} api Gridsome API
 * @param {Options} options Plugin options
 */
function TSPlugin(api: any, options: Options) {
	api.chainWebpack((config: Config) => infuseTS(config, options));
}

/**
 * Default options
 */
TSPlugin.defaultOptions = (): Options => ({} as Options);

export = TSPlugin;
