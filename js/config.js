requirejs.config({
    baseUrl: './js',
    deps: ['./index'],
    paths: {
        'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/16.4.1/umd/react.development',
        'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.1/umd/react-dom.development',
        'redux': 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.min',
        'react-redux': 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min',
    },
});
