import React, { useContext, useEffect, useState } from 'react';

import { ITableHeader } from '../../components/DataGrid/table.model';
import Forms from '../../components/Forms';
import AuthContext from '../../contexts';
import { ProdutoModel } from '../../shared/models/ProdutoModel';
import { setValuesForms, toasteError, toasteSuccess } from '../../utils';
import { Container } from './styles';
import DataGrid from '../../components/DataGrid';
import { atualizarProduto, buscarProdutos, criarProduto } from './service';

const defaultColumns = [
  { title: "Código", field: "id", align: "left" },
  { title: "Nome", field: "nome", align: "left" },
  { title: "Descrição", field: "descricao", align: "left" },
  { title: "Valor Unitário", field: "valor_unitario", align: "left" },
  { title: "Categoria Produto", field: "categoria_produto", align: "left" },
  { title: "Fornecedor", field: "nome_fornecedor", align: "left" },
  { title: "Responsável Cadast", field: "responsavel_cadastro", align: "left" },
  { title: "Ações", field: "action", align: "center" }
]

const Produtos: React.FC = () => {
  const { setLoading } = useContext(AuthContext);
  const [rows, setRows] = useState<any>([]);
  const [formModel, setFormModel] = useState(ProdutoModel);
  const [showForm, setShowForm] = useState(false);
  const [columns] = useState<ITableHeader[]>(defaultColumns);

  useEffect(() => {
    buscarListaProdutos();
  }, []);

  const buscarListaProdutos = async () => {
    setLoading();
    await buscarProdutos().then(rows => {
      setRows(rows);
      setLoading();
    })
      .catch(_ => setLoading());
  }

  const handleForm = async (produtoNovo: any) => {
    setLoading();
    
    if (produtoNovo.id !== undefined && produtoNovo.id != '') {
      await atualizarProduto(produtoNovo).then(_ => {
        setLoading();
        toasteSuccess('Produto atualizado com sucesso !');
        buscarListaProdutos();
        setShowForm(false);
      }).catch(err => {
        setLoading();
        const mensagensErros = err.response.data.mensagens;
        if (mensagensErros) mensagensErros.map((e: string) => toasteError(e));
      });
    } else {
      await criarProduto(produtoNovo).then(_ => {
        setLoading();
        toasteSuccess('Produto criado com sucesso !');
        buscarListaProdutos();
        setShowForm(false);
      }).catch(err => {
        setLoading();
        const mensagensErros = err.response.data.mensagens;
        if (mensagensErros) mensagensErros.map((e: string) => toasteError(e));
      });
    }
  }

  const editarRegistro = (row: any) => {
    let model = setValuesForms(ProdutoModel, row);
    setFormModel(model);
    setShowForm(true);
  }

  const removerRegistro = (row: any) => {
    console.log(row)
  }

  return (
    <Container>
    {showForm ?
      <Forms
        onSubmit={handleForm}
        inputs={formModel}
        handleClose={() => setShowForm(false)}
        label="Formulário do Produtos" />
      :
      <DataGrid
        label="Lista de Produtos"
        rows={rows}
        showForm={() => setShowForm(true)}
        edit={editarRegistro}
        remove={removerRegistro}
        columns={columns} />
    }
  </Container>
  );
}

export default Produtos;