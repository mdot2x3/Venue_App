

export const getRatioInPixels = (ratioWidth, ratioHeight, containerWidth, containerHeight) => {

  let newHeight = (ratioHeight/ratioWidth) * containerWidth
  let newWidth = containerWidth

  if (newHeight >= containerHeight) {
    newWidth = (ratioWidth/ratioHeight) * containerHeight
    newHeight = containerHeight
  }

  return {
    height: newHeight,
    width: newWidth,
  }
}