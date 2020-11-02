import React, { useEffect, useState } from 'react';

import DataGrid from '../../components/DataGrid';
import { ITableHeader } from '../../components/DataGrid/table.model';
import { Container } from './styles';

const defaultColumns = [
  { title: "Código", field: "id", align: "left" },
  { title: "Nome", field: "name", align: "left" },
  { title: "E-mail", field: "email", align: "left" },
  { title: "Data Nascimento", field: "birthday", align: "left" },
  { title: "Data de Registro", field: "dtRegistro", align: "left" },
  { title: "Ações", field: "action", align: "center" }
]

const defaultRows = [
  {
    id: "1",
    name: "Marcos Henrique de Carvalho",
    email: "mhcdeveloper@gmail.com",
    birthday: "09/07/1993",
    dtRegistro: "19/10/2020",
  },
  {
    id: "2",
    name: "Marcos Henrique de Carvalho",
    email: "mhcdeveloper@gmail.com",
    birthday: "09/07/1993",
    dtRegistro: "19/10/2020",
  },
  {
    id: "3",
    name: "Marcos Henrique de Carvalho",
    email: "mhcdeveloper@gmail.com",
    birthday: "09/07/1993",
    dtRegistro: "19/10/2020",
  },
]

const Usuarios: React.FC = () => {
  const [rows, setRows] = useState<any>([]);
  const [columns, setColumns] = useState<ITableHeader[]>([]);

  useEffect(() => {
    setRows(defaultRows);
    setColumns(defaultColumns);    
  }, []);

  return (
    <Container>
      <DataGrid
        label="Lista de Usúarios"
        rows={rows}
        columns={columns} />
    </Container>
  );
}

export default Usuarios;