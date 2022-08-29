import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,Button  } from 'react-admin'
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useCallback } from 'react';

const AllClients = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source='id'/>
                <TextField source='name'/>
            </Datagrid>
        </List>
    );
};

export default AllClients;