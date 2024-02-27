import React from 'react'
import DataTable from "react-data-table-component";
const TableTotalSale = ({columns,OrderList,customStyles}) => {
  return (
    <DataTable
        columns={columns}
        data={OrderList}
        pagination
        // fixedHeader
        customStyles={customStyles}
        selectableRows
        onSelectedRowsChange={(row)=>console.log(row.selectedCount)}
    />
  )
}

export default TableTotalSale