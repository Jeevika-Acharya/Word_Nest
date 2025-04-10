import './Meaning.css'
function Meaning ({word,meaning}){
    return (
        <>
            <div className='Main'>
                <div className='wordBox'>
                    <p className='word'>{word}</p>
                </div>
                <div className='wordMeaning '>
                    <p className='meaning word'>
                  {meaning}
                    </p>
                </div>
            </div>
        </>
    );
}
export default Meaning;