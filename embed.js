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
body.prepend('\
<div id="infobox"> Autor: <span style="white-space:nowrap;"><img src="http://clonkforge.net/pics/ranks/rank24.png" style="vertical-align:text-top;" alt="Professioneller Admin" title="Professioneller Admin"><a href="user.php?usr=503">Nachtfalter</a></span><br>Mitarbeiter: <span style="white-space:nowrap;"><img src="http://clonkforge.net/pics/ranks/rank19.png" style="vertical-align:text-top;" alt="CCF Tester" title="CCF Tester"><a href="user.php?usr=469">Nachtschatten</a></span>, <span style="white-space:nowrap;"><img src="http://clonkforge.net/pics/ranks/rank6.png" style="vertical-align:text-top;" alt="Oberst" title="Oberst"><a href="user.php?usr=895">B_E</a></span>, <span style="white-space:nowrap;"><img src="http://clonkforge.net/pics/ranks/rank19.png" style="vertical-align:text-top;" alt="CCF Tester" title="CCF Tester"><a href="user.php?usr=620">Luchs</a></span>*<br>Betatester: <span style="white-space:nowrap;"><img src="http://clonkforge.net/pics/ranks/rank3.png" style="vertical-align:text-top;" alt="Leutnant" title="Leutnant"><a href="user.php?usr=1209">Sir_Jones</a></span>, <span style="white-space:nowrap;"><img src="http://clonkforge.net/pics/ranks/rank5.png" style="vertical-align:text-top;" alt="Major" title="Major"><a href="user.php?usr=1006">Pitri</a></span>, <span style="white-space:nowrap;"><img src="http://clonkforge.net/pics/ranks/rank1.png" style="vertical-align:text-top;" alt="Clonk" title="Clonk"><a href="user.php?usr=1457">ManuN</a></span><br>Letzte &Auml;nderung: 23.04.2012 18:50<br>Gesuche: Betatester<br> Fertigstellung: Pre-Alpha<br> Benutzerwertung: <span id="niveau">Ausgezeichnet</span><br><br></div>\
')
body.children().wrapAll('<div id=content><div id=content2><div id=wholepage><div id=Description /></div></div></div>')

$('img').each(function() {
	var e = $(this), src = e.attr('src')
	if(src.match(/^projects\//))
		e.attr('src', 'http://clonkforge.net/' + src)
})
