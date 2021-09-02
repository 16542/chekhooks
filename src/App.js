import Head from "./component/Head";
import { useState } from "react";
import Movielist from "./component/movielist";





function App() {
  const [filter, setFilter] = useState("")
  const [rate, setRate] = useState(1)
  const [list,setList]=useState([{
    title: 'Joker',
    description:'a movie about Joker',
    posterUrl:'https://play-lh.googleusercontent.com/Wi2UwqsUCS3heo5-VYLI2v12zbiXKHJWih8ZCSrQzjxZA5PR8MFWVjcupL4hFekawjGst_sBsEF_ECdLkQ',
    rate:3
  },
  {
    title: 'Batman',
    description:'a movie about the Batman',
    posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7T6oWKyWni7H4ulMejsP7ob5jB5F_yrdbw&usqp=CAU',
    rate:4
  },
  {
    title: 'Blood Red sky',
    description:'a movie about Blood Red sky  ',
    posterUrl:'https://fr.web.img2.acsta.net/pictures/21/06/30/10/52/3410936.jpg',
    rate:5

  },
  {
    title: 'cazablanca',
    description:'a movie about   ',
    posterUrl:'https://i.pinimg.com/236x/e5/9c/54/e59c54af9ed82e76e0e9174c8e7d97d2.jpg',
    rate:2
  },
  {
    title: 'Spider-Man',
    description:'a movie about Spider-Man  ',
    posterUrl:'https://images-na.ssl-images-amazon.com/images/I/81QpHLbctXL.jpg',
    rate:3
  },
  {
    title: 'Avengers',
    description:'a movie about Avengers  ',
    posterUrl:'https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg',
    rate:3
  }

])
const handleFilter= (val)=>{  
  setFilter(val)
}
const handleRate =(value)=>{
  setRate(value)
}
const handlaAddMovie = (movie)=>{
  setList([movie,...list])
}
  return (
    <div >
   <Head handlaAddMovie={handlaAddMovie} handleFilter={handleFilter} handleRate={handleRate} ></Head>

<Movielist list={list.filter(elm=>elm.title.trim().toUpperCase().includes(filter.toUpperCase().trim()) && elm.rate>=rate)} />
 
    </div>
  );
}

export default App;
