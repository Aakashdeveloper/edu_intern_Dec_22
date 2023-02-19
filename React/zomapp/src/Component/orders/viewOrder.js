import React,{Component} from 'react';
import axios from 'axios';
import Display from './displayOrder';
import Header from '../Header';

const OrderUrl = "http://localhost:2344/orders";

class ViewOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h3>Login First To View Order</h3></center>
                </>
            )
        }
        return(
            <>
                <Header/>
                <Display orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data = {
                    "status":query[0].split('=')[1],
                    "date":query[2].split('=')[1],
                    "bank_name":query[3].split('=')[1]
                }
                let id = query[1].split('=')[1].split('_')[1];
                fetch(`${OrderUrl}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        let sessionData = sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')):[]
        axios.get(`${OrderUrl}?email=${sessionData.email}`)
        .then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder