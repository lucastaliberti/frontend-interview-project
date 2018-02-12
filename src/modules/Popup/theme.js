const themes = {
  default: {
    primary: "#ff715a",
    highlight: "#206477",
    defaultFontColor: "white",
    bgShadow: "0 2px 8px rgba(0, 0, 0, 0.09), 0 4px 40px rgba(0, 0, 0, 0.24)",
    sectionShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
  },
  blue: {
    primary: "#286efa",
    highlight: "#aaa",
    defaultFontColor: "white",
    bgShadow: "0 2px 8px rgba(0, 0, 0, 0.09), 0 4px 40px rgba(0, 0, 0, 0.24)",
    sectionShadow: "0 1px 4px rgba(0, 0, 0, 0.2)"
  }
};

const getTheme = (theme = "default") => themes[theme];
const theme = () => {
  //Can have some logic here to decide what theme to get
  return getTheme();
};

export default theme();
