import React from 'react'
import { Box, Container} from '@material-ui/core';
import HistoryListResults from '../components/history/HistoryListResults';
import HistoryListToolbar from '../components/history/HistoryListToolbar';
import histories from '../__mocks__/histories';

const HistoryList = () => (
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false} >
        <HistoryListToolbar />
        <Box sx={{ pt: 3 }} >
          <HistoryListResults histories={histories} />
        </Box>
      </Container>
    </Box>
  </>
);

export default HistoryList;