import React from 'react';
// import st from '../style/rates.module.scss';

function Rates(props) {
    return(
        <section className ="card">
            <div className="name">{props.name}</div>
            <div className="text">{props.price}</div>
            <div className="text">{props.info}</div>
            <div className="text">{props.addition}</div>
        </section>
    )
}

export default Rates;