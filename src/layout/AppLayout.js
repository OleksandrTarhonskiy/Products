import React from 'react';
import {
  Navbar,
  Container,
} from 'react-bootstrap';

import Loading from './Loading';
import Error from './Error';
import Filters from 'components/Filters';

const AppLayout = ({ children, location, loading, error }) => {
  
  if (error) return <Error error={error} />;

  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Filters location={location} />
        </Container>
      </Navbar>
      <Container>
        {loading ? <Loading /> : children}
      </Container>
    </>
  );
}

export default AppLayout;