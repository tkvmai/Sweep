function getURLParameter(name) { 
    return decodeURI( 
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || '' 
    ); 
}
function go() {
    window.onbeforeunload = null,
    window.location = "https://" + getURLParameter("domain") + "/click.php?lp=1";
}
var clickurl = "https://" + getURLParameter("domain") +'/click.php?lp=1';
