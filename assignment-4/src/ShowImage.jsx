import { createContext, useReducer, useState } from "react";



export function ShowImageThing({ children }) {
    const [open, setOpen] = useState(null)

    const [showImage, setShowImage] = useState({
        showImageNow: true,
        showImageId: null,
    })

    const {showImageNow, showImageId} = showImage;

    const OpenImage = (a) => {
        setOpen(a.url)
        setShowImage({
            showImageNow: !showImageNow,
            showImageId: a.image,
        })
    }

    return (
        <div>

         {children.map((a, i) => 
           <div key={i}>

             <button 
              onClick={() => OpenImage(a)}
              className="ground" 
             >
              {a.image}
             </button>

             <br />
        
             {showImageNow && showImageId === a.image ?
               <img
                src={open} 
                alt={a.image} 
               />
             :null}
           </div>
         )}
      </div>
    )
}
