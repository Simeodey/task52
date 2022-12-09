import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  document.body.addEventListener("click", () => {
    const arr  = Array(5).fill(0).map(el=> {
      const article = document.createElement('article')
    article.className = 'message'
    article.innerHTML = `The world will end in ${Math.random()*100} seconds`
  return article})
  
  document.body.append(...arr)
  });
});
