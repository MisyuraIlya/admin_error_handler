


import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { ReferenceField, TextField, useRecordContext } from 'react-admin';


const InErrorShow = () => {

    return (
        <Card sx={{ width: 600, margin: 'auto' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            Date
                        </Typography>
                        <TextField source='date'/>
                    </Grid>
                    <Grid item xs={6}  gutterBottom align="right">
                        <Typography variant="h6">
                            Client
                        </Typography>
                        <TextField source='project' gutterBottom align="right"/>

                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} container alignContent="flex-end">
                        <ReferenceField
                            reference="customers"
                            source="customer_id"
                            link={false}
                        >
                            {/* <CustomerField /> */}
                        </ReferenceField>
                    </Grid>
                </Grid>
                <Box height={20}>&nbsp;</Box>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom align="center">
                            Description Error
                        </Typography>
                        <TextField source='description'/>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom align="center">
                            response
                        </Typography>
                        <TextField source='response'/>
                    </Grid>

                </Grid>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom align="center">
                            parameters send
                        </Typography>
                        <TextField source='body'/>
                    </Grid>
                </Grid>

                <Box margin="10px 0">
                    <ReferenceField
                        reference="commands"
                        source="command_id"
                        link={false}
                    >
                        {/* <Basket /> */}
                    </ReferenceField>
                </Box>
            </CardContent>
        </Card>
    );
};

export default InErrorShow;

