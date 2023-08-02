
export default function Item(props) {
  console.log(props)
  return(
    <section>
    <h2>{props.item.name}</h2>
    <h2>{props.item.price}</h2>
    <div>{props.item.speed}</div>
    <div>{props.item.info}</div>
    </section>
  )
}