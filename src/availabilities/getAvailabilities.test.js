import getAvailabilities from "./getAvailabilities";
import { OFFICE_HOURS, APPOINTMENTS } from "./__mocks__/data";

describe("#getAvailabilities", () => {
  it("is a function", () => {
    expect(typeof getAvailabilities).toBe("function");
  });

  it("returns empty when is closed", () => {
    expect(
      getAvailabilities(OFFICE_HOURS["sunday"], APPOINTMENTS["sunday"]).length
    ).toBe(0);

    expect(
      getAvailabilities(OFFICE_HOURS["saturday"], APPOINTMENTS["saturday"])
        .length
    ).toBe(0);
  });

  it("consider breaks", () => {
    expect(getAvailabilities(OFFICE_HOURS["monday"], [])).toEqual([
    {
        startTime: "2018-02-01T08:00:00.000Z",
        endTime: "2018-02-01T12:00:00.000Z"
    },
    {
        startTime: "2018-02-01T13:00:00.000Z",
        endTime: "2018-02-01T17:00:00.000Z"
    }
    ]);
  });

  it("works on monday", () => {
    let testingDay = "monday";
    expect(
      getAvailabilities(OFFICE_HOURS[testingDay], APPOINTMENTS[testingDay])
    ).toEqual([
    {
        startTime: "2018-02-01T08:00:00.000Z",
        endTime: "2018-02-01T09:30:00.000Z"
    },
    {
        startTime: "2018-02-01T11:30:00.000Z",
        endTime: "2018-02-01T12:00:00.000Z"
    },
    {
        startTime: "2018-02-01T14:00:00.000Z",
        endTime: "2018-02-01T17:00:00.000Z"
    }
    ]);
  });

  it("works on tuesday", () => {
    let testingDay = "tuesday";
    expect(
      getAvailabilities(OFFICE_HOURS[testingDay], APPOINTMENTS[testingDay])
    ).toEqual([
    {
        startTime: "2018-02-01T13:30:00.000Z",
        endTime: "2018-02-01T14:30:00.000Z"
    },
    {
        startTime: "2018-02-01T15:30:00.000Z",
        endTime: "2018-02-01T18:30:00.000Z"
      }
    ]);
  });

  it("works on wednesday", () => {
    let testingDay = "wednesday";
    expect(
      getAvailabilities(OFFICE_HOURS[testingDay], APPOINTMENTS[testingDay])
    ).toEqual([
    {
        startTime: "2018-02-01T08:00:00.000Z",
        endTime: "2018-02-01T09:30:00.000Z"
    },
    {
        startTime: "2018-02-01T11:30:00.000Z",
        endTime: "2018-02-01T12:00:00.000Z"
    },
    {
        startTime: "2018-02-01T14:00:00.000Z",
        endTime: "2018-02-01T17:00:00.000Z"
      }
    ]);
  });

  it("works on thursday", () => {
    let testingDay = "thursday";
    expect(
      getAvailabilities(OFFICE_HOURS[testingDay], APPOINTMENTS[testingDay])
    ).toEqual([
      {
        startTime: "2018-02-01T08:00:00.000Z",
        endTime: "2018-02-01T09:30:00.000Z"
  },
      {
        startTime: "2018-02-01T11:30:00.000Z",
        endTime: "2018-02-01T12:00:00.000Z"
  },
      {
        startTime: "2018-02-01T14:00:00.000Z",
        endTime: "2018-02-01T17:00:00.000Z"
      }

describe("#getAvailabilities", () => {
  it("is a function", () => {
    expect(typeof getAvailabilities).toBe("function");
  });

  it("returns empty when is closed", () => {
    expect(
      getAvailabilities(OFFICE_HOURS["sunday"], APPOINTMENTS["sunday"]).length
    ).toBe(0);

    expect(
      getAvailabilities(OFFICE_HOURS["saturday"], APPOINTMENTS["saturday"])
        .length
    ).toBe(0);
  });

  it("consider breaks", () => {
    expect(getAvailabilities(OFFICE_HOURS["monday"], [])).toEqual([
      {
        startTime: "2018-02-01T08:00:00.000Z",
        endTime: "2018-02-01T12:00:00.000Z"
      },
      {
        startTime: "2018-02-01T13:00:00.000Z",
        endTime: "2018-02-01T17:00:00.000Z"
      }
    ]);
  });
});
