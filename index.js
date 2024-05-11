const stories = document.querySelector(".stories")
const fullStory = document.querySelector(".full-story")
const imageArray = [
  {
    dp: 'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1586078130702-d208859b6223?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1586078130702-d208859b6223?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1619785292559-a15caa28bde6?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'https://images.unsplash.com/photo-1619785292559-a15caa28bde6?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }

]
let img = ''
imageArray.forEach((e, index) => {
  stories.innerHTML += `<div id="${index}" class="story">
<img id="${index}" class="dp-img"
  src="${e.dp}"</div>`

})
stories.addEventListener("click", function (details) {
  fullStory.innerHTML = `<div class="loader"></div><img class="story-img"
  src="${imageArray[details.target.id].story}" />
`
  fullStory.style.display = 'block'
  setTimeout(function () {
    fullStory.style.display = 'none'
  }, 3000)
})

