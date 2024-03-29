import React,{Component} from 'react';

class MenuDisplay extends Component {
    orderID = [];
    placeOrder = (id) => {
        this.orderID.push(id);
        this.props.finalOrder(this.orderID)
    }
    removeOrder = (id) => {
        if(this.orderID.indexOf(id) > -1){
            this.orderID.splice(this.orderID.indexOf(id),1)
        }
        this.props.finalOrder(this.orderID)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b>
                            <img src={item.menu_image} style={{height:80,width:80}}/> &nbsp;
                            {item.menu_name}- Rs.{item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success"
                            onClick={() => {this.placeOrder(item.menu_id)}}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <button className="btn btn-danger"
                            onClick={() => {this.removeOrder(item.menu_id)}}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button> &nbsp;
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <div className="col-md-12 bg-success">
                    <h1>Item Added</h1>
                    Item Number {this.renderCart(this.orderID)} Added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }

}


export default MenuDisplay