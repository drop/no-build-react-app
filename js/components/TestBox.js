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

    return Utils.extendClass({
        render: function() {
            return l('div', {style:{color: "red"}},
               'TEST CONTENT' 
            );
        },
    });
});
