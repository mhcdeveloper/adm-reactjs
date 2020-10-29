import React, { Fragment } from 'react';
import { LabelG, RowG } from '../../styles/Gstyles';

import { IDataGrid, ITableHeader } from './table.model';
import { BtnTable, Container, Table, Actions } from './styles';
import Colors from '../../styles/Colors';
import Icon from '../Icon';

const DataGrid: React.FC<IDataGrid> = ({ label, columns, rows }) => {
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
                        <BtnTable color={Colors.green}>
                          <Icon name="fas fa-pencil-alt" size="1.8rem" color={Colors.white} />
                        </BtnTable>
                        <BtnTable color={Colors.red}>
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
      <RowG justify="space-between">
        <LabelG font="1.8rem">{label}</LabelG>        
        <BtnTable color={Colors.primary}>
          <Icon name="fas fa-plus" size="1.8rem" color={Colors.white} />
          <LabelG font="1.6rem" color={Colors.white} paddingLeft=".5rem">Novo</LabelG>
        </BtnTable>
      </RowG>
      <Table columns={columns}>
        {renderHeader()}
        {renderBody()}
      </Table>
    </Container>
  );
}

export default DataGrid;