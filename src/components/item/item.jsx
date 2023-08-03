import st from "./style.module.scss"

export default function Item(props) {
  console.log(props)
  return(
    <section className={st.card}>
    <div className={st[props.item.color]}><h2 className={st.name}>{props.item.name}</h2></div>
    <div className={st[props.item.color]}><h2 className={st.price}>{props.item.price}</h2></div>
    <div ><h3 className={st.speed}>{props.item.speed}</h3></div>
    <div ><h3 className={st.info}>{props.item.info}</h3></div>
    </section>
  )
}