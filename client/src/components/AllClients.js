import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,Button,SearchInput ,CreateButton, ReferenceField, FullNameField, MenuItemLink, TextInput , SimpleForm, BooleanField} from 'react-admin'
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useCallback } from 'react';
import ClientCreate from './ClientCreate';

const listFilters = [
    <SearchInput source="q" alwaysOn />,
];

const AllClients = (props) => {

    let navigate = useNavigate();
    return (
        <List 
        filters={listFilters}
        {...props}>
        <CreateButton />
            
            <Datagrid 
            rowClick="edit"
                // onClick={()=>navigate("/about")}
            >
                <TextField source='id'/>
                <TextField source='title' reference="about"/>
                <ReferenceField source="id" reference="commands">
                    <TextField source="id" />
                </ReferenceField>
                <BooleanField source="title" />
            <EditButton />
            </Datagrid>
        </List>
    );
};

export default AllClients;