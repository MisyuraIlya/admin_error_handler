import React from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
const ClientChar = ({months,totalErrors}) => {
    return (
        <div>
            <Line
       data={{
       // x-axis label values
       labels: months,
       datasets: [
          {
              label: "Client Errors",
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
        </div>
    );
};

export default ClientChar;