import './Item.css'
import React, {useState} from 'react'

  
export class Item extends React.Component {
    state = {
        showMessage: false
      }
      onButtonClickHandler = () => {
          if(this.state.showMessage){
            this.setState({showMessage: false})
          }
          else{
            this.setState({showMessage: true});
        }
    };
    render() {
        return (
            <div className='main'>
                <div className='card'>
                    <h1 className='left'>{this.props.priceFor}</h1>
                    <h1 className='left2'>{this.props.price}</h1>
                    <h1 className='right'>{this.props.title}</h1>
                    <button class='btn' className='description' onClick={this.onButtonClickHandler}>
                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                    </button> 
                    <div> 
                        {this.state.showMessage && <h1 className='bottom'>{this.props.description}</h1> }               
                    </div>    
                </div>   
            </div>
        )
    }
}

export class Repeater extends React.Component {
    render() {
        return (<div>
        {this.props.items.map(x => <Item key={Math.random().toString(36).substring(2,8)} title={x.title} price={x.price}
            priceFor={x.priceFor} description={x.description}/>)}
        </div>)
    }
}