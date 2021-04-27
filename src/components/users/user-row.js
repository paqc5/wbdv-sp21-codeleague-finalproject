import React, {useState} from 'react'

const UserRow = ({

  editing,
  onClick,
  user,
  inputValue

}) => {

  const [cachedItem, setCachedItem] = useState(user)

  return (
    <>
      <td onClick={() => onClick()}>
        {editing !== user &&
          <>{user.firstName}</>
        }
        {editing === user &&
          <input
          className="form-control col"
          type="text"
          value={cachedItem.firstName}
          onChange={(key) => {
            setCachedItem({ ...cachedItem, firstName: key.target.value })
            inputValue({ ...cachedItem, firstName: key.target.value })
          }}/>
        }
      </td>
      <td onClick={() => onClick()}>
        {editing !== user &&
          <>{user.lastName}</>
        }
        {editing === user &&
          <input
          className="form-control col"
          type="text"
          value={cachedItem.lastName}
          onChange={(key) => {
            setCachedItem({ ...cachedItem, lastName: key.target.value })
            inputValue({ ...cachedItem, lastName: key.target.value })
          }} />
        }
      </td>
      <td onClick={() => onClick()}>
        {editing !== user &&
          <>{user.role}</>
        }
        {editing === user &&
          <input
          className="form-control col"
          type="text"
          value={cachedItem.role}
          onChange={(key) => {
            setCachedItem({ ...cachedItem, role: key.target.value })
            inputValue({ ...cachedItem, role: key.target.value })
          }} />
        }
      </td>
      <td onClick={() => onClick()}>
        {editing !== user &&
          <>{user.fplEmail}</>
        }
        {editing === user &&
          <input
          className="form-control col"
          type="text"
          value={cachedItem.fplEmail}
          onChange={(key) => {
            setCachedItem({ ...cachedItem, fplEmail: key.target.value })
            inputValue({ ...cachedItem, fplEmail: key.target.value })
          }} />
        }
      </td>
    </>
  )
}
export default UserRow