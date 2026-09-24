import './Elemento.css'

function Elemento({ item, cambiarEstado, eliminarElemento }) {
  return (
    <div className={`elemento elemento-${item.estado.replace(' ', '-')}`}>
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <p className="estado-label">
        Estado: <strong>{item.estado}</strong>
      </p>

      <button onClick={() => cambiarEstado(item.id)}>
        Cambiar estado
      </button>

      <button onClick={() => eliminarElemento(item.id)}>
        Eliminar
      </button>
    </div>
  )
}

export default Elemento