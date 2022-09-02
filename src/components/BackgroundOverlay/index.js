import './style.scss';

const BackgroundOverlay = (props) => {
    const {handleFocusBgOverlay} = props;

    return (
        <>
            <div className='bg-overlay' onClick={handleFocusBgOverlay}></div>
        </>
    );
}
 
export default BackgroundOverlay;