import React from 'react';

export const Select = ({ options, onSelect, displayProperties, valueProperty, selectedValue, setSelectedValue }) => {

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value)
        onSelect(value)
    };

    return (
        <select value={selectedValue} onChange={handleSelectChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Select an option</option>
            {options.map((option, index) => (
                <option key={index} value={valueProperty ? option[valueProperty] : index}>
                    {displayProperties.map((property, i) => (
                        i < displayProperties.length - 1
                            ? `${option[property]} - `
                            : option[property]
                    ))}
                </option>
            ))}
        </select>
    );

}
