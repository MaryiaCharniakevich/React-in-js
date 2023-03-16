import App from "../components/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'

function Render({ root, app }) {
    this.render = () => {
        document.querySelector(root).insertAdjacentHTML('beforeend', app)
    }
}

const root = new Render({
    root: '#root',
    app: App()
})

root.render()