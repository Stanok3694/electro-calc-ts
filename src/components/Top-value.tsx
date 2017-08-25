import * as React from 'react'

import TopValueContent from './Top-value-content';

interface TopValue {type: string}

class TopValueComponent extends React.Component<TopValue> {

    render() {
        const typeOfTopValue = this.props.type;

        function setTopValueTypeLabel(type: string){
            if(type == "day") {
                return "Top day value: "
            }
            return "Top night value: "
        }  
        
        let topValueType = setTopValueTypeLabel(typeOfTopValue);

        return (
            <div className="topValue">
                <p>{topValueType}</p>
                <TopValueContent type="previous"/>
                <TopValueContent type="current"/>
            </div>            
        );
    }
}

export default TopValueComponent;