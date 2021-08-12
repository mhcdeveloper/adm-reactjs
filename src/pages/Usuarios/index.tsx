import React, { useEffect, useState, useContext } from 'react';

import DataGrid from '../../components/DataGrid';
import { ITableHeader } from '../../components/DataGrid/table.model';
import Forms from '../../components/Forms';
import AuthContext from '../../contexts';
import { UsuarioModel } from '../../shared/models/UsuarioModel';
import { setValuesForms, toasteError, toasteSuccess } from '../../utils';
import { atualizarUsuario, buscarUsuarios, criarUsuario } from './service';
import { Container } from './styles';

const defaultColumns = [
  { title: "Código", field: "id", align: "left" },
  { title: "Nome", field: "nome", align: "left" },
  { title: "E-mail", field: "email", align: "left" },
  { title: "Data de Registro", field: "dtRegistro", align: "left" },
  { title: "Ações", field: "action", align: "center" }
]

const Usuarios: React.FC = () => {
  const { setLoading } = useContext(AuthContext);
  const [rows, setRows] = useState<any>([]);
  const [formModel, setFormModel] = useState(UsuarioModel);
  const [showForm, setShowForm] = useState(false);
  const [columns] = useState<ITableHeader[]>(defaultColumns);

  useEffect(() => {
    buscarListaUsuarios();
  }, []);

  const buscarListaUsuarios = async () => {
    setLoading();
    await buscarUsuarios().then(rows => {
      setRows(rows);
      setLoading();
    })
      .catch(_ => setLoading());
  }

  const handleForm = async (usuarioNovo: any) => {
    setLoading();
    let perfils = [];
    perfils.push(usuarioNovo.perfils);
    usuarioNovo.perfils = perfils;
    
    if (usuarioNovo.id !== undefined) {
      await atualizarUsuario(usuarioNovo).then(_ => {
        setLoading();
        toasteSuccess('Usuário atualizado com sucesso !');
        buscarListaUsuarios();
        setShowForm(false);
      }).catch(err => {
        setLoading();
        const mensagensErros = err.response.data.mensagens;
        if (mensagensErros) mensagensErros.map((e: string) => toasteError(e));
      });
    } else {
      await criarUsuario(usuarioNovo).then(_ => {
        setLoading();
        toasteSuccess('Usuário criado com sucesso !');
        buscarListaUsuarios();
        setShowForm(false);
      }).catch(err => {
        setLoading();
        const mensagensErros = err.response.data.mensagens;
        if (mensagensErros) mensagensErros.map((e: string) => toasteError(e));
      });
    }
  }

  const editarRegistro = (row: any) => {
    let model = setValuesForms(UsuarioModel, row);
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
          label="Formulário do Usuário" />
        :
        <DataGrid
          label="Lista de Usuários"
          rows={rows}
          showForm={() => setShowForm(true)}
          edit={editarRegistro}
          remove={removerRegistro}
          columns={columns} />
      }
    </Container>
  );
}

export default Usuarios;