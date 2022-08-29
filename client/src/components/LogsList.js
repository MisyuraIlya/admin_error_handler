import React from 'react';
import axios from 'axios';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin'

const LogsList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='name'/>
                <EmailField source='email'/>
                <EditButton basePath='/users'/>
                <DeleteButton basePath='/users'/>
            </Datagrid>
        </List>
    );
};

export default LogsList;