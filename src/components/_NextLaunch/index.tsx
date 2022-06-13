import useLaunch from '../../hooks/useLaunch';
import useDate from '../../hooks/useLaunchDate';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';

function NextLaunch() {
  const {launch, hasError, isLoading} = useLaunch('next');
  const {date, time} = useDate(launch?.date_unix);

  if(isLoading) return <Loading />;
  if(hasError) return <ErrorMessage error={hasError} />

  return(
    <div className='next-launch-container'>
      Next launch {launch?.name}
      <div>at {`${date} ${time}`}</div>
    </div>
  )
}

export default NextLaunch;