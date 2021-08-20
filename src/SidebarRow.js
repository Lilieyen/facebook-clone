import React from 'react'
import { Avatar } from "@material-ui/core"
import './SidebarRow.css'

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />} {/* you can pass a component as a prop but it should always start with a capital letter */}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
