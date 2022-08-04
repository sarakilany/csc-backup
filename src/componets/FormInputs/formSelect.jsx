import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import useDropdown from './useDropdown';
import "./formControl.css";

function FormSelect(props) {
    const cities = ['Cairo', 'Alexandria', 'Giza', 'Kafr al-Sheikh'];
    const ZonesList = [
        ['one', 'dfdfs'],
        ['two', 'érfvr'],
        ['three', 'ththt'],
        ['four', 'thtjhy']
    ];

    const [zones, setZones] = useState([]);
    const [city, CityDropdown] = useDropdown("City", "Cairo", cities, props);
    const [zone, ZoneDropdown, setZone] = useDropdown("Zone", "", zones, props);
    
    // const [zone, setZone] = useState([]);

    const { label, errorMessage, onChange, id, ...inputProps } = props;


    // useEffect(() => {
    //     setZones([]);
    //     setZone("");

    //     // console.log(ZonesList);
        
    //     const zoneString = ZonesList.map(zone => zone);
    //     // console.log(zoneString);
    //     setZones(zoneString);
    //   }, [city, setZone, setZones, zones]);
    

    // const cities = [
    //     {
    //         value: 'Cairo', zones: ['one', 'dfdfs'],
    //     },
    //     {
    //         value: 'Alexandria', zones: ['two', 'érfvr'],
    //     },
    //     {
    //         value: 'Giza', zones: ['three', 'ththt'],
    //     },
    //     {
    //         value: 'Kafr al-Sheikh', zones: ['four', 'thtjhy']
    //     },
    // ];

    // const handleZoneChange = (e) => {
    //     let cityInd = e.target.value;
    //     let selectedZones = cities.filter((city, i) => {
    //         return i === (+cityInd) ? true : false;
    //     });
    //     setZone(selectedZones[0].zonested);
    //     onChange(e);
    // }

    return (
    <div className="form-group">
        {inputProps.name === 'city' ?
        (
            <>
            {/* <label>{label}</label>
            <Form.Select {...inputProps} onChange={(e) => handleZoneChange(e)}>
            {cities.map((city, i) => (
                <option key={i} value={i}>{city.value}</option>
            ))}
            </Form.Select> */}
                {/* <CityDropdown /> */}
            </>
        )
        :
        (
            <>
            {/* <label>{label}</label>
            <Form.Select {...inputProps} onChange={onChange}>
              {zone.map((z, i) => (
                    <option key={i} value={i}>{z}</option>
                ))}
            </Form.Select> */}
                {/* <ZoneDropdown /> */}
            </>
        )
        }
        {/* <CityDropdown />
        <ZoneDropdown /> */}
    </div>
    )
};

export default FormSelect;