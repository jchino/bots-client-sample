webpackJsonp([119],{847:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(208)),u=o(n(207)),a={narrow:["日","月","火","水","木","金","土"],short:["日曜","月曜","火曜","水曜","木曜","金曜","土曜"],long:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},r={short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],long:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},f={long:["午前","午後"]},d={ordinalNumber:function(e){return Number(e)+"日"},weekday:(0,l.default)(a,"long"),weekdays:(0,u.default)(a,"long"),month:(0,l.default)(r,"long"),months:(0,u.default)(r,"long"),timeOfDay:(0,l.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,u.default)(f,"long")};t.default=d,e.exports=t.default}});