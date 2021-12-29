
export interface BaseIdClass{
    id: number | undefined;

    getCreateQuery(): string;
    getDeleteQuery(): string;
}