const allNewsCategory=async()=>{
    const res= await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data=await res.json()
  
const tabContainer = document.getElementById("tab-container")
data.data.news_category.forEach((category)=>{
    const div=document.createElement("div")
    div.innerHTML=`
    <div "><a class="tab"> ${category.category_name}</a> </div>`
    tabContainer.appendChild(div)
   })
}



allNewsCategory()