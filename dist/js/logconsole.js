var LogConsole = (function () {
    function LogConsole(prefix, suffix) {
        if (suffix === void 0) { suffix = ''; }
        this.prefix = prefix;
        this.suffix = suffix;
    }
    LogConsole.prototype.log = function (msg) {
        console.log(this.prefix + msg);
    };
    return LogConsole;
}());
