import './App.css';


function Food({ name, image }) {
  return <div>
      <h2>I like { name }</h2>
      <img src={image} alt="이미지" />
  </div>  
}

const foodILike = [
  { 
    name: 'Kimchi',
    image: 'http://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=360:360&_v=20210111143615'
  },
  { 
    name: 'Samgyeopsal',
    image: 'http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg'
  },
  { 
    name: 'Bibimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/abcf293fb7d0d73d61e274127ced7b931.jpg'
  },
  { 
    name: 'Doncasu',
    image: 'https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg'
  },
  { 
    name: 'Kimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg'
  },
]

function App() {
  return <div>
          { foodILike.map(dish => (
            <Food name={dish.name} image={dish.image} />
            ))}
        </div>
}


export default App;
