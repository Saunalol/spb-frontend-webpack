console.log('Test!', require('path'));

var React = require('react');
var Button = require('./Button.jsx');
var AppBody = require('./AppBody.jsx');

React.renderComponent(Button({
        value: 'Hello World!'
    }),
    document.getElementById('button'));

React.renderComponent(AppBody(),
    document.getElementById('main'));
