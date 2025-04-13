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

    const deleteAllItems = () => {
        setItems([]);
    }

    const deleteItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

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
                        <div className='item-value'>{item.value}</div>
                        <button className='deleteItemButton' type='button'
                        onClick={() => deleteItem(item.id)}></button>
                    </div>
                ))}
            </form>
            <div className='button-section'>
                <button type="button" onClick={addNewItem}>
                    Добавить
                </button>

                <button type='button' onClick={deleteAllItems}>
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
