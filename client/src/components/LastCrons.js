import React, { useEffect, useState } from 'react';
import {Avatar,Box,Button,List,ListItem,ListItemAvatar,ListItemText,} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';
import CardWithIcon from './CardWithIcon';
import {ReferenceField,FunctionField,useGetList,useTranslate,useIsDataLoaded,UrlField} from 'react-admin';
import cartouche from '../images/red-cartouche.png'
import icon from '../images/critical.svg'
import axios from 'axios';


const LastCrons = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        
        try {
            const data = await axios.get('http://localhost:5000/api/last10crons');
            console.log('aaa',data.data.result)
            setData(data.data.result);
        } catch(e){
            console.log('error',e)
        }
    }
    
    useEffect(() => {
        fetchData()
    },[])
    return (
    <CardWithIcon
        to={{
            pathname: '/crons',
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
                    to={{
                        pathname: item.link,
                    }}
                    // to={item.link}
                    alignItems="flex-start"
                >
                    <ListItemAvatar>
                        <ReferenceField
                            record={item}
                            source="name"
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
                        primary={item.name}
                        secondary={item.link}
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

export default LastCrons;