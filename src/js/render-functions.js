export const createMarkup = images => {
  return images.reduce(
    ( html, { tags, webformatURL, largeImageURL, likes, views, comments, downloads } ) => {
      return (
        html +
        `
			<li class="item-list">
				<a class="item-list-link" href="${largeImageURL}">
					<img class="item-list-img" src="${webformatURL}" alt="${tags}">
				</a>
				<ul class="markup-info">
					<li class="item-list-info-text">
						<h3 class="item-list-title">Likes</h3>
						<p class="item-list-text">${likes}</p>
					</li>
					<li class="item-list-info-text">
						<h3 class="item-list-title">Views</h3>
						<p class="item-list-text">${views}</p>
					</li>
					<li class="item-list-info-text">
						<h3 class="item-list-title">Comments</h3>
						<p class="item-list-text">${comments}</p>
					</li>
					<li class="item-list-info-text">
						<h3 class="item-list-title">Downloads</h3>
						<p class="item-list-text">${downloads}</p>
					</li>
				</ul>
			</li>
		`
      );
    },
    ''
  );
};








