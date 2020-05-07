import React from 'react';

const foodILike = [
    {
        id :1, name: "kimchi", image: "http://cafefiles.naver.net/MjAxOTEwMTdfMTMx/MDAxNTcxMjcwNzU2ODU0.bfIoC8yTi9Y4BmicSpk1u2LdN-cbHBqO8itm9fdpl9Ug.0Uk7r4JODlyuJtb49qEC8iFwhNWmGOW7wZxtI_uYjOQg.JPEG/%C6%F7%B1%E2%B1%E8%C4%A1-1.jpg" 
    }, 
    {
        id :2, name: "samgyeopsal", image: "http://blogfiles.naver.net/MjAxODA4MTBfMjYg/MDAxNTMzODkwMTgxMzM3.bvIcXzXj1rVXNk7jj0zpMJWrJvzzspCoquJQz8hs3ZIg.w84NQt8fPBnncnLdybE3qGVmNlzBsWtL_AOErqnSfvcg.JPEG.qkrdbswl3441/DC2F3846-415A-4283-8CCF-C8A51C7175FE-8681-0000048EEF718177_file.jpg"
    },
    {
        id :3, name: "bibimbap", image: "http://blogfiles.naver.net/20091121_31/gesko21_125874606016605VPk_jpg/a_%BE%E0%BC%B1%BA%F1%BA%F6%B9%E4_gesko21.jpg"
    },
    {
        id :4, name: "doncasu", image: "http://blogfiles.naver.net/20150609_77/k2002ej_1433810926537C5cqN_JPEG/0518__%B5%B7%B0%A1%BD%BA.JPG"
    }

];

function Food({ name, picture }){ //props.fav == {fav}
    return (
    <div>
        <h2>I like {name}</h2>
        <img src={picture} alt={name} /> 
    </div>
    );
}

function App() {
    return (
        <div>
            {foodILike.map(dish => ( // == foodILike.map(function(dish){  })
            <Food key={dish.id} name={dish.name} picture={dish.image} /> //함수실행.
            ))}
        </div>
    );
    
}

export default App;

/*
function renderFood(dish){
    console.log(dish);
    return <Food name={dish.name} kor={dish.kor} />
}
    
function App() {
    return (
        <div>
            {foodILike.map(renderFood)}
        </div>
    );
}*/
