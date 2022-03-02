import React from 'react';
import { Card } from 'antd';
import CreateModal from './Modal/CreateModal';
import TableComponent from './TableComponent';

function TodoAja() {
  return (
    <div>
    <React.StrictMode>
        <Card
          title="Todo list"
          // style={{ marginTop: 50 }}
        >
          <CreateModal />
          <TableComponent />
        </Card>
    </React.StrictMode>
    </div>
  );
}

export default TodoAja;
