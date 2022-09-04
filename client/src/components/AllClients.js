import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,Button,SearchInput ,CreateButton } from 'react-admin'
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useCallback } from 'react';
import ClientCreate from './ClientCreate';
const listFilters = [
    <SearchInput source="q" alwaysOn />,
];

const AllClients = (props) => {
    return (
        <List 
        filters={listFilters}
        {...props}>
        <CreateButton />
            
            <Datagrid rowClick="edit">
                <TextField source='id'/>
                <TextField source='title'/>
            </Datagrid>
        </List>
    );
};

export default AllClients;