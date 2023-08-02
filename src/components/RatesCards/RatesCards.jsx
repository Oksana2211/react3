import Item from '../item/item'
import st from './slyle.module.scss'


export default function Cards(props) {
// console.log(props)
  return (
    <div className={st.card}>
  {props.arr.map((name,price,speed,info,id) =>(
  <Item name={name} price={price} speed={speed} info={info} key={id}/>))}
    </div>
  );
}

