import {ShowImageThing} from './ShowImage'
import {ShowImageAll} from './ShowImageAll'
import image1 from './assets/6anl6h.jpg'
import image2 from './assets/6anliy.jpg'
import image3 from './assets/6anm0m.jpg'
import image4 from './assets/6as8xs.jpg'
import image5 from './assets/6as85e.jpg'
import image6 from './assets/6d0gxt.jpg'
import image7 from './assets/8xuwa3.jpg'
import image8 from './assets/8xuwl8.jpg'

const data1 = [
  {
    show: true,
    url: image1,
    image: 'img1',
  },
  {
    show: false,
    url: image2,
    image: 'img2',
  },
  {
    show: true,
    url: image3,
    image: 'img3',
  },
  {
    show: false,
    url: image4 ,
    image: 'img4',
  },
]
const data2= [
  {
    show: true,
    url: image5,
    image: 'img5',
  },
  {
    show: false,
    url: image6,
    image: 'img6',
  },
  {
    show: true,
    url: image7,
    image: 'img7',
  },
  {
    show: false,
    url: image8,
    image: 'img8',
  },
]

export default function App() {
  return (
    <div>
      <ShowImageThing children = {data1} />
      <ShowImageThing children = {data2} />
    </div>
    
  )
}
