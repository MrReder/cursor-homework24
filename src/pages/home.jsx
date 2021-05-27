const homePIC = 'https://i.pinimg.com/originals/58/97/88/589788fc24a5b5f7469d81bbc3879bd4.jpg';

export const Home = () => {
    return (
        <div className='home-page-wrapper'>
            <h1>Welocme to our Home Page!</h1>
            <img src={homePIC}></img>
        </div>
    )
};