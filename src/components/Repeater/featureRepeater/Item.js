import React from 'react';
import './Item.css'

class Item extends React.Component {
    render() {
        return (
            <div className='divRepeater'>
                <ul className='featureitemRepeater'>
                    <div className="icon">
                        <img className='iconImg' src={this.props.icon} alt="icon" />
                    </div>
                    <div className="iconName">
                        <h2 className='item-title'>{this.props.iconName}</h2>
                    </div>
                </ul>
            </div>
        )
    }
} export default Item