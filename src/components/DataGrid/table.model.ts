export interface IDataGrid {
    label: string;
    columns: any;
    rows: any;
    edit?: any;
    remove?: any;
    showForm?: any;
}

export interface ITableHeader {
    title: string;
    field: string;
    align: any;
}

export interface IRow {
    title: string;
    field: string;    
}