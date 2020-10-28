import React, { useEffect, useState } from 'react';

import DataGrid from '../../components/DataGrid';
import { IColumn } from '../../components/DataGrid/table.model';
import { Container } from './styles';

const defaultColumns = [
  { title: "Nome", field: "name" },
  { title: "E-mail", field: "email" },
  { title: "Data Nascimento", field: "birthday" },
  { title: "Data de Registro", field: "dtRegistro" },
]

const defaultRows = [
  {
    name: "Marcos Henrique de Carvalho",
    email: "mhcdeveloper@gmail.com",
    birthday: "09/07/1993",
    dtRegistro: "19/10/2020",
  },
  {
    name: "Marcos Henrique de Carvalho",
    email: "mhcdeveloper@gmail.com",
    birthday: "09/07/1993",
    dtRegistro: "19/10/2020",
  },
  {
    name: "Marcos Henrique de Carvalho",
    email: "mhcdeveloper@gmail.com",
    birthday: "09/07/1993",
    dtRegistro: "19/10/2020",
  },
]

const Usuarios: React.FC = () => {
  const [rows, setRows] = useState<any>([]);
  const [columns, setColumns] = useState<IColumn[]>([]);

  useEffect(() => {
    setRows(defaultRows);
    setColumns(defaultColumns);
  })

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