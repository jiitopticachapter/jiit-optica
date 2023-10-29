import React from "react";
function AddContact() {
    return (
        <div>
            <h2>Add Contact</h2>
            <form >
                <div >
                    <label> Name</label>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div >
                    <label> Email</label>
                    <input type="text" name="email" placeholder="email" />
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddContact;