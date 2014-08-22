/* jslint browser: true */

'use strict';

(function () {
    
    var spins = 1;
    
    var spin = function () {
        $('*').animate({
            color: '#07f473',
            rotateZ: (360*spins).toString() + 'deg'
        },
        25000,
        'linear'
        );
        
        spins++;
    }
    
    spin();
    setInterval(spin, 25000);
    
}).call(this);