/**
 * @jsx React.DOM
 */

var React = require('react');

var Button = React.createClass({
    render: function() {
        return (
            <button className='custom-button'>
                {this.props.value}
            </button>
        );
    }
});

module.exports = Button;
