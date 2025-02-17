import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

const items = [
  { key: '1', label: '場地租金' },
  { key: '2', label: '硬體設備' },
];

const expandDataSource = Array.from({ length: 3 }).map<ExpandedDataType>((_, i) => ({
  key: i.toString(),
  amount: '30,000',
  memo: '場地租金',
}));

const dataSource = Array.from({ length: 3 }).map<DataType>((_, i) => ({
  key: i.toString(),
  yyyymm: '2025/2',
  product: 'OTHERS-其他活動',
  amount: '200,000',
  type: '預估收入',
  memo: '測試',
}));

const expandColumns: TableColumnsType<ExpandedDataType> = [
  { title: '成本類型', dataIndex: 'type', key: 'type' 
    render: () => (
        <Dropdown menu={{ items }}>
          <a>
            下拉選擇 <DownOutlined />
          </a>
        </Dropdown>
    ),  
  },
  { title: '金額', dataIndex: 'amount', key: 'amount' },
  { title: '備註', dataIndex: 'memo', key: 'memo' },
];

const columns: TableColumnsType<DataType> = [
  { title: '執行年月', dataIndex: 'yyyymm', key: 'yyyymm' },
  { title: '銷售產品', dataIndex: 'product', key: 'product' },
  { title: '金額', dataIndex: 'amount', key: 'amount' },
  { title: '類型', dataIndex: 'type', key: 'type' },
  { title: '備註', dataIndex: 'memo', key: 'memo' },
];

const expandedRowRender = () => (
  <Table<ExpandedDataType>
    columns={expandColumns}
    dataSource={expandDataSource}
    pagination={false}
  />
);

const App: React.FC = () => (
  <>
    <Table<DataType>
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
      dataSource={dataSource}
    />
    <Table<DataType>
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
      dataSource={dataSource}
      size="middle"
    />
    <Table<DataType>
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
      dataSource={dataSource}
      size="small"
    />
  </>
);

export default App;
