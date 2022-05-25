export interface CRUD<T>
{
    create(ob:T) : void;
    read() : T[];
    update(...args: any) : void;
    save(ob:T,...args:any):void;
    delete(ob:T,args:any) : void;

}