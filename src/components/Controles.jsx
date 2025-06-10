const Controles = ({ onGol, tarjetaAmarilla, tarjetaRoja }) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => {onGol('local')}}>⚽ Gol</button>
        <button onClick={()=>{tarjetaAmarilla('local')}}>🟨 Amarilla</button>
        <button onClick={()=>{tarjetaRoja('local')}}>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante') }}>⚽ Gol</button>
        <button onClick={()=>{tarjetaAmarilla('visitante')}}>🟨 Amarilla</button>
        <button onClick={()=>{tarjetaRoja('visitante')}}>🟥 Roja</button>
      </div>
    </div>
  )
}

export default Controles