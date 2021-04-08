import React from 'react';

const SelectForm = ({
  formTitle,
  defaultValue,
  defaultValueTitle
}) => {
  return(
    <div className="cdlg-select-form-container">
      <select className="form-control form-control-sm">
        {formTitle && 
        <option disabled value="disabled">-- {formTitle} --</option>}
        {defaultValue &&
        <option selected value={defaultValue}>{defaultValueTitle}</option>}
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  )
}
export default SelectForm