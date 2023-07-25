import Rates from './Rates';
import '../style/App.css';

let rates = [
  {
    name: 'Безлимитный 300',
    price: '300 руб/мес',
    info: 'до 10 Мбит/сек',
    addition: 'Объем включенного трафика не ограничен',
    id: 'Тариф 1',
  },
  {
    name: 'Безлимитный 450',
    price: '450 руб/мес',
    info: 'до 50 Мбит/сек',
    addition: 'Объем включенного трафика не ограничен',
    id: 'Тариф 2',
  },
  {
    name: 'Безлимитный 550',
    price: '550 руб/мес',
    info: 'до 100 Мбит/сек',
    addition: 'Объем включенного трафика не ограничен',
    id: 'Тариф 3',
  },
  {
    name: 'Безлимитный 1000',
    price: '1000 руб/мес',
    info: 'до 200 Мбит/сек',
    addition: 'Объем включенного трафика не ограничен',
    id: 'Тариф 4',
  }]


function App() {
  return (
    <div className="App">
      {rates.map((rate) => (
        <Rates
          name={rate.name}
          price={rate.price}
          info={rate.info}
          addition={rate.addition}
          key={rate.id}
        ></Rates>
      ))}
    </div>
  );
}
export default App;
