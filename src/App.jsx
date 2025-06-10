import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

{/*Tareas
Tarea 1: ⚽ Arreglar el botón de sumar goles al equipo visitante ⚽ (2 Puntos)
Tarea 2: 🟨 Agregar la funcionalidad para contar las tarjetas amarillas 🟨 (3 Puntos)
Tarea 3: 🟥 Agregar la funcionalidad para contar las tarjetas rojas 🟥 (3 Puntos)
Tarea 4: 🔄 Agregar un botón para reiniciar el estado del partido 🔄 (2 Puntos)
Notas
Se debe generar un commit por cada tarea realizada.
Se debe cargar el repositorio de GitHub en la tarea del campus.

Probando un nuevo comit que se me guardo todo mal
*/}

function App() {
  const [partidolocal, setPartidolocal] = useState({
    golesLocal: 0,
    tarjetayellow:0,
    tarjetared:0
  })

  const [partidovisitante, setPartidovisitante] = useState({
    golesVisitante: 0,
    tarjetayellow:0,
    tarjetared:0
  })

  const onGol = (equipo) => {
  if (equipo === 'local') {
    setPartidolocal({ ...partidolocal, golesLocal: partidolocal.golesLocal + 1 })
  } else if (equipo === 'visitante') {
    setPartidovisitante({ ...partidovisitante, golesVisitante: partidovisitante.golesVisitante + 1 })
  }
}

const tarjetaAmarilla = (equipo) => {
  if (equipo === 'local') {
    setPartidolocal({ ...partidolocal, tarjetayellow: partidolocal.tarjetayellow + 1 })
  } else if (equipo === 'visitante') {
    setPartidovisitante({ ...partidovisitante, tarjetayellow: partidovisitante.tarjetayellow + 1 })
  }
}

const tarjetaRoja = (equipo) => {
  if (equipo === 'local') {
    setPartidolocal({ ...partidolocal, tarjetared: partidolocal.tarjetared + 1 })
  } else if (equipo === 'visitante') {
    setPartidovisitante({ ...partidovisitante, tarjetared: partidovisitante.tarjetared + 1 })
  }
}

const resetear = () => {
  setPartidolocal({
    golesLocal: 0,
    tarjetayellow: 0,
    tarjetared: 0
  });
  setPartidovisitante({
    golesVisitante: 0,
    tarjetayellow: 0,
    tarjetared: 0
  });
}
//Reseteo todo el local, estan en la tabla el boton de su lado.
const resetearLocal = () => {
  setPartidolocal({
    golesLocal: 0,
    tarjetayellow: 0,
    tarjetared: 0
  })
}

//Reseteartodo el visitante, los botones estan creados en la tabla
const resetearVisitante = () => {
  setPartidovisitante({
    golesVisitante: 0,
    tarjetayellow: 0,
    tarjetared: 0
  })
}

//Y hay un boton, que resetea ambos tableros

  return (
    <div className='container'>
      <h1>Partido - <button onClick={()=>resetear()}>Resetar Todo</button></h1>
      <Controles onGol={onGol} tarjetaAmarilla={tarjetaAmarilla} tarjetaRoja={tarjetaRoja} />
      <Display partidolocal={partidolocal} partidovisitante={partidovisitante} resetearlocal={resetearLocal} resetearvisitante={resetearVisitante} />
    </div>
  )
}

export default App
