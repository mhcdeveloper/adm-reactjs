export interface Iinput {
    id: string;
    name: string;
    value?: any;
    label?: string;
    type: string;
    visible: boolean;
    required: boolean;
    textValid?: string;
    placeholder?: string;
    validationType?: string;
    validations?: any
}