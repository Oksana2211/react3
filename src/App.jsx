import Cards from "./components/RatesCards/RatesCards";


const rates = [
    {
      name: "Безлимитный 30",
      price: 30,
      speed: "до 10 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "blue",
      id : "1",
    },
    {
      name: "Безлимитный 45",
      price: 45,
      speed: "до 50 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "green",
      id : "2",
    },
    {
      name: "Безлимитный 55",
      price: 55,
      speed: "до 100 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "red",
      id : "3",
    },
    {
      name: "Безлимитный 100",
      price: 100,
      speed: "до 200 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "black",
      id : "4",
    },
  ]

  function App() {
    return(
      <div>
        <Cards arr = {rates}/>
      </div>
    )
  }

  export default App;