/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["ojs/ojcore","jquery","knockout","ojs/ojdatasource-common"],function(t,e,a){"use strict";t.ArrayPagingDataSource=function(t){this.data=t,this.current=0,this.Init(),this._setPageSize(10)},t.Object.createSubclass(t.ArrayPagingDataSource,t.DataSource,"oj.ArrayPagingDataSource"),t.ArrayPagingDataSource.prototype.Init=function(){t.ArrayPagingDataSource.superclass.Init.call(this)},t.ArrayPagingDataSource.prototype._getSize=function(){return this._hasMore()?this.currentPageSize:this.totalSize()-this.current},t.ArrayPagingDataSource.prototype._refreshDataWindow=function(t){t=t||{},this.dataWindow=new Array(this._getSize());for(var e=0;e<this.dataWindow.length;e++)this.dataWindow[e]=this.data[this.current+e];this._refreshObservableDataWindow(),this._endIndex=this._startIndex+this.dataWindow.length-1,t.silent||this.handleEvent("sync",{data:this.dataWindow,startIndex:this.current})},t.ArrayPagingDataSource.prototype._refreshObservableDataWindow=function(){if(void 0!==this.observableDataWindow){this.observableDataWindow.removeAll();for(var t=0;t<this.dataWindow.length;t++)this.observableDataWindow.push(this.dataWindow[t])}},t.ArrayPagingDataSource.prototype.handleEvent=function(e,a){return t.ArrayPagingDataSource.superclass.handleEvent.call(this,e,a)},t.ArrayPagingDataSource.prototype.getWindow=function(){return this.dataWindow},t.ArrayPagingDataSource.prototype.getWindowObservable=function(){return void 0===this.observableDataWindow&&(this.observableDataWindow=a.observableArray(),this._refreshObservableDataWindow()),this.observableDataWindow},t.ArrayPagingDataSource.prototype.getPage=function(){return this._page},t.ArrayPagingDataSource.prototype.setPage=function(e,a){a=a||{},e=parseInt(e,10);var r=t.ArrayPagingDataSource.superclass.handleEvent;try{r.call(this,t.PagingModel.EventType.BEFOREPAGE,{page:e,previousPage:this._page})}catch(t){return Promise.reject(t)}this.pageSize=null!=a.pageSize?a.pageSize:this.pageSize,a.startIndex=e*this.pageSize;var i=this._page;this._page=e,this._startIndex=a.startIndex;var n=this;return new Promise(function(e,o){n._fetchInternal(a).then(function(){r.call(n,t.PagingModel.EventType.PAGE,{page:n._page,previousPage:i}),e(null)},function(t){n._page=i,n._startIndex=n._page*n.pageSize,o(t)})})},t.ArrayPagingDataSource.prototype.getStartItemIndex=function(){return this._startIndex},t.ArrayPagingDataSource.prototype.getEndItemIndex=function(){return this._endIndex},t.ArrayPagingDataSource.prototype.getPageCount=function(){var t=this.totalSize();return-1===t?-1:Math.ceil(t/this.pageSize)},t.ArrayPagingDataSource.prototype.fetch=function(t){var e=t||{};if(void 0!==e.pageSize&&void 0!==e.startIndex){if(!this._hasMore())return Promise.resolve();this.currentPageSize=e.startIndex+e.pageSize}return this._refreshDataWindow(null),Promise.resolve()},t.ArrayPagingDataSource.prototype._fetchInternal=function(t){var e=t||{};return void 0!==e.startIndex&&(this.current=e.startIndex),void 0!==e.pageSize&&(this.pageSize=e.pageSize,this.currentPageSize=e.pageSize),this._refreshDataWindow(t),Promise.resolve({data:this.dataWindow,startIndex:this.current})},t.ArrayPagingDataSource.prototype._hasMore=function(){return this.current+this.currentPageSize<this.totalSize()},t.ArrayPagingDataSource.prototype._setPageSize=function(t){this.pageSize=t,this.currentPageSize=t,this._refreshDataWindow(null)},t.ArrayPagingDataSource.prototype.totalSize=function(){return this.data.length},t.ArrayPagingDataSource.prototype.totalSizeConfidence=function(){return"actual"},t.ArrayPagingDataSource.prototype.getCapability=function(t){return null}});