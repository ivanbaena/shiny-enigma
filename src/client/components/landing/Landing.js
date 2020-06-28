import React from 'react';
import Container from '../semantic/container/Container';
import Grid from '../semantic/grid/Grid';
import Column from '../semantic/column/Column';
import Row from '../semantic/row/Row';

const Landing = () => {
  return (
    <Container>
      <Grid>
        <Row>
          <Column wide='two wide' floated='right floated'>
            Column 1 Row 1
          </Column>
          <Column wide='two wide'>Column 2 Row 1</Column>
          <Column wide='two wide'>Column 3 Row 1</Column>
        </Row>
      </Grid>
    </Container>
  );
};

export default Landing;
