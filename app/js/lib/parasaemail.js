(function() {
    function ibalikAngKasunod(e) {
        return String.fromCharCode(e.charCodeAt(0) + 1)
    }

    console.log(ibalikAngKasunod('a'));

    var command = "ma" + ibalikAngKasunod('h') + "lto:",
        address = "adamsa" + ibalikAngKasunod("t") + "torepair3817" + 
            "@" + ibalikAngKasunod("f") + "mail.co" + ibalikAngKasunod("l");
    document.getElementById("emaildini").innerHTML = address;
    document.getElementById("emaildinihref").href = command + address;
})();