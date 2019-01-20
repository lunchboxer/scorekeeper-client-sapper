import { formatDistance } from 'date-fns/esm'

export const getRelativeClassTime = (startsAt, endsAt, time = new Date()) => {
  const startsDate = new Date(startsAt)
  const endsDate = new Date(endsAt)
  const startsDiff = time.getTime() - startsDate.getTime()
  const endsDiff = time.getTime() - endsDate.getTime()
  // finds if we are closer to start or end
  if (Math.abs(startsDiff) > Math.abs(endsDiff)) {
    // closer to the end
    const endDistance = formatDistance(endsDate, time, {
      addSuffix: true,
      includeSeconds: true
    })
    // positive means past
    return endsDiff > 1 ? 'ended ' + endDistance : 'ends ' + endDistance
  } else {
    // closer to the start
    const startDistance = formatDistance(startsDate, time, {
      addSuffix: true,
      includeSeconds: true
    })
    return startsDiff > 1
      ? 'started ' + startDistance
      : 'starts ' + startDistance
  }
}
