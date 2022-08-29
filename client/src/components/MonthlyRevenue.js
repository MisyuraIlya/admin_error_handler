import React from 'react';
import CardWithIcon from './CardWithIcon';
import icon from '../images/allClients.svg'
import cartouche from '../images/gray-cartouche.png'
const MonthlyRevenue = () => {
    return (
        <div>
            <CardWithIcon
                to="/clients"
                icon={icon}
                title={'All Clients'}
                subtitle={'Digitrade Clients'}
                cartouche={cartouche}
            />
        </div>
    );
};

export default MonthlyRevenue;