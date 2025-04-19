import './Main-page.css';
import { useState } from 'react';
import ListButtons from './List-buttons/ListButtons';
import ButtonRename from './Button-rename/ButtonRename';
import ButtonDelete from './Button-delete/ButtonDelete';

function MainPage() {
    const [items, setItems] = useState([]);

    const addNewItem = () => {
        const userValue = prompt('Введите имя для нового элемента списка:')
        if (userValue) {
            setItems([...items, {id: Date.now(), value: userValue}]);
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
        <div className='main-page'>
            <h2>Список дел</h2>
            <form>
                {items.map(item => (
                    <div key={item.id} className="main-page__item">
                        <input type='checkbox'/> 
                        {item.value}
                        <ButtonRename onClick={() => renameItem(item.id)}/>
                        <ButtonDelete onClick={() => deleteItem(item.id)} />
                    </div>
                ))}
            </form>
            <div className='button-section'>
                <ListButtons 
                onClick={addNewItem}
                name="Добавить"
                />

                <ListButtons 
                onClick={clearPage}
                name="Очистить"
                />

                <ListButtons 
                onClick={message}
                name="Похуй"
                />
            </div>
        </div>
    )
}

export default MainPage;
