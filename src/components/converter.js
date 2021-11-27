import {useState} from 'react'
import ExchangeRate from "./Exchange"
import axios from 'axios'

const Converter = () => {
    const currencies = ['BTC','ETH','USD','XRP','LTC','ADA']
    const [choosenpc,setchoosenpc] = useState('BTC')
    const [choosensc,setchoosensc] = useState('BTC')
    const [amount,setamount] = useState(1)
    const[exchangeRate, setexchangeRate] = useState(0)
    const[result,setResult] = useState(0)


    const convert = () => {
        const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {to_currency: choosensc, function: 'CURRENCY_EXCHANGE_RATE', from_currency: choosenpc},
        headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
  }
}

axios.request(options).then((response)=> {
	console.log(response.data["Realtime Currency Exchange Rate"]['5. Exchange Rate'])
    setexchangeRate(response.data["Realtime Currency Exchange Rate"]['5. Exchange Rate'])
    setResult(response.data["Realtime Currency Exchange Rate"]['5. Exchange Rate'] * amount)
}).catch ((error) => {
	console.error(error)
})
}
console.log(exchangeRate)




    return (
      <div className="currency-converter">
        <h2>Currenct Converter</h2>

       <div className = "input-table">
       <table>
            <tbody>
                <tr>
                    <td>Primary Currency :</td>
                    <td>
                        <input 
                            type="number" 
                            name="Currency-amount-1"
                            value = {amount}
                            onChange = {(e) => setamount(e.target.value)}
                        />
                    </td>
                    <td>
                        <select 
                            value = {choosenpc}
                            name= "currenct-option-1"
                            classname= "currency-options"  
                            onChange = {(e) => setchoosenpc(e.target.value)}

                        >
                        {currencies.map((currency, _index) =>( <option key = {_index}>{currency}</option>))}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Secondary Currency :</td>
                    <td>
                        <input 
                            type="number" 
                            name="Currency-amount-2"
                            value = {result}
                            disable = {true}
                        />
                    </td>
                    <td>
                        <select 
                            value = {choosensc}
                            name= "currency-option-2"
                            classname= "currency-options" 
                            onChange = {(e) => setchoosensc(e.target.value)}                 
                        >
                        {currencies.map((currency, _index) =>( <option key = {_index}>{currency}</option>))}
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
        <button id = "convert-button" onClick={convert}>Convert</button>
        
        </div> 
        
        <ExchangeRate
            exchangeRate = {exchangeRate}
            choosensc = {choosensc}
            choosenpc = {choosenpc}
        />
      </div>
    );
  }
  
  export default Converter
    