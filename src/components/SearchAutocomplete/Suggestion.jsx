
export default function Suggestion({data, handleclick}) {
  return (
    <ul className="suggestion">
        {data && data.length ? data.map((item, index) => <li key={index} onClick={handleclick}>{item}</li>) : null}
    </ul>
  )
}
