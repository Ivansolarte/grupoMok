
export interface IInput {
    type: string
    placeholder: string
    value:string
    onChange(e:any) : void
}
export const defaultInput = {
    type: 'text',
    placeholder: ''
}