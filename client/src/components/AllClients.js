import React from 'react';
import { useRecordContext, List, Datagrid, TextField, EmailField, EditButton, DeleteButton,Button,SearchInput ,CreateButton, ReferenceField, FullNameField, MenuItemLink, TextInput , Form, BooleanField, BooleanInput,ImageField} from 'react-admin'
import { Box, Drawer, useMediaQuery, Theme } from '@mui/material';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useCallback } from 'react';
import ClientCreate from './ClientCreate';
import axios from 'axios';

const listFilters = [
    <SearchInput source="q" alwaysOn />,
];


const AllClients = (props) => {

    const  handleClick = (e,id,mode) => {
        e.stopPropagation();
        modeHandler(id,mode)
    }

    const modeHandler = (id,mode) => {
        let changeMode = mode == 0 ? 1 : 0;
        console.log(id, changeMode)
        try{
            const data = axios.post(`http://localhost:5000/api/clients/mode/${id}`, { mode : changeMode} )
            console.loog(data)
        } catch (e) {
            console.log('handler error', e)
        }
    }

    const FullNameField = () => {
        const record = useRecordContext();
        return (
            <Form >
                <BooleanInput label="Develop Mode" source="develop_mode" onClick={(e) => handleClick(e,record.id,record.develop_mode)}/>
            </Form>
            );
    }
    
    return (
        <List 
        filters={listFilters}
        {...props}>
            
            <Datagrid 
            rowClick="edit"
            >
                <TextField source='id'/>
                <ImageField source="image" title="" st/>
                <TextField source='title' reference=""/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <TextField source='' reference="about"/>
                <FullNameField source="title" label="Mode" />

            </Datagrid>
        </List>
    );
};

export default AllClients;