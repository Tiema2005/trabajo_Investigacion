import { useState, useEffect } from 'react';


function App() {
  const [contador, setContador] = useState(0);


  // 1. MONTAJE: Se ejecuta solo 1 vez al cargar
  useEffect(() => {
    console.log('el componente se montó');
  }, []);


  // 2. ACTUALIZACIÓN: Se ejecuta cada vez que 'contador' cambia
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);


  // 3. DESMONTAJE: Función de limpieza cuando el componente se destruye
  useEffect(() => {
    return () => {
      console.log('el componente se desmontó');
    };
  }, []);


  return (
    <div>
      <h1>Tarea Investigacion</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incremento
      </button>
    </div>
  );
}


export default App;
