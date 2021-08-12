import { Iinput } from "../types/InputType";

export const ProdutoModel: Iinput[] = [
    {
        id: 'id',
        name: 'id',
        type: 'numeric',
        label: "Identificador",
        placeholder: 'Automático',
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
        id: 'descricao',
        name: 'descricao',
        label: 'Descrição',
        type: 'text',
        validationType: "string",
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo descrição é obrigatório"]
            }
        ]
    },
    {
        id: 'valor_unitario',
        name: 'valor_unitario',
        label: 'Valor unitário',
        type: 'numeric',
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo Valor Unitário é obrigatório"]
            }
        ]
    },
    {
        id: 'categoria_produto',
        name: 'categoria_produto',
        label: 'Categoria Produto',
        type: 'text',
        validationType: "string",
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo Categoria Produto é obrigatório"]
            },
        ]
    },
    {
        id: 'nome_fornecedor',
        name: 'nome_fornecedor',
        label: 'Nome Fornecedor',
        type: 'text',
        validationType: "string",
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo Nome Fornecedor é obrigatório"]
            },
        ]
    },
    {
        id: 'responsavel_cadastro',
        name: 'responsavel_cadastro',
        label: 'Responsavel Cadast',
        type: 'text',
        validationType: "string",
        value: undefined,
        required: true,
        visible: true,
        validations: [
            {
                type: "required",
                params: ["Campo Responsável cadastro é obrigatório"]
            },
        ]
    },
]