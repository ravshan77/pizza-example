export const CardData = [
  {
    id: 1,
    date: "2021-4-2",
    
    title: "zo'r",
    text: `Ushbu zo'r mahsulotimiz to'liq sut maxsulotidan tayorlangan (100%)`,
    cost: 120000,
    value: 1,
    imgUrl:"https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png",
  },
  {
    id: 2,
    date: "2021-3-5",
    
    title: "yangi ta'm",
    text: "Ananas mevasidan tayorlangan yangi maxsulot (Italiya ta'mi)",
    cost: 1000000,
    value: 1,
    imgUrl:"https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    id: 3,
    date: "2021-4-3",
    
    text:"Bu pitsa hammaning ta’biga yoqishi aniq. U to’rtta faslga ajratilgan: bahor, yoz, kuz va qish. Bu pitsaga xohlagan mavsumiy sabzavotlardan solsa ham bo’ladi.",
    title: "To'rt mavsum",
    cost: 50000,
    value: 1,
    imgUrl: "https://zira.uz/wp-content/uploads/2018/03/4-stagioni.jpg",
  },
  {
    id: 4,
    date: "2021-3-5",
    
    title: "Margarita",
    cost: 155000,
    value: 1,
    text:"Italiyada eng sevib iste’mol qilinadigan pitsa esa bu- «Margarita» pitsasidir. Ko’pchilik go’sht mahsulotlarini yoqtiradiganlar esa bunday go’shtsiz pitsani iste’mol qilgilari kelmaydi.",
    imgUrl: "https://zira.uz/wp-content/uploads/2018/03/margarita.jpg",
  },

  {
    id: 2,
    date: "2021-3-5",
    
    title: "yangi ta'm",
    text: "Ananas mevasidan tayorlangan yangi maxsulot (Italiya ta'mi)",
    cost: 90000,
    value: 1,
    imgUrl:"https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
    id: 3,
    date: "2021-4-3",
    
    text:"Bu pitsa hammaning ta’biga yoqishi aniq. U to’rtta faslga ajratilgan: bahor, yoz, kuz va qish. Bu pitsaga xohlagan mavsumiy sabzavotlardan solsa ham bo’ladi.",
    title: "To'rt mavsum",
    cost: 50000,
    value: 1,
    imgUrl: "https://zira.uz/wp-content/uploads/2018/03/4-stagioni.jpg",
  },
  {
    id: 4,
    date: "2021-3-5",
    
    title: "Margarita",
    cost: 155000,
    value: 1,
    text:"Italiyada eng sevib iste’mol qilinadigan pitsa esa bu- «Margarita» pitsasidir. Ko’pchilik go’sht mahsulotlarini yoqtiradiganlar esa bunday go’shtsiz pitsani iste’mol qilgilari kelmaydi.",
    imgUrl: "https://zira.uz/wp-content/uploads/2018/03/margarita.jpg",
  },
];


// import {Respdata} from "../components/useFetch" 

export const filterData = (title) => {
  return CardData.filter((data) => data.title === title);
};

// export const filterData = (lebel) => {
//   return Respdata.filter((data) => data.lebel === lebel )
// }

export const filterByDate = (date) => {
  return CardData.filter((data) => data.date === date);
};

export const filterByCost=(cost) => {
  return CardData.filter((data) => data.cost <= cost)
}