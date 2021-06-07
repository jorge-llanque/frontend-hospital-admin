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

const HistoryListResults = ({ histories, ...rest }) => {

    const [selectedHistoryIds, setSelectedHistoryIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedHistoryIds;

        if(event.target.checked) {
            newSelectedHistoryIds = histories.map((history) => history.id);
        } else {
            newSelectedHistoryIds = [];
        }

        setSelectedHistoryIds(newSelectedHistoryIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedHistoryIds.indexOf(id);
        let newSelectedHistoryIds = [];

        if(selectedIndex === -1){
            newSelectedHistoryIds = newSelectedHistoryIds.concat(selectedHistoryIds, id);
        } else if (selectedIndex === 0) {
            newSelectedHistoryIds = newSelectedHistoryIds.concat(selectedHistoryIds.slice(1));
        } else if (selectedIndex === selectedHistoryIds.length - 1){
            newSelectedHistoryIds = newSelectedHistoryIds.concat(selectedHistoryIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedHistoryIds = newSelectedHistoryIds.concat(
                selectedHistoryIds.slice(0, selectedIndex),
                selectedHistoryIds.slice(selectedIndex + 1)
            );
        }

        setSelectedHistoryIds(newSelectedHistoryIds);
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
                           checked={selectedHistoryIds.length === histories.length}
                           color="primary"
                           indeterminate={
                               selectedHistoryIds.length > 0
                               && selectedHistoryIds.length < histories.length
                           }
                           onChange={handleSelectAll}
                         />
                        </TableCell>
                        <TableCell>
                            Description
                        </TableCell>
                        <TableCell>
                            Registration date
                        </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      {histories.slice(0, limit).map((history) => (
                          <TableRow
                            hover
                            key={history.id}
                            selected={selectedHistoryIds.indexOf(history.id) !== -1}
                          >
                              <TableCell padding="checkbox" >
                                <Checkbox 
                                  checked={selectedHistoryIds.indexOf(history.id) !== -1}
                                  onChange={(event) => handleSelectOne(event, history.id)}
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
                                      <Typography
                                        color="textPrimary"
                                        variant="body1"
                                      >
                                        {history.description}
                                      </Typography>
                                  </Box>
                              </TableCell>
                              <TableCell>
                                  {history.date}
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Box>
          </PerfectScrollbar>
          <TablePagination 
            component="div"
            count={histories.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Card>
    );
};

export default HistoryListResults;
