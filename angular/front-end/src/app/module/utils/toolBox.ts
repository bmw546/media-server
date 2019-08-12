export class ToolBox{
    public static JsonObject(obj): string{
        if (obj === undefined || obj === null || typeof(obj) !== 'object') { return null; }

        return JSON.stringify(obj);
    }

    public static isPrimitive(test): boolean {
        return (test !== Object(test));
    };

    public static DeJsonObject(obj: string): object {
        if (obj === undefined || obj === null) { return null; }

        return JSON.parse(obj);
    }
}