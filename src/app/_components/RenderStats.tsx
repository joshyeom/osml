import { StatsApi } from "../types/StatsApi"

interface Stat {
    key: string
    label: string
}

interface REQSTProps{
    REQST: StatsApi
}

const RenderStats = ({REQST} :REQSTProps) => {
    const stats: Stat[] = [
      { key: 'incPAD', label: '공격력+' },
      { key: 'incSTR', label: 'STR+' },
      { key: 'incDEX', label: 'DEX+' },
      { key: 'incINT', label: 'INT+' },
      { key: 'incLUK', label: 'LUK+' },
      { key: 'incACC', label: '명중률+' },
      { key: 'incMDD', label: '마법방어력+' },
      { key: 'incPDD', label: '물리방어력+' },
      { key: 'incMMP', label: 'MP+' },
      { key: 'incMHP', label: 'HP+' }
    ];
  
    return (
      <div className="flex justify-center items-center">
        <ol className="w-[120px] flex flex-col justify-between items-center">
          {stats.map(stat => (
            REQST[stat.key] ? (
              <li key={stat.key} className="mb-1">
                <span>
                  {stat.label}{REQST[stat.key]}
                </span>
              </li>
            ) : null
          ))}
        </ol>
      </div>
    );
  };
  
export default RenderStats