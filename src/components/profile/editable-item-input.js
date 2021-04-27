import React from 'react';

const EditableItemInput = ({
  value,
  onChange
}) => {

  return (
    <>
      <div className="row">
        <input
          className="form-control col"
          type="text"
          value={value}
          onChange={(key) => onChange(key.target.value)} />
      </div>
    </>
  )
}
export default EditableItemInput