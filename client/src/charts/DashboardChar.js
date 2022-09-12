import React from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {Card} from '@mui/material';

const DashboardChar = ({months,totalErrors}) => {

    return (
        <Card>
            <Line
       data={{
       // x-axis label values
       labels: months,
       datasets: [
          {
              label: "# of Calories Lost",
              // y-axis data plotting values
              data: totalErrors,
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'green',
              responsive:true
            },
          ],
        }}
      />
        </Card>
    );
};

export default DashboardChar;