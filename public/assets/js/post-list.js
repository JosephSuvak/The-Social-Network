const $postList = document.querySelector('#post-list');

const getPostList = () => {
  fetch('/api/posts')
    .then(response => response.json())
    .then(postListArr => {
      postListArr.forEach(printPost);
    })
    .catch(err => {
      console.log(err);
    });
};

const printPost = ({ _id, postName, languages, type, commentCount, createdBy, createdAt }) => {
  const postCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${postName}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p>${commentCount} Comments</p>
          <h5 class="text-dark">Suggested Tupe: ${type}
          <h5 class="text-dark">Languages</h5>
          <ul>
            ${languages
              .map(language => {
                return `<li>${language}</li>`;
              })
              .join('')}
          </ul>
          <a class="btn display-block w-100 mt-auto" href="/post?id=${_id}">See the discussion.</a>
        </div>
      </div>
    </div>
  `;

  $postList.innerHTML += postCard;
};

getPostList();
