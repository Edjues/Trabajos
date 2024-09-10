const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part = (props) =>{
  return(
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}
const Content  = (props) => {
  
  const list = props.part.map(e => {
    return <Part part={e.name}  exercises={e.exercises}/>
  })
  return(
    <>
      {list}
    </>
  )
}
const Total = (props) => {
  let sum = 0;
  props.total.map(e => {
    sum = sum + e;
  })
  return(
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total total={parts.map(e => e.exercises)}/>
    </div>
  )
}

export default App