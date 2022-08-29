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
                            Posters Galore
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom align="right">
                            Invoice id
                        </Typography>
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
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom align="center">
                            Date{' '}
                        </Typography>
                        <Typography gutterBottom align="center">
                            {new Date().toLocaleDateString()}
                        </Typography>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography variant="h6" gutterBottom align="center">
                            the error
                        </Typography>
                        <ReferenceField
                            reference="commands"
                            source="command_id"
                            link={false}
                        >
                            <TextField
                                source="reference"
                                align="center"
                                component="p"
                                gutterBottom
                            />
                        </ReferenceField>
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