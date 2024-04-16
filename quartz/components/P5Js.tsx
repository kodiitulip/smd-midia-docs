import { QuartzComponentConstructor } from "./types"

export default (() => {
    function P5jsInitializer() {
        return <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.1/p5.js"></script>
    }
    
    P5jsInitializer.beforeDOM = `
    console.log("hello from before the page loads!")
    `

    return P5jsInitializer
}) satisfies QuartzComponentConstructor