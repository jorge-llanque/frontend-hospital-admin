import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@material-ui/core';

const DoctorListResults = ({ doctors, ...rest }) => {

    const [selectedDoctorIds, setSelectedDoctorIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedDoctorIds;

        if(event.target.checked) {
            newSelectedDoctorIds = doctors.map((doctor) => doctor.id);
        } else {
            newSelectedDoctorIds = [];
        }

        setSelectedDoctorIds(newSelectedDoctorIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedDoctorIds.indexOf(id);
        let newSelectedDoctorIds = [];

        if(selectedIndex === -1){
            newSelectedDoctorIds = newSelectedDoctorIds.concat(selectedDoctorIds, id);
        } else if (selectedIndex === 0) {
            newSelectedDoctorIds = newSelectedDoctorIds.concat(selectedDoctorIds.slice(1));
        } else if (selectedIndex === selectedDoctorIds.length - 1){
            newSelectedDoctorIds = newSelectedDoctorIds.concat(selectedDoctorIds.slice(0, -1));
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

    return (
        <Card {...rest} >
          <PerfectScrollbar>
              <Box sx={{ minWidth: 1050 }} >
                <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" >
                         <Checkbox
                           checked={selectedDoctorIds.length === doctors.length}
                           color="primary"
                           indeterminate={
                               selectedDoctorIds.length > 0
                               && selectedDoctorIds.length < doctors.length
                           }
                           onChange={handleSelectAll}
                         />
                        </TableCell>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Email
                        </TableCell>
                        <TableCell>
                            Address
                        </TableCell>
                        <TableCell>
                            Phone
                        </TableCell>
                        <TableCell>
                            Registration date
                        </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      {doctors.slice(0, limit).map((doctor) => (
                          <TableRow
                            hover
                            key={doctor.id}
                            selected={selectedDoctorIds.indexOf(doctor.id) !== -1}
                          >
                              <TableCell padding="checkbox" >
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
                                        display: 'flex'
                                    }}
                                  >
                                      <Avatar
                                        src={doctor.avatar}
                                        sx={{ mr: 2 }}
                                      >
                                          {`${doctor.first_name}, ${doctor.last_name}`}
                                      </Avatar>
                                      <Typography
                                        color="textPrimary"
                                        variant="body1"
                                      >
                                          {`${doctor.first_name} ${doctor.last_name}`}
                                      </Typography>
                                  </Box>
                              </TableCell>
                              <TableCell>
                                  {doctor.email}
                              </TableCell>
                              <TableCell>
                                    {doctor.address}
                              </TableCell>
                              <TableCell>
                                  {doctor.phone}
                              </TableCell>
                              <TableCell>
                                  {doctor.birthday}
                              </TableCell>
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
