import React from "react";

export default function Form(props) {
  return (
    <div className="input">
      <input className="input"        
        type="text"
        value={props.search}
        placeholder="Start Typing to Search By Name"
        name="search"
        onChange={props.handleInputChange}        
      />
    </div>
  );
}