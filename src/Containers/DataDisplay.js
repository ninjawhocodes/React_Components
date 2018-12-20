import React from 'react';
import DataTable from '../Components/DataTable/DataTable';

let id = 0;
function createRowData(name, phone, email, address) {
  id += 1;
  return { id, name, phone, email, address };
}

function createColData(name) {
    id += 1;
    return { id, name};
  }

const rows = [
  createRowData('Adarsh', 159, 'abc@gmail.com', 24),
  createRowData('Himanshu', 237, 'abc@gmail.com', 37),
  createRowData('Saurabh', 305, 'abc@gmail.com', 67),
  createRowData('Chandan', 305, 'abc@gmail.com', 67)
];

const columns = [
    createColData('Name'),
    createColData('Phone'),
    createColData('Email'),
    createColData('Address'),
];

function SimpleTable(props) {
  

  return <DataTable columns={columns} rows={rows}/>;
}

export default SimpleTable;