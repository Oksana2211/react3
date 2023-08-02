import st from "./style.module.scss"

export default function Item(props) {
  console.log(props)
  return(
    <section className={st.card}>
    <h2 className={st.name}>{props.item.name}</h2>
    <h2 className={st.price}>{props.item.price}</h2>
    <div className={st.speed}>{props.item.speed}</div>
    <div className={st.info}>{props.item.info}</div>
    </section>
  )
}