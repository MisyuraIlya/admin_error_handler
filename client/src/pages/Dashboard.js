import React, { useEffect, useState } from 'react';
import Welcome from '../components/Welcome';
import MonthlyRevenue from '../components/MonthlyRevenue';
import NbNewOrders from '../components/NbNewOrders';
import ErrorReviews from '../components/ErrorReviews';
import ServicesError from '../components/ServicesError';
import DashboardChar from '../charts/DashboardChar';
import axios from 'axios';
import LastCrons from '../components/LastCrons';

const Spacer = () => <span style={{ width: '1em' }} />;

const Dashboard = () => {
    const [months, setMonths] = useState([])
    const [totalErrors, setTotalErros] = useState([])

    const styles = {
        flex: { display: 'flex' },
        flexColumn: { display: 'flex', flexDirection: 'column' },
        leftCol: { flex: 1, marginRight: '0.5em' },
        rightCol: { flex: 1, marginLeft: '0.5em' },
        singleCol: { marginTop: '1em', marginBottom: '1em' },
    };

    const fetchApiData = async () => {
        try{
            const response = await axios.get('http://localhost:5000/api/chart/criticals')
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
        <>
            <Welcome />
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <div style={{width:'50%'}}> 
                            <MonthlyRevenue />  
                        </div>
                        <Spacer />
                        <div style={{width:'50%'}}>
                            <NbNewOrders/>
                        </div>

                    </div>
                    <div style={styles.singleCol}>
                            <DashboardChar months={months} totalErrors={totalErrors}/>
                         </div>
                </div>
                
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <ErrorReviews />
                        <Spacer />
                        <LastCrons />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;