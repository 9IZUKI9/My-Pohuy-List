import { useState } from 'react';
import './Main-page.css'

function MainPage() {
    const [items, setItems] = useState([]);

    const addNewItem = () => {
        const userValue = prompt('Введите имя для нового элемента списка:')
        if (userValue) {
            setItems([...items, {
            id: Date.now(),
            value: userValue}]);
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
                        <button className='item__button-rename' type='button'
                        onClick={() => renameItem(item.id)}></button>
                        <button className='item__button-delete' type='button'
                        onClick={() => deleteItem(item.id)}></button>
                    </div>
                ))}
            </form>
            <div className='button-section'>
                <button type="button" onClick={addNewItem}>
                    Добавить
                </button>

                <button type='button' onClick={clearPage}>
                    Очистить
                </button>

                <button type='button' onClick={message}>
                    Похуй
                </button>
            </div>
        </div>
    )
}

export default MainPage;
