/* const sectionList = document.querySelectorAll('.edit_resume-contents section')

function removeSections(){
  console.log("Removed")
  sectionList.forEach((sections)=> sections.classList.add("hidden_forms"))
}
function addSections(){
  console.log("Added")
  sectionList.forEach((sections)=> sections.classList.remove("hidden_forms"))
} */

const toogledHeading = document.querySelector('.toogled_heading')
const toogledForm = document.querySelector('.toogled_form')
const tooglePersonalDetails = document.querySelector(
  '.personal_details .toogle'
)
const toogleAboutMe = document.querySelector('.about_me .toogle')
const toogleLanguage = document.querySelector('.language .toogle')
const toogleWorkExperience = document.querySelector('.work_experience .toogle')
const toogleEducation = document.querySelector('.education .toogle')
const toogleProjects = document.querySelector('.projects .toogle')
const toogleSkills = document.querySelector('.skills .toogle')
const toogleSoftSkills = document.querySelector('.soft_skills .toogle')
const toogleAchievements = document.querySelector('.achievements .toogle')

const personalDetailsForm = document.querySelector('.personal_details-form')
const aboutMeForm = document.querySelector('.about_me-form')
const languagesForm = document.querySelector('.languages_form')
const workExperienceForm = document.querySelector('.work_experience-form')
const educationForm = document.querySelector('.education_form')
const projectForm = document.querySelector('.projects_form')
const skillsForm = document.querySelector('.skills_form')
const softSkillsForm = document.querySelector('.soft_skills-form')
const achievementForm = document.querySelector('.achievement_form')

const toogleRemovePersonalDetails =
  tooglePersonalDetails.parentElement.querySelector('.off')
function tooglePersonalDetailsButton() {
  personalDetailsForm.classList.toggle('hidden_forms')
  personalDetailsForm.classList.toggle('toogled_form')
  tooglePersonalDetails.parentElement.classList.toggle('toogled_heading')
  tooglePersonalDetails.classList.toggle('hidden_forms')
  toogleRemovePersonalDetails.classList.toggle('hidden_forms')
}
tooglePersonalDetails.addEventListener('click', tooglePersonalDetailsButton)
const additionalDetailsArea = document.querySelector('.additional_details')
const editAdditionalDetails = document.querySelector('.additional_details svg')
editAdditionalDetails.addEventListener('click', () => {
  const addPersonalDetailsForm = document.querySelector(
    '.personal_details-additional_form'
  )
  addPersonalDetailsForm.classList.remove('hidden_forms')
  additionalDetailsArea.classList.add('hidden_forms')
})
toogleRemovePersonalDetails.addEventListener(
  'click',
  tooglePersonalDetailsButton
)

const toogleRemoveAbout = toogleAboutMe.parentElement.querySelector('.off')
function toogleAboutButton() {
  aboutMeForm.classList.toggle('hidden_forms')
  aboutMeForm.classList.toggle('toogled_form')
  toogleAboutMe.parentElement.classList.toggle('toogled_heading')
  toogleAboutMe.classList.toggle('hidden_forms')
  toogleRemoveAbout.classList.toggle('hidden_forms')
}
toogleAboutMe.addEventListener('click', toogleAboutButton)
toogleRemoveAbout.addEventListener('click', toogleAboutButton)

const toogleRemoveLanguage = toogleLanguage.parentElement.querySelector('.off')
function toogleLanguageButton() {
  languagesForm.classList.toggle('hidden_forms')
  languagesForm.classList.toggle('toogled_form')
  toogleLanguage.parentElement.classList.toggle('toogled_heading')
  toogleLanguage.classList.toggle('hidden_forms')
  toogleRemoveLanguage.classList.toggle('hidden_forms')
}
toogleLanguage.addEventListener('click', toogleLanguageButton)
toogleRemoveLanguage.addEventListener('click', toogleLanguageButton)

const toogleRemoveWorkExperience =
  toogleWorkExperience.parentElement.querySelector('.off')
function toogleWorkButton() {
  workExperienceForm.classList.toggle('hidden_forms')
  workExperienceForm.classList.toggle('toogled_form')
  toogleWorkExperience.parentElement.classList.toggle('toogled_heading')
  toogleWorkExperience.classList.toggle('hidden_forms')
  toogleRemoveWorkExperience.classList.toggle('hidden_forms')
}
toogleWorkExperience.addEventListener('click', toogleWorkButton)
toogleRemoveWorkExperience.addEventListener('click', toogleWorkButton)

