import { useState } from 'react'
import Elemento from './Elemento'
import './PanelEstado.css'

const ESTADOS = ['pendiente', 'en progreso', 'completado']

function PanelEstado() {
  const [elementos, setElementos] = useState([
    { id: 1, nombre: 'Tarea 1', descripcion: 'Modelo entidad-relacion', estado: 'completado' },
    { id: 2, nombre: 'Tarea 2', descripcion: 'Modelo relacional', estado: 'completado' },
    { id: 3, nombre: 'Tarea 3', descripcion: 'Modelo ER-extendido', estado: 'completado' },
    { id: 4, nombre: 'Tarea 4', descripcion: 'Normalización', estado: 'en progeso' },
    { id: 5, nombre: 'Tarea 5', descripcion: 'Informe en formato técnico', estado: 'pendiente' },
  ])

  function cambiarEstado(id) {
    setElementos(elementos.map((item) => {
      if (item.id !== id) return item
      const siguienteIndex = (ESTADOS.indexOf(item.estado) + 1) % ESTADOS.length
      return { ...item, estado: ESTADOS[siguienteIndex] }
    }))
  }

  function eliminarElemento(id) {
    setElementos(elementos.filter((item) => item.id !== id))
  }

  return (
    <section id="panel-estado">
      <h2>Panel de Tareas</h2>
      <div className="lista-elementos">
        {elementos.map((item) => (
          <Elemento
            key={item.id}
            item={item}
            cambiarEstado={cambiarEstado}
            eliminarElemento={eliminarElemento}
          />
        ))}
      </div>
    </section>
  )
}

export default PanelEstado