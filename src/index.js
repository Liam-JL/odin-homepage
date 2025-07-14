import "./shared/styles/global.css"
import "./shared/styles/header.css"
import "./shared/styles/page-layout.css"
import "./shared/styles/main.css"
import "./shared/styles/footer.css"
import { renderProjectCardList } from "./widgets/project-card-list"

window.onload = () => {
    renderProjectCardList()
}