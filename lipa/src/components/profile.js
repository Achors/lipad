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
            <div className="absolute top-4 right-4 flex items-center space-x-2 border  p-2 rounded-lg bg-white shadow-md">
                <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center space-x-2">
                        <img 
                            src={profilePicture} 
                            alt="Profile"
                            width={5} 
                            height={5} 
                            className="w-10 h-10 rounded-full border-2 border-green-400 object-cover" 
                        />
                        <span className="font-medium">{username}</span>
                        <Menu.Button className="flex items-center text-gray-700 hover:text-gray-900 border-2  rounded p-1">
                            <ChevronDownIcon className="w-5 h-5 ml-1 bg-green-400" />
                        </Menu.Button>
                    </div>

                    <Menu.Items className="absolute right-0 mt-2 w-35 origin-top-right bg-transparent shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-lg">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={handleSignOut}
                                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Menu>
            </div>
        </div>
    );
}
