import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./TaskForm.css";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({addTask}) => {
  const [isOpenModal, setisOpenModal] = useState(false);

  const handleCloseModal = () =>{
    setisOpenModal(false)
  }
  
  const handleOpenModal = () =>{
    setisOpenModal(true)
  }

const handleSubmitTask = (e)=>{
  e.preventDefault()
  const title = e.target.title.value
  const description = e.target.description.value

  const task ={title, description, createAt: new Date().toTimeString(), id: uuidv4()}
 
  addTask(task)
  handleCloseModal()

}

  return (
    <div>
      <button onClick={handleOpenModal}>
        Nueva Tarea <FaPlusCircle />{" "}
      </button>
      {isOpenModal && (
        <div className="modal-background">
          <div className="modal">
            <h2>Agregar una nueva tarea</h2>
            <form onSubmit={handleSubmitTask}>
              <div className="input-container">
                <label htmlFor="title">Ingresa el titulo de tu tarea</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Titulo ejemplo"
                />
              </div>
              <div className="input-container">
                <label htmlFor="description">Ingresa una descrición</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Alguna descripción/aclaración"
                ></textarea>
              </div>
              <div className="btn-container">
                <button onClick={handleCloseModal}>Cancelar</button>
                <button type="submit">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
