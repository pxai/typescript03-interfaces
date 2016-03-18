
module Log {
export interface ILog {
    prefix:string;
    suffix?:string; // This is optional to implement
    log (msg : string): void;
}

}

