import { Injectable } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Injectable()
export class Parameter {

    // Key of the parameter ex: UUID
    public key: string;

    // Value of the parameter ex: '1234567890' (as a string)
    public value: string;
}