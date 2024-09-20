import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import SplitPaneContainer from './components/SplitPaneContainer';

function App() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box
        backgroundColor="white" // Color específico de fondo
        borderBottom="1px solid gray" // Línea debajo del Box
        padding="4px"
        marginBottom="10px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxHeight="20px"
        color="white" // Color del texto blanco para mejor visibilidad
      >
        {/* Aquí puedes añadir más botones u opciones adicionales */}
        <Box color="black">Options</Box>
      </Box>
      <Box flex="1">
        <SplitPaneContainer />
      </Box>
    </Box>
  );
}

export default App;
