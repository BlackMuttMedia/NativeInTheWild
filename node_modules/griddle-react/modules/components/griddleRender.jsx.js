"use strict";

var React = require("react");
var GridTable = require("./gridTable.jsx");
var GridFilter = require("./gridFilter.jsx");
var GridPagination = require("./gridPagination.jsx");
var GridSettings = require("./gridSettings.jsx");
var GridNoData = require("./gridNoData.jsx");
var CustomRowComponentContainer = require("./customRowComponentContainer.jsx");
var CustomPaginationContainer = require("./customPaginationContainer.jsx");
var ColumnProperties = require("../classes/columnProperties");
var RowProperties = require("../classes/rowProperties");
var _ = require("underscore");

//this has no state - gets everything from its own props (and in the future flux stores)
var GriddleRender = React.createClass({
	displayName: "GriddleRender",


	render: function () {}
});

module.exports = GriddleRender;