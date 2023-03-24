export const parseTime = (time: number) => {
  const min = Math.floor(time / 60);
  const sec = time - min * 60;
  const minString = min < 10 ? `0${min}` : `${min}`;
  const secString = sec < 10 ? `0${sec}` : `${sec}`;
  return `${minString}:${secString}`;
};
