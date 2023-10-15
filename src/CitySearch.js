import React, {useState} from 'react';

const CitySearch = ({getAirQual}) => {
    const [inputValue, setInputValue] = useState('');
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }
    function handleSearch(event) {
        event.preventDefault()
        const formattedCity = inputValue.replace(/ /g, '-')
        getAirQual(formattedCity);
    }
    return (
        <form onSubmit={handleSearch} className='mb-4'>
            <input type='text' placeholder='Enter city...' onChange={handleInputChange} className='form-control'></input>
            <button type='submit' className='btn btn-primary mt-3'>Search</button>
        </form>
    )
}

export default CitySearch