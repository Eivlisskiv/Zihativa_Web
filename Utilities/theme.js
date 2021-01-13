class ColorTheme{

    background = ""
    navbar = ""
    text = ""
    other = ""
    contrast = ""
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
        this.text = "black"
        this.input = { 
            background: "#95B8D1",
            text: "black"
        }

        this.button = { 
            background: "#FFA900",
            text: "black"
        }
        this.contrast = "#111d5e"
        this.other = "#FFA900"
    }
}
const theme = new ColorTheme();
export default theme;