import { getAllPosts } from "./src/scripts/api/api.js";

const blogPosts = document.body.querySelector(".posts");

(async () => {
  const{ posts} = await getAllPosts();
    console.log(posts);
  let fragment = document.createDocumentFragment();

  const newPost = (post) => {
    const li = document.createElement("li");

    const commentsCount = 0;
    const likeCount = 0;

    const dateTime = post.date;
    const date = document.createElement("span");
    date.innerHTML = post.date;
    date.classList.add("date");

    const newDate = new Date(dateTime);
    const postDate = newDate.toLocaleDateString();

    li.setAttribute("data-key", post.date);

    const title = document.createElement("span");
    title.innerHTML = post.title;
    title.classList.add("title");

    const autor = document.createElement("div");
    autor.classList.add("autor");

    const autorBubble = document.createElement("div");
    autorBubble.classList.add("autor-bubble");

    const autorNameDate = document.createElement("div");
    autorNameDate.classList.add("autor-name-date")

    const img = document.createElement("img");
    img.src = post.img;
    img.classList.add("img-post");

    const text = document.createElement("p");
    text.innerHTML = post.text;
    text.classList.add("text");

    const autorName = document.createElement("span");
    autorName.innerHTML = post.author.name;
    autorName.classList.add("autor-name");

    const autorAva = document.createElement("img");
    autorAva.src = post.author.ava;
    autorAva.classList.add("autor-ava");

    const buttonBubble = document.createElement("div");
    buttonBubble.classList.add("button-bubble");

    const coments = document.createElement("a");
    coments.text = `Comments: ${commentsCount}`;
    coments.classList.add("button-coments");

    const like = document.createElement("a");
    like.textContent = `${likeCount}`;
    like.href = "#";
    like.classList.add("button-like");


    const formComment = document.createElement("form");
    formComment.name = "comment-form";
    formComment.classList.add("form-comment");

    const textareaComment = document.createElement("textarea");
    textareaComment.classList.add("textarea-comment");
    textareaComment.placeholder = "Оставьте свой коментарий"

    const commentButtonDiv = document.createElement("div");
    commentButtonDiv.classList.add("comment-button-div");

    const commentSubmitButton = document.createElement("a");
    commentSubmitButton.text = "Submit";
    commentSubmitButton.href = "#";
    commentSubmitButton.classList.add("comment-submit-button");

    const commentResetButton = document.createElement("a");
    commentResetButton.text = "Reset";
    commentResetButton.href = "#";
    commentResetButton.classList.add("comment-reset-button");

    commentButtonDiv.append(commentSubmitButton);
    commentButtonDiv.append(commentResetButton);

    formComment.append(textareaComment);
    formComment.append(commentButtonDiv);

    autorNameDate.append(autorName);
    autorNameDate.append(postDate);

    autorBubble.append(autorAva);
    autorBubble.append(autorNameDate);

    buttonBubble.append(coments);
    buttonBubble.append(like);

    autor.append(autorBubble);
    autor.append(buttonBubble);

    li.append(title);
    li.append(text);
    li.append(img);
    li.append(autor);
    li.append(date);
    li.append(formComment);

    fragment.append(li);
}

posts.forEach(item => {
    newPost(item)
});

  console.log(posts);
  blogPosts.append(fragment);
})();
