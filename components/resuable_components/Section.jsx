import React from 'react'

export const Section = ({ title, children }) => {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-semibold text-primary mb-4">{title}</h2>
            <div className="text-gray-300">{children}</div>
        </div>
    )
}
