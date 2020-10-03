class GlobalCase extends HTMLElement {
    
    set covidDataGlobal(covidDataGlobal) {
        this._covidDataGlobal = covidDataGlobal;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        
#Global-Case-Container {
    width: 700px;
    height: 500px;
    margin: auto 0;
    margin-top: 70px;
    margin-left: 340px;
    border: 1px solid black;
}

#Global-Case-Container h4 {
    font-size: 50px;
    margin-bottom: 30px;
    text-align: center;
}

#Global-Case-Container .status {
    font-size: 30px;
}
#Global-Case-Container #confirmed {
    margin-bottom: 100px;
    text-align: center;
}

#Global-Case-Container #recovered {
    float: left;
    margin-left: 50px;
}

#Global-Case-Container #death {
    float: right;
    margin-right: 50px;
}
</style>


        <div id="Global-Case-Container">
        <h4>Global Case Corona Virus <br> </h4>
        <p class="status" id="confirmed">Confirmed <br> ${this._covidDataGlobal.confirmed}</p>
        <p class = "status" id="recovered">Recovered <br> ${this._covidDataGlobal.recovered}</p>
        <p class = "status" id="death">Death <br> ${this._covidDataGlobal.deaths}</p>
        </div> `;
    }
}

customElements.define("global-case", GlobalCase);

