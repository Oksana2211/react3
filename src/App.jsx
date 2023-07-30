import Cards from "./components/RatesCards/RatesCards";


const rates = [
    {
      name: "Безлимитный 30",
      price: 30,
      speed: "до 10 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "blue",
    },
    {
      name: "Безлимитный 45",
      price: 45,
      speed: "до 50 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "green",
    },
    {
      name: "Безлимитный 55",
      price: 55,
      speed: "до 100 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "red",
    },
    {
      name: "Безлимитный 100",
      price: 100,
      speed: "до 200 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "black",
    },
  ];

  function App() {
    return(
      <div>
        <Cards arr = {rates}/>
      </div>
    )
  }

  export default App;