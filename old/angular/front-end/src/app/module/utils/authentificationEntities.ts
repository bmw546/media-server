import { Injectable } from '@angular/core';
import { Parameter } from './parameterEntities';


@Injectable()
export class Authentication extends Parameter {
    Authentication() {
        this.key = 'UUID';
    }
}
