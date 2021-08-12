import { Iinput } from "../types/InputType";

export const UsuarioModel: Iinput[] = [
    {
        id: 'id',
        name: 'id',
        type: 'numeric',
        label: "Identificador",
        placeholder: '(Automático)',
        value: undefined,
        required: false,
        visible: false,
        disabled: true
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
    {
        id: 'perfils',
        name: 'perfils',
        label: 'Perfils',
        placeholder: 'Selecione os perfils',
        type: 'select',
        validationType: "string",
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo perfils é obrigatório"]
            },
        ],
        options: [
            {
                id: "1",
                value: "1",
                perfil_nome: "OPERATOR",               
                label: "OPERATOR",               
            },
            {
                id: "2",
                value: "2",
                perfil_name: "ADMIN",
                label: "ADMIN",
            }
        ]
    },
]