export function convertStringToNumber(...properties){
	return hook => {
		properties.map( e => {
			if(typeof hook.params.query[e] === 'string') hook.params.query[e] = Number(hook.params.query[e]);
		});
	}
}

export function formatHotelsData(){
	return hook => {
		hook.result.hotels = hook.result.data;
		delete hook.result.data;
	}
}