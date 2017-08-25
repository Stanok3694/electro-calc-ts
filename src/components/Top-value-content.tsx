import * as React from 'react';

interface TopValueContent { type: string; }

class TopValueContentComponent extends React.Component<TopValueContent> {
    render() {
        const typeOfTopValueContent = this.props.type;

        function setTopValueComponentLabel(type: string): string {

            let label = {
                current: 'Current month: ',
                previous:  'Previous month: '
            };

            if ( type === 'current' ) {
                return label.current;
            }
            return label.previous; 
        }

        let contentLabel = setTopValueComponentLabel(typeOfTopValueContent);
    
        return (
            <div className="topValueInnerContent">
                <p>{contentLabel}</p>
                <input />
            </div>
        );
    }
}

export default TopValueContentComponent;