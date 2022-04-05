import React from 'react'


export default ({list}) =>
 {
   
  const formatData= (data)=>{
    let parte = data.substring(0,10).split('-').reverse().join('-')
    const hora = data.substring(11,data.indexOf('Z'))
    return parte+' Hora:'+ hora
  }
    return list.map(pro =>{
       return( <tr key={pro.id} >
                <td>{pro.title}</td>
                <td>{pro.description}</td>
                <td>{pro.dev_time}</td>
                <td>{formatData(pro.created_at)}</td>
            </tr>)
    })
  
  }

