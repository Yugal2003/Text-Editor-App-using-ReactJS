import React, { useState } from 'react';
import './About.css'


const About = () => {
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
                return 'Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count  charecters.';
            case 'Free To Use':
                return 'TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text.';
            case 'Browser Compatible':
                return 'This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.';
            default:
                return '';
        }
    };

    return (
        <div className='about_main_part'>
            <h2>Select your option:</h2>
            {/* Render the <select> element */}
            <select value={selectedOption} onChange={handleSelectChange}>
                {/* Render the <option> elements */}
                <option  value="" selected>Select an option</option>
                <option className='first_option' value="Analyse Your Text">Analyse Your Text</option>
                <option className='first_option' value="Free To Use">Free To Use</option>
                <option className='first_option' value="Browser Compatible">Browser Compatible</option>
            </select>
            {/* Display the selected option and associated text */}
            <p className='ptags2'>{selectedOption}</p><br></br>
            <p className='ptags2'>{selectedText}</p>
        </div>
    );
};

export default About;
