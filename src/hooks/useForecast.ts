import { useState,useEffect, ChangeEvent} from "react";
import { optionType , forecastType} from "../types";


const useForecast = ()=>{
    const [term,setTerm] = useState<string>('');
    const [options,setOptions] = useState<[]>([]);
    const [city,setCity] = useState<optionType | null>(null)
    const apiKey = 'b8fd9a67369a427362ea811169ef84a0';
  
    const [forecast,setForeCast] = useState<forecastType | null>(null) 
  
    const getSearchOptions = (value:string)=>{
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${apiKey}`
    ).then((res) => res.json()).then((data) => setOptions(data))
    }
    
    const onInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
      const value  = e.target.value.trim();
      setTerm(value);
  
      if(value === ''){
        return;
      }
  
      getSearchOptions(value);
    }
    const getForeCast = (city:optionType) =>{
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`)
      .then((res) =>res.json()).then((data) => {
        const forecastData = {
          ...data.city,
          list:data.list.slice(0,16)
        }

       
        setForeCast(forecastData)

      })
    }
    const onSubmit = ()=>{
      if(!city){
        return;
      }
      getForeCast(city);
    }
    const onOptionSelect = (Option:optionType)=>{
      setCity(Option)
      console.log(Option.name);
    }
  
    useEffect(() =>{
  
      if(city){
        setTerm(city.name);
        setOptions([]);
      }
  
    },[city])

    return{
        term,
        options,
        forecast,
        onInputChange,
        onOptionSelect,
        onSubmit
    }
}
export default useForecast