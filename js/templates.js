var tpl_catList = '<li><h3>${titulo}</h3><span class="data">${data_publicacao}</span><span>${chamada}</span><span><a href="${link}">Veja mais</a></span></li>';

function updateCatList(data){
	$.tmpl( tpl_catList, data ).appendTo( 'ul#listOfcats' );
}