import Ilog = Log.ILog;

class LogConsole implements Ilog {
    prefix:string;
    suffix:string; // This is optional to implement
    
    constructor (prefix: string, suffix : string = '') {
        this.prefix = prefix;
        this.suffix = suffix;
    }
    
    public log (msg : string): void {
        console.log(this.prefix + msg);
    }
}