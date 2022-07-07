import React from 'react';
import './OddItem.css'

class oddItem extends React.Component {
    render() {
        return (
            <div className='oddDivRepeater'>
                <ul className='oddFeatureitemRepeater'>
                    <div className="oddIcon">
                        <img className='oddIconImg' src={this.props.icon} alt="icon" />
                    </div>
                    <div className="oddIconName">
                        <h2 className='oddItem-title'>{this.props.iconName}</h2>
                    </div>
                </ul>
            </div>
        )
    }
} export default oddItem