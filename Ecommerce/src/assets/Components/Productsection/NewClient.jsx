import "./client.css"
import ClientCard from "./ClientCard.jsx"


const NewClient = () => {
    const clientData =[ 
{
     className: 'col-md-2', alt: 'Image 1', src: '/src/assets/images/fa-brands-1.png' 
    },
  { 
    className: 'col-md-21', alt: 'Image 2', src: '/src/assets/images/fa-brands-2.png' 
},
  { 
    className: 'col-md-22', alt: 'Image 3', src: '/src/assets/images/fa-brands-3.png' 
},
  {
     className: 'col-md-23', alt: 'Image 4', src: '/src/assets/images/fa-brands-4.png' 
    },
  { 
    className: 'col-md-23', alt: 'Image 5', src: '/src/assets/images/fa-brands-5(1).png' 
},
  {
     className: 'col-md-23', alt: 'Image 6', src: '/src/assets/images/fa-brands-6.svg' 
    },

    ];
    
  return (
    <div className="desktop-clients-1">
        <div className="container">
            <div className="row">
            {
            clientData.map((data, index)=>(
                <ClientCard key={index} {...data} />

            ))}
            
            </div>
        </div>
    </div>
  )
}

export default NewClient
