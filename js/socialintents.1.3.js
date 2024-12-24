var socialintents_chat = false; var socialintents_vars2_chat = {};
function getSICScriptURL() { var script = document.currentScript || document.querySelector('script[src*="chat/socialintents.1.3.js"]'); return script.src }
(function () {
    function loadFile(pageHost, filename, filetype, sri) {
        var mh = (("http:" == document.location.protocol) ? "https://" : "https://"); filename = mh + pageHost + filename;
        if (filetype == "js") { var fileref = document.createElement('script'); fileref.setAttribute("type", "text/javascript"); fileref.setAttribute("src", filename); } else if (filetype == "css") { var fileref = document.createElement("link"); fileref.setAttribute("rel", "stylesheet"); fileref.setAttribute("type", "text/css"); fileref.setAttribute("href", filename); } if (typeof fileref != "undefined") { if (sri) { fileref.setAttribute("integrity", sri); fileref.setAttribute("crossorigin", "anonymous"); } var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(fileref, x); }
    }
    function getParameterByName(name) { var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search); return match && decodeURIComponent(match[1].replace(/\+/g, ' ')); }
    function getWid(url) { var type = url.split('#'); var hash = ''; if (type.length > 1) hash = type[1]; return hash; }
    function endsWith(str, suffix) { return str.length >= suffix.length && str.substring(str.length - suffix.length) == suffix; }
    function startsWith(str, prefix) { return (str.substring(0, prefix.length) == prefix); }
    function siUrlMatch(pattern) {
        if (!pattern || pattern.length == 0) return true;
        var ldom = window.location.protocol + '//' + window.location.host;
        var cur = window.location.href.split('?')[0];; var tokens = pattern.split(','); var match = false;
        for (var i = 0; i < tokens.length; i++) {
            try {
                var token = tokens[i].trim();
                if (token === ldom) match = true;
                if (token === '*') match = true;
                else if (token.charAt(0) === '*' && token.charAt(tokens[i].length - 1) === '*') { if (cur.indexOf(token.substring(1, token.length - 1)) > 0) match = true; }
                else if (token.charAt(0) === '*') { if (endsWith(cur, token.substring(1))) match = true; }
                else if (token.charAt(token.length - 1) === '*') { if (startsWith(cur, token.substring(0, token.length - 1))) match = true; }
                else { if (endsWith(cur, token)) match = true; }
            } catch (err) { match = true; }
        }
        return match;
    }
    if (!window.jQuery || jQuery.fn.jquery == '1.3.2' || jQuery.fn.jquery == '1.4.2' || jQuery.fn.jquery == '1.5.2') {
        loadFile("ajax.googleapis.com", "/ajax/libs/jquery/3.6.0/jquery.min.js", "js");
        setTimeout(function () {
            if (!window.jQuery) {
                setTimeout(function () {
                    if (!window.jQuery) { setTimeout(function () { loadFile("ajax.googleapis.com", "/ajax/libs/jquery/3.6.0/jquery.min.js", "js"); }, 1000); }
                    else { loadFile("ajax.googleapis.com", "/ajax/libs/jquery/3.6.0/jquery.min.js", "js"); }
                }, 500);
            }
            else { loadFile("ajax.googleapis.com", "/ajax/libs/jquery/3.6.0/jquery.min.js", "js"); }
        }, 250);
    }
    loadFile("www.socialintents.com", "/assets/css/si-include-chat.min.css", "css");
    if (!socialintents_chat) {
        socialintents_chat = true;
        var scriptUrl = "https://www.socialintents.com/api/chat/jsonGetVarsContext.jsp";
        var url = getSICScriptURL();
        setTimeout(function () {
            var wid = getWid(url);
            if (wid) {
                var socialintents_vs_chat;
                try {
                    socialintents_vs_chat = JSON.parse(sessionStorage.getItem("socialintents_vs_chat_" + wid));
                } catch (err) { }
                if (socialintents_vs_chat && socialintents_vs_chat != "undefined") {
                    socialintents_vars2_chat.widgetId = socialintents_vs_chat.widgetId; socialintents_vars2_chat.type = socialintents_vs_chat.type; socialintents_vars2_chat.tabLocation = socialintents_vs_chat.tabLocation; socialintents_vars2_chat.tabText = socialintents_vs_chat.tabText; socialintents_vars2_chat.tabOfflineText = socialintents_vs_chat.tabOfflineText; socialintents_vars2_chat.tabWidth = socialintents_vs_chat.tabWidth; socialintents_vars2_chat.marginRight = socialintents_vs_chat.marginRight; socialintents_vars2_chat.marginTop = socialintents_vs_chat.marginTop; socialintents_vars2_chat.marginTopc = socialintents_vs_chat.marginTopc; socialintents_vars2_chat.tabColor = socialintents_vs_chat.tabColor; socialintents_vars2_chat.popupHeight = socialintents_vs_chat.popupHeight; socialintents_vars2_chat.popupHeight = socialintents_vs_chat.popupHeight; socialintents_vars2_chat.popupWidth = socialintents_vs_chat.popupWidth; socialintents_vars2_chat.backgroundImg = socialintents_vs_chat.backgroundImg; socialintents_vars2_chat.roundedCorners = socialintents_vs_chat.roundedCorners; socialintents_vars2_chat.headerTitle = socialintents_vs_chat.headerTitle; socialintents_vars2_chat.urlPattern = socialintents_vs_chat.urlPattern; socialintents_vars2_chat.urlPatternExclude = socialintents_vs_chat.urlPatternExclude; socialintents_vars2_chat.tabType = socialintents_vs_chat.tabType; socialintents_vars2_chat.hide = socialintents_vs_chat.hide;
                    if (socialintents_vars2_chat.hide === "1") return;
                    if ("" == socialintents_vars2_chat.tabType) {
                        loadFile("netdna.bootstrapcdn.com", "/font-awesome/4.6.3/css/font-awesome.css", "css");
                    }
                    if (siUrlMatch(socialintents_vars2_chat.urlPattern) && (socialintents_vars2_chat.urlPatternExclude.length == 0 || !siUrlMatch(socialintents_vars2_chat.urlPatternExclude))) {
                        if (window.jQuery) {
                            loadFile("www.socialintents.com", "/api/chat/siwidget.1.3.js", "js");
                        } else {
                            setTimeout(function () {
                                loadFile("www.socialintents.com", "/api/chat/siwidget.1.3.js", "js");
                            }, 2000);
                        }
                    }
                } else {
                    var ping = scriptUrl + '?wid=' + wid;
                    jQuery.ajax({
                        type: 'GET', url: ping, async: true, jsonpCallback: 'jsonCallbackchat', contentType: "application/json",
                        dataType: 'jsonp',
                        success: function (json) {
                            socialintents_vars2_chat.widgetId = json.widgetId; socialintents_vars2_chat.tabLocation = json.tabLocation; socialintents_vars2_chat.type = json.type; socialintents_vars2_chat.tabText = json.tabText; socialintents_vars2_chat.tabOfflineText = json.tabOfflineText; socialintents_vars2_chat.tabWidth = json.tabWidth; socialintents_vars2_chat.marginRight = json.marginRight; socialintents_vars2_chat.marginTop = json.marginTop; socialintents_vars2_chat.marginTopc = json.marginTopc; socialintents_vars2_chat.tabColor = json.tabColor; socialintents_vars2_chat.popupHeight = json.popupHeight; socialintents_vars2_chat.popupWidth = json.popupWidth; socialintents_vars2_chat.backgroundImg = json.backgroundImg; socialintents_vars2_chat.roundedCorners = json.roundedCorners; socialintents_vars2_chat.headerTitle = json.headerTitle; socialintents_vars2_chat.urlPattern = json.urlPattern; socialintents_vars2_chat.urlPatternExclude = json.urlPatternExclude; socialintents_vars2_chat.tabType = json.tabType; socialintents_vars2_chat.hide = json.hide;
                            var cpColor = localStorage.getItem(socialintents_vars2_chat.widgetId + "-wixCpColor");
                            if (cpColor && cpColor.length > 0) { socialintents_vars2_chat.tabColor = cpColor; }
                            if (socialintents_vars2_chat.hide === "1") return;
                            if ("" == socialintents_vars2_chat.tabType) {
                                loadFile("netdna.bootstrapcdn.com", "/font-awesome/4.6.3/css/font-awesome.css", "css");
                            }
                            if (siUrlMatch(socialintents_vars2_chat.urlPattern) && (socialintents_vars2_chat.urlPatternExclude.length === 0 || !siUrlMatch(socialintents_vars2_chat.urlPatternExclude))) {
                                try { sessionStorage.setItem('socialintents_vs_chat_' + wid, JSON.stringify(json)); } catch (err) { }
                                if (window.jQuery) {
                                    loadFile("www.socialintents.com", "/api/chat/siwidget.1.3.js", "js");
                                } else {
                                    setTimeout(function () {
                                        loadFile("www.socialintents.com", "/api/chat/siwidget.1.3.js", "js");
                                    }, 2000);
                                }
                            }
                        },
                        error: function (e) { console.log(e.message); }
                    });
                }
                setTimeout(function () {
                    try { sessionStorage.removeItem('socialintents_vs_chat_' + wid); } catch (err) { }
                }, 30000)
            }
        }, 1000);
    }
})();
if (navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    window.addEventListener("pageshow", function (evt) {
        if (evt.persisted) {
            setTimeout(function () {
                document.getElementById('si_frame').src += '';
            }, 0);
        }
    }, false);
}