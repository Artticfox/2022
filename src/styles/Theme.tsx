export const globalTheme = {
  font: {
    family: {
      main: "'Open Sans', sans-serif",
      body: "'Open Sans', sans-serif",
    },
  },
};

export const primaryTheme = {
  colors: {
    nav: {
      background: "white",
      logo: "black",
      content: "black",
    },
    white: "#fff",
    black: "#000",
    text: "#606060",
    background: "fdfdfd",
    accent: "#ECC813",
  },

  ...globalTheme,
};

export const secondaryTheme = {
  colors: {
    nav: {
      background: "black",
      logo: "white",
      content: "white",
    },
    white: "#fff",
    black: "#000",
    text: "#606060",
    background: "fdfdfd",
    accent: "#ECC813",
  },
  ...globalTheme,
};
