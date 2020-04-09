module.exports = function () {
	return {
		'presets': [
			'@bable/preset-env',
			{
				targets: {
					chrome: 59,
					edge: 13,
					firefox: 50,
					safari: 8
				}
			}
		]
	}
}