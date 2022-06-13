import useLaunch from "../../hooks/useLaunch";
import ErrorMessage from "../ErrorMessage";
import LaunchTable from "../LaunchTable";
import Loading from "../Loading";

function PastLaunches() {
  
  const {launch: launches, hasError, isLoading} = useLaunch('past');
  
  if(isLoading) return <Loading />;
  if(hasError) return <ErrorMessage error={hasError} />

  return(<LaunchTable launches={launches} />)
}

export default PastLaunches;