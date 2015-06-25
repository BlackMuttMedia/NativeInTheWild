"use strict";

var React = require("react");
var DataStore = require("../stores/data-store");
var ScrollStore = require("../stores/scroll-store");


function getStateFromStore(id) {
	return { data: DataStore.getData(id) };
}

var TestTable = React.createClass({
	displayName: "TestTable",
	propTypes: function () {
		return { id: React.PropTypes.number.isRequired };
	},
	dataChange: function () {
		this.setState(getStateFromStore(this.props.id));
	},
	getInitialState: function () {
		return getStateFromStore(this.props.id);
	},
	componentDidMount: function () {
		DataStore.addChangeListener(this.dataChange);
	},
	componentWillUnmount: function () {
		DataStore.removeChangeListener(this.dataChange);
	},
	render: function () {
		debugger;
		var rows = this.state.data.map(function (row) {
			return React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					row.name
				),
				React.createElement(
					"td",
					null,
					row.company
				),
				React.createElement(
					"td",
					null,
					row.id
				)
			);
		});

		return React.createElement(
			"table",
			null,
			React.createElement(
				"tbody",
				null,
				rows
			)
		);
	}
});

module.exports = TestTable;