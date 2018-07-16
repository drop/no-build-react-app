require([
    'react',
    'react-dom',
    'redux',
    'react-redux'
],
function(
    React,
    ReactDOM,
    Redux,
    ReactRedux
) {
    const l = React.createElement;
    const { createStore } = Redux;

    ReactDOM.render(
          l('h1', {className: 'test-class'}, 'Hello, world!'),
          document.getElementById('root')
    );
});