const toogleRemoveEducation =
  toogleEducation.parentElement.querySelector('.off')
function toogleEducationButton() {
  educationForm.classList.toggle('hidden_forms')
  educationForm.classList.toggle('toogled_form')
  toogleEducation.parentElement.classList.toggle('toogled_heading')
  toogleEducation.classList.toggle('hidden_forms')
  toogleRemoveEducation.classList.toggle('hidden_forms')
}
toogleEducation.addEventListener('click', toogleEducationButton)
toogleRemoveEducation.addEventListener('click', toogleEducationButton)

const toogleRemoveProjects = toogleProjects.parentElement.querySelector('.off')
function toogleProjectButton() {
  projectForm.classList.toggle('hidden_forms')
  projectForm.classList.toggle('toogled_form')
  toogleProjects.parentElement.classList.toggle('toogled_heading')
  toogleProjects.classList.toggle('hidden_forms')
  toogleRemoveProjects.classList.toggle('hidden_forms')
}
toogleProjects.addEventListener('click', toogleProjectButton)
toogleRemoveProjects.addEventListener('click', toogleProjectButton)

const toogleRemoveSkills = toogleSkills.parentElement.querySelector('.off')
function toogleSkillsButton() {
  skillsForm.classList.toggle('hidden_forms')
  skillsForm.classList.toggle('toogled_form')
  toogleSkills.parentElement.classList.toggle('toogled_heading')
  toogleSkills.classList.toggle('hidden_forms')
  toogleRemoveSkills.classList.toggle('hidden_forms')
}
toogleSkills.addEventListener('click', toogleSkillsButton)
toogleRemoveSkills.addEventListener('click', toogleSkillsButton)

const toogleRemoveSoftSkill =
  toogleSoftSkills.parentElement.querySelector('.off')
function toogleSoftSkillsButton() {
  softSkillsForm.classList.toggle('hidden_forms')
  softSkillsForm.classList.toggle('toogled_form')
  toogleSoftSkills.parentElement.classList.toggle('toogled_heading')
  toogleSoftSkills.classList.toggle('hidden_forms')
  toogleRemoveSoftSkill.classList.toggle('hidden_forms')
}
toogleSoftSkills.addEventListener('click', toogleSoftSkillsButton)
toogleRemoveSoftSkill.addEventListener('click', toogleSoftSkillsButton)

const toogleRemoveAchievement =
  toogleAchievements.parentElement.querySelector('.off')
function tooglebutton() {
  achievementForm.classList.toggle('hidden_forms')
  achievementForm.classList.toggle('toogled_form')
  toogleAchievements.parentElement.classList.toggle('toogled_heading')
  toogleAchievements.classList.toggle('hidden_forms')
  toogleRemoveAchievement.classList.toggle('hidden_forms')
}
toogleAchievements.addEventListener('click', tooglebutton)
toogleRemoveAchievement.addEventListener('click', tooglebutton)

let personalDetailsArray = []
function savePersonalDetails(){
  localStorage.setItem("PersonalDetails", JSON.stringify(personalDetailsArray))
}
function setPersonalDetails(){
  const inResumeFullName = document.querySelectorAll('#full_name-fill')
  inResumeFullName.forEach(
    (fullName) =>
      (fullName.innerText = `${personalDetailsForm[0].value} ${personalDetailsForm[7].value}`)
  )

  const inResumePosition = document.querySelectorAll('#position_resume-fill')

  inResumePosition.forEach(
    (position) => (position.innerText = personalDetailsForm[1].value)
  )
  const inResumeCity = document.querySelectorAll('#city_resume-fill')
  inResumeCity.forEach(
    (city) =>
      (city.innerText = `${personalDetailsForm[2].value}, ${personalDetailsForm[8].value}`)
  )
  const inResumeEmail = document.querySelectorAll('#email_resume-fill')
  inResumeEmail.forEach(
    (email) => (email.innerText = personalDetailsForm[3].value)
  )
  const inResumeContact = document.querySelectorAll('#contact_resume-fill')
  inResumeContact.forEach(
    (contact) => (contact.innerText = personalDetailsForm[9].value)
  )
  console.log(inResumeContact)
  const additionalPersonalDetailsForm = [
    document.querySelector('.personal_details-additional_form').children,
  ][0]
  const inResumeLinkedin = document.querySelectorAll('#linkedin_resume-fill')

  inResumeLinkedin.forEach(
    (linkedIn) => (linkedIn.innerText = additionalPersonalDetailsForm[1].value)
  )
  const inResumeGithub = document.querySelectorAll('#github_resume-fill')
  inResumeGithub.forEach(
    (github) => (github.innerText = additionalPersonalDetailsForm[3].value)
  )
  const inResumeBlog = document.querySelectorAll('#blog_resume-fill')
  inResumeBlog.forEach(
    (blog) => (blog.innerText = additionalPersonalDetailsForm[5].value)
  )
  const personalDetailsObject ={
    FullName: `${personalDetailsForm[0].value} ${personalDetailsForm[7].value}`,
    Position: personalDetailsForm[1].value,
    City: `${personalDetailsForm[2].value}, ${personalDetailsForm[8].value}`,
    Email: personalDetailsForm[3].value,
    Contact: personalDetailsForm[9].value,
    Linkedin: additionalPersonalDetailsForm[1].value,
    Github: additionalPersonalDetailsForm[3].value,
    Blog: additionalPersonalDetailsForm[5].value
  }
  personalDetailsArray.push(personalDetailsObject)
  savePersonalDetails()
}
personalDetailsForm.addEventListener('change', setPersonalDetails)

