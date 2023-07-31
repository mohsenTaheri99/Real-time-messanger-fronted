const ColorCollection = function (collectionName) {
  if (collectionName === "dark")
    return {
      theme: "dark",
      color: {
        bg: "#272727",
        complementaryOne: "#393939",
        complementaryTwo: "#515151",
        primary: "#1eff00",
        text: "#e6e6e6",
      },
    };
  if (collectionName === "light")
    return {
      theme: "light",
      color: {
        bg: "#ededed",
        complementaryOne: "#a6a6a6 ",
        complementaryTwo: "#ffffff77",
        primary: "#1f03f9",
        text: "#000000",
      },
    };
};

export default ColorCollection;
