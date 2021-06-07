import React from 'react'
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const SpecialtyCard = ({ specialty, ...rest }) => (
    <Card
      sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
      }}
      {...rest}
    >
        <CardContent>
            <Box
              sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: 3
              }}
            >
                <Avatar 
                  alt="Specialty"
                  src={specialty.avatar}
                  variant="square"
                />
            </Box>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
                {specialty.name}
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="body1"
            >
                {specialty.description}
            </Typography>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p:2 }} >
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'space-between'}}
              >
                  <Grid
                    item
                    sx={{
                        alignItems: 'center',
                        display:'flex'
                    }}
                  >
                      <AccessTimeIcon color="action" />
                      <Typography
                        color="textSecondary"
                        display="inline"
                        sx={{ pl: 1 }}
                        variant="body2"
                      >
                          Updated 2hr ago
                      </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                        alignItems: 'center',
                        display: 'flex'
                    }}
                  >
                      <GetAppIcon color="action" />
                      <Typography
                        color="textSecondary"
                        display="inline"
                        sx={{ pl: 1 }}
                        variant="body2"
                      >
                          Downloads
                      </Typography>
                  </Grid>
              </Grid>
        </Box>
    </Card>
);

export default SpecialtyCard;