const sharedTheme = {
  soGnareBlue: "#1F4DF7",
  soGnareGray: "#EFEFEF",
  soGnareGreen: "#15FEA5",
  soGnareLightPurple: "#242A40",
}

export const light = {
  headerActiveLinkColor: sharedTheme.soGnareBlue,
  headerFooterBgColor: sharedTheme.soGnareGray,
  textIndicatorColor: "#1B211A",
  knobTransform: "translate3d(2px,0,0)",
  switchBg: "#909090",
  ...sharedTheme,
}

export const dark = {
  headerActiveLinkColor: sharedTheme.soGnareGreen,
  headerFooterBgColor: sharedTheme.soGnareLightPurple,
  textIndicatorColor: "#fff",
  knobTransform: "translate3d(26px,0,0)",
  switchBg: "#15FEA5",
  ...sharedTheme,
}
