import React from "react";
import Button from "./Button";
import LocationImg from '../Images/location.png'
import priceTag from '../Images/pricetag.png'

const Form = () => {
    const handleClick = () =>{
        console.log('first')
    }

  return (
   
      <div className="form-data">
        <form>
          <label for="house"><img src={priceTag} alt="" /> Price Range</label> <br />
          <select name="prices" id="price-range">
            <option value="">select price range</option>
            <option value="N50,732,234.00">N50,732,234.00</option>
            <option value="N50,732,234.00">N50,732,234.00</option>
            <option value="auN50,732,234.00di">N50,732,234.00</option>
            <option value="auN50,732,234.00di">N50,732,234.00</option>
            <option value="auN50,732,234.00di">N50,732,234.00</option>
            <option value="auN50,732,234.00di">N50,732,234.00</option>
            <option value="auN50,732,234.00di">N50,732,234.00</option>
          </select>
        </form>
        <form>
          <label for=""><img className="location-img" src={LocationImg} alt="" /> Location</label> <br />
          <select name="locations" id="locations">
            <option value="">Select location</option>
            <option value="lekki">lekki</option>
            <option value="ikorodu">ikorodu</option>
            <option value="ajah">ajah</option>
            <option value="mushin">mushin</option>
            <option value="ojota">ojota</option>
            <option value="ketu">ketu</option>
            <option value="surulere">surulere</option>
            <option value="stadium">stadium</option>
            <option value="ikoyi">ikoyi</option>
            <option value="yaba">yaba</option>
          </select>
        </form>
        <Button onClick={handleClick} className="Search-form" label="Search"/>
      </div>
   
  );
};

export default Form;
