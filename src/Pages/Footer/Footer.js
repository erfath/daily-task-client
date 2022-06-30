import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer class="bg-gray-200 text-center lg:text-left">
            <div class="text-gray-700 text-center p-4">
                © {year} Copyright:
                <p>Erfath Parvez</p>
            </div>
        </footer>
    );
};

export default Footer;