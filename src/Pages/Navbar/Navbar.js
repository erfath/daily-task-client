import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/download (1).png'

const Navbar = () => {
    return (
        <nav class="relative sticky top-0 z-50 w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                
                <button class=" navbar-toggler text-gray-500  border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <a class=" flex  items-center  text-gray-900  hover:text-gray-900  focus:text-gray-900 mt-2 lg:mt-0  mr-1 " href="/">
                        <img src={logo} style={{width: '40px'}} alt=""
                            loading="lazy" /> <p className='text-4xl ml-2 font-bold text-black'>Task <span className='text-green-600 text-3xl font-bold'>Manager</span> </p>
                    </a>
                    <ul class="navbar-nav flex flex-col lg:ml-52 pl-0 list-style-none mr-auto">
                        <li class="nav-item p-2">
                            <Link to='todo' class="nav-link font-semibold text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >To-Do</Link>
                        </li>
                        <li class="nav-item p-2">
                            <Link to='/completed' class="nav-link font-semibold text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Completed Tasks</Link>
                        </li>
                        <li class="nav-item p-2">
                            <Link to='/calander' class="nav-link font-semibold text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Calendar</Link>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center relative">
                    <Link to='/contact' class="text-gray-500 font-semibold hover:text-gray-700 ml-2 focus:text-gray-700 mr-4" >
                       Contact Me
                    </Link>                   
                </div>

                
            </div>
        </nav>
    );
};

export default Navbar;