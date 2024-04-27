import React from 'react'

const logout = () => {
    const handleLogout = () => {
        // Handle logout logic here
      };
    

    return (
        <div className="flex justify-end p-4">
          <button
            onClick={handleLogout}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Logout
          </button>
        </div>
      );
}

export default logout