const $addLanguageBtn = document.querySelector('#add-language');
const $postForm = document.querySelector('#post-form');
const $customLanguagesList = document.querySelector('#custom-languages-list');

const handleAddLanguage = event => {
  event.preventDefault();

  const languageValue = document.querySelector('#new-language').value;

  if (!languageValue) {
    return false;
  }

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'language';
  checkbox.value = languageValue;
  checkbox.id = languageValue
    .toLowerCase()
    .split(' ')
    .join('-');

  const label = document.createElement('label');
  label.textContent = languageValue;
  label.htmlFor = languageValue
    .toLowerCase()
    .split(' ')
    .join('-');

  const divWrapper = document.createElement('div');

  divWrapper.appendChild(checkbox);
  divWrapper.appendChild(label);
  $customLanguagesList.appendChild(divWrapper);

  languageValue.value = '';
};

const handlePostSubmit = event => {
  event.preventDefault();

  const postName = $postForm.querySelector('#post-name').value;
  const createdBy = $postForm.querySelector('#created-by').value;
  const type = $postForm.querySelector('#post-type').value;
  const languages = [...$postForm.querySelectorAll('[name=language]:checked')].map(language => {
    return language.value;
  });

  if (!postName || !createdBy || !languages.length) {
    return;
  }

  const formData = { postName, createdBy, type, languages };

  fetch('/api/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
      saveRecord(formData);
      // DO INDEXED DB STUFF HERE
    });
};

$postForm.addEventListener('submit', handlePostSubmit);
$addLanguageBtn.addEventListener('click', handleAddLanguage);
