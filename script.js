window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeContent = document.getElementById('resumeContent');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from reloading the page
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('number').value;
        var education = document.getElementById('education').value;
        var school = document.getElementById('school').value;
        var experience = document.getElementById('experience').value;
        var company = document.getElementById('company').value;
        var skills = document.getElementById('skills').value;
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
        var personalInfo = document.createElement('div');
        personalInfo.innerHTML = "<h3>Personal Info</h3><p class=\"editable\">Name: <span>".concat(name, "</span></p><p>Email: <span>").concat(email, "</span></p><p>Phone: <span>").concat(number, "</span></p>");
        resumeContent.appendChild(personalInfo);
        var educationSection = document.createElement('div');
        educationSection.innerHTML = "<h4>Education</h4><p class=\"editable\">".concat(education, " at ").concat(school, "</p>");
        resumeContent.appendChild(educationSection);
        var experienceSection = document.createElement('div');
        experienceSection.innerHTML = "<h4>Work Experience</h4><p class=\"editable\">".concat(experience, " at ").concat(company, "</p>");
        resumeContent.appendChild(experienceSection);
        var skillsSection = document.createElement('div');
        skillsSection.innerHTML = "<h4>Skills</h4><ul></ul>";
        var skillsList = skills.split(',').map(function (skill) { return skill.trim(); });
        var skillsUl = skillsSection.querySelector('ul');
        skillsList.forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill;
            skillsUl.appendChild(li);
        });
        resumeContent.appendChild(skillsSection);
        // Add event listeners to all editable sections
        var editableElements = resumeContent.querySelectorAll('.editable');
        editableElements.forEach(function (element) {
            element.addEventListener('click', function () { return makeEditable(element); });
        });
    });
    // Function to make a section editable
    function makeEditable(element) {
        var originalContent = element.innerHTML;
        // Replace content with an input field
        var input = document.createElement('input');
        input.type = 'text';
        input.value = originalContent;
        element.innerHTML = '';
        element.appendChild(input);
        // Create save and cancel buttons
        var saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', function () { return saveChanges(element, input.value); });
        var cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', function () { return cancelChanges(element, originalContent); });
        element.appendChild(saveButton);
        element.appendChild(cancelButton);
    }
    // Save changes and update content
    function saveChanges(element, newValue) {
        element.innerHTML = newValue;
    }
    // Cancel the edit and restore original content
    function cancelChanges(element, originalContent) {
        element.innerHTML = originalContent;
    }
});
