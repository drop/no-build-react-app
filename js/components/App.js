define([
    'react',
    'styled-components',
    '../Utils',
    './TestBox',
    'css!./App.css',
],
function(
    React,
    styled,
    Utils,
    TestBox
) {
    var E = React.createElement;

    var ColorHeader = styled('h1')([], '\
        font-size: 80px;                \
        background-color: lightblue;    \
        color: green;                   \
                                        \
        &:first-child {                 \
            font-size: 100px;           \
            color: violet;              \
        }                               \
        ');

    var BigColorHeader = styled(ColorHeader)([], '  \
        font-size: 120px;                           \
        background-color: orange;                   \
        color: red;                                 \
    ');

    return function() {
        return E('div', null, 
            'This is root component',
            'Test string',
            E('div', null, 
                'One more test string',
                E(ColorHeader, null, 'Test Header!'),
                E(ColorHeader, null, 'Second Header!'),
                E(ColorHeader, null, 'Third Header!'),
                E(BigColorHeader, null, 'Fourth Header!')
            ),
            E(TestBox, null,
                '123',
                '456'
            )
        );
    };
});
