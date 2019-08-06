export class Serializer{
    public static SerializerObject(obj): string{
        var result =[];

        for (var property in obj){
            if(!this.isPrimitive(property)){
                result.push(this.SerializerObject(property));
            }else{
                
            }
        }

    }

    public static isPrimitive(test):boolean {
        return (test !== Object(test));
    };
}