const loadPersonalDetails = localStorage.getItem("PersonalDetails")
if (loadPersonalDetails !== null){
  const savedPersonalDetails = JSON.parse(loadPersonalDetails).length-1
  const inResumeFullName = document.querySelectorAll('#full_name-fill')
  inResumeFullName.forEach(
    (fullName) =>
      (fullName.innerText = JSON.parse(loadPersonalDetails)[savedPersonalDetails].FullName)
  )
  const inResumePosition = document.querySelectorAll('#position_resume-fill')

  inResumePosition.forEach(
    (position) => (position.innerText = JSON.parse(loadPersonalDetails)[savedPersonalDetails].Position)
  )
  const inResumeCity = document.querySelectorAll('#city_resume-fill')
  inResumeCity.forEach(
    (city) =>
      (city.innerText = JSON.parse(loadPersonalDetails)[savedPersonalDetails].City)
  )
  const inResumeEmail = document.querySelectorAll('#email_resume-fill')
  inResumeEmail.forEach(
    (email) => (email.innerText = JSON.parse(loadPersonalDetails)[savedPersonalDetails].Email)
  )
  const inResumeContact = document.querySelectorAll('#contact_resume-fill')
  inResumeContact.forEach(
    (contact) => (contact.innerText = JSON.parse(loadPersonalDetails)[savedPersonalDetails].Contact)
  )
  const additionalPersonalDetailsForm = [
    document.querySelector('.personal_details-additional_form').children,
  ][0]
  const inResumeLinkedin = document.querySelectorAll('#linkedin_resume-fill')
  inResumeLinkedin.forEach(
    (linkedIn) => (linkedIn.innerText = JSON.parse(loadPersonalDetails)[savedPersonalDetails].Linkedin)
  )
  const inResumeGithub = document.querySelectorAll('#github_resume-fill')
  inResumeGithub.forEach(
    (github) => (github.innerText = JSON.parse(loadPersonalDetails)[savedPersonalDetails].Github)
  )
  const inResumeBlog = document.querySelectorAll('#blog_resume-fill')
  inResumeBlog.forEach(
    (blog) => (blog.innerText = JSON.parse(loadPersonalDetails)[savedPersonalDetails].Blog)
  )
}

let aboutArray = []
function saveAbout(){
  localStorage.setItem("About", JSON.stringify(aboutArray))
}
function setAbout(){
  const inResumeAbout = document.querySelectorAll('#about_resume-fill')
  inResumeAbout.forEach(
    (aboutMe) => (aboutMe.innerText = aboutMeForm.children[1].value)
  )
  aboutArray.push(aboutMeForm.children[1].value)
  saveAbout()
}
aboutMeForm.addEventListener('change', setAbout)
const loadAbout = localStorage.getItem("About")
if (loadAbout !== null){
  const inResumeAbout = document.querySelectorAll('#about_resume-fill')
  inResumeAbout.forEach(
    (aboutMe) => (aboutMe.innerText = JSON.parse(loadAbout))
  )
} else{
}


const languageBasic = document.querySelectorAll('.basic_level')
const languageIntermediate = document.querySelectorAll('.intermediate_level')
const languageAdvanced = document.querySelectorAll('.advanced_level')
const languageFluent = document.querySelectorAll('.fluent_level')
const languageNative = document.querySelectorAll('.native_level')

