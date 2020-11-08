export const getDarkModeInfo = () => {
  return localStorage.getItem("isDark") || false
}

export const setDarkModeInfo = isDark => {
  localStorage.setItem("isDark", isDark)
}

export const toggleDarkMode = () => {
  const isDark = getDarkModeInfo()
  setDarkModeInfo(isDark === "false")
  return isDark
}
