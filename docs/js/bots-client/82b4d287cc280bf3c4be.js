webpackJsonp([99],{867:function(e,a,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var r=o(n(208)),t=o(n(207)),u={narrow:["zo","ma","di","wo","do","vr","za"],short:["zon","maa","din","woe","don","vri","zat"],long:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},d={short:["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],long:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},l={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},i={ordinalNumber:function(e){return Number(e)+"e"},weekday:(0,r.default)(u,"long"),weekdays:(0,t.default)(u,"long"),month:(0,r.default)(d,"long"),months:(0,t.default)(d,"long"),timeOfDay:(0,r.default)(l,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,t.default)(l,"long")};a.default=i,e.exports=a.default}});