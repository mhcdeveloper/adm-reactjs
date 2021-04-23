import React, { useEffect, useState, useContext } from 'react';

import DataGrid from '../../components/DataGrid';
import { ITableHeader } from '../../components/DataGrid/table.model';
import Forms from '../../components/Forms';
import AuthContext from '../../contexts';
import { UsuarioModel } from '../../shared/models/UsuarioModel';
import { buscarUsuarios } from './service';
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
    setLoading();
    buscarListaUsuarios();
  }, []);

  const buscarListaUsuarios = async () => {
    await buscarUsuarios().then(rows => {
      setRows(rows);
      setLoading();
    })
    .catch(_ => setLoading());
  }

  const handleForm = (data: any) => {

  }

  return (
    <Container>
      {/* <Forms
        onSubmit={handleForm}
        inputs={UsuarioModel}
        label="Novo Usuário" /> */}
      <DataGrid
        label="Lista de Usuários"
        rows={rows}
        columns={columns} />
    </Container>
  );
}

export default Usuarios;