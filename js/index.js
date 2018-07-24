require([
    'react',
    'react-dom',
    'redux',
    'react-redux',
    './components/TestBox',
],
function(
    React,
    ReactDOM,
    Redux,
    ReactRedux,
    TestBox
) {
    const l = React.createElement;
    const { createStore } = Redux;

    ReactDOM.render(
        l('h1', {className: 'test-class'}, [
            'This is root component',
            'Test string',
            l(TestBox, {key:""}),
            l(TestBox, {key:"1"}),
        ]),
        document.getElementById('root')
    );
});
