import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
const ClientCreate = (props) => {
    return (
        <Create title='Create a Client' {...props}>
            <SimpleForm>
                <TextInput source='title' />
            </SimpleForm>
        </Create>
    );
};

export default ClientCreate;