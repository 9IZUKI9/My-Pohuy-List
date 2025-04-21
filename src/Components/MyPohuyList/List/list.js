import './list.css';
import { useState } from 'react';
import ListButton from './Listbutton/ListButton.js';
import RenameButton from './ItemButtons/RenameButton/ButtonRename.js';
import DeleteButton from './ItemButtons/DeleteButton/DeleteButton.js';

function List() {
    const [items, setItems] = useState([]);

    const addNewItem = () => {
        const elementName = prompt('Введите имя для нового элемента списка:')
        if (elementName) {
            setItems([...items, {id: Date.now(), value: elementName}]);
        }
    };

    const clearPage = () => {
        setItems([]);
    }

    const deleteItem = (id) => {
        setItems(item => item.filter(item => item.id !== id));
    };

    const renameItem = (id) => {
        const userValue = prompt('Введите новое имя для элемента:')
        if (userValue) {
            setItems(items.map(item => item.id === id ? {value: userValue} : item))
        }
    }

    function message() {
        alert("ПОХУЙ")
    }

    return (
        <div className='list'>
            <h2>Список дел</h2>
            <div className='list-name'>
            <ListButton onClick={addNewItem} name="+" />
            </div>
            <form>
                {items.map(item => (
                    <div key={item.id} className="list-item">
                        <input type='checkbox'/> 
                        {item.value}
                        <RenameButton onClick={() => renameItem(item.id)}/>
                        <DeleteButton onClick={() => deleteItem(item.id)}/>
                    </div>
                ))}
            </form>
            <div className='button-section'>
                <ListButton onClick={addNewItem} name="Добавить"
                />

                <ListButton onClick={clearPage} name="Очистить"
                />

                <ListButton  onClick={message} name="Похуй"
                />
            </div>
        </div>
    )
}

export default List;
