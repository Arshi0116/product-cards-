import { createRoot } from 'react-dom/client'
import './style.css'

function Card({title,image,description  }) {
    return (
    
        <div className='card' >
        <img src= {image} alt="arshi" />
        <h3>{title}</h3>
        <p>{description }</p>
    </div>
        
    )

}

const root = createRoot(document.getElementById('root'))
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    console.log(data);
    root.render(<div className='container'>{
    data.products.map((product) =>(
        <Card
        key={product.id}
        image={product.thumbnail}
        title={product.title}
        description ={product.description }/>)   
    )}
    </div>)
})
    
