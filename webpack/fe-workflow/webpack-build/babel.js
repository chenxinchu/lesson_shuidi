module.exports = function () {
	// console.log(version,'babel.js')
	return {
		'presets': [
			[
				'@bable/preset-env',
				{
					targets: {
						chrome: 59,
						edge: 13,
						firefox: 50,
						safari: 8
					}
				}
			],
			[
				'@babel/preset-typescript',
				{
					allExtensions: true
				}
			]
		],
		plugins: [
			'@babel/plugin-transform-typescript'
		]
	}
}