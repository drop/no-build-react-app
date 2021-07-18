requirejs.config({
    baseUrl: './js',
    deps: ['./index'],
    paths: {
        //'react': 'https://unpkg.com/react@17/umd/react.production.min.js',
        //'react-dom': 'https://unpkg.com/react-dom@17/umd/react-dom.production.min',
        'react': 'https://unpkg.com/react@17/umd/react.development',
        'react-dom': 'https://unpkg.com/react-dom@17/umd/react-dom.development',
        'redux': 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.min',
        'react-redux': 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min',
        'react-is': 'https://cdnjs.cloudflare.com/ajax/libs/react-is/16.9.0/umd/react-is.production.min',
        'styled-components': 'https://cdnjs.cloudflare.com/ajax/libs/styled-components/5.3.0/styled-components.min',
        'lodash-core': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.core.min.js',
        'axios': 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js',
    },
    map: {
        '*': {
            'css': 'https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css.min.js',
        },
    },
});

require._themes = {
    'default': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
    'Yeti': 'https://bootswatch.com/3/yeti/bootstrap.min.css',
};

require._styles = [
    //'../css/reset',
    '../css/global',
    //'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min',
    //require._themes.default,
];

require.addStyles = function(paths) {
    for (var i = 0; i < require._styles.length; i++) {
        paths.push('css!' + require._styles[i]);
    }
    return paths;
}
