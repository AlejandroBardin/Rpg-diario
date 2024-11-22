import React, { useState } from 'react';
import Contador from './components/Contador';

function App() {
    const [puntos, setPuntos] = useState(0);

    const increasePoints = (amount) => {
        setPuntos(prevPuntos => prevPuntos + amount); // Asegúrate de que esta función se actualice correctamente
    };

    return (
        <div>
            <Contador onPointsIncrease={increasePoints} />
        </div>
    );
}

export default App;
