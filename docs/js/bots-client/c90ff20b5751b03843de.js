webpackJsonp([145],{815:function(e,r,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var t=a(n(208)),u=a(n(207)),o={narrow:["di","lu","ma","me","je","ve","sa"],short:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],long:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},l={short:["janv.","févr.","mars","avr.","mai","juin","juill.","août","sept.","oct.","nov.","déc."],long:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},i={uppercase:["AM","PM"],lowercase:["am","pm"],long:["du matin","de l’après-midi","du soir"]},d={ordinalNumber:function(e,r){var n=Number(e),a=r||{},t=a.unit?String(a.unit):null;return"isoWeek"===t||"week"===t?function(e){return 1===e?"1re":e+"e"}(n):function(e){return 1===e?"1er":e+"e"}(n)},weekday:(0,t.default)(o,"long"),weekdays:(0,u.default)(o,"long"),month:(0,t.default)(l,"long"),months:(0,u.default)(l,"long"),timeOfDay:function(e,r){var n=Number(e),a=r||{},t=a.type?String(a.type):"long";return"uppercase"===t?n/12>=1?i.uppercase[1]:i.uppercase[0]:"lowercase"===t?n/12>=1?i.lowercase[1]:i.lowercase[0]:n<=12?i.long[0]:n<=16?i.long[1]:i.long[2]},timesOfDay:(0,u.default)(i,"long")};r.default=d,e.exports=r.default}});