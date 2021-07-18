define([
    "react",
    "redux",
    "react-redux",
    "../Utils"
],
function(
    React,
    Redux,
    ReactRedux,
    Utils
) {
    var E = React.createElement;

    return function(props) {
        var chld = React.Children.toArray(props.children);

        return E("div", null,
            chld[0],
            "TEST CONTENT",
            chld[1]
        );
    };
});
