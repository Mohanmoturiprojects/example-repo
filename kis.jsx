import React from 'react'

const kis = () => {
  return (
     <div className="gatein-container">
      <ToastContainer />
      {/* Add Record Button on top-right */}
      <div className="add-button-wrapper">
        <button className="add-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "+ Add Record"}
        </button>
      </div>
       
    </div>
  )
}

export default kis;

