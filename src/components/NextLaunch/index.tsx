import React, { useLayoutEffect, useState }  from 'react';
import useLaunch from '../../hooks/useLaunch';

function NextLaunch() {
  const [date, setDate] = useState('');
  const {launch, hasError, isLoading} = useLaunch('next');
  // console.log(launch, hasError, isLoading);
  
  useLayoutEffect(() => {
    const auxDate = new Date(launch?.date_unix * 1000).toLocaleDateString()
    setDate(auxDate);

  }, [launch])
  

  if(isLoading) return <div>loading</div>;

  return(
    <div className='next-launch-container'>
      Next launch {launch?.id}
      <div>{date}</div>
    </div>
  )
}

export default NextLaunch;