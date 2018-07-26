define([
    'react',
],
function(React) {
    return {
        extendClass: function(SrcClass, extProps) {
            return function() {
                var obj = Object.create(SrcClass.prototype);

                for (var key in extProps) {
                    obj[key] = extProps[key];
                }

                SrcClass.apply(obj, arguments);
                return obj; 
            };
        },

        createReactClass: function(extProps) {
            return this.extendClass(React.Component, extProps);
        }
    };
});
