import moment from "moment";

/**
 * getAvailabilities is function that will compute the open time-slots based on officeHours and appointments
 * - once must not assume appointments are
 * @returns {[availabilities]}
 */
export default function getAvailabilities(officeHours, appointments) {
  if (!officeHours.startTime || officeHours.isClosed) return [];
  else {
    const notAvailableTimes = appointments
      .concat(officeHours.breaks)
      .sort(sortByStartTime);

    const availableOfficeHours = notAvailableTimes.reduce(
      officeHoursBreaksReducer(officeHours),
      { hours: [] }
    ).hours;

    return availableOfficeHours.sort(sortByStartTime);
  }
}

const sortByStartTime = (a, b) => new Date(a.startTime) - new Date(b.startTime);

const officeHoursBreaksReducer = officeHours => (acc, breaks, index, arr) => {
  const startTime = acc.nextStartTime
    ? acc.nextStartTime
    : officeHours.startTime;

  const breakStart = moment
    .utc(breaks.startTime)
    .diff(moment.utc(startTime), "m");
  const breakDuration = moment
    .utc(breaks.endTime)
    .diff(moment.utc(breaks.startTime), "m");

  const startTimePlusBreak = moment.utc(startTime).add(breakStart, "m");

  acc.nextStartTime = startTimePlusBreak
    .clone()
    .add(breakDuration, "m")
    .toISOString();

  if (
    index === arr.length - 1 &&
    moment.utc(officeHours.endTime).diff(moment.utc(acc.nextStartTime), "m") > 0
  )
    acc.hours.push({
      startTime: acc.nextStartTime,
      endTime: officeHours.endTime
    });

  if (breakStart > 0)
    acc.hours.push({
      startTime,
      endTime: startTimePlusBreak.toISOString()
    });

  return acc;
};
