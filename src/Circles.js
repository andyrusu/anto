import React from 'react';
import * as _ from "underscore";

function Text(props)
{
    return (
        <text x={props.x} y={props.y} fill="black">
            {props.children}
        </text>
    );
}

function Circle(props)
{
    return (
        <circle cx={props.cx} cy={props.cy} r={props.r} stroke="black" strokeWidth="2" fill="white" />
    );
}

class Circles extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            coords: this.generateRandomCircleCoords(),
            calcs: this.generateCalculations()
        };

        this.handleRefreshCircles = this.handleRefreshCircles.bind(this);
    }

    isPointValid(point, coords)
    {
        return _.find(coords, (coord) => {
            return (coord.x===point.x&&coord.y===point.y)
        })===undefined;
    }

    generateRandomCircleCoords()
    {
        let xs = [50, 150, 250, 350, 450, 550, 650, 750];
        let ys = [50, 150, 250, 350, 450, 550, 650];
        let coords = [];

        for (let i = 0; i < 18; i++)
        {
            let point;

            do
            {
                point = {
                    x: xs[_.random(0, 6)],
                    y: ys[_.random(0, 6)]
                };
            }
            while(!this.isPointValid(point, coords));

            coords.push(point);
        }

        return coords;
    }

    generateCalculations()
    {
        let calcs = [];
        let n = this.props.number;

        for (let i = 1; i < 10; i++)
        {
            calcs.push(n + " x " + i);
            calcs.push(String(n * i));
        }

        return calcs;
    }

    handleRefreshCircles()
    {
        this.setState({coords: this.generateRandomCircleCoords()});
    }

    renderCalculations(coords)
    {
        let calcs = _.shuffle(this.state.calcs);

        return _.map(calcs, (calc, i) => {
            let x, y;

            if (calc.length > 2)
            {
                x = coords[i].x - 20;
                y = coords[i].y + 5;
            }
            else
            {
                x = coords[i].x - 10;
                y = coords[i].y + 5;
            }
            return (
                <Text key={calc} x={x} y={y}>
                    {calc}
                </Text>
            );
        })
    }

    render() 
    {
        if (this.props.number !== "")
        {
            let coords = this.state.coords;
            console.log(coords);

            return (
                <div className="columns">
                    <div className="column is-9 is-offset-1">
                        <div className="box">
                            <button className="button primary" onClick={this.handleRefreshCircles}>Regenereaza cercuri</button>
                            <br/>
                            <svg width="800" height="700">
                                {_.map(coords, (point) => {
                                    return <Circle key={point.x + "x" + point.y} cx={point.x} cy={point.y} r="30" />
                                })}
                                {this.renderCalculations(coords)}
                            </svg>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <p>Adauga numere in configurare.</p>
            );
        }
    }
}

export default Circles;