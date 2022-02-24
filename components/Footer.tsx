import React from 'react';

/* Footer for the site */

type Props = {};

function Footer({}: Props) {
    return (
    <footer>
        <div className="text-center p-4 rounded-b-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Built by Ben
        </div>
    </footer>
    );
}

export default Footer;
