import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const EditableItem = (
  {
    item,
    label,
    editing,
    setEditing,
    updateItem
  }) => {
  
  const [cachedItem, setCachedItem] = useState(item)

  return (
    <>
      {editing !== item &&
        <>{item}
          <span className="float-right">
            <button>
              <i className="fas fa-edit" onClick={() => setEditing(item)}></i>
            </button>
          </span>
        </>
      }
      {editing === item &&
        <div className="row">
          <input
            className="form-control col"
            type="text"
            value={cachedItem}
            onChange={(key) => setCachedItem(key.target.value)} />
          <span className="align-self-center">
            <button>
              <i className="fas fa-check"
                onClick={() => {
                  updateItem(`{"${label}":"${cachedItem}"}`)
                  setEditing("")
                }}></i>
            </button>
          </span>
        </div>
      }
    </>
  )
}
export default EditableItem