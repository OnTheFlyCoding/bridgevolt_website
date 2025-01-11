import { useState } from "react"; 
function ImageSlider({slides}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderContainer = {
        height: '100%',
        postition: 'relative',
    }
    const sliderStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    const previousSlide = () =>{
        ///check if first slide, if so show the last slide
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide? slides.length -1: currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide? 0: currentIndex +1;
        setCurrentIndex(newIndex);
    }

    return(
        <div style={sliderContainer}>
            <div className="leftArr" onClick={previousSlide}>&larr;</div>
            <div className="rightArr" onClick={nextSlide}>&rarr;</div>
            <div style={sliderStyles}></div>
        </div>
    )
};
export default ImageSlider;