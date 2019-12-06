const DEV_MODE = process.env.WEBPACK_TARGET === 'dev';

function externals() {
	return DEV_MODE ? {} : {
		vue: {
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue',
			root: 'vue',
		},
		'vue-class-component': {
			commonjs: 'vue-class-component',
			commonjs2: 'vue-class-component',
			amd: 'vue-class-component',
			root: 'vue-class-component',
		},
		'vue-property-decorator': {
			commonjs: 'vue-property-decorator',
			commonjs2: 'vue-property-decorator',
			amd: 'vue-property-decorator',
			root: 'vue-property-decorator',
		},
		'oojs-ui': {
			commonjs: 'oojs-ui',
			commonjs2: 'oojs-ui',
			amd: 'oojs-ui',
			root: 'oojs-ui',
		},
	};
}

module.exports = {
	chainWebpack: ( config ) => config.resolve.set( 'symlinks', false ),
	configureWebpack: {
		externals: [ externals() ],
	},
	css: {
		extract: false,
		loaderOptions: {
			sass: {
				data: '@import "@/styles/_main.scss";',
			},
		},
	},
};
