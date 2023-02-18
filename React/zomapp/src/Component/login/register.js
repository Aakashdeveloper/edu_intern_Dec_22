import React,{Component} from 'react';
import Header from '../Header';

const url = "http://3.17.216.66:5000/api/auth/register"

class Register extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'Ankita',
            email:'ankita@gmail.com',
            password:'12345678',
            phone:987654321
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=() => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))

    }

    render(){
        return(
           <>
           <Header/>
           <hr/>
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Register</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label for="fname" className='control-label'>FirstName</label>
                                <input className="form-control" id="fname" name="name" 
                                value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="email" className='control-label'>Email</label>
                                <input className="form-control" id="email" name="email" 
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="password" className='control-label'>Password</label>
                                <input className="form-control" id="password" name="password" 
                                value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label for="phone" className='control-label'>Phone</label>
                                <input className="form-control" id="phone" name="phone" 
                                value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
           </>
        )
    }
}

export default Register