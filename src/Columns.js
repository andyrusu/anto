import React, { Component } from 'react';
import * as _ from "underscore";

class Calculation extends Component
{
    render()
    {
        return (
            <li key={this.props.left+this.props.symbol+this.props.right}>
                {this.props.left}
                &nbsp;
                {this.props.symbol}
                &nbsp;
                {this.props.right}
                &nbsp;
                =
                &nbsp;
                {this.props.result}
            </li>
        );
    }
}

class Box extends Component
{
    render()
    {
        let n = this.props.number;
        let c = this.props.coef;
        let rezMul = n * c;

        return (
            <div className="box">
                <ul>
                    <Calculation left={n} right={c} symbol="x" result="___"/>
                    <Calculation left={c} right={n} symbol="x" result="___"/>
                    <Calculation left={rezMul} right={c} symbol=":" result="___"/>
                    <Calculation left={rezMul} right={n} symbol=":" result="___"/>
                    <Calculation left="___" right={n} symbol=":" result={c}/>
                    <Calculation left="___" right={c} symbol=":" result={n}/>
                </ul>
            </div>
        );
    }
}

class Columns extends Component
{
    renderColumn(n, c)
    {
        return (
            <div key={n} className="column is-3">
                <Box number={n} coef={c}/>
            </div>
        );
    }

    renderRow(n)
    {
        return _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0], (c) => {
            if (c !== 0)
                return this.renderColumn(n, c);
            else
                return (
                    <div className="column is-3"></div>
                );
        }, this);
    }

    renderAll()
    {
        let from = parseInt(this.props.from);
        let to = (this.props.to === "") ? from + 1 : parseInt(this.props.to) + 1;
        let nums = _.range(from, to);

        return (
            <div className="columns is-multiline">
                {_.map(nums, (n) => {
                    return this.renderRow(n);
                }, this)}
            </div>
        );
    }

    render()
    {
        if (this.props.from==="")
        {
            return (
                <p>Adauga numere in configurare.</p>
            );
        }
        else
            return this.renderAll();
    }
}

export default Columns;