let languageArray = []
function saveLanguage(){
  localStorage.setItem("Language", JSON.stringify(languageArray))
}
function setLanguage(){
  const inResumeLanguage = document.querySelectorAll('#language_resume-fill')
  inResumeLanguage.forEach(
    (languages) => (languages.innerText = languagesForm[0].value)
  )
  languageArray.push(languagesForm[0].value)
  saveLanguage()
}
languagesForm.addEventListener('change', setLanguage)

const loadLanguage = localStorage.getItem("Language")
if (loadLanguage !== null){
  const inResumeLanguage = document.querySelectorAll('#language_resume-fill')
  inResumeLanguage.forEach(
    (languages) => (languages.innerText = JSON.parse(loadLanguage))
  )
} else{
}

function workPeriod() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  workExperienceForm[3].value = `${year}-${month}`
}

workExperienceForm[6].addEventListener('click', () => {
  if (workExperienceForm[6].checked === true) {
    workPeriod()
  } else {
  }
})


let workExperienceArray = []
function SaveWorkExperience() {
  localStorage.setItem("WorkExperience", JSON.stringify(workExperienceArray))
}
function setWorkExperience(){
  const inResumeCompanyName = document.querySelectorAll(
    '#company_name_resume-fill'
  )
  inResumeCompanyName.forEach(
    (companyName) => (companyName.innerText = workExperienceForm[0].value)
  )
  const inResumeDepartmantName = document.querySelectorAll(
    '#department_name_resume-fill'
  )
  inResumeDepartmantName.forEach(
    (departmentName) => (departmentName.innerText = workExperienceForm[1].value)
  )
  const inResumeWorkStartDate = document.querySelectorAll(
    '#work_start_date_resume-fill'
  )
  inResumeWorkStartDate.forEach(
    (workStart) => (workStart.innerText = workExperienceForm[2].value)
  )
  const inResumeWorkEndDate = document.querySelectorAll(
    '#work_end_date_resume-fill'
  )
  inResumeWorkEndDate.forEach(
    (workEnd) => (workEnd.innerText = workExperienceForm[3].value)
  )
  const workExperienceObject = {
    CompanyName: workExperienceForm[0].value,
    DepartmantName: workExperienceForm[1].value,
    StartWork: workExperienceForm[2].value,
    EndWork: workExperienceForm[3].value,
  }
  workExperienceArray.push(workExperienceObject)
  SaveWorkExperience()
}
workExperienceForm.addEventListener('change', setWorkExperience)

const loadWorkExperience = localStorage.getItem("WorkExperience")
if (loadWorkExperience !== null){
  const savedWorkExperience = JSON.parse(loadWorkExperience).length-1
  const inResumeCompanyName = document.querySelectorAll(
    '#company_name_resume-fill'
  )
  inResumeCompanyName.forEach(
    (companyName) => (companyName.innerText = JSON.parse(loadWorkExperience)[savedWorkExperience].CompanyName)
  )
  const inResumeDepartmantName = document.querySelectorAll(
    '#department_name_resume-fill'
  )
  inResumeDepartmantName.forEach(
    (departmentName) => (departmentName.innerText = JSON.parse(loadWorkExperience)[savedWorkExperience].DepartmantName)
  )
  const inResumeWorkStartDate = document.querySelectorAll(
    '#work_start_date_resume-fill'
  )
  inResumeWorkStartDate.forEach(
    (workStart) => (workStart.innerText = JSON.parse(loadWorkExperience)[savedWorkExperience].StartWork)
  )
  const inResumeWorkEndDate = document.querySelectorAll(
    '#work_end_date_resume-fill'
  )
  inResumeWorkEndDate.forEach(
    (workEnd) => (workEnd.innerText = JSON.parse(loadWorkExperience)[savedWorkExperience].EndWork)
  )
} else{
}

function educationPeriod() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  educationForm[2].value = `${year}-${month}`
}
educationForm[4].addEventListener('click', () => {
  if (educationForm[4].checked === true) {
    educationPeriod()
  } else {
  }
})

