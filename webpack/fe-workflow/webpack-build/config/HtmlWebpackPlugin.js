module.exports=(config,resolve)=>{
	return ()=>{
		config.plugin('html')
			.use(htmlW)
	}
}