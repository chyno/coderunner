var message = require('./script1.js');

class foo {
    constructor() {
        this.Message = 'Hello from foo';
    }
}

let f = new foo();

document.write('Message : ' + f.Message);