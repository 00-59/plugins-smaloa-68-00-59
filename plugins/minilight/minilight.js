
export function loadMicrolightCode(smaloa, minilight){
	let minilightCode = smaloa.getDomElements(".microlight");
	for (let code of minilightCode){
		if (code.dataset.url != undefined) {
			smaloa.getText(code.dataset.url, function(text){
				code.innerHTML=text.replace('<','&lt;').replace('>','&gt;');
			});
		}
	}
	minilight.reset();
	setTimeout(function(){
		minilight.reset();
	}, 500);
}


