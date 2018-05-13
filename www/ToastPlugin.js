// Empty constructor
function ToastPlugin() { }

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
toastplugin.prototype.show = function (message, duration, successCallback, errorCallback) {
    var options = {};
    options.message = message;
    options.duration = duration;
    cordova.exec(successCallback, errorCallback, 'ToastPlugin', 'show', [options]);
}

// Installation constructor that binds ToastPlugin to window
ToastPlugin.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins.ToastPlugin = new ToastPlugin();
    return window.plugins.ToastPlugin;
};
cordova.addConstructor(ToastPlugin.install);