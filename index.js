module.exports = (_args) => {
	const args = _args.split("-").filter(t => t).map(t => t.trim().split(" "))
	let parsed = {}
	for(let i = 0; i < args.length; i++) {
		!args[i][1] ? parsed[args[i][0]] = true : parsed[args[i][0]] = args[i].slice(1)
	}
	return parsed
}