import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then((res) => {
                console.log(res.data.results)
                setLocations(res.data.results)
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
    }, [])
    return (
        <section className='locaCard grid-view'>
            {locations.map((location) => <LocationCard location={location} />)}
        </section>
    )
}

export default LocationsList