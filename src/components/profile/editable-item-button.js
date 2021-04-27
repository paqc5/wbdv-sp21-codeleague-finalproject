import React from 'react';

const EditableItemButton = ({
  value,
  editing,
  setEditing,
  onClick
}) => {

  return (
    <>
      {editing !== value &&
        <button className="float-right">
          <i className="fas fa-edit" onClick={() => setEditing(value)}></i>
        </button>
      }
      {editing === value &&
        <button className="float-right">
          <i className="fas fa-check" onClick={() => onClick()}></i>
        </button>
      }
    </>
  )
}
export default EditableItemButton