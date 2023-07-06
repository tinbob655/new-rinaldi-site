import React, {Component} from 'react';
class Money extends Component {

    state = {
        styles: {
            netWorthGraphDiv: {
                width: 'min-content',
                maxWidth: '75%',
                height: 'min-content',
                padding: '30px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '10vh',
                marginBottom: '15vh',
                backgroundColor: '#343435',
                borderRadius: '10px',
                boxShadow: '1px 1px 50px 0 #343435',
            },

            profitsDiv: {
                marginLeft: 'auto',
                marginRight: 'auto',
                overflowX: 'hidden',
                width: 'min-content',
                maxWidth: '75%',
                height: '50vh',
                borderRadius: '20px',
                border: '#343435 solid 10px',
            },
        },
    };

    render() {
        return (
            <React.Fragment>
                <h1>
                We got stocks, big stocks (huge)
                </h1>

                <div className="contentSection"></div>

                <div style={this.state.styles.netWorthGraphDiv}>
                    <p>
                        NewRinaldi's net worth may as well be infinite:
                    </p>

                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FNewRinaldi%20stock%20graph.jpg?alt=media&token=45541d1b-70bc-45ba-919a-f1be1c1ba7fe'
                     className="centered" alt="Internet Is Required To Load Images" 
                    style={{borderRadius: '5px', marginTop: '20px', marginBottom: '20px', maxWidth: '70vw'}}/>

                    <p>
                        As you can see, the founders are clearly multi-billionaires and NewRinaldi is the world's largest company.
                         You should probably invest here:
                    </p>

                    <button onClick={function () {alert(`Thank you for donating 100% of your worth to NewRinaldi. 
You will absolutley not be getting this back anytime soon and NewRinaldi will almost certainly spend it on yet another yacht`);}}>
                        <h3>
                            You are instructed to give NewRinaldi literally all of your money through this button!
                        </h3>
                    </button>
                </div>

                <div className="contentSection"></div>

                <h1>
                    We also got big profit unlike you (lol):
                </h1>

                <div style={this.state.styles.profitsDiv} className="hiddenScroll">

                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FNewRinaldi%20profits.png?alt=media&token=4aa21334-fc84-4812-96b4-017986789db0'
                    style={{height: 'max-content', backgroundColor: '#ffffff', padding: '10px', borderRadius: '10px',
                    maxWidth: '70vw'}} alt="Internet Is Required To Load Images"/>
                    <p style={{wordWrap: 'break-word'}}>
                        Hmmm, must be a bug. The profit should say £1,234,123,487,452,437,123,145,326,786,734,532           
                    </p>
                </div>

                <div className="contentSection"></div>
            </React.Fragment>
        );
    };
};

export default Money;