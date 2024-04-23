import React from 'react';
import Icon from "react-icons-kit";
import {search} from 'react-icons-kit/feather/search';
import CityInput from '../base/CityInput';
import SubmitButton from '../base/SubmitButton';

const SearchForm = ({ handleCitySearch, city, setCity }) => {
  return (
    <form autoComplete="off" onSubmit={handleCitySearch}>
    <label>
      <Icon icon={search} size={20} />
    </label>
    <CityInput city={city} setCity={setCity} />
    <SubmitButton />
    
  </form>
  );
};

export default SearchForm;