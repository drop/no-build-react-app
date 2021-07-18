define([
  "react",
],
function(
    React,
) {
    var E = React.createElement;
    var Context = React.createContext({});

    var Provider = function(props) {
        return E(Context.Provider, { value: {}}, props.children);
    };

    return {
        Provider: Provider
    };
});
