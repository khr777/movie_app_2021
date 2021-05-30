import './App.css';


function Food({ name, image, key }) {
  return <div>
      <h2>I like { name }</h2>
      <img src={image} alt="이미지" />
      <div>id는 전달되지 않습니다 : { key } 번</div>
  </div>  
}

const foodILike = [
  { 
    id: 1,
    name: 'Kimchi',
    image: 'http://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=360:360&_v=20210111143615'
  },
  { 
    id: 2,
    name: 'Samgyeopsal',
    image: 'http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg'
  },
  { 
    id: 3,
    name: 'Bibimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/abcf293fb7d0d73d61e274127ced7b931.jpg'
  },
  { 
    id: 4,
    name: 'Doncasu',
    image: 'https://www.ypsori.com/news/photo/201811/14515_14466_1033.jpg'
  },
  { 
    id: 5,
    name: 'Kimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg'
  },
]




function App() {

  return <div>
          { foodILike.map(dish => ( 
            <Food key={dish.id} name={dish.name} image={dish.image} />
            ))}

        </div>
}


export default App;
