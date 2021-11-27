const ExchangeRate = ({exchangeRate,choosenpc,choosensc}) => {
    return (
      <div className="exchange-rate">
          <h3>Exchange rate</h3>
          <h1>{exchangeRate}</h1>
          <p>{choosenpc} to {choosensc} </p>
      </div>
    );
  }
  
  export default ExchangeRate
    