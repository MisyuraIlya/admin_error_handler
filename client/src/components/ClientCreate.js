import React from 'react';
import { Create, SimpleForm, TextInput, BooleanInput } from 'react-admin';
const ClientCreate = (props) => {
    return (
        <Create title='Create a Client' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput source='image' />
                <BooleanInput label="Develop Mode" source="develop_mode" />
            </SimpleForm>
        </Create>
    );
};

export default ClientCreate;