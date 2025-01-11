import ImageSlider from "../features/ImageSlider";
import transparentBike from '../assets/TransparentBike.png'

function Home(){
    //Declare your list of images
    const slides = [
        {url:'public/bike1.jpg', title:'Bike 1'},
        {url:'public/bike2.jpg', title:'Bike1'},
        {url:'public/MeetingAtBike.jpg', title:'meeting'},
    ]
    const containerStyles = {
        width: '100%',
        height: '500px',
        margin: '0 auto',
    }
    //toggle for handlebars description
    const toggleHandlebar = () =>{
        var x = document.getElementById("ControlThrottle");
        x.classList.toggle("active");
    }
    const toggleController = () =>{
        var x = document.getElementById("ControlMonitor");
        x.classList.toggle("active");
    }
    const toggleBms = () =>{
        var x = document.getElementById("ControlBms");
        x.classList.toggle("active");
    }
    const toggleBattery = () =>{
        var x = document.getElementById("ControlBattery");
        x.classList.toggle("active");
    }
    const toggleWheel = () =>{
        var x = document.getElementById("ControlFrontWheel");
        x.classList.toggle("active");
    }

    return(
        <>
        <section className="homePage">
            
            <section>
                Homepage Under Construction
            </section>
            <div style={containerStyles}>
                <ImageSlider slides={slides}/>
            </div>
            <section style={{backgroundColor:'white', marginTop:'20px'}}>
                <section style={{textAlign:'left', paddingLeft:'10%', paddingRight:'10%'}}>
                <h1 style={{margin:'0'}}>E- Bikes For Bridgeport</h1>
                <h4>
                Bridgevolt Cooperative is a non-profit worker-owned organization based in Bridgeport, CT. Our mission is to provide transportation options that are affordable, convenient, and environmentally sustainable.</h4>
                <h4>
                We are proud to present our e-bike conversion kit. This kit allows for easy conversion of nearly any bicycle into an e-bike, which allows riders to repurpose the bikes they already own and love and use them as a practical everyday vehicle.</h4>
                </section>

            </section>

            <section>
                <section>

                    <h1 style={{backgroundColor:'white',textAlign:'left', paddingLeft:'10%'}}>About The Amplifier Kit</h1>
                    <section style={{position:'relative', padding:'1rem'}}>
                        <img style={{height:'600px', width:'90%'}} src={transparentBike} alt="" />
                        <div onClick={toggleHandlebar} className="bikeHandle">X</div>
                        <div onClick={toggleController} className="bikeControl">X</div>
                        <div onClick={toggleBms} className="bikeBms">X</div>
                        <div onClick={toggleBattery} className="bikeBattery">X</div>
                        <div onClick={toggleWheel} className="bikeFrontWheel">X</div>
                        <div id="ControlThrottle">
                            <h4>The Control Throttle</h4>
                            <p>The throttle is added to the handlebars to control the speed. It can be used with or without pedaling.</p>
                        </div>
                        <div id="ControlMonitor">
                            <h4>The Control Monitor</h4>
                            <p>The control monitor turns the system on and off, adjusts the power levels, and displays the speed and other metrics.</p>
                        </div>
                        <div id="ControlBms">
                            <h4>Battery Management System (BMS)</h4>
                            <p>The BMS regulates the battery and directs the signal between the battery, motor, throttle, & controls.</p>
                        </div>
                        <div id="ControlBattery">
                            <h4>The Battery</h4>
                            <p>The battery can be attached to the frame of the bike, or placed on the handlebars or in a basket. It can be removed for charging or security. Our batteries are made from LiFePo4 UL certified cells. They are 36V and have a range of 25-30 miles.</p>
                        </div>
                        <div id="ControlFrontWheel">
                            <h4>The Front Wheel</h4>
                            <p>The front wheel is replaced with one that has a built-in motor capable of speeds up to 20mph.</p>
                        </div>
                    </section>

                </section>
            </section>


        </section>

        </>
    )
}
export default Home;