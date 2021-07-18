require(require.addStyles([
    "react",
    "react-dom",
    'react-redux',
    "./components/App",
    "./state/index"
]),
function(
    React,
    ReactDOM,
    ReactRedux,
    App,
    ReduxState
) {
    var E = React.createElement;
    var Provider = ReactRedux.Provider;

    ReactDOM.render(
        E(Provider, {store: ReduxState.store},
            E(App, null)
        ),
        document.getElementById('root'),
        function() {
            document.getElementById('preloader').style.display = 'none';
        }
    );
});
