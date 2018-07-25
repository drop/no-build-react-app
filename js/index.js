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
        l('h1', {className: 'test-class'}, 
            'This is root component',
            'Test string',
            l(TestBox),
            l('div', {style: {color: 'green'}}, 
                l(TestBox, '',
                    l('div', {style: {color: 'yellow'}},
                        'NEW STRING 1',
                        'NEW STRING 2',
                    ),
                    l('div', {style: {color: 'magenta'}},
                        'NEW STRING 1',
                        'NEW STRING 2',
                    )
                ),
                'One more test string'
            )
        ),
        document.getElementById('root')
    );
});
