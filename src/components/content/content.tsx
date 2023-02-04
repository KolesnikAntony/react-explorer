import React from 'react';
//ICONS
import iconFolder from "../../assets/icons/folder.svg";
import iconGrab from "../../assets/icons/dots-six.svg";
import iconFolderAdd from "../../assets/icons/folder-plus.svg";
import iconFileAdd from "../../assets/icons/file-plus.svg";
import iconRemove from "../../assets/icons/trash.svg";
//STYLES
import "./content.scss"

const Content = () => {
    return (
        <section className="content">
            <ol>
                <li>
                    You can open folder by double click on its name or by click on <img src={iconFolder}
                                                                                        className="icon"
                                                                                        alt="icon"/>
                </li>
                <li>
                    When you mouse over on folder or file you see some icons
                </li>
                <li>
                    Grab <img src={iconGrab} className="icon" alt="icon"/> and move the needed item to necessary
                    folder
                </li>
                <li>
                    Click on <img src={iconFolderAdd} className="icon" alt="icon"/> to create new folder
                </li>
                <li>
                    Click on <img src={iconFileAdd} className="icon" alt="icon"/> to create new file
                </li>
                <li>
                    Click on <img src={iconRemove} className="icon" alt="icon"/> to remove folder or file
                </li>
            </ol>
        </section>
    );
};

export default Content;