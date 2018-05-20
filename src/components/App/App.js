import React, { PureComponent } from 'react';
import { Button } from 'react-bootstrap';

class App extends PureComponent {
    state = {
        gifts: []    
    }

    addGift = () => {
        const { gifts } = this.state;

        const ids = this.state.gifts.map((gift => gift.id));
        
        // spread id array as args and get highest number in ids arr
        const maxId = ids.length > 0 ? Math.max(...ids) : 0; 

        gifts.push({ id: maxId+1 });

        // update gifts with new modified copy
        this.setState({ gifts });
    }

    render() {
        return (
            <div className='app'>
                <h1>Gift Giver</h1>
                <Button className='btn-add'
                        onClick={ this.addGift }>
                    Add Gift
                </Button>
            </div>
        );
    }
}

export default App;