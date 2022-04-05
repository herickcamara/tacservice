import React from "react";
import Main from "../template/Main";
import Table from "../Table/Table"
import axios from "axios"
import Project from "../CreateProject/index"
const baseUrl = 'http://localhost:7777/projects'

export default (props) =>{ 
 const [list, setList] = React.useState([])

 React.useEffect(()=>{
  axios(baseUrl).then(resp=> setList(resp.data.results)) 
  
 },[])

  return(
  
  <Main icon="home" title="Inicio" subtitle="Tac serverci">
    <div className=" display-4 ">
      Bem Vindo!
   </div>
      <hr />
    <p className="mb-0"> Sistema Devenvolvido para cadastrar projetos</p>
   <Table list={list} />
  </Main>
)};
