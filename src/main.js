console.log('Test!', require('path'));

var React = require('react');
var Button = require('./Button.jsx');

React.renderComponent(Button({
    value: 'Hello World!'
}), document.getElementById('button'));
