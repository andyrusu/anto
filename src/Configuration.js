import React from 'react';

class Configuration extends React.Component {
    render() {
        let from = this.props.from;
        let to = this.props.to;
        let isFromEmpty = (from === "");
        let isToEmpty = (to === "");

        return (
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label">De la</label>
                        <div className="control">
                            <input className={!isFromEmpty ? "input is-success" : "input"} type="number" name="from" placeholder="ex.: 3" value={from} onChange={this.props.handleChange} />
                        </div>
                        <p className={!isFromEmpty ? "help is-success" : "help"}>{isFromEmpty ? "Numarul asta este obligatoriu" : "S-a salvat numarul: " + from}</p>
                    </div>

                    <div className="field">
                        <label className="label">Pana la</label>
                        <div className="control">
                            <input className={!isToEmpty ? "input is-success" : "input"} type="number" name="to" placeholder="ex.: 3" value={to} onChange={this.props.handleChange} />
                        </div>
                        <p className={!isToEmpty ? "help is-success" : "help"}>{isToEmpty ? "Numarul asta NU este obligatoriu" : "S-a salvat numarul: " + to}</p>
                    </div>

                    <div class="control">
                        <button class="button is-primary" onClick={this.props.handleReset}>Reseteaza</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Configuration;