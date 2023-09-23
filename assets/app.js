const accessKey="tMcts9xqnA9gTQ6snYgJ_x6hy9h45wRE0vFVfhqhHpU"

const searchForm=document.getElementById("searchForm")
const searchBox=document.getElementById("searchBox")
const searchResult=document.getElementById("searchResult")
const showBtn=document.getElementById("showBtn")
const body=document.querySelector("body")

let keyword="";
let page=1;
async function searchImages(){
    keyword=searchBox.value
    if(keyword){
        body.style.height="fit-content"
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
const response=await fetch(url)
const data= await response.json()
if(page===1){
    searchResult.innerHTML=""
}
const results=data.results;

results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank"

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
})
showBtn.style.display="block"
       
    }
    else{
       alert("Ooops..Empty Blank")
    }
    
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1;
    searchImages()
})
showBtn.onclick=(()=>{
page++;
searchImages();
})