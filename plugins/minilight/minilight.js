
/*!

Copyright (c) 2022 68.00-59.com
Copyright (c) 2022 00-59.com

Documentation website: https://68.00-59.com/
Licensed under the MIT license: https://opensource.org/licenses/MIT
Source code: https://github.com/00-59/plugins-smaloa-68-00-59

*/

export function loadMicrolightCode(smaloa){
	let minilightLibraryUrl = import.meta.url;
	let a = minilightLibraryUrl.split("minilight");
	const microlightLibraryUrl = [a.slice(0,a.length-1).join("minilight"), a.slice(a.length-1)].join("microlight");
	let microlight = import(microlightLibraryUrl);

	let minilightCode = smaloa.getDomElements(".microlight");
	for (let code of minilightCode){
		if (code.dataset.url != undefined) {
			smaloa.getText(code.dataset.url, function(text){
				code.innerHTML=text.replaceAll('<','&lt;').replaceAll('>','&gt;');
			});
		}
	}
	
	microlight.valueOf().then(function(m){
		m.reset();
		setTimeout(function(){
			m.reset();
		}, 500);
	});
	
}


