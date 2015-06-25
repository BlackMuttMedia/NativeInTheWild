"use strict";

var React = require("react");
var DataStore = require("../stores/data-store");
var TestTable = require("./test_table");
var DataActionCreators = require("../actions/data-action-creators");

//creates a new store entry by id
var initializeDataStore = function (data, id) {
	DataActionCreators.initializeGriddle(data, id);
};

var populateDataStore = function (data, id) {
	if (data !== DataStore.getData()) {
		DataActionCreators.loadData(data, id);
	}
};

var TestTableWrapper = React.createClass({
	displayName: "TestTableWrapper",
	getInitialState: function () {
		//hopefully this is the only bit of state not in a store
		return {
			id: _.uniqueId("griddle-table")
		};
	},
	componentWillMount: function () {
		if (this.props.data) {
			initializeDataStore(this.props.data, this.state.id);
		}
	},
	componentWillReceiveProps: function (nextProps) {
		if (nextProps.data) {
			populateDataStore(this.props.data, this.state.id);
		}
	},
	render: function () {
		return React.createElement(TestTable, { id: this.state.id });
	}
});

module.exports = TestTableWrapper;