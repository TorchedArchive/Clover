module.exports = (_args) => {
	const args = _args.split("-").filter(t => t).map(t => t.trim().split(" "))
	let parsed = {}
	for(let i = 0; i < args.length; i++) {
		parsed[args[i][0]] = args[i][1];
		
		if(!args[i][1]) parsed[args[i][0]] = true;
		if(args[i].length > 2) parsed[args[i][0]] = args[i].slice(1);
	}
	return parsed;
}