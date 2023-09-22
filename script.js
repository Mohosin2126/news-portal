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
const newsCard=document.getElementById("news-card")
newsCard.textContent=" "
data.data.forEach((item)=>{
  const div=document.createElement("div")
  div.innerHTML=`
  
  <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="${item.image_url}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title"></h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  
  
  `
  newsCard.appendChild(div)
})

    }
    

allNewsCategory()
