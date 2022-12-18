
export type IProgramItem = {
  title: string
  name?: string
  color: string
  order?: number
}

const ProgramItem = ({...item}: IProgramItem) => {
  return (
    <div className="block py-2 pl-5 border-2 border-gray-300 border-l-green-500">
      <div className="text-primary text-l font-semibold">{item.title}</div>
      <p className="text-m font-semibold text-gray-900">{item.name}</p>
    </div>
  )
}

export default ProgramItem