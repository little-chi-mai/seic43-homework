const planTrip = function(startLine, startStation, swapLine, stopStation) {

  let lines = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }

  if ( startLine === swapLine ) {
    const stops = [];
    const stations = lines[startLine];
    const a = (stations.indexOf(startStation));
    const b = (stations.indexOf(stopStation));
    if ( a < b ) {
      for ( let i = a; i < b + 1; i++ )
      stops.push(stations[i]);
      } else {
      for ( let i = a; i > b - 1; i--)
      stops.push(stations[i]);
      }
      const stopsSum = stops.length - 1;// -1 excludes starting station in total

    return (`Not including your start point, there are ${ stopsSum } total stops.${'\n'}Start travel from ${ startLine } line, and continue on ${ startLine } line through:${'\n'}${ stops.join('\n') }`)

  } else {
    //first array of stations from starting train line
    const stops = [];
    const stations = lines[startLine];
    const a = (stations.indexOf(startStation));
    const b = (stations.indexOf('Union Square'));
    if ( a < b ) {
      for ( let i = a; i < b + 1; i++ )//iteration + 1 to include last station
        stops.push(stations[i]);
      } else {
      for ( let i = a; i > b - 1; i--)//reverse of iteration above - 1 to include last station
        stops.push(stations[i]);
      }
    //second array of stations from 'swap to' train line
    let extraStops = [];
    const extraStations = lines[swapLine];
    const c = (extraStations.indexOf('Union Square'));
    const d = (extraStations.indexOf(stopStation));
    if ( c < d ) {
      for ( let i = c + 1; i < d + 1; i++ )//iterates from the station AFTER Union Square so not to repeat
        extraStops.push(extraStations[i]);
    } else {
      for ( let i = c - 1; i > d - 1; i-- )//iterates from the station BEFORE Union Square so not to repeat
        extraStops.push(extraStations[i]);
      }
      const sum = stops.length + extraStops.length - 1;// -1 excludes starting station in total

      if (startStation === 'Union Square') {
        return (`Not including your start point, there are ${ sum } total stops.${'\n'}You are already at ${ startStation }, so swap to ${ swapLine } line and travel from ${stops.pop()} through ${'\n'}${ extraStops.join('\n') }`)
      } else {
        return (`Not including your start point, there are ${ sum } total stops.${'\n'}Start travel from ${ startLine } line, and travel through ${'\n'}${ stops.join('\n') }${'\n'}Then swap to ${ swapLine } line and continue travel from ${stops.pop()} through ${'\n'}${ extraStops.join('\n') }`)
        }
  }
};

console.log(planTrip('N', '34th', 'N', '8th' ));//Single line random stations, forward
console.log(planTrip('N', 'Union Square', 'N', 'Times Square' ));//Single line random stations, reversed
console.log(planTrip('L', '8th', '6', 'Astor Place' ));//Changing lines, forward
console.log(planTrip('6', '23rd', 'L', '6th' ));//Changing lines, reversed
console.log(planTrip('6', 'Union Square', 'N', 'Times Square' ));//Case if starting from Union Square
