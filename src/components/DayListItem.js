export default function DayListItem(props) {
  // const [day, setDay] = useSTATE()
  return (
    <li>
         onClick={() => {
      props.setDay(props.name, props.slots)
         }}

      <h2 className="text--regular">props.name</h2> 
      <h3 className="text--light">props.spots</h3>
    </li>
  );
}