import React from 'react';
import CardWithIcon from './CardWithIcon';
import cartouche from '../images/yellow-cartouche.png'
import icon from '../images/24hour.svg'
const NbNewOrders = () => {
    return (
        <div>
            <CardWithIcon
                to="/last24"
                icon={icon}
                title={'Last 24 hour Errors'}
                subtitle={'Critical Errors'}
                cartouche={cartouche}
            />
        </div>
    );
};

export default NbNewOrders;