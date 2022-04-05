import React from 'react'
import Rows from './RowTable'


export default ({list}) =>
    <table className="table mt-4" >
    <thead>
        <tr>
            <th>Name project</th>
            <th>Description</th>
            <th>Development Time</th>
            <th>Registration Data Time</th>
        </tr>
    </thead>
    <tbody>

        <Rows list={list}  />
    </tbody>
  
    </table>