import firstPic from '../assets/AboutUsBVolt.png';
import secondPic from '../assets/MeetingAtBike.jpg';

function About(){
    return(
        <>
            <div style={{marginTop:'-10px', borderBottom:'solid 4px bisque'}}>
                <div style={{backgroundColor:'white'}}>
                    <h1>About Us</h1>
                    <p style={{margin:'0px'}}>We reject the idea of leaving anyone behind.</p>
                </div>
                <div style={{backgroundColor:'white'}}>
                    <div style={{marginLeft:'10%', marginRight:'10%', paddingBottom:'20px'}}>
                        <h1 style={{textAlign:'left', paddingLeft:'4rem'}}>Our Mission</h1>
                        <p>Transportation is a daily challenge for many Bridgeport residents. The bus system is sparse and unreliable, with only a fraction of the state funding that New Haven and Hartford receive despite a larger population. Cars present other challenges: they are expensive to own and maintain; require a license, registration, and insurance; are dangerous for our safety and the environment; and in a dense city like Bridgeport there isn’t enough room for all residents to drive and park. This lack of transportation restricts opportunities for people to access employment, education, events, and errands. This perpetuates the cycle of inequality and impoverishment.</p>
                        <p>More and more e-bikes are joining traffic on the roads. They present a promising solution to all of these concerns, and in many ways Bridgeport is well-suited to e-bikes for transportation. The city’s density paired with the Metro North and CT Rail networks mean that e-bikes can provide Bridgeport residents considerable mobility around the region. Yet most e-bikes on the market today are still too expensive for the people who would benefit most from this remarkable technology.</p>
                        <p>Bridgevolt aims to make e-bikes available to everyone regardless of income. By converting used bikes into e-bikes, we can meet this need in a less expensive and more sustainable way. Since our goal is not to make a profit but rather to meet the needs of our community, we strive to make e-bikes affordable through equity tiered pricing. We also want to make e-bikes as sustainable as possible, by converting used bikes that would otherwise go to waste and by making battery packs that use a LiFePo4 chemical composition. Compared to most e-bike batteries, LiFePo4 is safer, more reliable, and doesn't use child slave labor in the supply chain.</p>
                        <p>We hope our organization can be part of revolutionary change that prioritizes the people of Bridgeport and our needs rather than protecting the capitalist status quo. Every e-bike that we put on the road represents hope for a sustainable future where everyone can access the opportunities they need to thrive, to strengthen our communities, and to shift our culture towards solidarity and collective liberation.</p>
                    </div>

                </div>
            </div>
            <div style={{paddingTop:'2%'}}>
                <div style={{flex:'1'}}>
                    <img  style={{padding:'10px', maxWidth:'90%'}} src={firstPic} alt="About usw"/>
                </div>
            </div>
            <div style={{backgroundColor:'white', paddingLeft:'10%', paddingRight:'10%'}}>
                <div>
                    <h1 style={{textAlign:"left"}}>Our Story</h1>
                    <p>In the summer of 2022, the three founders of Bridgevolt connected over shared interests in bicycles, engineering, and mutual aid. Jeremy had converted his own electric bike using an online kit and was looking for ways to help more people build converted e-bikes locally. Fiona had been cycling for their primary transportation for over a year. We were all volunteers with <a style={{textDecoration:'underline'}} href="https://bridgeportmutualaid.org/">Bridgeport Mutual Aid</a> , Fridgeport Community Fridge, and members of the <a style={{textDecoration:'underline'}} href="https://ctdsa.org/">Connecticut Democratic Socialists of America</a>.</p>
                    <p>
                    We spent several months meeting with different local organizations and formulating ideas for what an impactful e-bike conversion project would look like in Bridgeport. From bike co-ops Bikeport and Bradley Street, to university and city officials, to other environmental groups and cooperatives, we learned about related work being done and how our vision might best fit into the mix. We also studied similarly minded organizations in other regions, drawing much inspiration from Cooperation Jackson. Many options such as pop-up events, collaborations, and bike share programs were discussed. At the same time, we decided that between the three of us, we had the experience needed to build a longer term organization than we originally expected: we have engineers, cyclists, and grassroots organizing networks.</p>
                    <p>Bridgevolt has since become a non-profit worker’s cooperative that supplies individuals with electric bicycle conversions, as well as the resources they need to build and ride their own e-bikes. The organizational mission is founded on values of mutual aid, social equity and ecosocialism; thus, we aim to make our kits available at prices best fit for people of all income levels with our equity tiers program. We know that in order to build a happier, healthier, and sustainable future for us all, we must ensure that no one is left behind.</p>
                </div>
            </div>
            <div>
                <div style={{display:'flex', width:'100%', backgroundColor:'white', marginTop:'20px'}}>
                    <div style={{width:'50%', display:'flex', flexDirection:'column', paddingLeft:'5%', paddingRight:'5%'}}>
                        <div>
                            <h2>Why e-Bikes?</h2>
                            <p>E-bikes are found to be super useful in a crowded city where not everybody has access to a car.</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <h2> Can I do this at home?</h2>
                            <span>Yes!</span>
                            <span>Need help?</span>
                            <span>Go to visit us tab for more information for our in-person events where we can help.</span>
                        </div>
                    </div>
                    <div style={{width:'50%', paddingTop:'40px', paddingRight:'10%'}}>
                        <img style={{maxWidth:'100%', height:'auto', filter:'drop-shadow(0px 15px 15px #8b8b8daa) drop-shadow(0px 8px 5px #8b8b8daa)'}} src={secondPic} alt="MeetingAtBvolt" />
                    </div>
                </div>
            </div>
            <div style={{paddingBottom:'20px', display:'flex', flexDirection:'column'}}>
                <div style={{textAlign:'center', paddingLeft:'10%', paddingRight:'10%'}}>
                    <h1>Meet The Team</h1>
                    <h1 style={{borderBottom:'solid 1px black', width:'100%'}}></h1>
                </div>
                <div style={{display:'flex', gap:'30px', justifyContent:'space-evenly'}}>
                    <div className="team">
                        <h2>Jeremy Woodward</h2>
                        <span>Principal Engineer</span>
                    </div>
                    <div className="team">
                        <h2>Fiona McElroy</h2>
                        <span>Head Cyclist</span>
                    </div>
                    <div className="team">
                        <h2>Reggy Saint Fortcolin</h2>
                        <span>Community Organizer</span>
                    </div>
                </div>
            </div>
            
        </>

    )
}
export default About;