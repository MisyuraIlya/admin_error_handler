import React from 'react';
import {Avatar,Box,Button,List,ListItem,ListItemAvatar,ListItemText,} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';
import CardWithIcon from './CardWithIcon';
import {ReferenceField,FunctionField,useGetList,useTranslate,useIsDataLoaded,} from 'react-admin';
import cartouche from '../images/red-cartouche.png'
import icon from '../images/critical.svg'

const data = [
    {id:'1', title:'Churi', error:'cannot fetch data'},
    {id:'2', title:'Churi', error:'cannot fetch data'},
    {id:'3', title:'Churi', error:'cannot fetch data'},
    {id:'4', title:'Churi', error:'cannot fetch data'},
    {id:'5', title:'Churi', error:'cannot fetch data'},
    
]

const ErrorReviews = () => {
    return (
        <CardWithIcon
        to={{
            pathname: '/critical',
            // search: stringify({
            //     filter: JSON.stringify({ status: 'pending' }),
            // }),
        }}
        icon={icon}
        title={'critical'}
        subtitle={10}
        cartouche={cartouche}
    >
        <List
        //  sx={{ display }}
         >
            {data?.map((item) => (
                <ListItem
                    key={item.id}
                    button
                    component={Link}
                    to={`/reviews/${item.id}`}
                    alignItems="flex-start"
                >
                    <ListItemAvatar>
                        <ReferenceField
                            record={item}
                            source="customer_id"
                            reference="customers"
                            link={false}
                        >
                            {/* <FunctionField
                                render={() => (
                                    <Avatar
                                        src={`${customer.avatar}?size=32x32`}
                                        sx={{
                                            bgcolor: 'background.paper',
                                        }}
                                    />
                                )}
                            /> */}
                        </ReferenceField>
                    </ListItemAvatar>

                    <ListItemText
                        primary={item.title}
                        secondary={item.error}
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
            ))}
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

export default ErrorReviews;