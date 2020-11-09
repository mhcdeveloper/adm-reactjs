import { Iinput } from "../types/InputType";

export const UsuarioModel: Iinput[] = [
    { 
        name: 'id', 
        type: 'numeric', 
        required: false, 
        visible: false 
    },
    { 
        name: 'avatar', 
        type: 'text', 
        required: false, 
        visible: false 
    },
    { 
        name: 'name', 
        label: 'Nome',
        type: 'text', 
        required: true, 
        visible: true 
    },
    { 
        name: 'email', 
        label: 'E-mail',
        type: 'text', 
        required: true, 
        visible: true 
    },
    { 
        name: 'birthday', 
        label: 'Data de Nascimento',
        type: 'date', 
        required: true, 
        visible: true 
    },
]