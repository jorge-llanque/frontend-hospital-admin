import React from 'react'
import { Box, Container} from '@material-ui/core';
import DoctorListResults from '../components/doctor/DoctorListResults';
import DoctorListToolbar from '../components/doctor/DoctorListToolbar';
import doctors from '../__mocks__/doctors';

const DoctorList = () => (
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false} >
        <DoctorListToolbar />
        <Box sx={{ pt: 3 }} >
          <DoctorListResults doctors={doctors} />
        </Box>
      </Container>
    </Box>
  </>
);

export default DoctorList;