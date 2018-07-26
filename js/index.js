require._addStyles = function(deps) {
    for (var i = 0; i < require._styles.length; i++) {
        deps.push('css!' + require._styles[i]);
    }
    return deps;
}

require(require._addStyles([
    'react',
    'react-dom',
    'redux',
    'react-redux',
    './components/App',
]),
function(
    React,
    ReactDOM,
    Redux,
    ReactRedux,
    App
) {
    const l = React.createElement;
    const { createStore } = Redux;

    ReactDOM.render(
        l(React.Fragment, {},
            //false ? null :
                //l('link', {
                    //rel:"stylesheet",
                    //href: require._themes['Cosmo']
                //}),
            l(App)
        ),
        document.getElementById('root'),
        function() {
            document.getElementById('preloader').style.display = 'none';
        }
    );
});
