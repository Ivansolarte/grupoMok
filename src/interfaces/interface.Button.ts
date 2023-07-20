
export interface IButton {
    text: string
    class: string
    onClick: () => void
}
export const defaultButton = {
    text: 'Text button',
    class: ''
}