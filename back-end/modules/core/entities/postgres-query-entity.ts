import {BaseEntity} from "./base-entity";

export interface PostgresQueryEntity extends BaseEntity{
    command: string
    parameters?: string[];
}