import React from 'react';
import "./styles.css";

const word = "Exchange";
const url = {
    usdKzt: 'http://a77774sh.beget.tech/php/UsdKzt.json',
    eurKzt: 'http://a77774sh.beget.tech/php/EurKzt.json',
    rubKzt: 'http://a77774sh.beget.tech/php/RubKzt.json',
    usdRub: 'http://a77774sh.beget.tech/php/UsdRub.json',
    eurRub: 'http://a77774sh.beget.tech/php/EurRub.json'
}

export class MainApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {usdKzt:[],eurKzt:[],rubKzt:[],usdRub:[],eurRub:[]}
    }

    componentDidMount() {
        for (const key in url) {
            fetch(url[key]).then(response => response.json()).then(data => this.setState({[key]: data}))
        }
    };

    render() {
        return (
            <>
                <h1 className="H1">{word}</h1>
                <table className="Tbl">
                    <tr><td className="Cell">{this.state.usdKzt.disSymbol}</td><td className="Cell1">{this.state.usdKzt.close}</td></tr>
                    <tr><td className="Cell">{this.state.eurKzt.disSymbol}</td><td className="Cell1">{this.state.eurKzt.close}</td></tr>
                    <tr><td className="Cell">{this.state.rubKzt.disSymbol}</td><td className="Cell1">{this.state.rubKzt.close}</td></tr>
                    <tr><td className="Cell">{this.state.usdRub.disSymbol}</td><td className="Cell1">{this.state.usdRub.close}</td></tr>
                    <tr><td className="Cell">{this.state.eurRub.disSymbol}</td><td className="Cell1">{this.state.eurRub.close}</td></tr>
                </table>

            </>
        )
    }

}



