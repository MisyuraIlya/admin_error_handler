import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,  DateInput,SearchInput } from 'react-admin'
import InErrorShow from './InErrorShow';
import rowStyle from './rowStyle';
const listFilters = [
    <DateInput source="date_gte" alwaysOn />,
    <DateInput source="date_lte" alwaysOn />,
    <SearchInput source="q" alwaysOn />,
];

const Last24Hour = (props) => {
    return (
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
    );
};

export default Last24Hour;