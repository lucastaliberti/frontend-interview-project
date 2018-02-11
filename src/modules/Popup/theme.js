const themes = {
  default: {
    primary: "#ff715a",
    highlight: "#206477"
  }
};

const theme = (theme = "default") => themes[theme];

export default theme();
