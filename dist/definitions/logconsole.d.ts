import Ilog = Log.ILog;
declare class LogConsole implements Ilog {
    prefix: string;
    suffix: string;
    constructor(prefix: string, suffix?: string);
    log(msg: string): void;
}
