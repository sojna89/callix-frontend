import useDate from "../../hooks/useLaunchDate";
import './index.css'

function LaunchItem({launch}: any) {
  const {date, time} = useDate(launch.date_unix);
  
  return (
    <tr>
      <td>{launch.name}</td>
      <td>{`${date} ${time}`}</td>
    </tr>
  )
}

export default LaunchItem;