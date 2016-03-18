declare module Log {
    interface ILog {
        prefix: string;
        suffix?: string;
        log(msg: string): void;
    }
}
