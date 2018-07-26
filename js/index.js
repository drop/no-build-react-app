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
    './Utils',
]),
function(
    React,
    ReactDOM,
    Redux,
    ReactRedux,
    App,
    Utils
) {
    var l = React.createElement;
    var createStore = Redux.createStore;
    var rootComponent = l(Utils.createReactClass({
        render: function() {
            var self = this;
            console.log(this.props);
            setTimeout(function() {
                require._loadTheme = true;
                self.forceUpdate();
            }, 5000); 

            return l(React.Fragment, {},
                require._loadTheme ? 
                    l('link', {
                        rel:"stylesheet",
                        href: require._themes['Cosmo']
                    }) : null,
                    l(App)
            );
        },
    }));

    ReactDOM.render(
        rootComponent,
        document.getElementById('root'),
        function() {
            document.getElementById('preloader').style.display = 'none';
        }
    );
});
