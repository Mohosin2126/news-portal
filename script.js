const allNewsCategory=async()=>{
    const res= await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data=await res.json()
  
const tabContainer = document.getElementById("tab-container")
data.data.news_category.forEach((category)=>{
    const div=document.createElement("div")
    div.innerHTML=`
    <div>
    <a class="tab" onclick="handleNews('${category.category_id}')"> ${category.category_name}</a> 
    </div>`
    tabContainer.appendChild(div)
   })

}

const handleNews=async(categoryId)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
const data=await res.json()
console.log(data)


    }
    

allNewsCategory()