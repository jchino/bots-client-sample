webpackJsonp([74],{893:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(o(208)),r=n(o(207)),u={narrow:["ne","po","ut","st","št","pi","so"],short:["neď","pon","uto","str","štv","pia","sob"],long:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},l={short:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],long:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},s={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},d={ordinalNumber:function(e){return Number(e)+"."},weekday:(0,a.default)(u,"long"),weekdays:(0,r.default)(u,"long"),month:(0,a.default)(l,"long"),months:(0,r.default)(l,"long"),timeOfDay:(0,a.default)(s,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,r.default)(s,"long")};t.default=d,e.exports=t.default}});