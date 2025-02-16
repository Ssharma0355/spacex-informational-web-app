import {useState, useEffect} from 'react'
import { LoadingState } from '../components';

function Crew() {
const [crew, setCrew] = useState([]);

useEffect(() => {
    const fetchCrew = async()=>{
        const res = await fetch("https://api.spacexdata.com/v4/crew");
        const data = await res.json();
        setCrew(data);
    }
fetchCrew();
},[])

  return (
    <>{!crew ? <LoadingState /> : <section className="py-32"></section>}</>
  );
}

export default Crew
