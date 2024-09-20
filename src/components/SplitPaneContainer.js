import React from 'react';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import './SplitPaneContainer.css';  // Asegúrate de que este archivo esté correctamente importado

const MySplitPane = () => {
  return (
    <Splitter
      direction={SplitDirection.Horizontal}
      initialSizes={[25, 75]}  // El panel izquierdo ocupa 1/4 del ancho de la pantalla
      gutterSize={1}  // Grosor del divisor de 1 píxel
    >
      <div style={{ background: '#eee' }}>Left Pane (1/4 width)</div>
      <Splitter
        direction={SplitDirection.Vertical}
        initialSizes={[50, 50]}  // Panel derecho dividido en dos
        gutterSize={1}  // Grosor del divisor de 1 píxel
      >
        <div style={{ background: '#ddd' }}>Right Top Pane</div>
        
        {/* Aquí dividimos Right Bottom con otro split vertical */}
        <Splitter
          direction={SplitDirection.Horizontal}
          initialSizes={[50, 50]}  // División interna del panel "Right Bottom"
          gutterSize={1}  // Grosor del divisor de 1 píxel
        >
          <div style={{ background: '#ccc' }}>Right Bottom Left Pane</div>
          <div style={{ background: '#bbb' }}>Right Bottom Right Pane</div>
        </Splitter>
      </Splitter>
    </Splitter>
  );
};

export default MySplitPane;