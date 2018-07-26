requirejs.config({
    baseUrl: './js',
    deps: ['./index'],
    paths: {
        //'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/16.4.1/umd/react.production.min',
        //'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.1/umd/react-dom.production.min',
        'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/16.4.1/umd/react.development',
        'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.1/umd/react-dom.development',
        'redux': 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.min',
        'react-redux': 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min',
        'react-bootstrap': 'https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.32.1/react-bootstrap.min',
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
    'SpaceLab': 'https://bootswatch.com/3/spacelab/bootstrap.min.css',
    'SuperHero': 'https://bootswatch.com/3/superhero/bootstrap.min.css',
    'Lumen': 'https://bootswatch.com/3/lumen/bootstrap.min.css',
    'Slate': 'https://bootswatch.com/3/slate/bootstrap.min.css',
    'Sandstone': 'https://bootswatch.com/3/sandstone/bootstrap.min.css',
    'United': 'https://bootswatch.com/3/united/bootstrap.min.css',
    'Cosmo': 'https://bootswatch.com/3/cosmo/bootstrap.min.css',
    'Cyborg': 'https://bootswatch.com/3/cyborg/bootstrap.min.css',
    'Cerulean': 'https://bootswatch.com/3/cerulean/bootstrap.min.css',
    'Flatly': 'https://bootswatch.com/3/flatly/bootstrap.min.css',
    'Journal': 'https://bootswatch.com/3/journal/bootstrap.min.css',
    'Paper': 'https://bootswatch.com/3/paper/bootstrap.min.css',
    'Readable': 'https://bootswatch.com/3/readable/bootstrap.min.css',
};

require._styles = [
    '../css/global',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min',
    require._themes.Paper
];
