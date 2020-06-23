import React from 'react';
import { 
  Table, 
} from 'antd';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

interface RequestTable {
  id: string;
  debitor: string;
  status: string;
}
interface State {
  isRequestSent: boolean;
  pagination: object;
  loading: boolean;
  dataSource: RequestTable[];
}

const stateInit: State = {
  isRequestSent: false,
  pagination: {
    current: 1,
    pageSize: 10,
  },
  loading: false,
  dataSource: [],
};

const columns = [
  {
    title: '#',
    dataIndex: 'id',
    render: (row: RequestTable) => `${row.id}`,
    width: '20%',
  },
  {
    title: 'Наименование контрагента',
    dataIndex: 'debitor',
    width: '20%',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
  },
];

const Comp = getStyledComp();

export function RequestList({
}) {
  const [{
      pagination,
      loading,
      dataSource,
    }, 
    setState,
  ] = React.useState(stateInit);

  React.useEffect(fetchData, []);
  
  return (
    <div
      className='RequestList'
    >
      <Table
        columns={columns}
        rowKey='uid'
        dataSource={dataSource}
        pagination={pagination}
        loading={loading}
      />
      <Link
        to='/userSpace/Request'
      >Заявка
      </Link>
    </div>
  );

  //------------------------------------------

  function fetchData() {
    setState(state => {
      return {
        ...state,

      }
    });
  }
}   

function getStyledComp() {
  return styled.div`
    color: red;
  `;
}