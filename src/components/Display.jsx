const Display = ({ partidolocal, partidovisitante }) => {
  return (
    <div className="display">    
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Local</th>
            <th>Visitante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">⚽</th>
            <td>{partidolocal.golesLocal}</td>
            <td>{partidovisitante.golesVisitante}</td>
          </tr>
          <tr>
            <th scope="row">🟨</th>
            <td>{}</td>
            <td>{}</td>
          </tr>
          <tr>
            <th scope="row">🟥</th>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Display