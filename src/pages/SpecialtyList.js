import React from 'react'
import {
    Box,
    Container,
    Grid,
    Pagination
} from '@material-ui/core';
import SpecialtyListToolbar from '../components/specialty/SpecialtyListToolbar';
import SpecialtyCard from '../components/specialty/SpecialtyCard';
import specialties from '../__mocks__/specialties';

const SpecialtyList = () => (
    <>
      <Box
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
        }}
      >
          <Container maxWidth={false} >
            <SpecialtyListToolbar />
            <Box sx={{ pt: 3 }} >
                <Grid
                  container
                  spacing={3}
                >
                    {specialties.map((specialty) => (
                        <Grid
                          item
                          key={specialty.id}
                          lg={4}
                          md={6}
                          xs={12}
                        >
                            <SpecialtyCard specialty={specialty} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3
              }}
            >
                <Pagination 
                  color="primary"
                  count={3}
                  size="small"
                />
            </Box>
          </Container>
      </Box>
    </>
);

export default SpecialtyList;
