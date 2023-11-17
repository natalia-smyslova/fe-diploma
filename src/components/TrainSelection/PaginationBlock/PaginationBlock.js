import React from 'react';
import { Pagination } from 'antd';

// import './PaginationBlock.scss';

function PaginationBlock({ current, onChange, total, pageSize }) {
  return (
    <section className="pagination">
      <Pagination
        defaultCurrent={current}
        total={total}
        hideOnSinglePage
        onChange={onChange}
        showLessItems
        showSizeChanger={false}
        pageSize={pageSize}
      />
    </section>
  );
}

export default PaginationBlock;