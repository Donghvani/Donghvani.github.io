var logger = function()
{
    console.log('logger.loaded');
    var oldConsoleLog = null;
    var oldConsoleError = null;
    var pub = {};

    pub.enableLogger =  function enableLogger() 
                        {
                            if(oldConsoleLog == null)
                                return;

                            window['console']['log'] = oldConsoleLog;
                        };

    pub.disableLogger = function disableLogger()
                        {
                            oldConsoleLog = console.log;
                            window['console']['log'] = function() {};
                        };

    pub.enableError =  function enableError() 
                        {
                            if(oldConsoleError == null)
                                return;

                            window['console']['error'] = oldConsoleError;
                        };

    pub.disableError = function disableError()
                        {
                            oldConsoleError = console.error;
                            window['console']['error'] = function() {};
                        };
    

    return pub;
}();