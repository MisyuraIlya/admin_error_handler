import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,  DateInput, SearchInput, SelectInput } from 'react-admin'
import InErrorShow from './InErrorShow';
import rowStyle from './rowStyle';
import ClientChar from '../charts/ClientChar';
const listFilters = [
    <DateInput source="date_gte" alwaysOn />,
    <DateInput source="date_lte" alwaysOn />,
    <SearchInput source="q" alwaysOn />,
    <SelectInput source="category" choices={[
        { id: 'programming', name: 'critical' },
        { id: 'lifestyle', name: 'medium' },
        { id: 'photography', name: 'light' },
        ]} />
];

const ProjectData = (props) => {
    
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'70%'}}>
            <List 
                filters={listFilters}
                {...props}
            >
                <Datagrid
                    optimized
                    rowClick="expand"
                    rowStyle={rowStyle('status')}
                    expand={<InErrorShow />}
                    sx={{
                        '& .column-customer_id': {
                            display: { xs: 'none', md: 'table-cell' },
                        },
                        '& .column-total_ex_taxes': {
                            display: { xs: 'none', md: 'table-cell' },
                        },
                        '& .column-delivery_fees': {
                            display: { xs: 'none', md: 'table-cell' },
                        },
                        '& .column-taxes': {
                            display: { xs: 'none', md: 'table-cell' },
                        },
                    }}
                >
                    <TextField source='id'/>
                    <TextField source='date'/>
                    <TextField source='time'/>
                    <TextField source='name'/>
                    <TextField source='code'/>
                    <TextField source='status'/>
                    <TextField source='error'/>
                </Datagrid>

            </List>
            </div>
            <div style={{width:'30%'}}>
            <ClientChar/>

            </div>

        </div>
    );
};

export default ProjectData;