import Cards from "./components/RatesCards/RatesCards";
import st from "./styles/index.css"


const rates = [
    {
      name: "Безлимитный 300",
      price: "300 руб/мес.",
      speed: "до 10 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "blue",
      flag : false,
    },
    {
      name: "Безлимитный 450",
      price: "450 руб/мес.",
      speed: "до 50 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "green",
      flag : false,
    },
    {
      name: "Безлимитный 550",
      price: "550 руб/мес.",
      speed: "до 100 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "red",
      flag : true,
    },
    {
      name: "Безлимитный 1000",
      price: "1000 руб/мес.",
      speed: "до 200 Мбит/сек",
      info: "Обьем включенного трафика не ограничен",
      color: "black",
      flag : false,
    },
  ]

  function App() {
    return(
      <div>
        <h1 className={st.header}>Карточки с тарифами</h1>
        <Cards arr = {rates}/>
      </div>
    )
  }

  export default App;