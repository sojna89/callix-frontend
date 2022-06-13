const useDate = (timestamp: number) => {
  let launchDate;
  
  if(timestamp == null) launchDate = Date.now()
  
  launchDate = new Date(timestamp * 1000);
  //TODO: calc tz

  return {
    date: `${launchDate.toLocaleDateString()}`,
    time: `${launchDate.toLocaleTimeString()}`,
    launchDate
  }
}

export default useDate;