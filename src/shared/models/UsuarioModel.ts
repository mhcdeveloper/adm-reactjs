import { Iinput } from "../types/InputType";

export const UsuarioModel: Iinput[] = [
    {
        id: 'id',
        name: 'id',
        type: 'numeric',
        required: false,
        visible: false
    },
    {
        id: 'nome',
        name: 'nome',
        label: 'Nome',
        type: 'text',
        validationType: "string",
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo nome é obrigatório"]
            },
        ]
    },
    {
        id: 'email',
        name: 'email',
        label: 'E-mail',
        type: 'text',
        validationType: "string",
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo email é obrigatório"]
            },
            { 
                type: "email", 
                params: ["Campo email está com formato errado"]
            }
        ]
    },
    {
        id: 'password',
        name: 'password',
        label: 'Senha',
        type: 'password',
        validationType: "string",
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo senha é obrigatório"]
            },
            { 
                type: "min",
                params: [6, "A senha deve ter no mínimo 6 caracteres"]
            }
        ]
    },
]