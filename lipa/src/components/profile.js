import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function Profile() {
    const [username] = useState("John Doe"); 
    const [profilePicture] = useState("https://dummyimage.com/300x200/000/fff");

    const handleSignOut = () => {
        console.log("Signing out...");
    };

    return (
        <div className="relative">
            <div className="absolute top-0 right-0 mt-4 mr-4">
                <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center space-x-2">
                        <img 
                            src={profilePicture} 
                            alt="Profile" 
                            className="w-10 h-10 rounded-full object-cover" 
                        />
                        <span className="font-medium">{username}</span>
                        <Menu className="flex items-center text-gray-700 hover:text-gray-900">
                            <ChevronDownIcon className="w-5 h-5 ml-1" />
                        </Menu>
                    </div>

                    <Menu className="absolute right-0 mt-2 w-48 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu>
                                {({ active }) => (
                                    <button
                                        onClick={handleSignOut}
                                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu>
                        </div>
                    </Menu>
                </Menu>
            </div>
        </div>
    );
}
