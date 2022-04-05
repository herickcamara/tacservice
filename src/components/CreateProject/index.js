import React,{Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'



const headerProps ={
    icon:'users',
    title: 'Add new Project',
    subtitle:'Create New Project'
}

const baseUrl = 'http://localhost:7777/projects'
let logado = JSON.parse(localStorage.getItem('@user')) || false
 

const initialState={
    user:logado[0],
    project:{title:'', description:'',dev_time:''},
    list:[] 
}

export default class Project extends Component{
state = {...initialState}

componentWillMount(){
    const url = baseUrl+'?user_id='+this.state.user.id
    axios(url).then(resp=>{
    
        this.setState({ list : resp.data.results})
    })
}
refreshPage(){ 
    window.location.reload(); 
}
clear(){
    this.setState({project: initialState.project})
}

seve(){
    const {project, user,} = this.state
    const method = project.id ? 'put':'post'
    const url = project.id?`${baseUrl}/${project.id}`:`${baseUrl}?user_id=${user.id}`
    axios[method](url,project)
    .then(resp=>{
        const data = JSON.parse(resp.config.data)
        const list = this.getUpdataList(data)
        this.setState({project: initialState.project,list })
        
    })
    .then(this.refreshPage())
    
    
    
    
}

getUpdataList(project){
    const list = [...this.state.list]
    const newList = list.filter(u => u.id !== project.id )
    newList.unshift(project)
    return newList
}

updataFild(event){
    const project = {...this.state.project}
    project[event.target.name] = event.target.value
    this.setState({project})
}

renderForm(){
   return( <div className="form" >
        <div className="row">
            <div className="col-12 col-md-06" >
                <div className="form-group" >
                    <label >Name Project</label>
                    <input type="text"
                    placeholder="name projects"
                    className="form-control"
                    name='title'
                    value={this.state.project.title}
                    onChange={(e) => this.updataFild(e)}
                    />
                </div>
            </div>
            <div className="col-12 col-md-06" >
                <div className="form-group" >
                    <label >Description</label>
                    <input type="text"
                    placeholder="Description"
                    className="form-control"
                    name="description"
                    value={this.state.project.description}
                    onChange={(e) => this.updataFild(e)}
                    />
                </div>
            </div>
            <div className="col-12 col-md-06" >
                <div className="form-group" >
                    <label >development time</label>
                    <input type="text"
                    placeholder="Development Time"
                    className="form-control"
                    name="dev_time"
                    value={this.state.project.dev_time
                    }
                    onChange={(e) => this.updataFild(e)}
                    />
                </div>
            </div>





        </div>

        <hr/>
        <div className="row" >
            <div className="col-12 d-flex justify-content-end" >
                <button className="btn btn-primary" 
                onClick={e => this.seve(e)}>
                    Salvar
                </button>

                <button className="btn btn-secondary ml-2" 
                onClick={e => this.clear()}>
                    Cancelar
                </button>
            </div>
        </div>
    </div>)
}

load(project){
    
    
    this.setState({project})
}

remove(project){
    const deleteProject = `${baseUrl}/${project.id}`
    axios.delete(deleteProject).then(resp=>{
        const list = this.state.list.filter(projec => projec !== project)
        this.setState({list})
    })
}

renderTable(){
    return(
        <table id="dtDynamicVerticalScrollExample" className="table table-striped table-bordered table-sm mt-4" cellspacing="0">
            <thead>
                <tr>
                    <th className="th-sm">altor</th>
                    <th className="th-sm">Name project</th>
                    <th className="th-sm">Description</th>
                    <th className="th-sm">Development Time</th>
                    <th className="th-sm">Actions</th>
                </tr>
            </thead>
            <tbody  >
                {this.renderRow()}
            </tbody>
        </table>
    )
}
renderRow(){
    return this.state.list.map(pro =>{
        return(
            <tr key={pro.id} >
                <td>{pro.username}</td>
                <td>{pro.title}</td>
                <td>{pro.description}</td>
                <td>{pro.dev_time}</td>
                <td>
                    <button className="btn btn-warning"
                    onClick={()=> this.load(pro)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2"
                    onClick={()=> this.remove(pro)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })
}
    render(){
    
        return(
            <Main {...headerProps}>
              
                {this.renderForm()} 
                {this.renderTable()}
            </Main>
        )
    }
}