/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["ojs/ojcore","jquery","ojs/ojcontext","ojs/ojconfig","ojs/ojoffcanvas","ojs/ojswipetoreveal","ojs/ojoption","touchr"],function(e,t,n,s,o,i){"use strict";var a={properties:{translations:{type:"object",value:{},properties:{ariaHideActionsDescription:{type:"string"},ariaShowEndActionsDescription:{type:"string"},ariaShowStartActionsDescription:{type:"string"}}}},methods:{refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAction:{}},extension:{}};e.__registerWidget("oj.ojSwipeActions",t.oj.baseComponent,{version:"1.0.0",defaultElement:"<div>",widgetEventPrefix:"oj",options:{action:null},_ComponentCreate:function(){var e,n=this,s=!1,o=!1,i=!1;this._super(),this.element.uniqueId(),this.element[0].classList.add("oj-swipeactions","oj-component"),this.element[0].setAttribute("tabIndex","-1"),this._on(!0,{touchstart:function(t){null!=(e=n.element[0].querySelector(".oj-offcanvas-open"))&&e.offsetWidth>0&&t.preventDefault(),s=!0},touchend:function(e){s&&n._handleAction(e),s=!1},keydown:function(t){27===t.keyCode?(e=t.target.parentNode.parentNode).classList.contains("oj-offcanvas-open")&&(n._close({selector:e,_animate:!1}),t.preventDefault()):13===t.keyCode&&t.target.classList.contains("oj-swipeactions-action-panel")&&(o=!0)},keyup:function(e){13===e.keyCode&&o&&n._handleAction(e),o=!1},mouseup:function(e){this.m_content&&!this.m_content.contains(e.target)&&n._handleAction(e)},ojdefaultaction:function(e,s){var o=t(s.selector).children("oj-option.oj-swipetoreveal-default");o.length>0&&(n._fireActionEvent(o[0],null),i=!0)},ojopen:function(e,t){i&&n._close(t),i=!1,n._releaseBusyState()},ojclose:function(e,s){var o=t(s.selector).children(".oj-swipeactions-hide-actions-link");o.length>0&&o[0].parentNode.removeChild(o[0]),n._releaseBusyState()}}),this._focusable({applyHighlight:!0,setupHandlers:function(e,t){n._focusInHandler=e,n._focusOutHandler=t}}),this._setup()},_releaseBusyState:function(){this.busyStateResolve&&(this.busyStateResolve(),this.busyStateResolve=null)},_close:function(e){var t=n.getContext(this.element[0]).getBusyContext().addBusyState({description:"closing offcanvas"});o.close(e).then(function(){t()})},_handleAction:function(e){var n=t(e.target).parents("oj-option");n.length>0&&(this._fireActionEvent(n[0],e),this._close({selector:n[0].parentNode}))},_SetupResources:function(){this._super(),this._setupOrReleaseOffcanvas(i.tearDownSwipeActions),this._setupOrReleaseOffcanvas(i.setupSwipeActions)},_ReleaseResources:function(){this._super(),this._setupOrReleaseOffcanvas(i.tearDownSwipeActions),this._releaseBusyState()},_setupOrReleaseOffcanvas:function(e){this._applyOffcanvas("oj-offcanvas-start",e),this._applyOffcanvas("oj-offcanvas-end",e)},_closeAllOffcanvas:function(){var e=this,t=function(t){e._close({selector:t})};this._applyOffcanvas("oj-offcanvas-start",t),this._applyOffcanvas("oj-offcanvas-end",t)},_applyOffcanvas:function(e,t){var n=this.element[0].querySelector("."+e);n&&t(n)},_fireActionEvent:function(n,s){var o={};s&&(o.originalEvent=s instanceof t.Event?s.originalEvent:s);var i={detail:o,cancelable:!0,bubbles:!0};e.DomUtils.dispatchEvent(n,new CustomEvent("ojAction",i))},refresh:function(){this._super(),this._releaseBusyState(),this._setupOrReleaseOffcanvas(i.tearDownSwipeActions),this._setup(),this._setupOrReleaseOffcanvas(i.setupSwipeActions)},_createOffcanvas:function(e,t){var n=e[t];if(n&&n.length>0&&"TEMPLATE"===n[0].tagName){var s=document.createElement("div");s.className="start"===t?"oj-offcanvas-start":"oj-offcanvas-end",this.element[0].appendChild(s),this._renderAccessibleLink(s)}},_setup:function(){var s=this;this.element[0].classList.add("oj-offcanvas-inner-wrapper"),this.element[0].parentNode.classList.add("oj-offcanvas-outer-wrapper");var o=e.BaseCustomElementBridge.getSlotMap(this.element[0]),i=o[""];i&&i.length>0&&(this.m_content=i[0],this.m_content.classList.add("oj-swipeactions-content")),this._createOffcanvas(o,"start"),this._createOffcanvas(o,"end"),t(this.element).on("ojpanstart",function(e){e.isDefaultPrevented()||s._renderOffcanvas(e.target)}),t(this.element).on("ojpanend",function(){var e=n.getContext(s.element[0]).getBusyContext();s.busyStateResolve=e.addBusyState({description:"opening or closing offcanvas"})})},_renderOffcanvas:function(t,o){var i=this;t.setAttribute("role","toolbar"),t.setAttribute("data-oj-context","");var a=e.BaseCustomElementBridge.getSlotMap(this.element[0]),c=t.classList.contains("oj-offcanvas-start")?a.start[0]:a.end[0],r=n.getContext(i.element[0]).getBusyContext(),l=r.addBusyState({description:"rendering ojoptions"});s.__getTemplateEngine().then(function(e){i._render(e,t,c),o?(r=n.getContext(t).getBusyContext()).whenReady().then(function(){o(),l()}):l()},function(e){throw l(),new Error("Error loading template engine: "+e)})},_showAccessibleLinks:function(){for(var e=0,t=this.element[0].querySelectorAll("a.oj-helper-hidden-accessible"),n=0;n<t.length;n++)t[n].style.left=e+"px",t[n].className="oj-swipeactions-accessible-link",e=e+t[n].offsetWidth+5},_hideAccessibleLinks:function(){for(var e=this.element[0].querySelectorAll("a.oj-swipeactions-accessible-link"),t=0;t<e.length;t++)e[t].className="oj-helper-hidden-accessible"},_isIE11:function(){var t=e.AgentUtils.getAgentInfo();return"ie"===t.browser&&11===t.browserVersion},_renderAccessibleLink:function(s){var i=!1,a=this,c=document.createElement("a");c.setAttribute("tabIndex","0"),c.setAttribute("href","#"),c.textContent=this.getTranslatedString(s.classList.contains("oj-offcanvas-start")?"ariaShowStartActionsDescription":"ariaShowEndActionsDescription");var r=e.AgentUtils.getAgentInfo().os===e.AgentUtils.OS.ANDROID;r?(c.style.color="transparent",c.className="oj-swipeactions-accessible-link",s.classList.contains("oj-offcanvas-end")&&null!=this.element[0].querySelector("a.oj-swipeactions-accessible-link")&&(c.style.right="0px"),c.addEventListener("touchstart",function(e){i=e.touches[0].force>0})):c.className="oj-helper-hidden-accessible",c.addEventListener("focus",function(){r||a._showAccessibleLinks(),a._closeAllOffcanvas()}),c.addEventListener("blur",function(e){null==e.relatedTarget||e.relatedTarget.classList.contains("oj-swipeactions-accessible-link")?null==e.relatedTarget&&a._isIE11()&&setTimeout(function(){document.activeElement.classList.contains("oj-swipeactions-accessible-link")||a._hideAccessibleLinks()},0):setTimeout(function(){r||a._hideAccessibleLinks()},0)}),c.addEventListener("click",function(e){i||(e.preventDefault(),a._renderOffcanvas(s,function(){t(s).children("oj-option").addClass("oj-swipetoreveal-action").children().attr("tabIndex",0);var e={};e.selector=s,e.autoDismiss="none",e._animate=!1;var i=document.createElement("a");i.className="oj-swipeactions-hide-actions-link",i.setAttribute("tabIndex","0"),i.setAttribute("href","#"),i.setAttribute("aria-label",a.getTranslatedString("ariaHideActionsDescription")),i.addEventListener("click",function(){a._close(e)}),r&&i.addEventListener("touchend",function(){a._close(e)});var c=n.getContext(a.element[0]).getBusyContext().addBusyState({description:"opening offcanvas"});o.open(e).then(function(){s.appendChild(i),c()})}))}),this.element[0].appendChild(c)},_render:function(e,n,s){var o=this;t(n).children("oj-option").remove();var i=[];e.execute(this.element[0],s,null).forEach(function(e){"OJ-OPTION"===e.tagName&&i.push(e)}),i.forEach(function(e){e.customOptionRenderer=o._customOptionRenderer.bind(o),n.appendChild(e)})},_customOptionRenderer:function(n){var s=this;if(!(t(n).children("div").length>0)){n.setAttribute("role","button"),n.classList.contains("oj-swipeactions-default")&&n.classList.add("oj-swipetoreveal-default");var o=document.createElement("div");o.className="oj-flex-bar oj-swipeactions-action-panel",o.addEventListener("focus",function(){s._focusInHandler(t(o))}),o.addEventListener("blur",function(){s._focusOutHandler(t(o))});var i=document.createElement("div");i.className="oj-flex-bar-center-absolute",o.appendChild(i);var a=document.createElement("div");a.className="oj-flex oj-sm-flex-direction-column",i.appendChild(a);var c=e.BaseCustomElementBridge.getSlotMap(n),r=c.startIcon;r&&r.forEach(function(e){a.appendChild(e)});var l=document.createElement("div");l.className="oj-flex-item oj-swipeactions-action-text",a.appendChild(l);var u=c[""];u&&u.forEach(function(e){l.appendChild(e)}),t(n).prepend(o)}}}),a.extension._WIDGET_NAME="ojSwipeActions",e.CustomElementBridge.register("oj-swipe-actions",{metadata:a})});