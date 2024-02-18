import { useNotifications } from '@web3inbox/react'
import React from 'react'

function Messages() {
  const { data: notifications } = useNotifications(3, false)
  return (
    <div>
      <h2 >Previous Messages</h2>
      <div >
        {!notifications?.length ? (
          <p >No messages yet.</p>
        ) : (
          notifications.map(({ id, ...message }) => (
            <div key={id} >
              <h3>{message.title}</h3>
              <p>{message.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Messages