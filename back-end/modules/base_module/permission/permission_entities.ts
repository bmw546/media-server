
export interface permission{
    permissionId: number | undefined;
    permission_func: number | undefined;

    permission_access_id: number | undefined; // To what this give access to
    permission_access_type: string | undefined; // To what it give access to (media/whatever)
    read: Boolean | undefined;
    write: Boolean | undefined;
    delete: Boolean | undefined;
}