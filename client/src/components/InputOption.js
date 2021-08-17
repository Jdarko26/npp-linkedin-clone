import React from 'react';
import './InputOption.css';

export default function InputOption({Icon, title, color, number}) {
    return (
        <div className="inputOption">
          
            <Icon style={{color:color}} />
            <h4>{title} :</h4>
             
            <div className="number">{number}</div>
        </div>
    )
}
