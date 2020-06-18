const arr = [
    {
      id: "1",
      title: "Desafio ReactJS",
      url: "https://github.com/josepholiveira",
      techs: [
        "React",
        "Node.js"
      ],
      likes: 100
    },
    {
      id: "2",
      title: "Desafio ReactJS",
      url: "https://github.com/josepholiveira",
      techs: [
        "React",
        "Node.js"
      ],
      likes: 100
    },{
      id: "3",
      title: "Desafio ReactJS",
      url: "https://github.com/josepholiveira",
      techs: [
        "React",
        "Node.js"
      ],
      likes: 100
    },
]

const arrChange = 
{
  id: "1",
  title: "Desafio ReactJS",
  url: "https://github.com/josepholiveira",
  techs: [
    "React",
    "Node.js"
  ],
  likes: 222
}

const index = arr.findIndex((n) => n.id == 2);

const newArray = arr;

console.log(index);

console.log(newArray);

newArray[index] = arrChange;

console.log(newArray);
