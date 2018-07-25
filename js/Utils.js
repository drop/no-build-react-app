define({
    extendClass: function(SrcClass, ExtProps) {
        return function() {
            var obj = Object.create(SrcClass.prototype);

            for (var key in ExtProps) {
                obj[key] = ExtProps[key];
            }

            SrcClass.apply(obj, arguments);
            return obj; 
        };
    },
});
