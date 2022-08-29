import React from 'react';
import Welcome from '../components/Welcome';
import MonthlyRevenue from '../components/MonthlyRevenue';
import NbNewOrders from '../components/NbNewOrders';
import ErrorReviews from '../components/ErrorReviews';
import ServicesError from '../components/ServicesError';
import DashboardChar from '../charts/DashboardChar';
const Spacer = () => <span style={{ width: '1em' }} />;

const Dashboard = () => {

    const styles = {
        flex: { display: 'flex' },
        flexColumn: { display: 'flex', flexDirection: 'column' },
        leftCol: { flex: 1, marginRight: '0.5em' },
        rightCol: { flex: 1, marginLeft: '0.5em' },
        singleCol: { marginTop: '1em', marginBottom: '1em' },
    };

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
                </div>
                
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <ErrorReviews />
                        <Spacer />
                        <ServicesError />
                    </div>
                </div>
                <DashboardChar/>
            </div>
        </>
    );
};

export default Dashboard;