$('head').append('\
<link href="http://clonkforge.net/style/clonkforge.css" type="text/css" rel="stylesheet"/>\
<link href="http://clonkforge.net/style/text.css" type="text/css" rel="stylesheet"/>\
<link href="http://clonkforge.net/style/admin.css" type="text/css" rel="stylesheet"/>\
<link rel="stylesheet" type="text/css" href="http://clonkforge.net/style/markitup/style.css"/>\
<link href="http://clonkforge.net/style/lytebox.css" type="text/css" rel="stylesheet"/>\
<link href="style.css" type="text/css" rel="stylesheet"/>\
<link href="http://clonkforge.net/includes/js/codemirror/codemirror.css" type="text/css" rel="stylesheet"/>\
<link href="http://clonkforge.net/includes/js/codemirror/theme/default.css" type="text/css" rel="stylesheet"/>\
')

var body = $('body')
body.children(":not(script)").wrapAll('<div id=content><div id=content2><div id=wholepage><div id=Description /></div></div></div>')

$('img').each(function() {
	var e = $(this), src = e.attr('src')
	if(src.match(/^projects\//))
		e.attr('src', 'http://clonkforge.net/' + src)
})
