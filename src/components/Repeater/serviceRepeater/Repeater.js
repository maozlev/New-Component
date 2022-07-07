import React from 'react';
import Item from './Item'
import './Repeater.css'

function randId() {
    const randStr = () => Math.random().toString(36).substring(2, 8)
    const randStrByLength = (length) => {
      let result = ''
      do {
        result += randStr().substring(0, length > 6 ? 6 : length)
        length -= length > 6 ? 6 : length
      } while (length)
      return result
    }
    return randStrByLength(8) + '-' + randStrByLength(4) + '-' + randStrByLength(4) + '-' + randStrByLength(4) + '-' + randStrByLength(12)
  }

class ServiceRepeater extends React.Component {

    render() {
        return (
            <ul className='serviceRepeater'>
                <h2 className= "repeaterTitle">{this.props.title}</h2>
                {this.props.items.map(x => <Item key={randId()} title={x.title} icon={x.icon} price={x.price} description={x.description} priceType={x.priceType} />)}
            </ul>
        )
    }
} export default ServiceRepeater

