import React, { Component } from 'react';
import API from '../utils/API';
import './Home.css';

import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Employee from '../components/Employee';
import List from '../components/List.js';

class Home extends Component{

    state = {
        result: [],
        search: "",
        filtered: [],
        sorted: false,   
    };

    componentDidMount(){
        this.getEmployees();         
    }

    getEmployees = () => {
        API.getEmployees()
          .then((res) => {
            console.log(res);
            this.setState({
              result: res.data.results || [],
              filtered: res.data.results || [],
            });
          })
          .catch((err) => console.log(err));
      };

      compareDesc = (firstEl, secondEl) =>
      firstEl.name.firstEl < secondEl.name.first ? -1 : 0;
      compareAsc = (firstEl, secondEl) =>
      firstEl.name.firstEl > secondEl.name.first ? -1 : 0;
  
      sortHelper = {
        desc: this.compareDesc,
        asc: this.compareAsc,
      };
  
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });

      const filtered = this.state.result.filter((emp) =>
        `${emp.name.first} ${emp.name.last}`
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      this.setState({ filtered: filtered });
    };
  
    sortResults = () => {
      console.log("sort");
      if (this.state.sorted === false) {
        this.setState({
          filtered: this.state.filtered.sort((a, b) =>
            a.name.last.localeCompare(b.name.last)
          ),
          sorted: true,
        });
      }
      if (this.state.sorted === true) {
        this.setState({
          filtered: this.state.filtered.sort((a, b) =>
            b.name.last.localeCompare(a.name.last)
          ),
          sorted: false,
        });
      }
    };

    render(){
        return (
            <div className="maindiv">
                <Wrapper>            
                    <Header /> 
                    <List> 
                        <h3 className="infotext">Search for an employee by name or click "Name" to sort alphabetically in ascending or descending order.</h3>                   
                        <Form
                            handleInputChange={this.handleInputChange}
                            search={this.state.search}
                        />                   
                                                            
                        <Employee
                            data={this.state.filtered}
                            sortResults={this.sortResults}
                        />                    
                    </List>
                    <Footer />
                </Wrapper>    
            </div>
        )
    }
}

export default Home;