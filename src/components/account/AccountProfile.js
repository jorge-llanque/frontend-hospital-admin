import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@material-ui/core';
import image from '../../../public/static/images/avatars/avatar_6.png';

const user = {
    avatar: image,
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Jorge LLanque Chagua',
    timezone: 'GTM-7'
};

const AccountProfile = (props) => (
    <Card {...props} >
        <CardContent>
            <Box
              sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column'
              }}
            >
                <Avatar
                  src={user.avatar}
                  sx={{
                      height: 100,
                      width: 100
                  }}
                />
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h3"
                >
                    {user.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                    {`${user.city} ${user.country}`}
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                    {user.timezone}
                </Typography>
            </Box>
        </CardContent>
        <Divider />
        <CardActions>
            <Button
              color="primary"
              fullWidth
              variant="text"
            >
                Upload picture
            </Button>
        </CardActions>
    </Card>
);

export default AccountProfile;