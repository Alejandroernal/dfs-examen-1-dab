const Controles = ({ onGol }) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => {}}>⚽ Gol</button>
        <button>🟨 Amarilla</button>
        <button>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante') }}>⚽ Gol</button>
        <button>🟨 Amarilla</button>
        <button onClick={()=> {}}>🟥 Roja</button>        
      </div>
    </div>
  )
}

export default Controles