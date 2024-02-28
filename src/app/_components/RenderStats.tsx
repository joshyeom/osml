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
      { key: 'incPAD', label: '공격력' },
      { key: 'incSTR', label: 'STR' },
      { key: 'incDEX', label: 'DEX' },
      { key: 'incINT', label: 'INT' },
      { key: 'incLUK', label: 'LUK' },
      { key: 'incACC', label: '명중률' },
      { key: 'incMDD', label: '마법방어력' },
      { key: 'incPDD', label: '물리방어력' },
      { key: 'incMMP', label: 'MP' },
      { key: 'incMHP', label: 'HP' }
    ];
  
    return (
        <p className="flex flex-col justify-between items-center">
          {stats.map(stat => (
            REQST[stat.key] ? (
              <div key={stat.key}>
                  {stat.label} <span className="text-gray-400">+{REQST[stat.key]}</span>
              </div>
            ) : null
          ))}
        </p>
    );
  };
  
export default RenderStats