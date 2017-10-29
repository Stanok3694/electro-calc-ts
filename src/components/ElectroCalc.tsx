import * as React from 'react';
import findMonthResult from '../logic/electro-calc-logic/findMonthResult';
import Month from '../logic/electro-calc-entities/Month';

class ElectroCalc extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            currentMonthTopDay: 0,
            previousMonthTopDay: 0,
            currentMonthTopNight: 0,
            previousMonthTopNight: 0,
            result: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event: any): any {
        const name: string = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    } 

    handleSubmit (event: any): any {
        const {
            currentMonthTopDay,
            currentMonthTopNight,
            previousMonthTopDay,
            previousMonthTopNight
        } = this.state;

        const currentMonth = new Month(currentMonthTopDay, currentMonthTopNight);
        const previousMonth = new Month(previousMonthTopDay, previousMonthTopNight);
        const result = findMonthResult(currentMonth, previousMonth);
        this.setState({ result });
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h2>Calculate your month electricity payments</h2>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <h3>Enter your current month value: </h3>
                    <p>Day: </p> 
                    <br/>
                    <input 
                        type="text" 
                        name="currentMonthTopDay" 
                        value={this.state.currentMonthTopDay} 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <p>Night: </p>
                    <br/>
                    <input 
                        type="text" 
                        name="currentMonthTopNight" 
                        value={this.state.currentMonthTopNight} 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <h3>Enter your previous month values: </h3>
                    <p>Day: </p> 
                    <br/>
                    <input
                        type="text" 
                        name="previousMonthTopDay" 
                        value={this.state.previousMonthTopDay} 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <p>Night: </p>
                    <br/>
                    <input
                        type="text"
                        name="previousMonthTopNight" 
                        value={this.state.previousMonthTopNight} 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <h3>Press button below for calculate!</h3>
                    <input type="submit" value="Calculate"/>
                    <p>{this.state.result}</p>
                </div>
                </form>
            </div>
        );
    }

}
// const ElectroCalc = () => (
//     <div>
//       <h2>About</h2>
//     </div>
//   );

export default ElectroCalc;