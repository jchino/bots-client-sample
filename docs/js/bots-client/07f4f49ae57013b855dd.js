webpackJsonp([139],{827:function(e,o,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var a=n(t(208)),u=n(t(207)),l={narrow:["ne","po","ut","sr","če","pe","su"],short:["ned","pon","uto","sri","čet","pet","sub"],long:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"]},r={short:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],long:["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"]},s={long:["ujutro","popodne"]},d={ordinalNumber:function(e){return Number(e)+"."},weekday:(0,a.default)(l,"long"),weekdays:(0,u.default)(l,"long"),month:(0,a.default)(r,"long"),months:(0,u.default)(r,"long"),timeOfDay:(0,a.default)(s,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,u.default)(s,"long")};o.default=d,e.exports=o.default}});