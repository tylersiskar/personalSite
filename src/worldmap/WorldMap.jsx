import React, { useRef, useState, useEffect } from 'react';
import { json, geoPath, geoNaturalEarth1 } from 'd3';

const WorldMap = () => {
    const myRef = useRef();
    const [data, setData] = useState();
    const projection = geoNaturalEarth1();
    const pathGenerator = geoPath().projection(projection);

    const _fetchData = async () => {
        const data = await json(
            "https://gist.githubusercontent.com/pnavarrc/75ec1502f51f86c2f43e/raw/765fc71f0c3c4c3c56610db678a4d6bc2df48335/countries.geojson");
        return data;
    }

    useEffect(() => {
        let countries = _fetchData();
        countries.then(stuff => setData(stuff.features));
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <div ref={myRef}>
                <svg width={900} height={500}>
                    {data?.map((item, index) => {
                        let className = (item.properties.sovereignt === 'United States of America') ? 'United States' : item.properties.sovereignt;
                        return (
                            <path
                                key={index}
                                className={`country${className}`}
                                d={pathGenerator(item)}
                                fill="#9c9c9c"
                            />

                        )
                    }
                    )}
                </svg>
            </div>
        </div>
    )
}

export default WorldMap