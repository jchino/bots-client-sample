webpackJsonp([34],{912:function(e,t,r){"use strict";function n(e){return"[у "+a[e]+" о] LT"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n){var u=s[e];return"function"==typeof u?u(t,r,n):u};var u=function(e){return e&&e.__esModule?e:{default:e}}(r(967)),a=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"],s={lastWeek:function(e,t,r){var s=e.getUTCDay();return(0,u.default)(e,t,r)?n(s):function(e){var t=a[e];switch(e){case 0:case 3:case 5:case 6:return"[у минулу "+t+" о] LT";case 1:case 2:case 4:return"[у минулий "+t+" о] LT"}}(s)},yesterday:"[вчора о] LT",today:"[сьогодні о] LT",tomorrow:"[завтра о] LT",nextWeek:function(e,t,r){var s=e.getUTCDay();return(0,u.default)(e,t,r)?n(s):function(e){var t=a[e];switch(e){case 0:case 3:case 5:case 6:return"[у наступну "+t+" о] LT";case 1:case 2:case 4:return"[у наступний "+t+" о] LT"}}(s)},other:"L"};e.exports=t.default},967:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var u=(0,n.default)(e,r),a=(0,n.default)(t,r);return u.getTime()===a.getTime()};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(968));e.exports=t.default},968:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t||{},u=r.locale,a=u&&u.options&&u.options.weekStartsOn,s=void 0===a?0:Number(a),o=void 0===r.weekStartsOn?s:Number(r.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=(0,n.default)(e,r),f=c.getUTCDay(),i=(f<o?7:0)+f-o;return c.setUTCDate(c.getUTCDate()-i),c.setUTCHours(0,0,0,0),c};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(42));e.exports=t.default}});