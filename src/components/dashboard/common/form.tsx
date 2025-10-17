import React from "react";

function form() {
  return (
    <form className="form" action={"/"}>
      <div className="form-container">
        <div className="form-heading">
          Create Account
        </div>
        <div className="form-fields">
          <div className="input-field">
            <input type="text"  placeholder="text"/>
          </div>
        </div>
      </div>
    </form>
  );
}

export default form;
