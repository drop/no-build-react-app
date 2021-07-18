define([
  "redux"
],
function(
    Redux
) {
    function createThunkMiddleware(extraArgument) {
        return function(thunkArgs) {
            var dispatch = thunkArgs.dispatch;
            var getState = thunkArgs.getState;

            return function(next) {
                return function(action) {
                    if (typeof action === 'function') {
                      return action(dispatch, getState, extraArgument);
                    }

                    return next(action);
                };
            };
        };
    }

    var thunk = createThunkMiddleware();
    thunk.withExtraArgument = createThunkMiddleware;

    var initialState = {};

    var store = Redux.createStore(
        Redux.combineReducers({
            //...reducers
        }),
        initialState,
        Redux.applyMiddleware(thunk)
    );

    return {
        store: store,
    };
});
