webpackJsonp([84],{882:function(e,i,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var n=u(a(208)),r=u(a(207)),t={narrow:["du","lu","ma","mi","jo","vi","sâ"],short:["dum","lun","mar","mie","joi","vin","sâm"],long:["duminică","luni","marți","miercuri","joi","vineri","sâmbăta"]},o={short:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],long:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},l={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},m={ordinalNumber:function(e){var i=Number(e);return String(i)},weekday:(0,n.default)(t,"long"),weekdays:(0,r.default)(t,"long"),month:(0,n.default)(o,"long"),months:(0,r.default)(o,"long"),timeOfDay:(0,n.default)(l,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,r.default)(l,"long")};i.default=m,e.exports=i.default}});