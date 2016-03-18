module GreeterModule {

    export class GoodMorning {
        private name: string;
        
        constructor (name: string) {
            this.name = name;    
        }
        
        public greet () {
            var formatter : Formatter = new Formatter('Module> ');
            return formatter.createMessage('Good morning, ' + this.name);
        }
    }   

    class Formatter {
        private prefix: string;
        
        constructor(prefix: string) {
            this.prefix = prefix;
        }
        
        public createMessage (msg: string): string {
            return this.prefix + msg;
        }
    }
    
}

// Using modules internally in the same file
// we have to change the name of the imported
import GreeterModuleModule = GreeterModule;


var goodMorning = new GreeterModuleModule.GoodMorning('Eugene Krabs');

console.log(goodMorning.greet());