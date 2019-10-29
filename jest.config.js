module.exports = {
	moduleFileExtensions: [
		'js',
		'json',
		'vue',
		'ts',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	setupTestFrameworkScriptFile: '<rootDir>/tests/config/setup.ts',
	snapshotSerializers: [
		'jest-serializer-vue',
	],
	testEnvironment: '<rootDir>/tests/config/JestCustomEnvironment.js',
	testMatch: [
		'<rootDir>/tests/**/*.spec.(js|ts)',
	],
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
		'^.+\\.ts$': 'ts-jest',
	},
	transformIgnorePatterns: [
		'/node_modules/',
	],
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
	collectCoverageFrom: [
		'src/**/*.{ts,vue}',
		'!src/@types/**',
	],
	clearMocks: true,
};