let educationArray = []
function saveEducation(){
  localStorage.setItem("Education", JSON.stringify(educationArray))
}
function setEducation() {
  const inResumeCollegeName = document.querySelectorAll(
    '#college_name_resume-fill'
  )
  inResumeCollegeName.forEach(
    (collegeName) => (collegeName.innerText = educationForm[0].value)
  )
  const inResumeMajor = document.querySelectorAll('#major_resume-fill')
  inResumeMajor.forEach((major) => (major.innerText = educationForm[3].value))
  const inResumeEducationStart = document.querySelectorAll(
    '#education_start_date_resume-fill'
  )

  inResumeEducationStart.forEach(
    (educationStart) => (educationStart.innerText = educationForm[1].value)
  )
  const inResumeEducationEnd = document.querySelectorAll(
    '#education_end_date_resume-fill'
  )
  inResumeEducationEnd.forEach(
    (educationEnd) => (educationEnd.innerText = educationForm[2].value)
  )
  const educationObject = {
    CollegeName: educationForm[0].value,
    Major: educationForm[3].value,
    EducationStart: educationForm[1].value,
    EducationEnd: educationForm[2].value,
  }
  educationArray.push(educationObject)
  saveEducation()
}
educationForm.addEventListener('change', setEducation)

const loadEducation = localStorage.getItem("Education")
if (loadEducation !== null){
  const savedEducation = JSON.parse(loadEducation).length-1
  const inResumeCollegeName = document.querySelectorAll(
    '#college_name_resume-fill'
  )
  inResumeCollegeName.forEach(
    (collegeName) => (collegeName.innerText = JSON.parse(loadEducation)[savedEducation].CollegeName)
  )
  const inResumeMajor = document.querySelectorAll('#major_resume-fill')
  inResumeMajor.forEach((major) => major.innerText = JSON.parse(loadEducation)[savedEducation].Major)
  const inResumeEducationStart = document.querySelectorAll(
    '#education_start_date_resume-fill'
  )
  inResumeEducationStart.forEach(
    (educationStart) => (educationStart.innerText = JSON.parse(loadEducation)[savedEducation].EducationStart)
  )
  const inResumeEducationEnd = document.querySelectorAll(
    '#education_end_date_resume-fill'
  )
  inResumeEducationEnd.forEach(
    (educationEnd) => (educationEnd.innerText = JSON.parse(loadEducation)[savedEducation].EducationEnd)
  )
} else{
}

function projectEnd() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  projectForm[6].value = `${year}-${month}`
}
projectForm[7].addEventListener('click', () => {
  if (projectForm[7].checked === true) {
    projectEnd()
  } else {
  }
})
let projectArray = []
function saveProject(){
  localStorage.setItem("Project", JSON.stringify(projectArray))
}
function setProjects(){
  const inResumeProjectName = document.querySelectorAll(
    '#project_name_resume-fill'
  )
  inResumeProjectName.forEach(
    (projectName) => (projectName.innerText = projectForm[0].value)
  )
  const inResumeProjectRole = document.querySelectorAll(
    '#project_role_resume-fill'
  )
  inResumeProjectRole.forEach(
    (projectRole) => (projectRole.innerText = projectForm[1].value)
  )
  /*   const inResumeStacks = [document.querySelectorAll("#stacks_resume-fill")[0],document.querySelectorAll("#stacks_resume-fill")[1],document.querySelectorAll("#stacks_resume-fill")[2]]
  inResumeStacks[0].every((projectStacks)=>projectStacks.innerText = projectForm[2].value)
  inResumeStacks[1].every((projectStacks)=>projectStacks.innerText = projectForm[3].value)
  inResumeStacks[2].every((projectStacks)=>projectStacks.innerText = projectForm[4].value) */
  const inResumeProjectStartDate = 
    document.querySelectorAll('#project_start_date_resume-fill')

  inResumeProjectStartDate.forEach(
    (projectStart) => (projectStart.innerText = projectForm[5].value)
  )
  const inResumeProjectEndDate = 
    document.querySelectorAll('#project_end_date-fill')
  inResumeProjectEndDate.forEach(
    (projectEnd) => (projectEnd.innerText = projectForm[6].value)
  )
  const projectObject = {
    ProjectName: projectForm[0].value,
    ProjectRole: projectForm[1].value,
    ProjectStartDate: projectForm[5].value,
    ProjectEndDate: projectForm[6].value
  }
  projectArray.push(projectObject)
  saveProject()
}
projectForm.addEventListener('change', setProjects)

