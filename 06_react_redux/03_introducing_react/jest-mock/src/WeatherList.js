import React from 'react'
import moment from 'moment';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

function WeatherList(props) {

  return(
    <Paper className="paper">
     <Table className="table">
       <TableHead>
         <TableRow>
           <TableCell>Hour</TableCell>
           <TableCell >Temperature</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {props.weathers.map( (weather, index) => {
           return (
             <TableRow key={index}>
               <TableCell>{moment(weather.dt * 1000).format("LT").toString()}</TableCell>
               <TableCell >{weather.main.temp + " °C"}</TableCell>
             </TableRow>
           );
         })}
       </TableBody>
     </Table>
    </Paper>
  )

}

export default WeatherList
