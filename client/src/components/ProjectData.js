import React, { useEffect, useState } from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton,  DateInput, SearchInput, SelectInput,Pagination, UrlField , Form, BooleanInput} from 'react-admin'
import {Card} from '@mui/material';
import InErrorShow from './InErrorShow';
import rowStyle from './rowStyle';
import ClientChar from '../charts/ClientChar';
import { useLocation } from 'react-router';
import axios from 'axios';
import CronData from './CronData';
const listFilters = [
    <DateInput source="date_gte" alwaysOn />,
    <DateInput source="date_lte" alwaysOn />,
    <SearchInput source="q" alwaysOn />,
    <BooleanInput source="develop_mode" alwaysOn />,
    // <SelectInput source="developer mode" />
];

const cronFilter = [
    <DateInput source="cron_date_gte" alwaysOn />,
    <DateInput source="cron_date_lte" alwaysOn />,
    <SearchInput source="c" alwaysOn />,

];


const ProjectData = (props) => {

    const [months, setMonths] = useState([])
    const [totalErrors, setTotalErros] = useState([])
    
    const location = useLocation();
    let urlParameter = location.pathname.split('/')[2]

    const fetchApiData = async () => {
        
        try{
            const response = await axios.get(`http://192.168.1.57:5000/api/chart/${urlParameter}`)
            console.log(response.data)
            const monthNames = []
            const monthTotals = []

            response.data.map((item) => {
                monthNames.push(item.monthName)
                monthTotals.push(item.total)
            })
            setMonths(monthNames)
            setTotalErros(monthTotals)
            console.log(monthNames,monthTotals)
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <div>

        <div style={{display:'flex'}}>
            <div style={{width:'70%'}}>
            <List 
                filters={listFilters}
                {...props}
                resource={`errors/${urlParameter}`}
                // pagination={false}
                // actions={true}
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
                    <TextField source='title'/>
                    <TextField source='name'/>
                    <TextField source='code'/>
                    <TextField source='status'/>
                    <TextField source='error'/>
                </Datagrid>



            </List>
            {/* <List  {...props} resource="clients">
                <TextField source='title'/>
            </List> */}
            </div>
            <div style={{width:'30%', padding:'50px'}}>
                <Card>
                    <ClientChar months={months} totalErrors={totalErrors}/>
                    {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
                        <Form>
                            <BooleanInput label="Develop Mode" source="develop_mode" />
                        </Form>
                    </div> */}
                </Card>

            </div>

        </div>


    </div>

    );
};

export default ProjectData;