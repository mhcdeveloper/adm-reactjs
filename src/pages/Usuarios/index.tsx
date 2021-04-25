import React, { useEffect, useState, useContext } from 'react';

import DataGrid from '../../components/DataGrid';
import { ITableHeader } from '../../components/DataGrid/table.model';
import Forms from '../../components/Forms';
import AuthContext from '../../contexts';
import { UsuarioModel } from '../../shared/models/UsuarioModel';
import { toasteError, toasteSuccess } from '../../utils';
import { buscarUsuarios, criarUsuario } from './service';
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
    await criarUsuario(usuarioNovo).then(_ => {
      setLoading();
      toasteSuccess('Usuário criado com sucesso !');
      buscarListaUsuarios();
    }).catch(err => {
      setLoading();
      const mensagensErros = err.response.data.mensagens;
      if (mensagensErros.length > 0) mensagensErros.map((e: string) => toasteError(e));
    })
  }

  return (
    <Container>
      <Forms
        onSubmit={handleForm}
        inputs={UsuarioModel}
        label="Novo Usuário" />
      <DataGrid
        label="Lista de Usuários"
        rows={rows}
        columns={columns} />
    </Container>
  );
}

export default Usuarios;