const date = (y, m, d, h, mi) =>
  new Date(Date.UTC(y, m, d, h, mi)).toISOString();

// Fake Appointments Database
export const APPOINTMENTS = {
  sunday: [],
  monday: [
    {
      startTime: date(2018, 1, 1, 9, 30), // 9:30am,
      endTime: date(2018, 1, 1, 11, 30) // 11:30am,
    },
    {
      startTime: date(2018, 1, 1, 13, 0), // 1:00pm,
      endTime: date(2018, 1, 1, 14, 0) // 2:00pm,
    }
  ],

  tuesday: [
    {
      startTime: date(2018, 1, 1, 14, 30), // 2:30pm,
      endTime: date(2018, 1, 1, 15, 30) // 3:30pm,
    }
  ],

  wednesday: [
    {
      startTime: date(2018, 1, 1, 8, 0), // 8:00am,
      endTime: date(2018, 1, 1, 9, 0) // 9:00am,
    },
    {
      startTime: date(2018, 1, 1, 9, 0), // 9:00am,
      endTime: date(2018, 1, 1, 10, 0) // 10:00am,
    },
    {
      startTime: date(2018, 1, 1, 13, 0), // 1:00pm,
      endTime: date(2018, 1, 1, 14, 0) // 2:00pm,
    },
    {
      startTime: date(2018, 1, 1, 14, 0), // 2:00pm,
      endTime: date(2018, 1, 1, 15, 0) // 3:00pm,
    }
  ],

  thursday: [],
  friday: [
    {
      startTime: date(2018, 1, 1, 8, 30), // 8:30am,
      endTime: date(2018, 1, 1, 9, 30) // 9:30am,
    },
    {
      startTime: date(2018, 1, 1, 9, 30), // 9:30am,
      endTime: date(2018, 1, 1, 10, 30) // 10:30am,
    },
    {
      startTime: date(2018, 1, 1, 10, 30), // 10:30am,
      endTime: date(2018, 1, 1, 11, 30) // 11:30am,
    },
    {
      startTime: date(2018, 1, 1, 11, 30), // 11:30am,
      endTime: date(2018, 1, 1, 12, 30) // 12:30pm,
    },
    {
      startTime: date(2018, 1, 1, 12, 30), // 12:30pm,
      endTime: date(2018, 1, 1, 13, 30) // 1:30pm,
    }
  ],

  saturday: []
};

// Fake Office Hours Database
export const OFFICE_HOURS = {
  sunday: { isClosed: true },
  monday: {
    startTime: date(2018, 1, 1, 8, 0), // 8:00am,
    endTime: date(2018, 1, 1, 17, 0), // 5:00pm,
    breaks: [
      {
        startTime: date(2018, 1, 1, 12, 0), // 12:00pm,
        endTime: date(2018, 1, 1, 13, 0) // 1:00pm,
      }
    ]
  },

  tuesday: {
    startTime: date(2018, 1, 1, 13, 30), // 1:30pm,
    endTime: date(2018, 1, 1, 18, 30), // 6:30pm,
    breaks: []
  },

  wednesday: {
    startTime: date(2018, 1, 1, 8, 0), // 8:00am,
    endTime: date(2018, 1, 1, 17, 0), // 5:00pm,
    breaks: [
      {
        startTime: date(2018, 1, 1, 12, 0), // 12:00pm,
        endTime: date(2018, 1, 1, 13, 0) // 1:00pm,
      }
    ]
  },

  thursday: {
    startTime: date(2018, 1, 1, 8, 0), // 8:00am,
    endTime: date(2018, 1, 1, 18, 0), // 6:00pm,
    breaks: [
      {
        startTime: date(2018, 1, 1, 12, 0), // 12:00pm,
        endTime: date(2018, 1, 1, 15, 0) // 3:00pm,
      }
    ]
  },

  friday: {
    startTime: date(2018, 1, 1, 8, 30), // 8:30am,
    endTime: date(2018, 1, 1, 13, 30), // 1:30pm,
    breaks: []
  },

  saturday: { isClosed: true }
};
