import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import { Search as SearchIcon } from 'react-feather';

const DoctorListToolbar = (props) => (
  <Box {...props}>
    {/* <Box
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
        </Box> */}
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              size="small"
              fullWidth
              placeholder="Search doctor"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Box>
          <Box>
            <Button
              size="large"
              sx={{ mx: 1, borderRadius: 2 }}
              color="secondary"
              variant="contained"
              href="doctors/create"
              startIcon={<AddIcon style={{ fontSize: 15 }} />}
            >
              New Doctor
            </Button>
            <Button
              size="large"
              sx={{ mx: 1, borderRadius: 2 }}
              color="primary"
              variant="outlined"
              href="doctors/create"
              startIcon={<CalendarTodayOutlinedIcon fontSize="large" />}
            >
              Filter Periode
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default DoctorListToolbar;
