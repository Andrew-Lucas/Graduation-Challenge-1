//Design Page Select
const templateFirstColor = document.querySelector(".resume_color div:nth-child(1)")
const templateSecondColor = document.querySelector(".resume_color div:nth-child(2)")
const templateThirdColor = document.querySelector(".resume_color div:nth-child(3)")
const templateFourthColor = document.querySelector(".resume_color div:nth-child(4)")
const templateFifthColor = document.querySelector(".resume_color div:nth-child(5)")
const templateColors = [templateFirstColor, templateSecondColor, templateThirdColor,templateFourthColor, templateFifthColor]

const template_1 = document.querySelector(".template_1")
const template_2 = document.querySelector(".template_2")
const template_3 = document.querySelector(".template_3")
const template_4 = document.querySelector(".template_4")
const templateStyles = [  template_1, template_2,template_3, template_4]

const template1Image = template_1.querySelector("img")
const template2Image = template_2.querySelector("img")
const template3Image = template_3.querySelector("img")
const template4Image = template_4.querySelector("img")

//Resume build page
const template3 = document.querySelector(".display-template_3")





function applyFirstColor(){
  const clicked = true
  templateStyles.every((template)=>template.style.backgroundColor = "#4F698F")
  templateColors.every((unselected)=>unselected.style.opacity = 0.3)
  const selected = templateColors.filter((chosen) => chosen === templateColors[0])
  selected.every((activeColor)=>activeColor.style.opacity=1)
  template1Image.src="../images/Resume template light blue 1.png"
  template2Image.src="../images/Resume template light blue 2.png"
  template3Image.src="../images/Resume template light blue 3.png"
  template4Image.src="../images/Resume template light blue 4.png"
}
function applySecondColor(){
  templateStyles.every((template)=>template.style.backgroundColor = "#1A3351")
  templateColors.every((unselected)=>unselected.style.opacity = 0.3)
  const selected = templateColors.filter((chosen)=> chosen === templateColors[1])
  selected.every((activeColor)=> activeColor.style.opacity = 1)
  template1Image.src="../images/Resume template dark blue 1.png"
  template2Image.src="../images/Resume template dark blue 2.png"
  template3Image.src="../images/Resume template dark blue 3.png"
  template4Image.src="../images/Resume template dark blue 4.png"
}
function applyThirdColor(){
  templateStyles.every((template)=>template.style.backgroundColor = "#485B5B")
  templateColors.every((unselected)=>unselected.style.opacity = 0.3)
  const selected = templateColors.filter((chosen)=> chosen === templateColors[2])
  selected.every((activeColor)=> activeColor.style.opacity = 1)
  template1Image.src="../images/Resume template light green 1.png"
  template2Image.src="../images/Resume template light green 2.png"
  template3Image.src="../images/Resume template light green 3.png"
  template4Image.src="../images/Resume template light green 4.png"
}
function applyFourthColor(){
  templateStyles.every((template)=>template.style.backgroundColor = "#3E4345")
  templateColors.every((unselected)=>unselected.style.opacity = 0.3)
  const selected = templateColors.filter((chosen)=> chosen === templateColors[3])
  selected.every((activeColor)=> activeColor.style.opacity = 1)
  template1Image.src="../images/Resume template grey 1.png"
  template2Image.src="../images/Resume template grey 2.png"
  template3Image.src="../images/Resume template grey 3.png"
  template4Image.src="../images/Resume template grey 4.png"
}
function applyFifthColor(){
  templateStyles.every((template)=>template.style.backgroundColor = "#010101")
  templateColors.every((unselected)=> unselected.style.opacity = 0.3)
  const selected = templateColors.filter((chosen)=> chosen === templateColors[4])
  selected.every((activeColor)=> activeColor.style.opacity = 1)
  template1Image.src="../images/Resume template black 1.png"
  template2Image.src="../images/Resume template black 2.png"
  template3Image.src="../images/Resume template black 3.png"
  template4Image.src="../images/Resume template black 4.png"
}
templateFirstColor.addEventListener("click", applyFirstColor)
templateSecondColor.addEventListener("click", applySecondColor)
templateThirdColor.addEventListener("click", applyThirdColor)
templateFourthColor.addEventListener("click", applyFourthColor)
templateFifthColor.addEventListener("click", applyFifthColor)


