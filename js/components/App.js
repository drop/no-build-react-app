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
    const ButtonToolbar = ReactBootstrap.ButtonToolbar;
    const ToggleButtonGroup = ReactBootstrap.ToggleButtonGroup;
    const ToggleButton = ReactBootstrap.ToggleButton;

    return Utils.extendClass(React.Component, {
        render: function() {
            var chld = React.Children.toArray(this.props.children);
            return l('div', {className: 'test-class'}, 
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
                    'One more test string',
                    l(ButtonToolbar, null,
                        l(ToggleButtonGroup, { type: "radio", name: "options", defaultValue: 1 },
                            l(ToggleButton, { value: 1 },
                                "Radio 1 (pre-checked)"
                            ),
                            l(ToggleButton, { value: 2 },
                                "Radio 2"
                            ),
                            l(ToggleButton, { value: 3 },
                                "Radio 3"
                            )
                        )
                    )
                ),
                l(ButtonToolbar, {},
                    l(ToggleButtonGroup, {type: "checkbox", defaultValue: [1, 3]},
                        l(ToggleButton, {value: 1}, 'Checkbox 1 (pre-checked)'),
                        l(ToggleButton, {value: 2}, 'Checkbox 2'),
                        l(ToggleButton, {value: 3}, 'Checkbox 3 (pre-checked)')
                    )
                )
            );
        },
    });
});
