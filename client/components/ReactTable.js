import React from 'react';
import { useTable } from 'react-table';

const columns = [
  {
    Header: 'Product ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
  },
  {
    Header: 'Actions',
  },
];

const data = [
  {
    id: '1',
    name: 'Milk',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '2',
    name: 'Sharp Cheddar',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '3',
    name: 'Eggs',
    price: '1.99',
    quantity: 123,
  },
  {
    id: '4',
    name: 'Kale',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '5',
    name: 'Strawberries',
    price: '1.99',
    quantity: 223,
  },
  {
    id: '6',
    name: 'Red Onion',
    price: '1.99',
    quantity: 233,
  },
  {
    id: '7',
    name: 'Broccoli',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '8',
    name: 'White Onion',
    price: '1.99',
    quantity: 23,
  },
];

const ReactTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <React.Fragment>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
              <tr>
                <button>Hi</button>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReactTable;
 {
    Header: 'Product ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Quantity',
    accessor: 'quantity',
  },
  {
    Header: 'Actions',
  },
];

const data = [
  {
    id: '1',
    name: 'Milk',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '2',
    name: 'Sharp Cheddar',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '3',
    name: 'Eggs',
    price: '1.99',
    quantity: 123,
  },
  {
    id: '4',
    name: 'Kale',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '5',
    name: 'Strawberries',
    price: '1.99',
    quantity: 223,
  },
  {
    id: '6',
    name: 'Red Onion',
    price: '1.99',
    quantity: 233,
  },
  {
    id: '7',
    name: 'Broccoli',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '8',
    name: 'White Onion',
    price: '1.99',
    quantity: 23,
  },
];

const ReactTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <React.Fragment>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
              <tr>
                <button>Hi</button>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReactTable;
