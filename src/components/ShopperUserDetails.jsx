import React, { useState } from "react";

function Userdetails() {
  const [editing, setEdit] = useState(false);
  const [signedInUser, setSignedInUser] = useState(
    sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : {}
  );
  const [signedInUserCopy, setSignedInUserCopy] = useState(
    sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : {}
  );

  function updateUser(value, key) {
    let user = { ...signedInUserCopy };
    user[key] = value;
    setSignedInUserCopy(user);
  }

  async function saveChanges() {
    try {
      let updatedBody = { ...signedInUserCopy };
      sessionStorage.setItem("user", JSON.stringify(updatedBody));
      setSignedInUser(updatedBody);
      setEdit(false); // Turn off editing mode
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-lg">
      <div className="shadow-md rounded-lg bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">User's Information</h2>
        <div className="flex items-center justify-between mb-4">
          <button
            className={`border ${
              editing ? "border-red-400 text-red-400" : "bg-blue-400 text-white"
            } px-4 py-2 rounded-lg`}
            onClick={() => setEdit(!editing)}
          >
            {editing ? "Cancel" : "Edit"}
          </button>
          {editing && (
            <button
              onClick={saveChanges}
              className="border bg-blue-400 text-white px-4 py-2 rounded-lg ml-2"
            >
              Save
            </button>
          )}
        </div>

        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="w-20 h-20 overflow-hidden rounded-full border border-gray-200 flex justify-center items-center bg-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-white stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{signedInUser.firstName}</h3>
              <p className="text-sm text-gray-600">{signedInUser.lastName}</p>
            </div>
          </div>

          <div className="w-3/5">
            <div className="mb-4">
              <label className="block text-sm text-gray-500">First Name</label>
              {editing ? (
                <input
                  className="form-input w-full mt-1"
                  placeholder="First Name"
                  value={signedInUserCopy.firstName}
                  onChange={(e) => updateUser(e.target.value, "firstName")}
                  type="text"
                />
              ) : (
                <p>{signedInUser.firstName}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-500">Last Name</label>
              {editing ? (
                <input
                  className="form-input w-full mt-1"
                  placeholder="Last Name"
                  value={signedInUserCopy.lastName}
                  onChange={(e) => updateUser(e.target.value, "lastName")}
                  type="text"
                />
              ) : (
                <p>{signedInUser.lastName}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-500">Email</label>
              {editing ? (
                <input
                  className="form-input w-full mt-1"
                  placeholder="user@example.com"
                  value={signedInUserCopy.email}
                  onChange={(e) => updateUser(e.target.value, "email")}
                  type="email"
                />
              ) : (
                <p>{signedInUser.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-500">Phone Number</label>
              {editing ? (
                <input
                  className="form-input w-full mt-1"
                  placeholder="Phone Number"
                  value={signedInUserCopy.phoneNumber}
                  onChange={(e) => updateUser(e.target.value, "phoneNumber")}
                  type="text"
                />
              ) : (
                <p>{signedInUser.phoneNumber}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdetails;
