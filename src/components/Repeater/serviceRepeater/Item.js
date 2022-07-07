import React from 'react';
import './Item.css'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false
        };
    }
    render() {
        return (
            <ul className='serviceItemRepeater'>
                <div className="title">
                    <h2 className='item-title'>{this.props.title}</h2></div>
                <div className="btnDiv">
                    {this.props.description && <button className='btn'  onClick={() => this.setState({ showMessage: !this.state.showMessage })}>⌄</button>}
                </div>
                <div className="price">
                    {this.props.price && <h2 className='item-price'>{this.props.price}</h2>} 
                </div>
                <div className="priceType">
                    {this.props.priceType && <h2 className='item-priceType'>{this.props.priceType}</h2>} 
                </div>
                {this.state.showMessage && <div className="description">
                    <h2 className='description'>{this.props.description}</h2>
                </div>}
            </ul>
            
        )
    }
} export default Item