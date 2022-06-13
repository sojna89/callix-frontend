import { ILaunch } from "../../App/types";
import LaunchItem from "../LaunchItem";

function LaunchTable({launches}: any) {

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Date(UTC)</th>
          </tr>

        </thead>
        <tbody>
          {launches.map((launch: ILaunch) => (
            <LaunchItem key={launch.id} launch={launch} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LaunchTable;