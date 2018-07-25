define([
    'react',
    'redux',
    'react-redux',
    '../Utils',
],
function(
    React,
    Redux,
    ReactRedux,
    Utils,
) {
    const l = React.createElement;

    return Utils.extendClass(React.Component, {
        render: function() {
            var chld = React.Children.toArray(this.props.children);
            return l('div', {style:{color: "red"}},
                chld[0],
                'TEST CONTENT',
                chld[1]
            );
        },
    });
});
