define([
    'react',
    'react-bootstrap',
    '../Utils',
    './TestBox',
],
function(
    React,
    ReactBootstrap,
    Utils,
    TestBox
) {
    const l = React.createElement;
    console.log('ReactBootstrap: ', ReactBootstrap);
    return Utils.extendClass(React.Component, {

        render: function() {
            var chld = React.Children.toArray(this.props.children);
            return l('h1', {className: 'test-class'}, 
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
            );
        },
    });
});
