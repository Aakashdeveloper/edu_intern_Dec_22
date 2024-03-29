import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../Header';

const url = "http://3.17.216.66:4000/menuItem"
const OrderUrl = "http://localhost:2344/orders";

class PlaceOrder extends Component{

    constructor(props){
        super(props)

        let sessionData = sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')):[]
        this.state={
            id:Math.floor(Math.random() * 10000),
            hotel_name:this.props.match.params.restName,
            name:sessionData.name,
            email:sessionData.email,
            cost:0,
            phone:sessionData.phone,
            address:'Hon 876 Pune',
            menuItem:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name}/>
                        <h3>{item.menu_name}</h3>
                        <h4>Rs.{item.menu_price}</h4>
                    </div>
                )
            })
        }
    }

    Checkout=() => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(OrderUrl,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        // .then(this.props.history.push('/viewBooking'))
        .then(console.log('order placed'))

    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h3>Login First To PlaceOrder</h3>
                    </center>
                </>
            )
        }
        return(
           <>
           <Header/>
           <hr/>
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order for {this.state.hotel_name}</h3>
                    </div>
                    <div className="panel-body">
                        <form action="http://localhost:4100/paynow" method="POST">
                            <input type="hidden" name="cost" value={this.state.cost}/>
                            <input type="hidden" name="id" value={this.state.id}/>
                            <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
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
                                    <label for="phone" className='control-label'>Phone</label>
                                    <input className="form-control" id="phone" name="phone" 
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label for="address" className='control-label'>Address</label>
                                    <input className="form-control" id="address" name="address" 
                                    value={this.state.address} onChange={this.handleChange}/>
                                </div>
                            </div>
                            {this.renderItem(this.state.menuItem)}
                            <div className='row'>
                                <div className="col-md-12">
                                    <h2>Total Price is Rs.{this.state.cost}</h2>
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.Checkout}
                            type="submit">
                                PlaceOrder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
           </>
        )
    }

    //
    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu')
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })

        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.menu_price);
                return 'ok'
            })
            this.setState({menuItem:data,cost:totalPrice})
        })
    }
}

export default PlaceOrder