
export interface ITable {
    header: any
    data: any
    onDelete (e:any): void
    color:boolean   
}
export const defaultTable = {
    header: [],
    data: {},
    onDelete:null,
    color:true
}