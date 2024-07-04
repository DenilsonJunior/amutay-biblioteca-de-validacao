import React from 'react';
import { CardItem } from './styles';

export const Card = () => {
    return (
        <CardItem>
            <a href="">
                <div className="card">
                    <div className="pn">
                        <h2>Pn-01</h2>
                    </div>
                    <img src="" alt="" />
                    <div className="title">
                        <h3>Nome do pacote</h3>
                    </div>
                </div>
            </a>
        </CardItem>
    );
};
