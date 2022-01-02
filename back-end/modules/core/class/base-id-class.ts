export interface BaseClass{    
    getCreateQuery(): string;
    getDeleteQuery(): string;

    get(id: number): any;
    set(object :any) : any;
    delete(object: any): any;
    modify(object: any): any;
}