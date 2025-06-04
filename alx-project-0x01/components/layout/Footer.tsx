//create a functional component that renders the footer content

import React from "react";

const Footer : React.FC = ()=> {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MyListingApp. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    Built with ❤️ by Your Name
                </p>
            </div> 
            </footer>
    );
};

export default Footer;