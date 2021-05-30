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

function Person({job, image}) {
  return <div>
    <h2>사람의 직업은 { job } 입니다.</h2>
    <img src={ image } alt="이미지" />
  </div>
}

const persons = [
  {
    job: 'Doctor',
    image: 'https://cdn.edujin.co.kr/news/photo/202104/35710_68042_381.jpg'
  },
  {
    job: 'Police',
    image: 'https://lh3.googleusercontent.com/proxy/bkLLCYlZ6MZqLb76srqtWJtn0JFRs2v0a-FeddZKdqjMiWSPcCx-K9AV2qST3aQGdBTz6Havchxeie-IDNrxfLeA5D3YBJQnE-BYZ6W4TMX40w'
  },
  {
    job: 'Farmer',
    image: 'https://img.lovepik.com/photo/40159/6947.jpg_wh860.jpg'
  },
  {
    job: 'Soccer Player',
    image: 'https://lh3.googleusercontent.com/proxy/aZWkjgbHi15EThn2Ak2ljxC2q32XVHnFBh4gs1TevNBPojq5F4hJECLD39cGZ3CLA_hofVFArXihchpdadSLHS6Tc_EOBloG3Dn39AhgzDOu35VIxl3zZj0o-FM'
  },
  {
    job: 'Pianist',
    image: 'https://cdn.imweb.me/thumbnail/20210503/e4a0e247be93e.jpg'
  },
  {
    job: 'Singer',
    image: 'https://dimg.donga.com/wps/NEWS/IMAGE/2021/01/20/105013560.2.jpg'
  }
]

function App() {
  return <div>
          { foodILike.map(dish => ( 
            <Food name={dish.name} image={dish.image} />
            ))}

          { persons.map(person => (
            <Person job={person.job} image={person.image} />
          ))}
        </div>
}


export default App;
