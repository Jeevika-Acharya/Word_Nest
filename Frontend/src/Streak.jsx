import './Streak.css'
function Streak ({wordCount}){
    return (
        <>
            <div className='streakMain'>
                <div className='words'>Total Words:</div>
                
                <div className='number'>{wordCount}</div>
                    
            
            </div>
        </>
    );
}
export default Streak;