const loadProjects = localStorage.getItem("Project")
if (loadProjects !== null){
  const savedProjects = JSON.parse(loadProjects).length-1
  const inResumeProjectName = document.querySelectorAll(
    '#project_name_resume-fill'
  )
  inResumeProjectName.forEach(
    (projectName) => (projectName.innerText = JSON.parse(loadProjects)[savedProjects].ProjectName)
  )
  const inResumeProjectRole = document.querySelectorAll(
    '#project_role_resume-fill'
  )
  inResumeProjectRole.forEach(
    (projectRole) => (projectRole.innerText = JSON.parse(loadProjects)[savedProjects].ProjectRole)
  )
  const inResumeProjectStartDate = 
    document.querySelectorAll('#project_start_date_resume-fill')
  inResumeProjectStartDate.forEach(
    (projectStart) => (projectStart.innerText = JSON.parse(loadProjects)[savedProjects].ProjectStartDate)
  )
  const inResumeProjectEndDate = 
    document.querySelectorAll('#project_end_date-fill')
  inResumeProjectEndDate.forEach(
    (projectEnd) => (projectEnd.innerText = JSON.parse(loadProjects)[savedProjects].ProjectEndDate)
  )
}else{
}

function skillRate() {
  const tmp1 = document.querySelector('.display-template_1')
  const skillsRange = 
    document.querySelectorAll('.skills_rate .skill_level')
  if (skillsForm[1].value === 'Master') {
    console.log('Master')
    skillsRange.forEach((range) => (range.style.width = '100%'))
  } else if (skillsForm[1].value === 'Professional') {
    console.log('Professional')
    skillsRange.forEach((range) => (range.style.width = '80%'))
  } else if (skillsForm[1].value === 'Advanced') {
    console.log('Advanced')
    skillsRange.forEach((range) => (range.style.width = '60%'))
  } else if (skillsForm[1].value === 'Intermediate') {
    console.log('Intermediate')
    skillsRange.forEach((range) => (range.style.width = '40%'))
  } else if (skillsForm[1].value === 'Beginner') {
    console.log('Beginner')
    skillsRange.forEach((range) => (range.style.width = '20%'))
  }
}

let skillsArray = []
function saveSkills(){
  localStorage.setItem("Skills", JSON.stringify(skillsArray))
}
function setSkills() {
  const inResumeSkills = 
  document.querySelectorAll('#skill_resume-fill')
  const skillsObject = {
    Text:skillsForm[0].value,
    SkillLevel:skillsForm[1].value
  }
inResumeSkills.forEach(
  (resumeSkills) => (resumeSkills.innerText = skillsObject.Text)
)
const skillsBar = document.querySelector('#in_resume-skills_bar')
skillsForm[1].addEventListener('click', skillRate())
console.log(skillsObject)
skillsArray.push(skillsObject)
saveSkills()
}
skillsForm.addEventListener('change', setSkills)

const loadSkills = localStorage.getItem("Skills")
if (loadSkills !==null){
  const inResumeSkills = 
  document.querySelectorAll('#skill_resume-fill')
  const savedProject = JSON.parse(loadSkills).length-1
inResumeSkills.forEach(
  (resumeSkills) => (resumeSkills.innerText = JSON.parse(loadSkills)[savedProject].Text)
)
}else{
}

let softSkillsArray = []
function saveSoftSkills(){
  localStorage.setItem("SoftSkills", JSON.stringify(softSkillsArray))
}
function setSoftSkills(){
  const inResumeSoftSkill = 
  document.querySelectorAll('#soft_skill_resume-fill')
inResumeSoftSkill.forEach(
  (softSkills) => (softSkills.innerText = softSkillsForm[0].value)
)
softSkillsArray.push(softSkillsForm[0].value)
saveSoftSkills()
}
softSkillsForm.addEventListener('change', setSoftSkills)

const loadSoftSkills = localStorage.getItem("SoftSkills")
if (loadSoftSkills !== null){
  const inResumeSoftSkill = 
  document.querySelectorAll('#soft_skill_resume-fill')
inResumeSoftSkill.forEach(
  (softSkills) => (softSkills.innerText = JSON.parse(loadSoftSkills))
)
} else{
}


