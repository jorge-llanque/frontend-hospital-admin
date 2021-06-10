import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
  Tooltip,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const DoctorListResults = ({ doctors, ...rest }) => {
  const [selectedDoctorIds, setSelectedDoctorIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

  const handleSelectAll = (event) => {
    let newSelectedDoctorIds;

    if (event.target.checked) {
      newSelectedDoctorIds = doctors.map((doctor) => doctor.id);
    } else {
      newSelectedDoctorIds = [];
    }

    setSelectedDoctorIds(newSelectedDoctorIds);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedDoctorIds.indexOf(id);
    let newSelectedDoctorIds = [];

    if (selectedIndex === -1) {
      newSelectedDoctorIds = newSelectedDoctorIds.concat(selectedDoctorIds, id);
    } else if (selectedIndex === 0) {
      newSelectedDoctorIds = newSelectedDoctorIds.concat(
        selectedDoctorIds.slice(1)
      );
    } else if (selectedIndex === selectedDoctorIds.length - 1) {
      newSelectedDoctorIds = newSelectedDoctorIds.concat(
        selectedDoctorIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedDoctorIds = newSelectedDoctorIds.concat(
        selectedDoctorIds.slice(0, selectedIndex),
        selectedDoctorIds.slice(selectedIndex + 1)
      );
    }

    setSelectedDoctorIds(newSelectedDoctorIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  /********************************************************** */
  const EnhancedTableToolbar = () => {
    return (
      <Toolbar>
        <Typography>Doctor List</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    );
  };

  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: 'Email',
    },
    {
      id: 'address',
      numeric: true,
      disablePadding: false,
      label: 'Address',
    },
    {
      id: 'phone',
      numeric: true,
      disablePadding: false,
      label: 'Phone',
    },
    {
      id: 'registration_date',
      numeric: true,
      disablePadding: false,
      label: 'Registration date',
    },
  ];

  const EnhancedTableHead = (props) => {
    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              checked={selectedDoctorIds.length === doctors.length}
              color="primary"
              indeterminate={
                selectedDoctorIds.length > 0 &&
                selectedDoctorIds.length < doctors.length
              }
              onChange={handleSelectAll}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <EnhancedTableToolbar />
          <Table>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {doctors.slice(0, limit).map((doctor) => (
                <TableRow
                  hover
                  key={doctor.id}
                  selected={selectedDoctorIds.indexOf(doctor.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedDoctorIds.indexOf(doctor.id) !== -1}
                      onChange={(event) => handleSelectOne(event, doctor.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Avatar src={doctor.avatar} sx={{ mr: 2 }}>
                        {`${doctor.first_name}, ${doctor.last_name}`}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {`${doctor.first_name} ${doctor.last_name}`}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{doctor.email}</TableCell>
                  <TableCell>{doctor.address}</TableCell>
                  <TableCell>{doctor.phone}</TableCell>
                  <TableCell>{doctor.birthday}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={doctors.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default DoctorListResults;
