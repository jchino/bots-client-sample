webpackJsonp([44],{924:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(208)),u=o(n(207)),r={narrow:["日","一","二","三","四","五","六"],short:["周日","周一","周二","周三","周四","周五","周六"],long:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},a={short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},f={long:["上午","下午"]},d={ordinalNumber:function(e){var t=Number(e);return String(t)},weekday:(0,l.default)(r,"long"),weekdays:(0,u.default)(r,"long"),month:(0,l.default)(a,"long"),months:(0,u.default)(a,"long"),timeOfDay:(0,l.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,u.default)(f,"long")};t.default=d,e.exports=t.default}});