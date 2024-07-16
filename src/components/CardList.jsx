import React from 'react';
import { Grid } from '@mui/material';

const CardList = ({ children, category }) => {
  return (
    <Grid container>
      {React.Children.map(children, (child) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
