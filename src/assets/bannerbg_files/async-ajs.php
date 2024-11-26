var prebidJs = document.createElement('script');
prebidJs.async = true;
prebidJs.type = 'text/javascript';
prebidJs.src = '//cdn.ad4game.com/prebid.js';
prebidJs.onload = function() {window.a4gPrebidLoaded = true;}
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(prebidJs, node);

;var googletag = googletag || {};googletag.cmd = googletag.cmd || [];
function isScriptLoaded(url) {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
}
(function () {
    if (!isScriptLoaded("//www.googletagservices.com/tag/js/gpt.js")) {
        var gads = document.createElement('script');
        gads.async = true;
        gads.type = 'text/javascript';
        gads.src = '//www.googletagservices.com/tag/js/gpt.js';
        (document.head || document.getElementsByTagName("head")[0]).appendChild(gads);
    }})();
var a4gDReady = setInterval(function() {
    if (window.a4gPrebidLoaded) {
        clearInterval(a4gDReady);
         (function () {
            var a4GbiddingScript = document.createElement("SCRIPT");
            a4GbiddingScript.text ='var PREBID_TIMEOUT = 1500; '
                        + ' var PREBID_FAILSAFE_TIMEOUT = 2000; '
                        + ' var slots = []; '
                        + ' var adUnits = [ { code: "div-gpt-ad-1541521046796-0",  mediaTypes: { banner: { sizes: [[970, 90]] }},bids: [{bidder:"a4g", params: { zoneId: "60918",deliveryUrl: "//ads.ad4game.com/v1/bid"} }]},{ code: "div-gpt-ad-1587546486819-0",  mediaTypes: { banner: { sizes: [[970, 90]] }},bids: [{bidder:"a4g", params: { zoneId: "70076",deliveryUrl: "//ads.ad4game.com/v1/bid"} }]},{ code: "div-gpt-ad-1540305079348-0",  mediaTypes: { banner: { sizes: [[300, 250]] }},bids: [{bidder:"a4g", params: { zoneId: "60916",deliveryUrl: "//ads.ad4game.com/v1/bid"} }]} ]; '
                        + ' var pbjs = pbjs || {};'
                        + ' pbjs.que = pbjs.que || [];'
            ;
            (document.head || document.getElementsByTagName("head")[0]).appendChild(a4GbiddingScript);
                    
            
            a4GbiddingScript = document.createElement("SCRIPT");
            a4GbiddingScript.text ='googletag.cmd.push(function () { '
    + '            googletag.pubads().disableInitialLoad(); '
    + '        }); '
    + '        var consentManagement = {};consentManagement.usp = {cmpApi: "iab",timeout: 8e3}; '
    + '        pbjs.que.push(function () {'
    + '            pbjs.setConfig({ '
    + '                priceGranularity: "dense", '
    + '                consentManagement: consentManagement, '
    + '                 '
    + '            }); '
    + '        }); '
    + '        pbjs.que.push(function () {'
    + '            pbjs.addAdUnits(adUnits); '
    + '            pbjs.requestBids({ '
    + '                bidsBackHandler: sendAdserverRequest, '
    + '                timeout: PREBID_TIMEOUT '
    + '            }); '
    + '        }); '
    + '        function sendAdserverRequest(){'
    + '            if (pbjs.adserverRequestSent) return; '
    + '            pbjs.adserverRequestSent = true; '
    + '            googletag.cmd.push(function () { '
    + '                pbjs.que.push(function () {'
    + '                    pbjs.setTargetingForGPTAsync(); '
    + '                    googletag.pubads().refresh(slots); '
    + '                }); '
    + '            }); '
    + '        } '
    + '        setTimeout(function () {'
    + '            sendAdserverRequest(); '
    + '        }, PREBID_FAILSAFE_TIMEOUT); '
            ;(document.head || document.getElementsByTagName("head")[0]).appendChild(a4GbiddingScript);
    
            a4GbiddingScript = document.createElement("SCRIPT");
            a4GbiddingScript.text =' googletag.cmd.push(function () { '
                + 'slots.push(googletag.defineSlot("/60257202,223453672/60918", [[970, 90]], "div-gpt-ad-1541521046796-0").addService(googletag.pubads())); slots.push(googletag.defineSlot("/60257202,223453672/70076", [[970, 90]], "div-gpt-ad-1587546486819-0").addService(googletag.pubads())); slots.push(googletag.defineSlot("/60257202,223453672/60916", [[300, 250]], "div-gpt-ad-1540305079348-0").addService(googletag.pubads()));  '
                + 'googletag.pubads().enableSingleRequest(); '
                + 'googletag.enableServices(); '
                + ' if (!googletag.pubadsReady) {googletag.display("div-gpt-ad-1541521046796-0"); googletag.display("div-gpt-ad-1587546486819-0"); googletag.display("div-gpt-ad-1540305079348-0");}'
            + '}); '
            ;

            (document.head || document.getElementsByTagName("head")[0]).appendChild(a4GbiddingScript);
    
         } ());
    }
}, 10);a4g2573559([function(el,adCallback){adCallback=adCallback||function(){};(function (el) {
        return {
            showAd: function(){(function(el){
    var div = document.createElement('DIV');
    div.id = "div-gpt-ad-1541521046796-0";
    div.style.width = "970px";
    div.style.height = "90px";
    el.appendChild(div);
    
            
            ;adCallback(null);}(el))},
            minEcpm: 0.01
        }
    }(el)).showAd(el)},function(el,adCallback){adCallback=adCallback||function(){};(function (el) {
        return {
            showAd: function(){(function(el){
    var div = document.createElement('DIV');
    div.id = "div-gpt-ad-1587546486819-0";
    div.style.width = "970px";
    div.style.height = "90px";
    el.appendChild(div);
    
            
            ;adCallback(null);}(el))},
            minEcpm: 0.01
        }
    }(el)).showAd(el)},function(el,adCallback){adCallback=adCallback||function(){};(function (el) {
        return {
            showAd: function(){(function(el){
    var div = document.createElement('DIV');
    div.id = "div-gpt-ad-1540305079348-0";
    div.style.width = "300px";
    div.style.height = "250px";
    el.appendChild(div);
    
            
            ;adCallback(null);}(el))},
            minEcpm: 0.01
        }
    }(el)).showAd(el)}]);