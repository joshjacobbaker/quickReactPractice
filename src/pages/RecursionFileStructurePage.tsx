import React from 'react'
import { FaFolder } from 'react-icons/fa'
import { FaFile, FaChevronCircleRight } from 'react-icons/fa'
interface Node {
  name: string
  nodes?: Node[]
}

function RecursionFileStructurePage() {
  const nodes: Node[] = [
    {
      name: 'Movies',
      nodes: [
        {
          name: 'Action',
          nodes: [
            {
              name: '2000s',
              nodes: [
                { name: 'Gladiator.mp4' },
                { name: 'American-Beauty.mp4' },
              ],
            },
            { name: '2010s', nodes: [] },
          ],
        },
        { name: 'Comedy', nodes: [] },
      ],
    },
    {
      name: 'Music',
      nodes: [
        { name: 'Rock', nodes: [] },
        { name: 'Classical', nodes: [] },
      ],
    },
    { name: 'Pictures', nodes: [] },
    { name: 'Document.txt' },
  ]
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        {nodes.map((folder) => (
          <Folder key={folder.name} folder={folder} />
        ))}
      </ul>
    </div>
  )
}

export default RecursionFileStructurePage

export const Folder = ({ folder }: { folder: Node }) => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <li key={folder.name} className="my-1.5">
      <span className="flex items-center gap-1.5">
        {folder.nodes && folder.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaChevronCircleRight className={`${isOpen ? 'rotate-90' : ''}`} />
          </button>
        )}
        {folder.nodes ? (
          <FaFolder
            className={`size-6 text-sky-500 ${folder.nodes.length < 1 ? 'ml-[22px]' : ''}`}
          />
        ) : (
          <FaFile className="ml-[22px] size-6 text-gray-900" />
        )}
        {folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.nodes?.map((folder) => (
            <Folder key={folder.name} folder={folder} />
          ))}
        </ul>
      )}
    </li>
  )
}
