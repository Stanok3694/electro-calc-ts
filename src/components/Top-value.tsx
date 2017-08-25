import * as React from 'react';

import TopValueContent from './Top-value-content';

interface TopValue { type: string; }

class TopValueComponent extends React.Component<TopValue> {

    render() {
        const typeOfTopValue = this.props.type;

        function setTopValueTypeLabel(type: string): string {
            if ( type === 'day' ) {
                return 'Top day value: ';
            }
            return 'Top night value: ';
        }  
        
        let topValueType: string = setTopValueTypeLabel(typeOfTopValue);
        let calculate: number = 0;
        return (
            <div className="topValue">
                <p>{topValueType}</p>
                <TopValueContent type="previous"/>
                <TopValueContent type="current"/>
                
                <button>Calculate</button>
                <p className="resultField">{calculate}</p>
            </div>            
        );
    }
}

export default TopValueComponent;