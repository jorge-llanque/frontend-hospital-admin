import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon} from 'react-feather';

const DoctorListToolbar = (props) => (
    <Box {...props} >
        <Box
          sx={{
              display: 'flex',
              justifyContent: 'flex-end'
          }}
        >
            <Button>
                Import
            </Button>
            <Button sx={{ mx: 1 }} >
                Export
            </Button>
            <Button
              color="primary"
              variant="contained"
              href="doctors/create"
            >
                Add Doctor
            </Button>
        </Box>
        <Box sx={{ mt: 3 }} >
          <Card>
              <CardContent>
                  <Box sx={{ maxWidth: 500 }} >
                    <TextField 
                      fullWidth
                      InputProps={{
                          startAdornment: (
                              <InputAdornment position="start">
                                  <SvgIcon
                                    fontSize="small"
                                    color="action"
                                  >
                                      <SearchIcon />
                                  </SvgIcon>
                              </InputAdornment>
                          )
                      }}
                      placeholder="Search doctor"
                      variant="outlined"
                    />
                  </Box>
              </CardContent>
          </Card>
        </Box>
    </Box>
);

export default DoctorListToolbar;