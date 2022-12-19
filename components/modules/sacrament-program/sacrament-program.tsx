import ProgramItem, { IProgramItem } from "./program-item"

export type IProgram = {
  date: string
  presiding: IProgramItem
  conducting: IProgramItem
  openingHymn: IProgramItem
  closingHymn: IProgramItem
  sacramentHymn: IProgramItem
  openingPrayer: IProgramItem
  closingPrayer: IProgramItem
  programContents: IProgramItem[]
}

const SacramentProgram = ({...program}: IProgram) => {
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-xl h-full">
        <div className="block bg-gray-800 py-5">
          <p className="text-xl font-semibold text-white ml-10">Sacrament Meeting Program</p>
        </div>
        <ProgramItem {...program.presiding}/>
        <ProgramItem {...program.conducting}/>
        <ProgramItem {...program.openingHymn}/>
        <ProgramItem {...program.openingPrayer}/>
        <ProgramItem title="Ward / Stake Business" color="red"/>
        <ProgramItem {...program.sacramentHymn}/>
        <ProgramItem title="Administration of the Sacrament" color="red"/>
        {program.programContents
          .map((item) => 
            <ProgramItem key={item.title.concat(item.name)} {...item}/>
          )
        }
        <ProgramItem {...program.closingHymn}/>
        <ProgramItem {...program.closingPrayer}/>
      </div>
    </>
  )
}

export default SacramentProgram