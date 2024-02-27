import React from 'react'
import DataTable from "react-data-table-component";
const DataTables = ({columns,OrderList,customStyles}) => {
  return (
    <DataTable
        columns={columns}
        data={OrderList}
        pagination
        customStyles={customStyles}
    />
  )
}

export default DataTables