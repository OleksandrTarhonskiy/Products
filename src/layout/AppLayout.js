import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'qs';
import {
  Navbar,
  Container,
  Form,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { DelayInput } from 'react-delay-input';

import { getSizes } from 'store/Sizes/actions';
import { getColors } from 'store/Colors/actions';
import { getCategories } from 'store/Categories/actions';
import Loading from './Loading';
import Error from './Error';

const AppLayout = ({ children, location, loading, error }) => {
  const history = useHistory();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.sizes);
  const colors = useSelector((state) => state.colors);
  const categories = useSelector((state) => state.categories);

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
  
  if (error) return <Error error={error} />;

  return (
    <>
      <Navbar bg="dark">
        <Container>
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
        </Container>
      </Navbar>
      <Container>
        {loading ? <Loading /> : children}
      </Container>
    </>
  );
}

export default AppLayout;