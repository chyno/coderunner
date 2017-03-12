
let modulemesg = require('./script2.js');



class foo {
    constructor() {
        this.Message = 'this is foo message';
    }
}

let f = new foo();

document.write(`Message :  ${f.Message}`);
document.write(modulemesg.toString());