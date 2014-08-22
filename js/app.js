/* jslint browser: true */

'use strict';

(function ($) {
    
    var currentState = 0,
        body = '';
    
    var ghostTyper = function () {
        
        var page = $('body');
        
        if (currentState == 0) {
            body = page.html();
        }
        
        if (currentState == body.length) {
            currentState = 1;
        }
        
        
        page.html( body.substr(0, currentState));
        currentState++;
        
    }
    
                   
    setInterval(ghostTyper, 100);
}(Zepto));