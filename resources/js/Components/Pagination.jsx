import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {

    function getClassName(active) {
        if(active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    function getLinkLabel(label) {
        switch (label) {
            case '&laquo; Previous':
                return "\u00AB Previous";
            case 'Next &raquo;':
                return "\u00BB Next";
            default:
                return label;
        }
    }

    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, key) => {
                        const label = getLinkLabel(link.label);
                        if (link.url === null) {
                            return (
                                <div
                                    key={key}
                                    className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                                >
                                    {label}
                                </div>
                            );
                        } else {
                            return (
                                <Link
                                    key={key}
                                    className={getClassName(link.active)}
                                    href={link.url}
                                >
                                    {label}
                                </Link>
                            );
                        }
                    })}
                </div>
            </div>
        )
    );
}