let achievementArray = []
function saveAchievement(){
  localStorage.setItem("Achievement", JSON.stringify(achievementArray))
}
function setAchievement(){
  const inResumeAchievementName = 
  document.querySelectorAll('#achievement_name_resume-fill')

inResumeAchievementName.forEach(
  (achievementName) => (achievementName.innerText = achievementForm[0].value)
)
const inResumeAchievementStart = 
  document.querySelectorAll('#achievement_start_date_resume-fill')

inResumeAchievementStart.forEach(
  (achievementDate) => (achievementDate.innerText = achievementForm[1].value)
)
const inResumeAchievementOrganization =
  document.querySelectorAll('#achievement_organization_resume-fill')

inResumeAchievementOrganization.forEach(
  (achievementOrganization) =>
    (achievementOrganization.innerText = achievementForm[2].value)
)
const achievementObject ={
  AchievementName: achievementForm[0].value,
  AchievementDate: achievementForm[1].value,
  AchievementOrganization: achievementForm[2].value,
}
achievementArray.push(achievementObject)
saveAchievement()
}
achievementForm.addEventListener('change', setAchievement)

const loadAchievement = localStorage.getItem("Achievement")
if (loadAchievement !== null){
  const savedAchievements = JSON.parse(loadAchievement).length-1
  const inResumeAchievementName = document.querySelectorAll('#achievement_name_resume-fill')
inResumeAchievementName.forEach(
  (achievementName) => (achievementName.innerText = JSON.parse(loadAchievement)[savedAchievements].AchievementName)
)
const inResumeAchievementStart = 
  document.querySelectorAll('#achievement_start_date_resume-fill')

inResumeAchievementStart.forEach(
  (achievementDate) => (achievementDate.innerText = JSON.parse(loadAchievement)[savedAchievements].AchievementDate)
)
const inResumeAchievementOrganization =
  document.querySelectorAll('#achievement_organization_resume-fill')

inResumeAchievementOrganization.forEach(
  (achievementOrganization) =>
    (achievementOrganization.innerText = JSON.parse(loadAchievement)[savedAchievements].AchievementOrganization)
)
}

const inResumeWorkLi = [document.querySelectorAll('#work_li_resume_fill')]
const inResumeProjectLi = [document.querySelectorAll('#project_li_resume-fill')]

const toogleTemplateSelection = document.querySelector('.select_template')
const templateSelection = document.querySelector('.select_template-options')
const backgroundEffect =  document.querySelectorAll('main')
toogleTemplateSelection.addEventListener('click', () => {
  templateSelection.classList.toggle('hidden_selection')
    backgroundEffect.forEach((body)=>body.classList.toggle("transparent_screen"))
})

const templateFirstColor = document.querySelector(
  '.template-colors div:nth-child(1)'
)
const templateSecondColor = document.querySelector(
  '.template-colors div:nth-child(2)'
)
const templateThirdColor = document.querySelector(
  '.template-colors div:nth-child(3)'
)
const templateFourthColor = document.querySelector(
  '.template-colors div:nth-child(4)'
)
const templateFifthColor = document.querySelector(
  '.template-colors div:nth-child(5)'
)
const templateColors = [
  templateFirstColor,
  templateSecondColor,
  templateThirdColor,
  templateFourthColor,
  templateFifthColor,
]

const template_1 = document.querySelector('.template_1')
const template_2 = document.querySelector('.template_2')
const template_3 = document.querySelector('.template_3')
const template_4 = document.querySelector('.template_4')
const templateStyles = [template_1, template_2, template_3, template_4]

const template1Image = template_1.querySelector('img')
const template2Image = template_2.querySelector('img')
const template3Image = template_3.querySelector('img')
const template4Image = template_4.querySelector('img')

const colorChange = document.querySelectorAll('#template_color-change')

