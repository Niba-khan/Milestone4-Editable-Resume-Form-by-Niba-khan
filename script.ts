window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLElement;
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from reloading the page


      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const number = (document.getElementById('number') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const school = (document.getElementById('school') as HTMLInputElement).value;
      const experience = (document.getElementById('experience') as HTMLInputElement).value;
      const company = (document.getElementById('company') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
  

      // Validate fields
      if (!name || !email || !number || !education || !school || !experience || !company || !skills) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Clear previous resume content
      resumeContent.innerHTML = '';

       // Display profile picture
     // Display profile picture
   
  
      // Create dynamic resume sections
      const personalInfo = document.createElement('div');
      personalInfo.innerHTML = `<h3>Personal Info</h3><p class="editable">Name: <span>${name}</span></p><p>Email: <span>${email}</span></p><p>Phone: <span>${number}</span></p>`;
      resumeContent.appendChild(personalInfo);
  
      const educationSection = document.createElement('div');
      educationSection.innerHTML = `<h4>Education</h4><p class="editable">${education} at ${school}</p>`;
      resumeContent.appendChild(educationSection);
  
      const experienceSection = document.createElement('div');
      experienceSection.innerHTML = `<h4>Work Experience</h4><p class="editable">${experience} at ${company}</p>`;
      resumeContent.appendChild(experienceSection);
  
      const skillsSection = document.createElement('div');
      skillsSection.innerHTML = `<h4>Skills</h4><ul></ul>`;
      const skillsList = skills.split(',').map(skill => skill.trim());
      const skillsUl = skillsSection.querySelector('ul') as HTMLElement;
  
      skillsList.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsUl.appendChild(li);
      });
  
      resumeContent.appendChild(skillsSection);
  
      // Add event listeners to all editable sections
      const editableElements = resumeContent.querySelectorAll('.editable');
      editableElements.forEach((element) => {
        element.addEventListener('click', () => makeEditable(element as HTMLElement));
      });
    });
  
    // Function to make a section editable
    function makeEditable(element: HTMLElement) {
      const originalContent = element.innerHTML;
  
      // Replace content with an input field
      const input = document.createElement('input');
      input.type = 'text';
      input.value = originalContent;
      element.innerHTML = '';
      element.appendChild(input);
  
      // Create save and cancel buttons
      const saveButton = document.createElement('button');
      saveButton.textContent = 'Save';
      saveButton.addEventListener('click', () => saveChanges(element, input.value));
  
      const cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancel';
      cancelButton.addEventListener('click', () => cancelChanges(element, originalContent));
  
      element.appendChild(saveButton);
      element.appendChild(cancelButton);
    }
  
    // Save changes and update content
    function saveChanges(element: HTMLElement, newValue: string) {
      element.innerHTML = newValue;
    }
  
    // Cancel the edit and restore original content
    function cancelChanges(element: HTMLElement, originalContent: string) {
      element.innerHTML = originalContent;
    }
  });
  