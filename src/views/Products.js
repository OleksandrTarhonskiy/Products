import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'qs';

import { getProducts } from 'store/Products/actions';
import { useSelector, useDispatch } from 'react-redux';
import PaginationPanel from 'components/PaginationPanel';
import AppLayout from 'layout/AppLayout';
import Product from 'components/Product';

const Products = ({ location }) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.products);
  const history = useHistory();
  const search = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (data.next || data.previous) {
      const search = qs.parse(data.next ? data.next.split('?')[1] : data.previous.split('?')[1]);
      setPage(data.next ? search.page - 1 : +search.page + 1);
    }
  }, [data, setPage]);


  useEffect(() => {
    dispatch(getProducts(location.search));
  }, [location.search, dispatch]);

  const handlePaginate = (page) => {
    history.push({
      pathname: "/",
      search: qs.stringify({ ...search, page })
    });
  };

  return (
    <AppLayout location={location} loading={loading} error={error}>
      <div className="products">
      {
        data.results.length ? data.results.map((p) => 
          <Product key={p.id} product={p} />
        )
        : 
        <div className="d-flex justify-content-center">
          <p>Nothing to show...</p>
        </div>
      }
      </div>
      <PaginationPanel 
        onChange={(page) => handlePaginate(page)}
        totalItemsCount={data.count}
        activePage={page}
      />
    </AppLayout>
  );
};

export default Products;