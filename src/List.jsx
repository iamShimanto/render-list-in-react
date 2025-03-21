import React from 'react'

const List = () => {
    const fruits = [
        { id :1 , name : "shimanto", age : 23 },
        { id :2 , name : "famim", age : 22 },
        { id :3 , name : "hamim", age : 21 },
        { id :4 , name : "laam", age : 24 },
    ]

    const fruitItems = fruits.map(fruit => <li key={fruit.id}>Name : {fruit.name} ; Age : {fruit.age}</li>)

  return (
      <>
          <ol >{fruitItems}</ol>
      </>
  )
}

export default List