import React from 'react';
import { Pagination, ConfigProvider } from 'antd';

import './PaginationBlock.scss';

function PaginationBlock({ current, onChange, total, pageSize }) {
  return (
    <section className="pagination">
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              colorBgTextHover: 'transperant',
              colorText: '#928F94',
            },
          },
        }}
      >
      <Pagination
        defaultCurrent={1}
        current={current}
        total={total}
        defaultPageSize={5}
        hideOnSinglePage
        onChange={onChange}
        showLessItems
        showSizeChanger={false}
        pageSize={pageSize}
      />
      </ConfigProvider>
    </section>
  );
}

export default PaginationBlock;