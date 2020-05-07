import React from 'react';

function Food({ name, kor }){ //props.fav == {fav}
    return <div>
        <h2>I like {name}</h2>
        <h2>나는 {kor}를 좋아해</h2>
        </div>
}

const foodILike = [
    {
        name: "kimchi", kor: "김치" 
    }, 
    {
        name: "samgyeopsal", kor: "삼겹살"
    },
    {
        name: "bibimbap", kor: "비빔밥"
    },
    {
        name: "doncasu", kor: "돈가스"
    }]

function App() {
    return (
        <div>
            {foodILike.map(dish => ( // == foodILike.map(function(dish){  })
            <Food name ={dish.name} kor={dish.kor} /> //함수실행.
            ))}
        </div>
    );
}

export default App;
