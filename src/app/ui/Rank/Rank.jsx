import "./Rank.css";

function Rank() {

const mockRank = [
  {name: 'Clément', score: '24'},
  {name: 'Nils', score: '13'},
  {name: 'Rose', score: '12'},
  {name: 'Olivia', score: '11'},
  {name: 'Jean Claude Duss', score: '0'},
  {name: 'Clément', score: '24'},
  {name: 'Nils', score: '17'},
  {name: 'Rose', score: '14'},
  {name: 'Olivia', score: '14'},
  {name: 'Jean Claude Duss', score: '23'},
  {name: 'Clément', score: '11'},
  {name: 'Nils', score: '4'},
  {name: 'Rose', score: '19'},
  {name: 'Olivia', score: '20'},
  {name: 'Jean Claude Duss', score: '18'},
  {name: 'Rose', score: '12'},
  {name: 'Olivia', score: '11'},
  {name: 'Jean Claude Duss', score: '0'},
  {name: 'Clément', score: '24'},
  {name: 'Nils', score: '17'},
  {name: 'Rose', score: '14'},
  {name: 'Olivia', score: '14'},
  {name: 'Jean Claude Duss Jean Claude Duss Jean Claude Duss', score: '23'},
  {name: 'Clément', score: '11'},
  {name: 'Nils', score: '4'},
  {name: 'Rose', score: '19'},
  {name: 'Olivia', score: '20'},
  {name: 'Jean Claude Duss', score: '18'},
]

  return (
    <div className="p-4 flex flex-col gap-4 justify-start h-full">
      <div className="flex gap-4 justify-end items-center">
        <span className="text-myrank text-2xl">Leaderboard</span>
      </div>
      <div className="flex flex-col gap-1 overflow-y-auto">      
          {mockRank.map((rank, index) => {
            return (
              <div key={rank+index} className="flex justify-between w-full pr-1 gap-2 flex-nowrap">
                  <div className="flex gap-4"> 
                      <span>{index + 1}</span>
                      <span className="text-ellipsis">{rank.name}</span>
                    </div>
                  <div> {rank.score} </div> 
              </div>
            ) 
          })}       
      </div>
    </div>
  );
}

export default Rank;
