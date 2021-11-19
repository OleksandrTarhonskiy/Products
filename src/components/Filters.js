import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'qs';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { DelayInput } from 'react-delay-input';

import { 
  getCategories,
  getSizes,
  getColors
} from 'store/filters/actions';

const Filters = ({ location }) => {
  const history = useHistory();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const dispatch = useDispatch();
  const { sizes, colors, categories } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getSizes());
    dispatch(getColors());
    dispatch(getCategories());
  }, [dispatch]);

  const handleFilter = (value) => {
    console.log(value)
    history.push({
      pathname: "/",
      search: qs.stringify({ ...params, ...value, page: 1 }).replace(/[^=&]+=(?:&|$)/g, "")
    });
   };

  return (
    <Form className="d-flex">
      <DelayInput
        minLength={1}
        delayTimeout={500}
        type="search"
        placeholder="Search"
        className="form-control me-2"
        aria-label="Search"
        value={params.search}
        onChange={({ target }) => handleFilter({ search: target.value })}
      />
      <Form.Label>
        Sizes:
      </Form.Label>
      <Form.Select
        onChange={({ target }) => handleFilter({ sizes: target.value })}
        value={params.sizes}
      >
        <option value=''>All</option>
        {
          sizes.length && sizes.map((s) => 
            <option key={s.id} value={s.id}>{s.name}</option>
          )
        }
      </Form.Select>
      <Form.Label>
        Colors:
      </Form.Label>
      <Form.Select
        onChange={({ target }) => handleFilter({ colors: target.value })}
        value={params.colors}
      >
        <option value=''>All</option>
        {
          colors.length && colors.map((c) => 
            <option key={c.id} value={c.id}>{c.name}</option>
          )
        }
      </Form.Select>
      <Form.Label>
        Categories:
      </Form.Label>
      <Form.Select
        onChange={({ target }) => handleFilter({ categories: target.value })}
        value={params.categories}
      >
        <option value=''>All</option>
        {
          categories.length && categories.map((catg) => 
            <option key={catg.id} value={catg.id}>{catg.name}</option>
          )
        }
      </Form.Select>
    </Form>
  );
}

export default Filters;