import { inject, PLATFORM } from 'aurelia-framework';
import { Service } from './service';

@inject(Service)
export class PageHelloViewModel {  
    
    constructor(servc) {
        this.name = 'namw';// servc.Name;
    }
}