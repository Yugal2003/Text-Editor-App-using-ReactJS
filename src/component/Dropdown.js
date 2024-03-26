import React, { useState } from 'react';

const Dropdown = () => {
    // Define state to manage the selected option and associated text
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedText, setSelectedText] = useState('');

    // Define a function to handle changes in the selected option
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        // Set associated text based on the selected option
        setSelectedText(getOptionText(selectedValue));
    };

    // Function to get the associated text for the selected option
    const getOptionText = (optionValue) => {
        switch (optionValue) {
            case 'Analyse Your Text':
                return 'Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.';
            case 'Free To Use':
                return 'TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.';
            case 'Browser Compatible':
                return 'This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.';
            default:
                return '';
        }
    };

    return (
        <div>
            <h2>Select your option:</h2>
            {/* Render the <select> element */}
            <select value={selectedOption} onChange={handleSelectChange}>
                {/* Render the <option> elements */}
                <option value="" selected>Select an option</option>
                <option value="Analyse Your Text">Analyse Your Text</option>
                <option value="Free To Use">Free To Use</option>
                <option value="Browser Compatible">Browser Compatible</option>
            </select>
            {/* Display the selected option and associated text */}
            <p>{selectedOption}</p>
            <p>{selectedText}</p>
        </div>
    );
};

export default Dropdown;
