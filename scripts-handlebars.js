'use strict';

Handlebars.registerHelper('format', function(value, multiplier, format) {
    return numeral(value * multiplier).format(format);
});
