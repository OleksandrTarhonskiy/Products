import React from 'react';
import Pagination from 'react-js-pagination';

const PaginationPanel = ({ totalItemsCount, activePage=1, onChange }) => {
  if (totalItemsCount > 10) {
    return (
      <div className="d-flex justify-content-center">
        <Pagination
          activePage={activePage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={5}
          onChange={onChange}
          itemClass="page-item"
          linkClass="page-link"
          nextPageText="next"
          prevPageText="prev"
        />
      </div>
    );
  } else {
    return null;
  }
}

export default PaginationPanel;