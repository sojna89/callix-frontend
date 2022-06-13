import useLaunch from "../../hooks/useLaunch";
import useDate from "../../hooks/useLaunchDate";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";

function LatestLaunch() {
  const {launch, hasError, isLoading} = useLaunch('latest');
  const {date, time} = useDate(launch?.date_unix);

  if(isLoading) return <Loading />;
  if(hasError) return <ErrorMessage error={hasError} />

  return(
    <div className='latest-launch-container'>
      Latest launch {launch?.name}
      <div>was at {`${date} ${time}`}</div>
    </div>
  )
}

export default LatestLaunch;