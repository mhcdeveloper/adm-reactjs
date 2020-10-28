import React from 'react';
import { ContainerG, LabelG } from '../../styles/Gstyles';

import { IDataGrid } from './table.model';
import { Container, Table } from './styles';

const DataGrid: React.FC<IDataGrid> = ({ label, columns, rows }) => {
  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {columns.map((col: any, index: number) => (
            <th key={index}>{col.title}</th>
          ))}
        </tr>
      </thead>
    )
  }

  const renderBody = () => {
    return (
      <tbody>
        {rows.map((row: any, index: number) => {
          return <tr key={index}>
            {columns.map((col: any, index: number) => (
              <td key={index}>{row[col.field]}</td>
            ))}
          </tr>
        })}
      </tbody>
    )
  }

  return (
    <Container>
      <ContainerG marginLeft="0.2rem" marginBottom="1rem">
        <LabelG font="1.8rem">{label}</LabelG>
      </ContainerG>
      <Table columns={columns}>
        {renderHeader()}
        {renderBody()}
      </Table>
    </Container>
  );
}

export default DataGrid;