import { useState } from "react";

//I used a reference to help me because I needed handholding for this but I closed it and forgot to copy link but now I can't find it :(

export function ShowImageThing({ children }) {
    const [open, setOpen] = useState(null) //sets the image source

    const [showImage, setShowImage] = useState({ //for checking if the image is showing
        showImageNow: true,
        showImageId: null,
    })

    const {showImageNow, showImageId} = showImage;

    const OpenImage = (a) => {
        setOpen(a.url) //without the onclick this is null so no image
        setShowImage({
            showImageNow: !showImageNow, //is the image showing? uno reverse so if not showing-> show and if showing-> don't
            showImageId: a.image,
        })
    }

    //apologies for the <br />
    return (
        <div>

         {children.map((a) => //go through the array
           <div>

             <button 
              onClick={() => OpenImage(a)}
               
             >
              Girls Night!
             </button>

             <br />
        
             {showImageNow && showImageId === a.image ?
             //if showImageNow is true oh boy an image :)
             //if showImageNow is false then null :(
               <img
                src={open} 
                alt={a.image} 
                className = {"image"}
               />
             :null}
           </div>
         )}
      </div>
    )
}
