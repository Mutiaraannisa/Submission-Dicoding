class VideoContainer extends HTMLElement {
    connectedCallback(){
        this.render();
    }


    render() {
        this.innerHTML = `
        <style>
        
@media only screen and (max-width: 600px) {

    #video-container {
        margin-left: 45px !important;
    }
    #video-container video {
        width: 400px;
        height: 200px;
    }
    #video-container p {
        margin-bottom: 50px;
        font-size: 20px !important;
        margin-left: 35px !important;
    }

}

#video-container {
    margin: auto 0;
    margin-top: 65px;
    margin-left: 350px;
}

#video-container p {
    margin-left: 100px;
    font-size: 30px;
    font-weight: 100;
}
</style>
    <div id = "video-container">
        <p> Watch This Video About Corona Virus</p>
        <video width="700" height="500" controls autoplay>
            <source src="./assets/Covid19.mp4" type="video/mp4">
                browser tidak di dukung
        </video>
    </div>
        `
    }

}

customElements.define("video-container", VideoContainer);