function applyFirstColor() {
  const clicked = true
  templateStyles.every(
    (template) => (template.style.backgroundColor = '#4F698F')
  )
  templateSelection.classList.add('hidden_selection')
  backgroundEffect.forEach((body)=>body.classList.remove("transparent_screen"))
  colorChange.forEach(
    (changeColor) => (changeColor.style.backgroundColor = '#4F698F')
  )
  templateColors.every((unselected) => (unselected.style.opacity = 0.3))
  const selected = templateColors.filter(
    (chosen) => chosen === templateColors[0]
  )
  selected.every((activeColor) => (activeColor.style.opacity = 1))
  template1Image.src = '../images/Resume template light blue 1.png'
  template2Image.src = '../images/Resume template light blue 2.png'
  template3Image.src = '../images/Resume template light blue 3.png'
  template4Image.src = '../images/Resume template light blue 4.png'
}
function applySecondColor() {
  templateStyles.every(
    (template) => (template.style.backgroundColor = '#1A3351')
  )
  templateSelection.classList.add('hidden_selection')
  backgroundEffect.forEach((body)=>body.classList.remove("transparent_screen"))
  colorChange.forEach(
    (changeColor) => (changeColor.style.backgroundColor = '#1A3351')
  )
  templateColors.every((unselected) => (unselected.style.opacity = 0.3))
  const selected = templateColors.filter(
    (chosen) => chosen === templateColors[1]
  )
  selected.every((activeColor) => (activeColor.style.opacity = 1))
  template1Image.src = '../images/Resume template dark blue 1.png'
  template2Image.src = '../images/Resume template dark blue 2.png'
  template3Image.src = '../images/Resume template dark blue 3.png'
  template4Image.src = '../images/Resume template dark blue 4.png'
}
function applyThirdColor() {
  templateStyles.every(
    (template) => (template.style.backgroundColor = '#485B5B')
  )
  templateSelection.classList.add('hidden_selection')
  backgroundEffect.forEach((body)=>body.classList.remove("transparent_screen"))
  colorChange.forEach(
    (changeColor) => (changeColor.style.backgroundColor = '#485B5B')
  )
  templateColors.every((unselected) => (unselected.style.opacity = 0.3))
  const selected = templateColors.filter(
    (chosen) => chosen === templateColors[2]
  )
  selected.every((activeColor) => (activeColor.style.opacity = 1))
  template1Image.src = '../images/Resume template light green 1.png'
  template2Image.src = '../images/Resume template light green 2.png'
  template3Image.src = '../images/Resume template light green 3.png'
  template4Image.src = '../images/Resume template light green 4.png'
}
function applyFourthColor() {
  templateStyles.every(
    (template) => (template.style.backgroundColor = '#3E4345')
  )
  templateSelection.classList.add('hidden_selection')
  backgroundEffect.forEach((body)=>body.classList.remove("transparent_screen"))
  colorChange.forEach(
    (changeColor) => (changeColor.style.backgroundColor = '#3E4345')
  )
  templateColors.every((unselected) => (unselected.style.opacity = 0.3))
  const selected = templateColors.filter(
    (chosen) => chosen === templateColors[3]
  )
  selected.every((activeColor) => (activeColor.style.opacity = 1))
  template1Image.src = '../images/Resume template grey 1.png'
  template2Image.src = '../images/Resume template grey 2.png'
  template3Image.src = '../images/Resume template grey 3.png'
  template4Image.src = '../images/Resume template grey 4.png'
}
function applyFifthColor() {
  templateStyles.every(
    (template) => (template.style.backgroundColor = '#010101')
  )
  templateSelection.classList.add('hidden_selection')
  backgroundEffect.forEach((body)=>body.classList.remove("transparent_screen"))
  colorChange.forEach(
    (changeColor) => (changeColor.style.backgroundColor = '#010101')
  )
  templateColors.every((unselected) => (unselected.style.opacity = 0.3))
  const selected = templateColors.filter(
    (chosen) => chosen === templateColors[4]
  )
  selected.every((activeColor) => (activeColor.style.opacity = 1))
  template1Image.src = '../images/Resume template black 1.png'
  template2Image.src = '../images/Resume template black 2.png'
  template3Image.src = '../images/Resume template black 3.png'
  template4Image.src = '../images/Resume template black 4.png'
}
templateFirstColor.addEventListener('click', applyFirstColor)
templateSecondColor.addEventListener('click', applySecondColor)
templateThirdColor.addEventListener('click', applyThirdColor)
templateFourthColor.addEventListener('click', applyFourthColor)
templateFifthColor.addEventListener('click', applyFifthColor)

/* fetch("../pages/DesignPageSelect.html").then(r=>r.text()).then((html)=>{ // get the content of products.html
  let element = document.createElement("html");
  element.innerHTML = html; // parse the html
  let p1 = element.querySelector("#p1");
}); */

/* function loadHTML(item){
  fetch('../pages/DesignPageSelect.html')
  .then(response=> response.text())
  .then(text=> document.querySelector('.resume_color').innerHTML = text);
  console.log(item)
}
loadHTML() */

/* const template_1 = document.querySelector(".template_1")
const template_2 = document.querySelector(".template_2")
const template_3 = document.querySelector(".template_3")
const template_4 = document.querySelector(".template_4") */

var clicked
template_1.addEventListener('click', () => {
  clicked = true
  if (clicked) {
    console.log(template_1)
  }
})
