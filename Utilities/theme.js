class ColorTheme{

    background = ""
    navbar = ""
    text = ""
    other = ""
    constrast
    input = {
        background: "",
        text: ""
    }

    button = {
        background: "",
        text: ""
    }

    constructor(){
        this.default();
    }

    default(){
        this.background = "#01161E"
        this.navbar = '#282c34'
        this.text = "#eeeeee"
        this.input = { 
            background: "#95B8D1",
            text: "black"
        }

        this.button = { 
            background: "#666A86",
            text: "black"
        }
        this.constrast = "#F9DBBD"
        this.other = "#363457"
    }
}
const theme = new ColorTheme();
export default theme;