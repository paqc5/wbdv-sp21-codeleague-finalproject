import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const EditableItem = (
  {
    item,
    updateItem
  }) => {

  const [editing, setEditing] = useState(false)
  const [cachedItem, setCachedItem] = useState(item)

  return (
    <>
      {!editing &&
        <>{item}
          <span className="float-right">
            <button>
              <i className="fas fa-edit" onClick={() => setEditing(true)}></i>
            </button>
          </span>
        </>
      }
      {editing &&
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
                  alert(cachedItem)
                  setEditing(false)
                }}></i>
            </button>
          </span>
        </div>
      }
    </>
  )
}
export default EditableItem