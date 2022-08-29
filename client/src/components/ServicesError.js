import React from 'react';
import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';
import CardWithIcon from './CardWithIcon';
import {
    ReferenceField,
    FunctionField,
    useGetList,
    useTranslate,
    useIsDataLoaded,
} from 'react-admin';
import cartouche from '../images/red-cartouche.png'
import icon from '../images/warning.svg'
const ServicesError = () => {
    return (
<CardWithIcon
        to={{
            pathname: '/services',
            // search: stringify({
            //     filter: JSON.stringify({ status: 'pending' }),
            // }),
        }}
        icon={icon}
        title={'Services Error'}
        subtitle={10}
        cartouche={cartouche}
    >
        <List
        //  sx={{ display }}
         >
            {/* {reviews?.map((record: Review) => (
                <ListItem
                    key={record.id}
                    button
                    component={Link}
                    to={`/reviews/${record.id}`}
                    alignItems="flex-start"
                >
                    <ListItemAvatar>
                        <ReferenceField
                            record={record}
                            source="customer_id"
                            reference="customers"
                            link={false}
                        >
                            <FunctionField
                                render={(customer: Customer) => (
                                    <Avatar
                                        src={`${customer.avatar}?size=32x32`}
                                        sx={{
                                            bgcolor: 'background.paper',
                                        }}
                                    />
                                )}
                            />
                        </ReferenceField>
                    </ListItemAvatar>

                    <ListItemText
                        // primary={<StarRatingField record={record} />}
                        secondary={record.comment}
                        sx={{
                            overflowY: 'hidden',
                            height: '4em',
                            // display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            paddingRight: 0,
                        }}
                    />
                </ListItem>
            ))} */}
        </List>
        <Box flexGrow={1}>&nbsp;</Box>
        <Button
            sx={{ borderRadius: 0 }}
            component={Link}
            to="/reviews"
            size="small"
            color="primary"
        >
            <Box p={1} sx={{ color: 'primary.main' }}>
                {/* {translate('pos.dashboard.all_reviews')} */}
            </Box>
        </Button>
    </CardWithIcon>
    );
};

export default ServicesError;