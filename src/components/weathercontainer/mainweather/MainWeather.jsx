import React, {useState} from 'react';
import './mainweather.scss'

function MainWeather(props) {
    const data = props.data
    const [typeT, setTypeT] = useState('Celsius')    

    if(data === undefined){
        console.log('Nao renderizou')
        return <></>
    }
    else{
        var real, feelslike
        if(typeT === 'Celsius'){
            real = data.current.temp_c + 'º'
            feelslike = data.current.feelslike_c + 'º'
        }
        if(typeT === 'Fahrenheit'){
            real = data.current.temp_f + 'º'
            feelslike = data.current.feelslike_f + 'º'
        }
        console.log(data)
        return ( 
            <div className="mainweather">
                <div className="temp">
                    <div className="real">
                        {real}
                    </div>
                    <div className="subline">
                        <div className="feelslike">
                            Feelslike: {feelslike}
                        </div>
                        <select name="typet" value={typeT} onChange={e=>setTypeT(e.target.value)}>
                            <option value="Celsius">Cº</option>
                            <option value="Fahrenheit">Fº</option>
                        </select>
                    </div>
                </div>
                <div className="condition">
                    <div className="icon">
                        <img src={data.current.condition.icon} alt="loading..." />
                    </div>
                    {data.current.condition.text}
                </div>
                
            </div>
         );
    }
}

export default MainWeather;