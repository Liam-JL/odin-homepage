import "./shared/styles/global.css"
import "./shared/styles/header.css"
import "./shared/styles/background.css"
import "./shared/styles/main.css"
import "./shared/styles/footer.css"
import "./shared/styles/responsiveness-tablet.css"
import "./shared/styles/responsiveness-desktop.css"
import { renderProjectCardList } from "./widgets/project-card-list"

window.onload = () => {
    renderProjectCardList()
}