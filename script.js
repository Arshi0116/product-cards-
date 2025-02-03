import { createRoot } from 'react-dom/client'
import './style.css'

function Card(key,title,img,decription) {
    return (
    
        <div className='card' key={key}>
         
        <img src= {img} alt="arshi" />
        <h3>{title}</h3>
        <p>{decription}</p>
    </div>
        
    )

}


const root = createRoot(document.getElementById('root'))
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    console.log(data);
    const container2=data.products.map(function (products) {

        return Card(products.id, products.title, products.thumbnail,products.description,)
    })
    root.render(<div className='container'>{container2}</div>)
})
