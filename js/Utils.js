define({
    extendClass: function(src, newObj) {
        var obj = Object.create(src);
        for (var key in newObj) {
            if (src.hasOwnProperty(key)) obj[key] = newObj[key];
        }
        return function() {
           return obj; 
        };
    },
});
