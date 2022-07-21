import { v4 as uuidv4 } from "uuid";

export function getUniqueId() {
    return uuidv4();
}

export abstract class Entity<T> {
    protected readonly _id: string;
    protected entity: T;

    protected constructor(props: T, id?: string) {
        this._id = id ? id : getUniqueId();
        this.entity = props;
    }
}