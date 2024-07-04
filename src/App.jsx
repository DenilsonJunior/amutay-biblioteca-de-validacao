import React, { useState } from 'react';

import './App.css';
import { Slider } from './componentes/slider/Slider';
import { Header } from './componentes/header/Header';

function App() {
    // Exemplo de uso de estado
    // const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Slider />
        </>
    );
}

export default App;
