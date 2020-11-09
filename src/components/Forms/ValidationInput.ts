import * as Yup from 'yup';

import { Iinput } from '../../shared/types/InputType';

export const ValidationInputs = (input: Iinput) => {
    switch (input.type) {
        case 'text':
            return { [`'${input.name}'`]: Yup.string().min(4, 'A senha deve ter no minimo 4 caracteres').required(`${input.placeholder} é obrigatório`) }
        case 'email':
            return { [`'${input.name}'`]: Yup.string().email('Formato do e-mail inválido').required(`${input.placeholder} é obrigatório`) }
        case 'senha':
            return { [`'${input.name}'`]: Yup.string().min(4, 'A senha deve ter no minimo 4 caracteres').required(`${input.placeholder} é obrigatório`) }
        case 'date':
            return { [`'${input.name}'`]: Yup.string().min(4, 'A senha deve ter no minimo 4 caracteres').required(`${input.placeholder} é obrigatório`) }
        default:
            return
    }
}