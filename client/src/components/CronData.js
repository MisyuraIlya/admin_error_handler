import React, { useEffect, useState } from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,  DateInput, SearchInput, SelectInput,Pagination, UrlField } from 'react-admin'
import { useLocation } from 'react-router';
import rowStyle from './rowStyle';
const CronData = (props) => {

    const location = useLocation();
    let urlParameter = location.pathname.split('/')[2]

    const cronFilter = [
        <DateInput source="cron_date_gte" alwaysOn />,
        <DateInput source="cron_date_lte" alwaysOn />,
        <SearchInput source="c" alwaysOn />,
    ];
    return (

        <List 
                filters={cronFilter}
                {...props}
                resource={`crons/${urlParameter}`}
                // pagination={false}
                // actions={true}
            >

                <Datagrid
                    optimized   
                    
                    rowStyle={rowStyle('status')}

                >

                    <TextField source='name'/>
                    <TextField source='time'/>
                    <TextField source='date'/>
                    <UrlField source="link" />
                </Datagrid>
            </List>
    );
};

export default CronData;