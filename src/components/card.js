import * as React from 'react';
import {useState} from 'react'
import './card.css'

export default function MultiActionAreaCard(props) {
    return (
        <div>
          <h1>hello {props.txt.title}!</h1>
            <ul>
                <li>{props.txt.txt1}</li>
                <li>{props.txt.txt2}</li>
                <li>{props.txt.txt3}</li> 
            </ul>
          </div>
      );
}
