Jmol._isAsync = false;
var jmolApplet0;
var file = document.getElementById("pdbu").getAttribute("data-name");
var s = document.location.search;
Jmol._debugCode = (s.indexOf("debugcode") >= 0);
jmol_isReady = function(applet) 
{Jmol._getElement(applet, "appletdiv").style.border="4px solid yellow"}		
var Info = {
        width: "100%",
        height: "100%",
        debug: false,
        zIndexBase:1000,
        color: 'black',         //"0xFFFFFF" white color
        addSelectionOptions: false,
        use: "HTML5",   // JAVA HTML5 WEBGL are all options 
        j2sPath: "./resources/js/j2s", // this needs to point to where the j2s directory is.
        jarPath: "./java",// this needs to point to where the java directory is.
        jarFile: "JmolAppletSigned.jar",
        isSigned: true,
        script: "set zoomlarge false;set antialiasDisplay",
        serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
        readyFunction: jmol_isReady,
        disableJ2SLoadMonitor: true,
        disableInitialConsole: true,
        allowJavaScript: true,}
$(document).ready(function() 
        {$("#appdiv").html(Jmol.getAppletHtml("jmolApplet0", Info));
        Jmol.script(jmolApplet0,file);})
var lastPrompt=0;
