import './Smallbox.css'
function Smallbox ({value="Synonym",nym}){
    
    return (
        <>
            <div className='smallMain'>
                <h2 className='head'>{value}</h2>
                    <ul className='wordBox'>
                        <li id='word1'>{nym[0]}</li>
                        <li id='word2'>{nym[1]}</li>
                        <li id='word3'>{nym[2]}</li>
                        <li id='word4'>{nym[3]}</li>
                        <li id='word5'>{nym[4]}</li>
                    </ul>
            </div>
        </>
    );
}
export default Smallbox;