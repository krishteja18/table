import React, { Component,useState,useEffect ,Fragment } from 'react';


import BootstrapTable from 'react-bootstrap-table-next';
import pagination from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';

export default class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            search:""
             
        }
    }
    filter=(e)=>{
       this.setState({search:e.target.value});
       ;

    }
    render() {
        const{loading,episodes}=this.props;

        let filteredEpisodes=episodes.filter(episode=> episode.name.toLowerCase().indexOf(this.state.search)!==-1)
        
        const columns=[

            {dataField:"name",text:"Episode Name"},
            {dataField:"air_date",text:"Date"},
            {dataField:"episode",text:"Episode Code"}
        ]
        
        return (
            <Fragment>




      <form>
  <div class="form-group">
    <label for="exampleInputEmail1" style={{color:"#61dafb",fontWeight:"bold"}}>Search Episode By Name</label>
    <input type="text"   value={this.state.search} onChange={this.filter} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Episode Name "/>
    
  </div>
 
  
</form>
      
{loading?(<BootstrapTable
    
   keyField="name"
   data={filteredEpisodes}
   columns={columns}
   pagination={pagination()}/>):(<ReactBootstrap.Spinner animation="border"/>)}



</Fragment>
        )
    }
}
