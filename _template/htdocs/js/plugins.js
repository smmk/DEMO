!function(t,e){"function"==typeof define&&define.amd?define(function(){return t.is=e()}):"object"==typeof exports?module.exports=e():t.is=e()}(this,function(){function r(t){return function(){return!t.apply(null,d.call(arguments))}}function i(a){return function(){var t=d.call(arguments),e=t.length;1===e&&u.array(t[0])&&(e=(t=t[0]).length);for(var n=0;n<e;n++)if(!a.call(null,t[n]))return!1;return!0}}function o(a){return function(){var t=d.call(arguments),e=t.length;1===e&&u.array(t[0])&&(e=(t=t[0]).length);for(var n=0;n<e;n++)if(a.call(null,t[n]))return!0;return!1}}function t(e,n){u[e]=function(t){return n[e].test(t)}}var e=this||global,n=e.is,u={VERSION:"0.8.0",not:{},all:{},any:{}},a=Object.prototype.toString,d=Array.prototype.slice,s=Object.prototype.hasOwnProperty;u.arguments=function(t){return u.not.null(t)&&("[object Arguments]"===a.call(t)||"object"==typeof t&&"callee"in t)},u.array=Array.isArray||function(t){return"[object Array]"===a.call(t)},u.boolean=function(t){return!0===t||!1===t||"[object Boolean]"===a.call(t)},u.date=function(t){return"[object Date]"===a.call(t)},u.error=function(t){return"[object Error]"===a.call(t)},u.function=function(t){return"[object Function]"===a.call(t)||"function"==typeof t},u.nan=function(t){return t!=t},u.null=function(t){return null===t},u.number=function(t){return u.not.nan(t)&&"[object Number]"===a.call(t)},u.object=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},u.json=function(t){return"[object Object]"===a.call(t)},u.regexp=function(t){return"[object RegExp]"===a.call(t)},u.sameType=function(t,e){return u.nan(t)||u.nan(e)?u.nan(t)===u.nan(e):a.call(t)===a.call(e)},u.sameType.api=["not"],u.string=function(t){return"[object String]"===a.call(t)},u.char=function(t){return u.string(t)&&1===t.length},u.undefined=function(t){return void 0===t},u.empty=function(t){if(u.object(t)){var e=Object.getOwnPropertyNames(t).length;return!!(0===e||1===e&&u.array(t)||2===e&&u.arguments(t))}return""===t},u.existy=function(t){return null!=t},u.truthy=function(t){return u.existy(t)&&!1!==t&&u.not.nan(t)&&""!==t&&0!==t},u.falsy=r(u.truthy),u.space=function(t){if(u.char(t)){var e=t.charCodeAt(0);return 8<e&&e<14||32===e}return!1},u.equal=function(t,e){return u.all.number(t,e)?t===e&&1/t==1/e:u.all.string(t,e)||u.all.regexp(t,e)?""+t==""+e:!!u.all.boolean(t,e)&&t===e},u.equal.api=["not"],u.even=function(t){return u.number(t)&&t%2==0},u.odd=function(t){return u.number(t)&&t%2==1},u.positive=function(t){return u.number(t)&&0<t},u.negative=function(t){return u.number(t)&&t<0},u.above=function(t,e){return u.all.number(t,e)&&e<t},u.above.api=["not"],u.under=function(t,e){return u.all.number(t,e)&&t<e},u.under.api=["not"],u.within=function(t,e,n){return u.all.number(t,e,n)&&e<t&&t<n},u.within.api=["not"],u.decimal=function(t){return u.number(t)&&t%1!=0},u.integer=function(t){return u.number(t)&&t%1==0},u.finite=isFinite||function(t){return t!==1/0&&t!==-1/0&&u.not.nan(t)},u.infinite=r(u.finite);var c={url:/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,creditCard:/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,alphaNumeric:/^[A-Za-z0-9]+$/,timeString:/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,dateString:/^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,usZipCode:/^[0-9]{5}(?:-[0-9]{4})?$/,caPostalCode:/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,ukPostCode:/^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,nanpPhone:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,eppPhone:/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,socialSecurityNumber:/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,affirmative:/^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,hexadecimal:/^[0-9a-fA-F]+$/,hexColor:/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,ipv4:/^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,ipv6:/^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,ip:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/};for(var f in c)c.hasOwnProperty(f)&&t(f,c);u.include=function(t,e){return-1<t.indexOf(e)},u.include.api=["not"],u.upperCase=function(t){return u.string(t)&&t===t.toUpperCase()},u.lowerCase=function(t){return u.string(t)&&t===t.toLowerCase()},u.startWith=function(t,e){return u.string(t)&&0===t.indexOf(e)},u.startWith.api=["not"],u.endWith=function(t,e){return u.string(t)&&-1<t.indexOf(e)&&t.indexOf(e)===t.length-e.length},u.endWith.api=["not"],u.capitalized=function(t){if(u.not.string(t))return!1;for(var e=t.split(" "),n=[],a=0;a<e.length;a++)n.push(e[a][0]===e[a][0].toUpperCase());return u.all.truthy.apply(null,n)},u.palindrome=function(t){return u.string(t)&&t==t.split("").reverse().join("")};var l=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],p=["january","february","march","april","may","june","july","august","september","october","november","december"];if(u.today=function(t){var e=(new Date).toDateString();return u.date(t)&&t.toDateString()===e},u.yesterday=function(t){var e=new Date,n=new Date(e.setDate(e.getDate()-1)).toDateString();return u.date(t)&&t.toDateString()===n},u.tomorrow=function(t){var e=new Date,n=new Date(e.setDate(e.getDate()+1)).toDateString();return u.date(t)&&t.toDateString()===n},u.past=function(t){var e=new Date;return u.date(t)&&t.getTime()<e.getTime()},u.future=r(u.past),u.day=function(t,e){return u.date(t)&&e.toLowerCase()===l[t.getDay()]},u.day.api=["not"],u.month=function(t,e){return u.date(t)&&e.toLowerCase()===p[t.getMonth()]},u.month.api=["not"],u.year=function(t,e){return u.date(t)&&u.number(e)&&e===t.getFullYear()},u.year.api=["not"],u.leapYear=function(t){return u.number(t)&&(t%4==0&&t%100!=0||t%400==0)},u.weekend=function(t){return u.date(t)&&(6===t.getDay()||0===t.getDay())},u.weekday=r(u.weekend),u.inDateRange=function(t,e,n){if(u.not.date(t)||u.not.date(e)||u.not.date(n))return!1;var a=t.getTime(),r=e.getTime(),i=n.getTime();return r<a&&a<i},u.inDateRange.api=["not"],u.inLastWeek=function(t){return u.inDateRange(t,new Date((new Date).setDate((new Date).getDate()-7)),new Date)},u.inLastMonth=function(t){return u.inDateRange(t,new Date((new Date).setMonth((new Date).getMonth()-1)),new Date)},u.inLastYear=function(t){return u.inDateRange(t,new Date((new Date).setFullYear((new Date).getFullYear()-1)),new Date)},u.inNextWeek=function(t){return u.inDateRange(t,new Date,new Date((new Date).setDate((new Date).getDate()+7)))},u.inNextMonth=function(t){return u.inDateRange(t,new Date,new Date((new Date).setMonth((new Date).getMonth()+1)))},u.inNextYear=function(t){return u.inDateRange(t,new Date,new Date((new Date).setFullYear((new Date).getFullYear()+1)))},u.quarterOfYear=function(t,e){return u.date(t)&&u.number(e)&&e===Math.floor((t.getMonth()+3)/3)},u.quarterOfYear.api=["not"],u.dayLightSavingTime=function(t){var e=new Date(t.getFullYear(),0,1),n=new Date(t.getFullYear(),6,1),a=Math.max(e.getTimezoneOffset(),n.getTimezoneOffset());return t.getTimezoneOffset()<a},"undefined"!=typeof window){var F="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",g="navigator"in window&&"vendor"in navigator&&navigator.vendor.toLowerCase()||"",h="navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"";u.chrome=function(){return/chrome|chromium/i.test(F)&&/google inc/.test(g)},u.chrome.api=["not"],u.firefox=function(){return/firefox/i.test(F)},u.firefox.api=["not"],u.edge=function(){return/edge/i.test(F)},u.edge.api=["not"],u.ie=function(t){return t?11<=t?"ActiveXObject"in window:new RegExp("msie "+t).test(F):/msie/i.test(F)||"ActiveXObject"in window},u.ie.api=["not"],u.opera=function(){return/^Opera\//.test(F)||/\x20OPR\//.test(F)},u.opera.api=["not"],u.safari=function(){return/safari/i.test(F)&&/apple computer/i.test(g)},u.safari.api=["not"],u.ios=function(){return u.iphone()||u.ipad()||u.ipod()},u.ios.api=["not"],u.iphone=function(){return/iphone/i.test(F)},u.iphone.api=["not"],u.ipad=function(){return/ipad/i.test(F)},u.ipad.api=["not"],u.ipod=function(){return/ipod/i.test(F)},u.ipod.api=["not"],u.android=function(){return/android/i.test(F)},u.android.api=["not"],u.androidPhone=function(){return/android/i.test(F)&&/mobile/i.test(F)},u.androidPhone.api=["not"],u.androidTablet=function(){return/android/i.test(F)&&!/mobile/i.test(F)},u.androidTablet.api=["not"],u.blackberry=function(){return/blackberry/i.test(F)||/BB10/i.test(F)},u.blackberry.api=["not"],u.desktop=function(){return u.not.mobile()&&u.not.tablet()},u.desktop.api=["not"],u.linux=function(){return/linux/i.test(h)},u.linux.api=["not"],u.mac=function(){return/mac/i.test(h)},u.mac.api=["not"],u.windows=function(){return/win/i.test(h)},u.windows.api=["not"],u.windowsPhone=function(){return u.windows()&&/phone/i.test(F)},u.windowsPhone.api=["not"],u.windowsTablet=function(){return u.windows()&&u.not.windowsPhone()&&/touch/i.test(F)},u.windowsTablet.api=["not"],u.mobile=function(){return u.iphone()||u.ipod()||u.androidPhone()||u.blackberry()||u.windowsPhone()},u.mobile.api=["not"],u.tablet=function(){return u.ipad()||u.androidTablet()||u.windowsTablet()},u.tablet.api=["not"],u.online=function(){return navigator.onLine},u.online.api=["not"],u.offline=r(u.online),u.offline.api=["not"],u.touchDevice=function(){return"ontouchstart"in window||"DocumentTouch"in window&&document instanceof DocumentTouch},u.touchDevice.api=["not"]}return u.propertyCount=function(t,e){if(!u.object(t)||!u.number(e))return!1;if(Object.keys)return Object.keys(t).length===e;var n,a=[];for(n in t)s.call(t,n)&&a.push(n);return a.length===e},u.propertyCount.api=["not"],u.propertyDefined=function(t,e){return u.object(t)&&u.string(e)&&e in t},u.propertyDefined.api=["not"],u.windowObject=function(t){return"object"==typeof t&&"setInterval"in t},u.domNode=function(t){return u.object(t)&&0<t.nodeType},u.inArray=function(t,e){if(u.not.array(e))return!1;for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1},u.inArray.api=["not"],u.sorted=function(t){if(u.not.array(t))return!1;for(var e=0;e<t.length;e++)if(t[e]>t[e+1])return!1;return!0},function(){var t=u;for(var e in t)if(s.call(t,e)&&u.function(t[e]))for(var n=t[e].api||["not","all","any"],a=0;a<n.length;a++)"not"===n[a]&&(u.not[e]=r(u[e])),"all"===n[a]&&(u.all[e]=i(u[e])),"any"===n[a]&&(u.any[e]=o(u[e]))}(),u.setRegexp=function(t,e){for(var n in c)s.call(c,n)&&e===n&&(c[n]=t)},u.setNamespace=function(){return e.is=n,this},u}),function(t,e){var n=function(a,c){"use strict";if(c.getElementsByClassName){var f,l,p=c.documentElement,i=a.Date,r=a.HTMLPictureElement,o="addEventListener",F="getAttribute",e=a[o],g=a.setTimeout,n=a.requestAnimationFrame||g,u=a.requestIdleCallback,h=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],s={},m=Array.prototype.forEach,y=function(t,e){return s[e]||(s[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),s[e].test(t[F]("class")||"")&&s[e]},w=function(t,e){y(t,e)||t.setAttribute("class",(t[F]("class")||"").trim()+" "+e)},A=function(t,e){var n;(n=y(t,e))&&t.setAttribute("class",(t[F]("class")||"").replace(n," "))},b=function(e,n,t){var a=t?o:"removeEventListener";t&&b(e,n),d.forEach(function(t){e[a](t,n)})},v=function(t,e,n,a,r){var i=c.createEvent("CustomEvent");return n||(n={}),n.instance=f,i.initCustomEvent(e,!a,!r,n),t.dispatchEvent(i),i},D=function(t,e){var n;!r&&(n=a.picturefill||l.pf)?n({reevaluate:!0,elements:[t]}):e&&e.src&&(t.src=e.src)},z=function(t,e){return(getComputedStyle(t,null)||{})[e]},x=function(t,e,n){for(n=n||t.offsetWidth;n<l.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},C=(bt=[],vt=At=[],(zt=function(t,e){yt&&!e?t.apply(this,arguments):(vt.push(t),wt||(wt=!0,(c.hidden?g:n)(Dt)))})._lsFlush=Dt=function(){var t=vt;for(vt=At.length?bt:At,wt=!(yt=!0);t.length;)t.shift()();yt=!1},zt),t=function(n,t){return t?function(){C(n)}:function(){var t=this,e=arguments;C(function(){n.apply(t,e)})}},M=function(t){var e,n,a=function(){e=null,t()},r=function(){var t=i.now()-n;t<99?g(r,99-t):(u||a)(a)};return function(){n=i.now(),e||(e=g(r,99))}};!function(){var t,e={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(t in l=a.lazySizesConfig||a.lazysizesConfig||{},e)t in l||(l[t]=e[t]);a.lazySizesConfig=l,g(function(){l.init&&I()})}();var O=(et=/^img$/i,nt=/^iframe$/i,at="onscroll"in a&&!/glebot/.test(navigator.userAgent),ot=-1,ut=function(t){it--,t&&t.target&&b(t.target,ut),(!t||it<0||!t.target)&&(it=0)},dt=function(t,e){var n,a=t,r="hidden"==z(c.body,"visibility")||"hidden"!=z(t,"visibility");for(W-=e,Y+=e,_-=e,Q+=e;r&&(a=a.offsetParent)&&a!=c.body&&a!=p;)(r=0<(z(a,"opacity")||1))&&"visible"!=z(a,"overflow")&&(n=a.getBoundingClientRect(),r=Q>n.left&&_<n.right&&Y>n.top-1&&W<n.bottom+1);return r},V=st=function(){var t,e,n,a,r,i,o,u,d,s=f.elements;if((Z=l.loadMode)&&it<8&&(t=s.length)){e=0,ot++,null==H&&("expand"in l||(l.expand=500<p.clientHeight&&500<p.clientWidth?500:370),q=l.expand,H=q*l.expFactor),rt<H&&it<1&&2<ot&&2<Z&&!c.hidden?(rt=H,ot=0):rt=1<Z&&1<ot&&it<6?q:0;for(;e<t;e++)if(s[e]&&!s[e]._lazyRace)if(at)if((u=s[e][F]("data-expand"))&&(i=1*u)||(i=rt),d!==i&&(R=innerWidth+i*U,L=innerHeight+i,o=-1*i,d=i),n=s[e].getBoundingClientRect(),(Y=n.bottom)>=o&&(W=n.top)<=L&&(Q=n.right)>=o*U&&(_=n.left)<=R&&(Y||Q||_||W)&&(l.loadHidden||"hidden"!=z(s[e],"visibility"))&&(S&&it<3&&!u&&(Z<3||ot<4)||dt(s[e],i))){if(ht(s[e]),r=!0,9<it)break}else!r&&S&&!a&&it<4&&ot<4&&2<Z&&(N[0]||l.preloadAfterLoad)&&(N[0]||!u&&(Y||Q||_||W||"auto"!=s[e][F](l.sizesAttr)))&&(a=N[0]||s[e]);else ht(s[e]);a&&!r&&ht(a)}},J=it=rt=0,G=l.ricTimeout,K=function(){X=!1,J=i.now(),V()},tt=u&&l.ricTimeout?function(){u(K,{timeout:G}),G!==l.ricTimeout&&(G=l.ricTimeout)}:t(function(){g(K)},!0),ct=function(t){var e;(t=!0===t)&&(G=33),X||(X=!0,(e=125-(i.now()-J))<0&&(e=0),t||e<9&&u?tt():g(tt,e))},lt=t(ft=function(t){w(t.target,l.loadedClass),A(t.target,l.loadingClass),b(t.target,pt),v(t.target,"lazyloaded")}),pt=function(t){lt({target:t.target})},Ft=function(t){var e,n=t[F](l.srcsetAttr);(e=l.customMedia[t[F]("data-media")||t[F]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},gt=t(function(t,e,n,a,r){var i,o,u,d,s,c;(s=v(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?w(t,l.autosizesClass):t.setAttribute("sizes",a)),o=t[F](l.srcsetAttr),i=t[F](l.srcAttr),r&&(u=t.parentNode,d=u&&h.test(u.nodeName||"")),c=e.firesLoad||"src"in t&&(o||i||d),s={target:t},c&&(b(t,ut,!0),clearTimeout(k),k=g(ut,2500),w(t,l.loadingClass),b(t,pt,!0)),d&&m.call(u.getElementsByTagName("source"),Ft),o?t.setAttribute("srcset",o):i&&!d&&(nt.test(t.nodeName)?function(e,n){try{e.contentWindow.location.replace(n)}catch(t){e.src=n}}(t,i):t.src=i),r&&(o||d)&&D(t,{src:i})),t._lazyRace&&delete t._lazyRace,A(t,l.lazyClass),C(function(){(!c||t.complete&&1<t.naturalWidth)&&(c?ut(s):it--,ft(s))},!0)}),mt=function(){if(!S){if(i.now()-B<999)return void g(mt,999);var t=M(function(){l.loadMode=3,ct()});S=!0,l.loadMode=3,ct(),e("scroll",function(){3==l.loadMode&&(l.loadMode=2),t()},!0)}},{_:function(){B=i.now(),f.elements=c.getElementsByClassName(l.lazyClass),N=c.getElementsByClassName(l.lazyClass+" "+l.preloadClass),U=l.hFac,e("scroll",ct,!0),e("resize",ct,!0),a.MutationObserver?new MutationObserver(ct).observe(p,{childList:!0,subtree:!0,attributes:!0}):(p[o]("DOMNodeInserted",ct,!0),p[o]("DOMAttrModified",ct,!0),setInterval(ct,999)),e("hashchange",ct,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){c[o](t,ct,!0)}),/d$|^c/.test(c.readyState)?mt():(e("load",mt),c[o]("DOMContentLoaded",ct),g(mt,2e4)),f.elements.length?(st(),C._lsFlush()):ct()},checkElems:ct,unveil:ht=function(t){var e,n=et.test(t.nodeName),a=n&&(t[F](l.sizesAttr)||t[F]("sizes")),r="auto"==a;(!r&&S||!n||!t[F]("src")&&!t.srcset||t.complete||y(t,l.errorClass)||!y(t,l.lazyClass))&&(e=v(t,"lazyunveilread").detail,r&&E.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,it++,gt(t,e,r,a,n))}}),E=(P=t(function(t,e,n,a){var r,i,o;if(t._lazysizesWidth=a,a+="px",t.setAttribute("sizes",a),h.test(e.nodeName||""))for(r=e.getElementsByTagName("source"),i=0,o=r.length;i<o;i++)r[i].setAttribute("sizes",a);n.detail.dataAttr||D(t,n.detail)}),T=function(t,e,n){var a,r=t.parentNode;r&&(n=x(t,r,n),(a=v(t,"lazybeforesizes",{width:n,dataAttr:!!e})).defaultPrevented||(n=a.detail.width)&&n!==t._lazysizesWidth&&P(t,r,a,n))},{_:function(){j=c.getElementsByClassName(l.autosizesClass),e("resize",$)},checkElems:$=M(function(){var t,e=j.length;if(e)for(t=0;t<e;t++)T(j[t])}),updateElem:T}),I=function(){I.i||(I.i=!0,E._(),O._())};return f={cfg:l,autoSizer:E,loader:O,init:I,uP:D,aC:w,rC:A,hC:y,fire:v,gW:x,rAF:C}}var j,P,T,$;var N,S,k,Z,B,R,L,W,_,Q,Y,q,H,U,V,X,J,G,K,tt,et,nt,at,rt,it,ot,ut,dt,st,ct,ft,lt,pt,Ft,gt,ht,mt;var yt,wt,At,bt,vt,Dt,zt}(t,t.document);t.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window),function(i){i.easing.jswing=i.easing.swing,i.extend(i.easing,{def:"easeOutQuad",swing:function(t,e,n,a,r){return i.easing[i.easing.def](t,e,n,a,r)},easeInQuad:function(t,e,n,a,r){return a*(e/=r)*e+n},easeOutQuad:function(t,e,n,a,r){return-a*(e/=r)*(e-2)+n},easeInOutQuad:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e+n:-a/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,a,r){return a*(e/=r)*e*e+n},easeOutCubic:function(t,e,n,a,r){return a*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,a,r){return a*(e/=r)*e*e*e+n},easeOutQuart:function(t,e,n,a,r){return-a*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e*e+n:-a/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,a,r){return a*(e/=r)*e*e*e*e+n},easeOutQuint:function(t,e,n,a,r){return a*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e*e*e+n:a/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,a,r){return-a*Math.cos(e/r*(Math.PI/2))+a+n},easeOutSine:function(t,e,n,a,r){return a*Math.sin(e/r*(Math.PI/2))+n},easeInOutSine:function(t,e,n,a,r){return-a/2*(Math.cos(Math.PI*e/r)-1)+n},easeInExpo:function(t,e,n,a,r){return 0==e?n:a*Math.pow(2,10*(e/r-1))+n},easeOutExpo:function(t,e,n,a,r){return e==r?n+a:a*(1-Math.pow(2,-10*e/r))+n},easeInOutExpo:function(t,e,n,a,r){return 0==e?n:e==r?n+a:(e/=r/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(2-Math.pow(2,-10*--e))+n},easeInCirc:function(t,e,n,a,r){return-a*(Math.sqrt(1-(e/=r)*e)-1)+n},easeOutCirc:function(t,e,n,a,r){return a*Math.sqrt(1-(e=e/r-1)*e)+n},easeInOutCirc:function(t,e,n,a,r){return(e/=r/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+n:a/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,a,r){t=1.70158;var i=0,o=a;return 0==e?n:1==(e/=r)?n+a:(i||(i=.3*r),o<Math.abs(a)?(o=a,t=i/4):t=i/(2*Math.PI)*Math.asin(a/o),-o*Math.pow(2,10*--e)*Math.sin(2*(e*r-t)*Math.PI/i)+n)},easeOutElastic:function(t,e,n,a,r){t=1.70158;var i=0,o=a;return 0==e?n:1==(e/=r)?n+a:(i||(i=.3*r),o<Math.abs(a)?(o=a,t=i/4):t=i/(2*Math.PI)*Math.asin(a/o),o*Math.pow(2,-10*e)*Math.sin(2*(e*r-t)*Math.PI/i)+a+n)},easeInOutElastic:function(t,e,n,a,r){t=1.70158;var i=0,o=a;return 0==e?n:2==(e/=r/2)?n+a:(i||(i=.3*r*1.5),o<Math.abs(a)?(o=a,t=i/4):t=i/(2*Math.PI)*Math.asin(a/o),e<1?-.5*o*Math.pow(2,10*--e)*Math.sin(2*(e*r-t)*Math.PI/i)+n:o*Math.pow(2,-10*--e)*Math.sin(2*(e*r-t)*Math.PI/i)*.5+a+n)},easeInBack:function(t,e,n,a,r,i){return null==i&&(i=1.70158),a*(e/=r)*e*((i+1)*e-i)+n},easeOutBack:function(t,e,n,a,r,i){return null==i&&(i=1.70158),a*((e=e/r-1)*e*((i+1)*e+i)+1)+n},easeInOutBack:function(t,e,n,a,r,i){return null==i&&(i=1.70158),(e/=r/2)<1?a/2*e*e*((1+(i*=1.525))*e-i)+n:a/2*((e-=2)*e*((1+(i*=1.525))*e+i)+2)+n},easeInBounce:function(t,e,n,a,r){return a-i.easing.easeOutBounce(t,r-e,0,a,r)+n},easeOutBounce:function(t,e,n,a,r){return(e/=r)<1/2.75?7.5625*a*e*e+n:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+n:a*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,a,r){return e<r/2?.5*i.easing.easeInBounce(t,2*e,0,a,r)+n:.5*i.easing.easeOutBounce(t,2*e-r,0,a,r)+.5*a+n}})}(jQuery);