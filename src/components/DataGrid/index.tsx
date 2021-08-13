import React, { Fragment } from 'react';
import { LabelG, RowG } from '../../styles/Gstyles';

import { IDataGrid, ITableHeader } from './table.model';
import { BtnTable, Container, Table, Actions } from './styles';
import Colors from '../../styles/Colors';
import Icon from '../Icon';

const DataGrid: React.FC<IDataGrid> = ({ label, columns, rows, edit, remove, showForm }) => {
  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {columns.map((col: ITableHeader, index: number) => (
            <th key={index} style={{ textAlign: col.align }}>{col.title}</th>
          ))}
        </tr>
      </thead>
    )
  }

  const renderBody = () => {
    return (
      <tbody>
        {rows.map((row: any, index: number) => {
          return (
            <tr key={index}>
              {columns.map((col: any, index: number) => (
                <Fragment key={index}>
                  {col.field !== "action"
                    ?
                    <td style={{ textAlign: col.align }}>{row[col.field]}</td>
                    :
                    <td>
                      <Actions>
                        <BtnTable color={Colors.green} onClick={() => edit(row)}>
                          <Icon name="fas fa-pencil-alt" size="1.8rem" color={Colors.white} />
                        </BtnTable>
                        <BtnTable color={Colors.red} onClick={() => remove(row)}>
                          <Icon name="fas fa-trash" size="1.8rem" color={Colors.white} />
                        </BtnTable>
                      </Actions>
                    </td>
                  }
                </Fragment>
              ))}
            </tr>
          )
        })}
      </tbody>
    )
  }
  
  return (
    <Container>
      <RowG justify="space-between" marginBottom="0.5rem">
        <LabelG font="1.8rem">{label}</LabelG>
        <BtnTable color={Colors.white} onClick={() => showForm()}>
          <Icon name="fas fa-plus" size="1.5rem" color={Colors.primary} />
          <LabelG font="1.6rem" color={Colors.primary} paddingLeft=".5rem">Adicionar</LabelG>
        </BtnTable>
      </RowG>
      <Table columns={columns}>
        {renderHeader()}
        {renderBody()}
      </Table>
      {rows.length == 0 &&
        <RowG>
          <LabelG font="1.3rem" marginTop="1.2rem">Nenhum registro encontrado</LabelG>
        </RowG>
      }
    </Container>
  );
}

export default DataGrid;