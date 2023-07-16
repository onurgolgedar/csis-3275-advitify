export default function SampleComponent({props, toChild}) {
  return(
    <div>
      <p>This is Child Component</p>
      <p>{props}</p>
      <p>Number is also can be passed {toChild}</p>
    </div>
  )
}