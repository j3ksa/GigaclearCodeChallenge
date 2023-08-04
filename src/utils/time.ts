const getFullTime = (time: number) => `0${time}`.slice(-2)

const getDisplayDate = (timestamp: string) => {
    const date = new Date(Number(timestamp) * 1000)
    return `${date.getDate()}.${getFullTime(
      date.getMonth() + 1
    )}.${date.getFullYear()}`
}

const format12Hour = (timestamp: string) => {
  const date = new Date(Number(timestamp) * 1000)
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

export { getDisplayDate, format12Hour}