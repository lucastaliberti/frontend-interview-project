# CareCru Frontend Interview Project

---

This is my attempt on the CareCru Frontend Interview Project from the following repository.

https://github.com/CareCru/frontend-interview-project

This project renders a component that displays the available times for a clinic for a given day.

## My approach

For this project I choose to have a master container component called Popup, the role of this component is to compose all the other components and keep track of the state.

After that I built two children components a launcher (PopupLauncher) which in charge of displaying the window component (PopupWindow).

Inside the PopupWindow I have 3 sections:

* Head, to display the title and some small advice about using the component
* Calendar, a wrapper for the DayPicker component
* Body, the component that will hold the cards (TimeSlotCard) that display the available time slots

All mocked API calls are made inside the Popup container and the needed data is passed down via props to the children components.

To add the ability of theme the component, I built a small function that generate an object containing the visual attributes of the component, such as primary color and default font color. This function can be enhanced in the future to have more complex logic to define the theme (i.e. querying an API).

On top of that I choose the Aphrodite CSS library so I can add CSS classes using JS objects using the values from the theme function. This way any change to the theme is automatically reflected to all components using it.

## To run

I'm using yarn for its speed and simplicity. But all below comands will work
with npm too.

1. First install all dependencies

```bash
$ yarn
```

2. Run it

```bash
$ yarn start
```

4. Browse localhost:3000

---

* You can also run the tests

```bash
$ yarn test
```
