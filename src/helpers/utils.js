export const getDarkModeInfo = () => {
  return localStorage.getItem("isDark")
}

export const setDarkModeInfo = isDark => {
  localStorage.setItem("isDark", isDark)
}

export const toggleDarkMode = () => {
  const isDark = getDarkModeInfo() || "false"
  setDarkModeInfo(isDark === "false")
  return isDark
}
