import React, { useEffect, useState } from 'react';

import DataGrid from '../../components/DataGrid';
import { ITableHeader } from '../../components/DataGrid/table.model';
import Forms from '../../components/Forms';
import { UsuarioModel } from '../../shared/models/UsuarioModel';
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
  var atual = 600000.00;

//com R$
var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

//sem R$
var f2 = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});

console.log(f);
console.log(f2);

  useEffect(() => {
    setRows(defaultRows);
    setColumns(defaultColumns);    
  }, []);

  const handleForm = (data: any) => {
    
  }

  return (
    <Container>
      <Forms 
        onSubmit={handleForm}
        inputs={UsuarioModel} 
        label="Novo Usuário" />
      <DataGrid
        label="Lista de Usúarios"
        rows={rows}
        columns={columns} />
    </Container>
  );
}

export default Usuarios;