export function randomColorStick() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return "#FDF2B3";
    case 2:
      return "#D1EAED";
    case 3:
      return "#FFDADA";
    default:
      return "#EBEBEB";
  }
}

export function randomColorMenu() {
  const colors = [
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
