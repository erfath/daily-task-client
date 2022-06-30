import React from 'react';
import logo from '../../images/download (1).png'
const ToDo = () => {
    return (
        <div>
            <h2>All To Do List</h2>
            <div class="flex justify-center">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl  font-medium mb-2">My Daily Tasks</h5>
                        <div class="flex justify-center">
                            <div class="mb-3 xl:w-80">
                                <input 
                                    type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleText0"
                                    placeholder= 'Add a task'/>
                            </div>
                        </div>
                        <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;